
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center p-4 bg-white shadow-lg rounded-lg justify-between my-3">
      <div className="flex flex-col md:flex-row gap-5 items-center w-full">
        {/* Image */}
        <div className="w-[30%] md:w-[20%]">
          <img
            className="object-cover w-full rounded-lg border border-gray-200"
            src={item.image}
            alt={item.title}
          />
        </div>

        {/* Details */}
        <div className="flex flex-col w-full md:w-[70%] space-y-3">
          <h1 className="text-lg md:text-xl font-bold text-gray-800">
            {item.title}
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            {item.description}
          </p>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-700">${item.price}</p>
            <button
              className="text-red-600 bg-red-100 hover:bg-red-200 p-3 rounded-full transition duration-300"
              onClick={removeFromCart}
            >
              <AiFillDelete size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
