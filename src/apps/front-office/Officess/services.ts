import { RestfulEndpoint } from '@mongez/http';

class Officess extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */
  public route = '/officess';
}

const officess: Officess = new Officess();

export default officess;
