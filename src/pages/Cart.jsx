import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Footer from "../components/footer";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100">
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center gap-8 py-10">
          {/* Cart Items */}
          <div className="w-[100%] md:w-[60%] bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary Section */}
          <div className="w-[100%] md:w-[35%] bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Summary</h2>
            <p className="text-lg text-gray-600 mb-4">
              Total Items: <span className="font-bold">{cart.length}</span>
            </p>
            <p className="text-xl font-bold text-gray-800 mb-6">
              Total Amount: <span className="text-green-600">${totalAmount}</span>
            </p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link to={"/"}>
            <button className="uppercase bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-10 rounded-lg transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cart;
