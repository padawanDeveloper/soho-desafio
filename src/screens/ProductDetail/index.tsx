import ProductDetail from './components/ProductCard';

function ProductDetailScreen({ route }: any) {
  const product = route.params.product;

  return <ProductDetail product={product} />;
}

export default ProductDetailScreen;
