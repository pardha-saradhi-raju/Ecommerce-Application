// import {FaShoppingCart} from "react-icons/fa"
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {

//   const {cart} = useSelector((state) => state);

//   return (
//     <div >
//       <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

//         <NavLink to="/">
//           <div className="ml-5">
//           <img src="../logo.png" className="h-14"/>
//           </div>
//         </NavLink>

//           <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
//             <NavLink to="/">
//               <p>Home</p>
//             </NavLink>

//             <NavLink to="/login">
//               <p>Login</p>
//             </NavLink>

//             <NavLink to="/signup">
//               <p>SignUp</p>
//             </NavLink>

//             <NavLink to="/cart">
//               <div className="relative">
//                   <FaShoppingCart className="text-2xl"/>
//                   {
//                     cart.length > 0 &&
//                     <span
//                     className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
//                     justify-center items-center animate-bounce rounded-full text-white" 
//                     >{cart.length}</span>
//                   }
                  
//               </div>
//             </NavLink>
            
//           </div>
//       </nav>
//     </div>
//   )
// };

// export default Navbar;



import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state || { cart: [] }); // Added fallback for state

  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto px-4">
        {/* Logo Section */}
        <NavLink to="/">
          <div className="ml-2">
            <img 
              src="/logo.png" 
              alt="Shop Logo" 
              className="h-14" 
            />
          </div>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center font-medium text-slate-100 space-x-6">
          <NavLink to="/" className="hover:text-gray-300">
            <p>Home</p>
          </NavLink>

          <NavLink to="/login" className="hover:text-gray-300">
            <p>Login</p>
          </NavLink>

          <NavLink to="/signup" className="hover:text-gray-300">
            <p>Sign Up</p>
          </NavLink>

          {/* Cart Section */}
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl text-white" />
              {cart?.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                  justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

