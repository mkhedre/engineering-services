import { RestfulEndpoint } from '@mongez/http';

class EngineeringServices extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */
  public route = '/engineeringServices';
}

const engineeringServices: EngineeringServices = new EngineeringServices();

export default engineeringServices;
