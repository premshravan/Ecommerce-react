import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductsCard from "../../components/Productscard/ProductsCard";
import { getAllProducts } from "../../Api/getAllProducts";
import { useCart } from "../../Context/cart-context";
import { getAllCategories } from "../../Api/getAllCategories";
import { getProductsCategories } from "../../utils/getProductsByCategories";
import { useWishlist } from "../../Context/WishList-context";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const cart = useCart();
  console.log({ cart });

  const wishlist=useWishlist()
  console.log({wishlist});
  

  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      const categories = await getAllCategories();
      const updatedCategories = [...categories, { id: "1a", name: "All" }];
      setProducts(data);
      setCategories(updatedCategories);
    })();
  }, []);

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filterByCategories = getProductsCategories(products, selectedCategory);
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <div className=" flex gap-4 justify-center mb-3 mt-5 ">
          {categories?.length > 0 &&
            categories.map((category) => (
              <div
                className="font-semibold rounded-lg bg-slate-500 p-1 hover:cursor-pointer"
                onClick={() => onCategoryClick(category.name)}
              >
                {category.name}
              </div>
            ))}
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {filterByCategories?.length > 0 ? (
            filterByCategories.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))
          ) : (
            <h1 className="mt-10 border bg-amber-400 p-2" >No products found .Please try another category</h1>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
