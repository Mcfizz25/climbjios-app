// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/login';
const ROOTS_ONBOARDING = '/onboarding';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
};

export const PATH_PAGE = {
  page404: '/404',
};

export const PATH_ONBOARDING = {
  newuser: path(ROOTS_ONBOARDING, '/newuser'),
  username: path(ROOTS_ONBOARDING, '/username'),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    jios: {
      root: path(ROOTS_DASHBOARD, '/jios'),
      search: path(ROOTS_DASHBOARD, '/jios/search')
    },
    profile: path(ROOTS_DASHBOARD, '/profile'),
  },
};

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
