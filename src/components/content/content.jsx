import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {
    container,
    column,
    section,
    sectionTitle,
    sectionSubtitle,
    offsetBorder,
    textDiv,
    text,
    picture,
  } from './content.module.css'

const HeaderComponent = ({data}) => {
  return (
    <div className={container}>
            <div className={column}>
                <div className={section}>
                    <span className={sectionTitle}>{data.title1}</span>
                    <br/>
                    <span className={sectionSubtitle}>{data.subtitle1}<span className={offsetBorder}>{data.subtitle1decorator}</span></span>
                    <div className={textDiv}>
                        <span className={text}>{data.desc1line1}</span>
                        <br/>
                        <span className={text}>{data.desc1line2}</span>
                    </div>
                </div>
                <div className={section}>
                    <span className={sectionTitle}>{data.title2}</span>
                    <br/>
                    <span className={sectionSubtitle}>{data.subtitle2}<span className={offsetBorder}>{data.subtitle2decorator}</span></span>
                    <div className={textDiv}>
                        <span className={text}>{data.desc2line1}</span>
                        <br/><br/>
                        <span className={text}>{data.desc2line2}</span>
                        <br/><br/>
                        <span className={text}>{data.desc2line3}</span>
                    </div>
                </div>
            </div>
            <div className={column}>
                <div className={section}>
                    <span className={sectionTitle}>{data.title3}</span>
                    <br/>
                    <span className={sectionSubtitle}>{data.subtitle3}<span className={offsetBorder}>{data.subtitle3decorator}</span></span>
                    <div>
                        <div className={picture}>
                        <StaticImage src={data.pic1} alt={data.altpic1} />
                        </div>
                        <div className={picture}>
                        <StaticImage src={data.pic2} alt={data.altpic2} />
                        </div>
                        <div className={picture}>
                        <StaticImage src={data.pic3} alt={data.altpic3} />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default HeaderComponent
