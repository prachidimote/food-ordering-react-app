import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
const Cart = () => {
  //toggle button
  const [activeCart, setActiveCart] = useState(true);
 // eslint-disable-next-line no-unused-vars
 const cartItems = useSelector((state) => state.cartIt.cart);
 console.log(cartItems)
  return (
    <>
    <div className={`fixed p-5 right-0 top-0  w-full lg:w-[20vw] h-full bg-white mb-3 ${
      activeCart ? "translate-x-0" : "translate-x-full"
    } transition-all duration-500 z-50`}>
      <div className="flex justify-between my-3 overflow-auto">
        <span className="text-xl font-bold text-gray-800">My Orders</span>
        <IoMdClose onClick={() => setActiveCart(!activeCart)} className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-600 hover:border-red-600 cursor-pointer" />
      </div>
      
       {cartItems.length > 0 ? cartItems.map((food) => {
          return ( 
          <ItemCard 
          key={food.id} 
          id={food.id} 
          name={food.name} 
          price={food.price}
          img={food.img}
          qty={food.qty}
          />
          );
        }) : <h2 className='text-center text-xl text-gray-800'>Your Cart is Empty</h2>}
      
      
      <div className="absolute bottom-0">
        <h3 className="font-semibold text-gray-800">Items : </h3>
        <h3 className="font-semibold text-gray-800">Total Amount :  </h3>
        <hr />
        <button className="mb-5 bg-green-500 font-bold px-3 py-2 text-white rounded-lg w-[90vw] lg:w-[18vw] ">Checkout</button>
      </div>
    </div>
     <FaShoppingCart onClick={() => setActiveCart(!activeCart)} className='rounded-full text-5xl shadow-md p-3 fixed bottom-10 right-4 cursor-pointer' />
     </>
  )
}

export default Cart
