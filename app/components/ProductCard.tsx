import Image from "next/image";
import "./ProductCard.css";

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  price: number;
};

export default function ProductCard({
  image,
  title,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="card">
      <div className="card-image">
        <Image
          src={image}
          alt={title}
          width={350}
          height={350}
        />
      </div>

      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>

      <hr />

      <div className="card-footer">
        <span className="price">
          NPR {price.toLocaleString()}
        </span>

        <button className="cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}