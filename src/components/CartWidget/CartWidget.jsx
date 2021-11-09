import React from 'react'
import './CartWidget.css';
    
function CartWidget() {
    return (
        <div>
            <a className="tituloNav navbar-brand" href="#"><span className="inicialLogo">A</span>rt Store</a>
            <a className="contBolsa" href=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bolsa bi bi-bag-fill" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
          </svg></a>
        </div>
    )
}

export default CartWidget