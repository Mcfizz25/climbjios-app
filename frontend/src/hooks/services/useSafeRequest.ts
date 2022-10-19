import { useRequest } from 'ahooks';
import { Options, Plugin } from 'ahooks/lib/useRequest/src/types';
import { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import useAuthProvider from '../auth/useAuthProvider';
import useLogout from '../auth/useLogout';

/**
 * In the event that the response status indicates Unauthorized or Forbidden,
 * this useRequest wrapper
 * - tries to re-login the user and resend the request
 * - logs the user out if the above has failed
 */
const useSafeRequest = <TData, TParams extends any[]>(
  service: (...args: TParams) => Promise<AxiosResponse<TData, any>>,
  options?: Options<AxiosResponse<TData>, TParams>,
  plugins?: Plugin<AxiosResponse<TData>, TParams>[]
) => {
  const { data, refreshAsync, ...rest } = useRequest(service, options, plugins);
  const logout = useLogout();
  const authProvider = useAuthProvider();

  useEffect(() => {
    const callCheckError = async () => {
      if (!data?.status) {
        return;
      }

      try {
        await authProvider.checkError(data.status);
      } catch {
        try {
          await authProvider.login();
          refreshAsync();
        } catch {
          logout();
        }
      }
    };
    callCheckError();
  }, [authProvider, data?.status, logout, refreshAsync]);

  return { data, refreshAsync, ...rest };
};

export default useSafeRequest;
