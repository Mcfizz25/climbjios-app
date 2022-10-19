import React from 'react';
import { Stack, FormGroup, Typography } from '@mui/material';
// components
import { RHFSelect } from '../../components/hook-form';
import { useFormContext } from 'react-hook-form';
import { UserRequest } from 'src/@types/user';
import { getGymList } from 'src/services/gyms';
import useSafeRequest from 'src/hooks/services/useSafeRequest';
import { useSnackbar } from 'notistack';
import RHFMultiSelect from 'src/components/hook-form/RHFMultiSelect';
import RHFAutoMultiSelect from 'src/components/hook-form/RHFAutoMultiSelect';

export const FavoriteGymsForm = () => {
  const { formState } = useFormContext<UserRequest>();
  const { errors } = formState;
  const { enqueueSnackbar } = useSnackbar();
  const { data: gyms, loading: loadingGyms } = useSafeRequest(getGymList, {
    // Caches successful data
    cacheKey: 'gyms',
    onError: () => {
      enqueueSnackbar('Failed to get gyms.', { variant: 'error' });
    },
  });

  return (
    <Stack spacing={2}>
      <FormGroup>
        <Typography variant="subtitle1" gutterBottom>
          Favourite Gyms
        </Typography>
        <RHFAutoMultiSelect
          name="favouriteGyms"
          label="Select Gym"
          options={gyms?.data.map((option) => ({
            value: option.id,
            label: option.name,
          }))}
          helperText={errors?.favouriteGyms?.message || 'Choose the gyms that you frequent.'}
          FormHelperTextProps={{
            error: !!errors?.favouriteGyms,
          }}
        />
      </FormGroup>
    </Stack>
  );
};
