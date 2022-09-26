import * as React from 'react'
import {
    header,
    titlesDiv,
    title,
    subtitle,
  } from './header.module.css'

const HeaderComponent = ({data}) => {
  return (
    <header className={header}>
            <div className={titlesDiv}>
                <div>
                    <span className={title}>{data.title}</span>
                    <br/>
                    <span className={subtitle}>{data.subtitle}</span>
                </div>
        </div>
    </header>
  )
}

export default HeaderComponent
