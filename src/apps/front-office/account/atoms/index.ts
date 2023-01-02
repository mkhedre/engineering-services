import { atom, Atom } from '@mongez/react-atom';

type provider = {
  type: 'string';
};
export const providerType: Atom = atom({
  name: 'provider',
  default: 'person',
});
