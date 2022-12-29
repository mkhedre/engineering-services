import { RestfulEndpoint } from '@mongez/http';

class Categories extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */
  public route = '/categories';
}

const categories: Categories = new Categories();

export default Categories;
