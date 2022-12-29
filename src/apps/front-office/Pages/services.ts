import endpoint from '@mongez/http';

const aboutService = () => {
  return endpoint.get('/about-us');
};

const privacyService = () => {
  return endpoint.get('/privacy-policy');
};

const termsService = () => {
  return endpoint.get('/terms-conditions');
};

const informativeServices = {
  aboutService,
  privacyService,
  termsService,
};

export default informativeServices;
