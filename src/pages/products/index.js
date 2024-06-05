import ProductCard from "@/components/ProductCard"
import { clothingProducts } from "@/data/product"

export default function index() {
  return (
    <div>
       <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clothingProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>
  )
}
