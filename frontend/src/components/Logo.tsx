import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
}

export default function Logo({ disabledLink = false, sx }: Props) {
  const logo = (
    <Box sx={{ width: 30, height: 30, ...sx }}>
      <svg width="100%" height="100%" viewBox="0 0 415 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M415 200.5C415 184.985 408.837 170.105 397.866 159.134C386.895 148.163 372.015 142 356.5 142C340.985 142 326.105 148.163 315.134 159.134C304.163 170.105 298 184.985 298 200.5C298 216.015 304.163 230.895 315.134 241.866C326.105 252.837 340.985 259 356.5 259C372.015 259 386.895 252.837 397.866 241.866C408.837 230.895 415 216.015 415 200.5" fill="#C3BFB1"/>
<path d="M339.96 341.144C314.844 366.395 283.408 384.437 248.936 393.386C233.02 397.469 216.334 399.667 199.148 399.667C170.69 399.689 142.56 393.585 116.669 381.77C90.7788 369.955 67.7346 352.706 49.1022 331.195C17.3671 294.799 -0.0803181 248.122 0.000277982 199.833C0.000277982 149.547 18.5277 103.599 49.1022 68.4715C67.7346 46.9603 90.7788 29.7114 116.669 17.8967C142.56 6.08201 170.69 -0.0217618 199.148 5.82965e-05C216.334 5.82965e-05 233.02 2.19822 248.936 6.28053C283.408 15.2296 314.844 33.272 339.96 58.5227L269.547 129.178C260.326 119.894 249.357 112.528 237.274 107.506C225.192 102.484 212.234 99.9043 199.148 99.9167C144.166 99.9167 99.5744 144.651 99.5744 199.833L99.6029 202.403C100.973 256.415 145.022 299.75 199.148 299.75C226.64 299.75 251.533 288.559 269.547 270.489L339.96 341.144V341.144Z" fill="#37352F"/>
</svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}