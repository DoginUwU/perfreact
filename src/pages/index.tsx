import { FormEvent, useCallback, useState } from "react";
import { Product } from "../@types/product";
import { SearchResults } from "../components/SearchResults";

interface Results {
  totalPrice: number;
  data: Product[];
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: [],
  } as Results);

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const totalPrice = data.reduce((a, b) => {
      return a + b.price;
    }, 0);

    setResults({ totalPrice, data });
  };

  const addToWishlist = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <SearchResults
        results={results.data}
        totalPrice={results.totalPrice}
        addToWishlist={addToWishlist}
      />
    </div>
  );
}
