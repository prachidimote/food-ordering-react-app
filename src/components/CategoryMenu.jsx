import { useEffect, useState } from 'react';
import FoodData from '../data/FoodData';
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';
const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const listUniqueCategories  = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
    console.log(uniqueCategories); // ['Lunch', 'Breakfast', 'Dinner', 'Snacks']
  };

  useEffect(() => {
    listUniqueCategories();
  },[]);

  const dispatch = useDispatch();
    return (
      <div className="mx-6">
          <h3>Find the best food</h3>  
      <div className="my-3 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-hidden">
      <button 
              onClick={() => dispatch(setCategory("All"))}
              className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white">All
              </button>
        {
          categories.map((category, index) => {
            return (
              <button 
              onClick={() => dispatch(setCategory(category))}
              key={index} 
              className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white">{category}
              </button>
            )
          })
        }   
      </div>
      </div>
    )
  }
  export default CategoryMenu