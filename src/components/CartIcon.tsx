"use client"

import { useCartStore } from "@/utils/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const CartIcon = () => {

  const { totalItems } = useCartStore()

  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])

  return (
    <Link href="/cart" className="flex items-center gap-1">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="cart" width={20} height={20} />
      </div>
      <span>({totalItems})</span>
    </Link>
  );
};

export default CartIcon;
