import React from 'react'
import { Link } from 'react-router-dom' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from '../../context/CartContext';

export default function CartWidget() {
    
    const { cart } = React.useContext(CartContext)
    

    return (
        <div className='cardWidget'>
            <Link className='nav__link'to={'/cart'}>
                <FontAwesomeIcon icon={faCartShopping} /> 
                {cart.length === 0 ? (
                    " "
                )
                :(
                    <span className="span-cart">
                       {cart.length}
                    </span>
                )}
            </Link>
        </div>
    )
}
