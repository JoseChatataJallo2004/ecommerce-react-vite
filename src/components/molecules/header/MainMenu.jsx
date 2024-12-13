import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = () => {
  return (
    <nav>
    <ul>
        <li>
            <Link to="/">Inicio</Link>
        </li>
        <li>            
            <Link to="/productos">Productos</Link>
        </li>
        <li><a href="/contact">Ofertas</a></li>
        <li><a href="/about">Contacto</a></li>
    </ul>
</nav>
  )
}

export default MainMenu