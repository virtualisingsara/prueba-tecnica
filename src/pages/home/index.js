import * as React from 'react'
import "../../styles/global.css"
import {data} from "./data"
import LogoImage from "../../images/TheCookies.svg"
import '../styles.css'
import HeaderComponent from '../../components/header/header'
import ContentComponent from '../../components/content/content'
import FooterComponent from '../../components/footer/footer'

const HomePage = () => {
  return (
    <>
    <div class="header">
            <div>
                <div class="logoDiv">
                    <div class="logo">
                      <LogoImage />
                    </div>
                </div>
                <div class="nav">
                    <b>Prueba técnica</b> | <a href="/req">Requisitos</a>
                </div>
            </div>
    </div>
    <HeaderComponent data = {data.header}>
    </HeaderComponent>
    <ContentComponent data = {data.content}>
    </ContentComponent>
    <FooterComponent data = {data.footer}>
    </FooterComponent>
    </>
  )
}

export const Head = () => <title>Prueba Técnica</title>

export default HomePage
