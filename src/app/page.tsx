import BrowseCategories from "./components/browse-categories/page";
import Categories from "./components/categories/page";
import FalshSales from "./components/flash-sales/page";
import Hero from "./components/hero-section/page";
import Product from "./components/product/page";
import SubFooter from "./components/sub-footer/page";
;


export default function Home() {
  return (
    <div>
     
      <Hero/>
      <FalshSales/>
      <BrowseCategories/>
      <Product/>
      <Categories/>
     <SubFooter/>
     

    
     
      
      
    </div>

  
  );
}
