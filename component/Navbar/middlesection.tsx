import Link from "next/link";

export default function Middlesection  (){
  return (
         <div className="flex flex-col sm:flex-row  gap-8 text-lg text-[#8b5a3c] font-medium text-center">
          <Link href="/" className="hover:underline underline-offset-4">Home</Link>
          <Link href="/" className="hover:underline underline-offset-4">Product</Link>
          <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
        </div>
  );
}

