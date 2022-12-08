import React from "react";
import { Routes , Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Electronics from "./components/Electronics";
import Jewelery from "./components/Jewelery";
import MyCart from "./components/MyCart";
import ProductInfo from "./components/ProductInfo";
import Cart from "./components/Cart"
import ProductInfoJ from "./components/ProductInfoJ";
import NotFound from "./components/NotFound";
import Discover from "./components/Discover";
import Contactme from "./components/Contactme";
import Contact from "./components/Contact";
import data from "./Allproducts"





function App() {

const [allProducts , setAllProducts] = React.useState(()=>{
  return data
})
const [myCart , setMyCart] = React.useState(()=>{
  const saved = localStorage.getItem("cart");
  const initialValue = JSON.parse(saved);
  return initialValue || [];
})
const [showCart , setShowCart] = React.useState(false)
const [showContact , setShowContact] = React.useState(false)
const [alert , setAlert] = React.useState([null])
const [searchres ,setSearchRes] = React.useState(()=>{
  const saved = localStorage.getItem("search");
  const initialValue = JSON.parse(saved);
  return initialValue || [];
})





React.useEffect(()=>{

 
  
  if(myCart.length > 0 &&  myCart ) {
    setShowCart(true)
  }
  else {
    setShowCart(false)
  }

},[myCart])


React.useEffect(() => {
  // storing input name
  localStorage.setItem("cart", JSON.stringify(myCart));
}, [myCart]);


React.useEffect(()=>{
  localStorage.setItem("search", JSON.stringify(searchres));
},[searchres])


// Adding Products to Cart


function addproduct(product){

  let i = true

  myCart.forEach(items=>{
    if(items.id === product.id) {
      i = false 
      return 
    } })
if(i) {
setMyCart(items=>{
  return [...items , product]
})
}
setMyCart(previtems => previtems.map(item => {
  return item.id === product.id ? 
  {...item , "count" : 1 } : item
}))
}

//Removing The Product From the Cart

function removeproduct(id) {

  let filter = []

  myCart.forEach(item=>{
   if(item.id !== id){
    filter.push(item)
   }
  })

  setMyCart(filter)
}



// Editing The Product Count in The Cart 

function editcount(id , value) {

  myCart.forEach(items=>{
    if(items.id === id) {
      
      if( items.count === 1 && value <= -1){
        alerttime()
        return setAlert([0,id])  
      }
      if(items.count === items.left && value >= +1) {
        alerttime()
        return setAlert([10,id])
      }
      else {
        setMyCart(prevState => prevState.map(item=>{
          return item.id === id ? 
          {...item,count : item.count + value} :
          item
        }))
      }
      
    } })
}

// Editing the Ring Size 


function editsize(id , value) {

  
        setMyCart(prevState => prevState.map(item=>{
          return item.id === id ? 
          {...item,"size" : value} :
          item
        }))
      }
      
  

// Timer for Cart Alert

function alerttime(fc){
  setTimeout(() => {
    setAlert(9)
  }, 4000);
}


console.log(myCart)

function search(value) {

  if( value && value.length < 2) {
    setSearchRes(["y"])
    return
  }

 
if (value) {

  let search = []

  allProducts.slice(4).forEach(items =>{
   if ( (items.title.includes(value)) || (items.title.includes(value.toUpperCase())) || (items.title.includes(`${value[0].toUpperCase()}${value.substring(1)}`)) || (items.title.includes(`${value[0].toUpperCase()}${value[1].toLowerCase()}`))  ){
    search.push(items)
   }
  })

  if(search.length > 0) {
    setSearchRes(search)
  }
  else {
    setSearchRes(["x"])
  }


 

}
else {
  setSearchRes([])
}


}


console.log(searchres)

  return (
    <>
    {showContact && <Contact  setShowContact={setShowContact} />}

 <NavBar  />

 {showCart ? <MyCart myCart={myCart} /> : null}
 <Contactme setShowContact={setShowContact}/>
 
   <Routes>
    
    <Route path="/" element={<Home /> } />
    <Route path="electronics" element={<Electronics />} />
    <Route path="electronics/product/:productID" element={<ProductInfo allProducts={allProducts} addproduct={addproduct} removeproduct={removeproduct} myCart={myCart}  />} />
    <Route path="jewelery/product/:productID" element={<ProductInfoJ allProducts={allProducts} addproduct={addproduct} removeproduct={removeproduct} myCart={myCart}  />} />
    <Route path="jewelery" element={<Jewelery />} />
    <Route path="discover" element={<Discover search={search} searchres={searchres} />} />
    <Route path="mycart" element={<Cart myCart={myCart} removeproduct={removeproduct} editcount={editcount} alert={alert} editsize={editsize} />} />
    <Route path="*" element={<NotFound />} />
   </Routes> 
   </>
  
  );
}

export default App;
