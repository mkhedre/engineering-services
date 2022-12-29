import { RestfulEndpoint } from '@mongez/http';

class Orders extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */
  public route = '/orders';
}

const orders: Orders = new Orders();

export default orders;
