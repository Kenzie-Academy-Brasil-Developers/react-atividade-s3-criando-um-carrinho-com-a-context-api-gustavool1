import { CatalogueContext } from "../../providers/Catalogue/catalogue"
import { CartContext } from '../../providers/Cart/cart'
import { useContext } from "react"
import Button from "../Button"
import './style.css'
const ProductList = ({ type }) =>{
    const { cart } = useContext(CartContext)
    const { catalogue } = useContext(CatalogueContext)
    console.log(cart)
    return(
        <div className='products-container'>
            <ul>
                {type==='catalogue' &&
                    <>
                    <h3>Catalogue</h3>
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