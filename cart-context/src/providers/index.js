import { CartProvider } from "./Cart/cart";
import { CatalogueProvider } from "./Catalogue/catalogue";

const Providers = ({ children }) =>{
    return(
        <CatalogueProvider>
            <CartProvider>
                { children }
            </CartProvider>
        </CatalogueProvider>
    )
}

export default Providers