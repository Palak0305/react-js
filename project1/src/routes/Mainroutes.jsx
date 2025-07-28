import {Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import Recipes from "../pages/Recipes"
import Favroite from "../pages/Favroite"
import About from "../pages/About"
import Create from "../pages/Create"
import Recipe from "../pages/Recipe"
import PageNotFound from "../pages/PageNotFound"
import Update from "../pages/Update"

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />

      <Route path="/recipes" element={<Recipes/>} />
      <Route path="/recipes/create-recipe" element={<Create/>} />
      <Route path="/recipes/details/:id" element={<Recipe/> }/>
      <Route path="/recipes/update-recipe/:id" element={<Update/>} />
     
      <Route path="/favroite" element={<Favroite/>} />

      <Route path="/about" element={<About/>} />

      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default Mainroutes
