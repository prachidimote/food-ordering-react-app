/* eslint-disable react/prop-types */
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/CartSlice";
// eslint-disable-next-line no-unused-vars
const ItemCard = ({id, name, price, qty, img}) => {
  const dispatch = useDispatch();
   // const itemPath = "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5";
  return (
    <div className="gap-2 shadow-md rounded-lg p-1 mb-3 flex">
       <AiFillDelete onClick={() => dispatch(removeFromCart({id, name, img, price, qty}))} className="absolute right-6 cursor-pointer" />
        <img style={{marginLeft: "initial"}} className="w-[50px] h-[50px]" src={img} alt="image" />
        <div className="leading-5">
           <h2 className="text-bold text-gray-800">{name}</h2>
        <div>
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex gap-3">
             <AiOutlinePlus className="border-2 border-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-lg transition-all ease-linear cursor-pointer" />
            <span>{qty}</span>
            <AiOutlineMinus className="border-2 border-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-lg transition-all ease-linear cursor-pointer" />
          </div>
          </div>
            
            </div>
    </div>


  )
}

export default ItemCard