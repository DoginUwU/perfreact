import { List, ListRowRenderer } from "react-virtualized";
import { Product } from "../@types/product";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<Product>;
  totalPrice: number;
  addToWishlist: (id: number) => void;
}
export function SearchResults({
  results,
  addToWishlist,
  totalPrice,
}: SearchResultsProps) {
  const rowRender: ListRowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <ProductItem product={results[index]} addToWishlist={addToWishlist} />;
    </div>
  );
  return (
    <div>
      <h2>R${totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRender}
      />
    </div>
  );
}
