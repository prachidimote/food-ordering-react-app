/* eslint-disable react/prop-types */
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import { removeFromCart, incrementQty, decrementQty } from "../redux/slices/CartSlice";
// eslint-disable-next-line no-unused-vars
const ItemCard = ({id, name, price, qty, img, handleToastError}) => {
  const dispatch = useDispatch();
  return (
    <div className="gap-2 shadow-md rounded-lg p-1 mb-3 flex">

       <AiFillDelete  
       className="absolute right-6 cursor-pointer"
      onClick={() => {
        dispatch(removeFromCart({ id, name, price,qty, img, handleToastError}))
        toast(`${name} Removed`, {
          icon: '❌',
        });
      }}
       />
        <img style={{marginLeft: "initial"}} className="w-[50px] h-[50px]" src={img} alt="image" />
        <div className="leading-5">
           <h2 className="text-bold text-gray-800">{name}</h2>
        <div>
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex gap-3">
             <AiOutlinePlus onClick={() => dispatch(incrementQty({id, name, img, price, qty}))} className="border-2 border-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-lg transition-all ease-linear cursor-pointer" />
            <span>{qty}</span>
            <AiOutlineMinus onClick={() => 
              qty > 1 ?
              dispatch(decrementQty({id})) : (qty = 0)} className="border-2 border-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-lg transition-all ease-linear cursor-pointer" />
          </div>
          </div>
            
            </div>
    </div>


  )
}

export default ItemCard