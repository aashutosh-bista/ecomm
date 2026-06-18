import Image from "next/image";

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
    <div className="rounded-[30px] border border-[rgba(139,90,60,0.1)] bg-white p-8 text-center">
      <div className="w-full overflow-hidden rounded-[20px]">
        <Image
          src={image}
          alt={title}
          width={350}
          height={350}
          className="block h-[380px] w-full rounded-[20px] object-fit"
        />
      </div>

      <h2 className="mt-6 text-[2rem] font-bold text-[#2c2419]">
        {title}
      </h2>

      <p className="mt-4 text-[1.1rem] leading-[1.6] text-[#6b5444]">
        {description}
      </p>

      <hr className="my-[30px] border-0 border-t border-[#eee]" />

      <div className="flex items-center justify-between">
        <span className="text-[2rem] font-bold text-[#8b5a3c]">
          NPR {price.toLocaleString()}
        </span>

        <button className="cursor-pointer rounded-[30px] bg-[#8b5a3c] px-7 py-[14px] text-base font-semibold text-white transition-opacity hover:opacity-90">
          Add to Cart
        </button>
      </div>
    </div>
  );
}