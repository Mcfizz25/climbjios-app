import { JwtTokenSetRequest, JwtTokenSetResponse } from '../@types/token';
import { BE_API } from 'src/utils/api';
import { HOST_API } from '../config';
import axios from 'axios';

export const refreshAccessToken = ({ refreshToken }: JwtTokenSetRequest) =>
  axios.post<JwtTokenSetResponse>(`${HOST_API}${BE_API.auth.refresh}`, { refreshToken });
