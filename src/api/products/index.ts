import { get } from '../../services/api';

const getProducts = () => get('/products');

const product = {
  getProducts,
};

export default product;
