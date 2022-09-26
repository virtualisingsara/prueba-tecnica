import * as React from 'react'
import {
    sectionTitle,
    sectionSubtitle,
    text,
    footer,
    sectionFooter,
    textDivFooter,
    phone,
    address,
    mail
  } from './footer.module.css'

const FooterComponent = ({data}) => {
  return (
    <footer className={footer}>
            <div className={sectionFooter}>
                <span className={sectionTitle}>{data.title}</span>
                <br/>
                <span className={sectionSubtitle}>{data.subtitle}</span>
                <div className={textDivFooter}>
                    <span className={text}>{data.desc1}</span>
                    <br/>
                    <span className={text}>{data.desc2}</span>
                </div>
            </div>
            <hr/>
            <div>
                <span className={phone}>{data.phone}</span>
                <span className={address}>{data.address}</span>
                <span className={mail}>{data.mail}</span>
            </div>
      </footer>
  )
}

export default FooterComponent
