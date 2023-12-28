import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
const ItemCard = () => {
    const itemPath = "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5";
  return (
    <div className="gap-2 shadow-md rounded-lg p-1 mb-3 flex">
       <AiFillDelete className="absolute right-6" />
        <img style={{marginLeft: "initial"}} className="w-[50px] h-[50px]" src={itemPath} alt="image" />
        <div className="leading-5">
           <h2 className="text-bold text-gray-800">Onion Pizza</h2>
        <div>
          <span className="text-green-500 font-bold">₹150</span>
          <div className="flex gap-3">
             <AiOutlinePlus className="border-2 border-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-lg transition-all ease-linear cursor-pointer" />
            <span>1</span>
            <AiOutlineMinus className="border-2 border-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-lg transition-all ease-linear cursor-pointer" />
          </div>
          </div>
            
            </div>
    </div>


  )
}

export default ItemCard