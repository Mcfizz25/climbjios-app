import { ApiUser, User } from '../@types/user';
// BE_API contains api endpoints we use to query our host backend
export const BE_API = {
  auth: {
    google: '/v1/auth/google',
  },
  user: '/v1/user',
  onboarding: '/v1/user/onboarding',
  gyms: '/v1/gyms',
  posts: '/v1/posts'
};

// apiUserToUser converts User object fetched from be api to user object used in fe
export const apiUserToUser = (apiUser: ApiUser): User => ({
  name: apiUser.name,
  username: apiUser.username,
  telegramHandle: apiUser.telegramHandle,
});

// userToApiUser converts User to ApiUser
export const userToApiUser = (user: User): ApiUser => ({
  name: user.name,
  username: user.username,
  telegramHandle: user.telegramHandle,
});
