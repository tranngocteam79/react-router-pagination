import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [totalProducts, setTotalProducts] = useState(null);
  const [cache, setCache] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => setTotalProducts(result.products.length));
  }, []);
  console.log(cache);

  useEffect(() => {
    if (cache?.[url]) {
      console.log("cache exist");
      setData(cache[url]);
    } else
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setData(result.products);
          setCache((prevCache) => ({ ...prevCache, [url]: result.products }));
          console.log(console.log("cache NOT exist"));
        });
  }, [url]);

  return { data, totalProducts };
}
