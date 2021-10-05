import { CatalogueContext } from "../../providers/Catalogue/catalogue"
import { CartContext } from '../../providers/Cart/cart'
import { useContext } from "react"
import Button from "../Button"
const ProductList = ({ type }) =>{
    const { cart } = useContext(CartContext)
    const { catalogue } = useContext(CatalogueContext)
    console.log(cart)
    return(
        <div>
            <ul>
                {type==='catalogue' &&
                    <>
                    <h2>Catalogue</h2>
                    {catalogue.map((item, index)=>(
                        <li key={index}>
                            {item.name}A <Button type={type} item={item}/>
                        </li>
                    ))}
                    </>
                }
                {type==='cart' &&
                    <>
                    <h3>Cart</h3>
                    {cart.map((item, index)=>(
                        <li key={index}>
                            {item.name} <Button type={type} item={item}/>
                        </li>
                    ))}

                    </>
                }
            </ul>
        </div>
    )
}

export default ProductList