import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
const Icons = () => {
  return (
     <div className="flex items-center gap-6 text-[#8b5a3c]">
          <Link href="/login" className="hover:opacity-70 transition-opacity">
            <FiUser size={24} />
          </Link>
          <Link href="/cart" className="hover:opacity-70 transition-opacity">
            <FiShoppingCart size={24} />
          </Link>
        </div>
  )
}

export default Icons
