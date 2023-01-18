// @mui
import { Toolbar, IconButton, Typography, Avatar } from '@mui/material';
import { Stack } from '@mui/system';
import Iconify from '../../components/Iconify';
import { GymData } from 'src/@types/gymData';
import { IconStyle } from 'src/utils/common';
import { useNavigate } from 'react-router';

export default function GymPageHeader(gymDetails: GymData) {
  const navigate = useNavigate();
  const logoSize = 70;

  return (
    <div
      style={{
        //shamelessly copy pasted from the CSS in figma
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${gymDetails.bannerUrl}")`,
        backgroundSize: 'auto 100%',
      }}
    >
      <Toolbar sx={{ ml: -2, background: 'transparent' }}>
        <IconButton
          sx={{ mr: 1 }}
          color="primary"
          onClick={() => {
            navigate(-1);
          }}
        >
          <Iconify sx={{ width: 40, height: 40 }} icon="ic:round-chevron-left" color="white" />
        </IconButton>
      </Toolbar>
      <Stack
        height={200}
        direction="column"
        justifyContent="flex-end"
        alignItems="flex-start"
        spacing={1}
        sx={{ color: 'white' }}
      >
        {gymDetails.iconUrl ? (
          <Avatar
            src={gymDetails.iconUrl}
            alt={gymDetails.name}
            sx={{ ml: 2, width: logoSize, height: logoSize }}
          />
        ) : (
          <IconStyle icon={'eva:pin-outline'} sx={{ width: logoSize, height: logoSize }} />
        )}
        <Stack sx={{ pl: 2, pb: 2 }}>
          <Typography variant="h2">{gymDetails.name}</Typography>
        </Stack>
      </Stack>
    </div>
  );
}
