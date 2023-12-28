import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

// eslint-disable-next-line react/prop-types, no-unused-vars
const FoodCard = ({id, name, price, desc, img, rating}) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg">
      <img 
      style={{marginLeft: "initial"}} 
      className="w-auto h-[130px hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      src={img}
      alt="image"
       />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-600">₹ {price}</span>
      </div>
      <p className="text-sm font-normal">
       {/* eslint-disable-next-line react/prop-types */}
       {desc.slice(0, 50)}...
      </p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button className="p-1 text-white bg-green-500 rounded-lg hover:bg-green-600" onClick={() => {
          dispatch(addToCart({ id, name, price, rating, qty:1 }))
        }}>Add to Cart</button>
      </div>
    </div>
   
  );
};

export default FoodCard;