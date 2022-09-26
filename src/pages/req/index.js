import * as React from 'react'
import "../../styles/global.css"
import {data} from "./data"
import LogoImage from "../../images/TheCookies.svg"
import '../styles.css'
import HeaderComponent from '../../components/header/header'
import ContentComponent from '../../components/content/content'
import FooterComponent from '../../components/footer/footer'

const ReqPage = () => {
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
                <a href="/home">Prueba técnica</a> | <b>Requisitos</b>
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

export const Head = () => <title>Requisitos</title>

export default ReqPage
