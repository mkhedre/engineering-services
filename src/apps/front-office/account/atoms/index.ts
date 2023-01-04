import { atom, Atom } from '@mongez/react-atom';

export const serviceProviderAtom: Atom = atom({
  name: 'provider',
  default: 'person',
});
