import CategoryMenu from "../components/CategoryMenu"
import FoodItems from "../components/FoodItems"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar />
        <CategoryMenu />
        <FoodItems />
    </div>
  )
}

export default Home