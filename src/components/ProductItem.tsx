import { memo, useState } from "react";
import dynamic from "next/dynamic";
import { Product } from "../@types/product";
import { AddProductToWishlistProps } from "./AddProductToWishlist";
import lodash from "lodash";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(async () => {
  const mod = await import("./AddProductToWishlist");
  return mod.AddProductToWishlist;
});

AddProductToWishlist.displayName = "AddProductToWishlist";

interface ProductItemProps {
  product: Product;
  addToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, addToWishlist }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      {product.title} - R$<strong>{product.price}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>
        Add to favorites
      </button>
      {isAddingToWishList && (
        <AddProductToWishlist
          onClose={() => setIsAddingToWishList(false)}
          onAddToWishlist={() => addToWishlist(product.id)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (previousProps, nextProps) =>
    lodash.isEqual(previousProps.product, nextProps.product)
);
