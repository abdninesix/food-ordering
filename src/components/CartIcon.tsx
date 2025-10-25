import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-1">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" width={20} height={20} />
      </div>
      <span>(3)</span>
    </Link>
  );
};

export default CartIcon;
