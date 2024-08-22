import "./App.css";
import {Routes,Route} from "react-router-dom"
import {Home} from "./components/Home"
import {Footer} from "./components/Footer"
import {Header} from "./components/Header"
import {Contact} from "./components/Contact"
import {ProductDetails} from "./components/ProductDetails"
import {ProductList} from "./components/ProductList"
import { PageNotFound } from "./components/PageNotFound";
import {ContactUs} from "./components/ContactUs"
import { Contactpk } from "./components/Contactpk";
import { Contactuk } from "./components/Contactuk";

function App() {
  return (
    <div className="app">
      <Header/>
      <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products" element={<ProductList/>}/>
        <Route path="products/:id" element={<ProductDetails/>}/>
        <Route path="contact" element={<Contact/>}> 
        <Route path="pk" element={<Contactpk/>}/>
        <Route path="us" element={<ContactUs/>}/>
        <Route path="uk" element={<Contactuk/>}/>
        <Route path="*" element={<Contactpk/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
