import { useContext } from "react"
import { CatalogueContext } from "../../providers/Catalogue/catalogue"
import { CartContext } from "../../providers/Cart/cart"
const Button = ({ type, item}) =>{
    const { cart, addToCart, removeFromCart } = useContext(CartContext)
    const { catalogue, addToCatalogue, removeFromCatalogue } = useContext(CatalogueContext)

    const text = type === 'catalogue' ? "Adicionar ao carrinho" : 'Remover do carrinho'

    const handleClick = () =>{
        if(type === "catalogue"){
            removeFromCatalogue(item)
            addToCart(item)
        }else{
            removeFromCart(item)
            addToCatalogue(item)
        }
    }
    return(
        <button onClick={handleClick}>{text}</button>
    )
}

export default Button