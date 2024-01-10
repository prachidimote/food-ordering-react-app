import FoodCard from '../components/FoodCard';
import FoodData from '../data/FoodData';
import toast, { Toaster } from 'react-hot-toast';
const FoodItems = () => {
  // eslint-disable-next-line no-unused-vars
  const handleToast = (name) => toast.success(`${name} added to cart`);
  console.log(handleToast);
  const handleToastError = () => toast.error("Item removed from cart");
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
      {FoodData.map((food) => {
        return <FoodCard 
        key={food.id}
        id={food.id}
        name={food.name}
        price={food.price}
        desc={food.desc}
        rating={food.rating}
        img={food.img} 
        handleToast={handleToast}
        handleToastError={handleToastError}
        />
      })}
 
    </div>
    </>
  )
}

export default FoodItems