import * as React from 'react'
import LogoImage from "../../images/TheCookies.svg"
import {
    header,
    logoDiv,
    logo,
    nav,
  } from './navbar.module.css'

const NavbarComponent = ({data}) => {
  return (
    <header className={header}>
            <div>
                <div className={logoDiv}>
                    <div className={logo}>
                        <LogoImage />
                    </div>
                </div>
                <div className={nav}>
                    <b>Prueba técnica</b> | Requisitos
                </div>
            </div>
    </header>
  )
}

export default NavbarComponent
