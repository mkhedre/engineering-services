import { Redirect } from '@mongez/react-router';
import URLS from 'app/utils/urls';
import user from 'user';

export function Guardian() {
  if (!user.isLoggedUser()) {
    return <Redirect to={URLS.account.auth.login} />;
  }

  return null;
}

export function ReverseGuardian() {
  if (user.isLoggedUser()) {
    return <Redirect to={URLS.home} />;
  }

  return null;
}
