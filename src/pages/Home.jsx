import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";


const Home = () => {
  return (
    <div>
        <Navbar />
        <CategoryMenu />
        <FoodItems />
        <Cart />
    </div>
  )
}

export default Home