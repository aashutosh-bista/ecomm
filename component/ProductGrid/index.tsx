import products from "../../constant/constant";
import ProductCard from "../../component/ProductCard";
const ProductGrid = () => {
  return (
    <main className="grid gap-8 p-10 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </main>
  )
}

export default ProductGrid
