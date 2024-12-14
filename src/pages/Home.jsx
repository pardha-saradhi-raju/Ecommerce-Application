import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import Footer from "../components/footer";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);

      const uniqueCategories = [
        "all",
        ...new Set(data.map((item) => item.category)),
      ];
      setCategories(uniqueCategories);
    } catch (error) {
      console.log("Error occurred while fetching data");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  const filteredPosts =
    category === "all"
      ? posts
      : posts.filter((post) => post.category === category);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Category Filter */}
      <div className="flex justify-center my-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-[80%] md:w-[50%]"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      {loading ? (
        <Spinner />
      ) : filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-4">
          {filteredPosts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-gray-700 text-lg">No Data Found</p>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

