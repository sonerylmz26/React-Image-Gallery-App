import Picture from "./Picture"
import homePage from "../sass/homePage.module.scss"
import data from "../helper/data";
const Homepage = () => {
  return (
    <div className={homePage["home"]}>
<h2 className={`text-light text-center ${homePage["title"]} `}>React-Image-Gallery-App</h2>

      <div className="justify-content-center d-flex flex-wrap ">

 
      {data.map((items) =>{
console.log(items)
return(
      <div className={`mt-5 m-2 ${homePage["pic"]}`}>
                  <Picture photographer={items.photographer} src={items.src}  />
      </div>

)
      })}
 
      </div>

      </div>
  )
}

export default Homepage