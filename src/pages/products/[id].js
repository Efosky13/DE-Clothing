// src/pages/products/[id].js
import axios from 'axios';
import ProductDetail from '@/components/ProductDetail';

export default function ProductPage({ product }) {
  return <ProductDetail product={product} />;
}

export async function getStaticPaths() {
  const res = await axios.get('your-backend-api-url/products');
  const products = res.data;

  const paths = products.map(product => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`your-backend-api-url/products/${params.id}`);
  const product = res.data;

  return {
    props: {
      product,
    },
  };
}
