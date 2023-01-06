// import { useScrollTrigger } from '@mui/material';
import { Stack } from '@mui/system';
import DelayedSearch from 'src/components/inputs/DelayedSearch';

export default function GymSearch({
  setSearchString,
}: {
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Stack direction="column" sx={{ pb: 1.5 }} spacing={1.5}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ width: '100%', pt: 1.5 }}
      >
        <DelayedSearch setSearchString={setSearchString} placeholder="Enter a gym name" size="small"/>
      </Stack>
    </Stack>
  );
}
