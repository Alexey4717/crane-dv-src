import React from 'react'
import { FormattedMessage } from 'react-intl'

const imgPath = process.env.PUBLIC_URL + '/img';

export const AboutUs = () => (
  <div className="aboutUs container content">
    <Section1 />
    <Section2 />
  </div>
)

const Section1 = () => (
  <section className="aboutUs__section1">
    <div className="aboutUs__section1-background">
      <div className="line__black-wrapper">
        <hr className="line__black" />
        <hr className="line__black-right" />
        <img className="line__black-img1" src={imgPath + "/crane.png"} alt="crane" />
      </div>
      <h2 className="aboutUs__section1-header">
        <FormattedMessage id='aboutUs__section_1_header' />
      </h2>
      <div className="aboutUs__section1-content">
        <span className="aboutUs__section1-span">
          <FormattedMessage id='aboutUs__section_1_span' />
        </span>
        <ul className="aboutUs__section1-listWrapper">
          <li className="aboutUs__section1-list">
            <FormattedMessage id='aboutUs__section_1_list_1' />
          </li>
          <li className="aboutUs__section1-list">
            <FormattedMessage id='aboutUs__section_1_list_2' />
          </li>
          <li className="aboutUs__section1-list">
            <FormattedMessage id='aboutUs__section_1_list_3' />
          </li>
          <li className="aboutUs__section1-list">
            <FormattedMessage id='aboutUs__section_1_list_4' />
          </li>
          <li className="aboutUs__section1-list">
            <FormattedMessage id='aboutUs__section_1_list_5' />
          </li>
        </ul>
        <div className="line-between__wrapper">
          <hr className="line-between__line" />
          <div className="line-between__circle"></div>
        </div>
        <span className="aboutUs__text">
          <FormattedMessage id='aboutUs__section_1_text_1' />
        </span>
        <div className="line-between__wrapper">
          <hr className="line-between__line" />
          <div className="line-between__circle"></div>
        </div>
        <span className="aboutUs__text">
          <FormattedMessage id='aboutUs__section_1_text_2' />
        </span>
      </div>
      <img className="aboutUs__section1-img" src={imgPath + "/sertificate.png"} alt="sertificate" />
    </div>
  </section>
)

const Section2 = () => (
  <section className="aboutUs__section2">
    <div className="aboutUs__section2-background">
      <div className="line__black-wrapper">
        <hr className="line__black" />
        <hr className="line__black-left" />
        <img className="line__black-img2" src={imgPath + "/crane2.png"} alt="crane" />
      </div>
      <h2 className="aboutUs__section2-header">
        <FormattedMessage id='aboutUs__section_2_header' />
      </h2>

      <div className="aboutUs__section2-content">
        <span className="aboutUs__text">
          <FormattedMessage id='aboutUs__section_2_text_1' />
        </span>
        <div className="line-between__wrapper">
          <hr className="line-between__line" />
          <div className="line-between__circle"></div>
        </div>
        <span className="aboutUs__text">
          <FormattedMessage id='aboutUs__section_2_text_2' />
        </span>
        <div className="line-between__wrapper">
          <hr className="line-between__line" />
          <div className="line-between__circle"></div>
        </div>
        <span className="aboutUs__text">
          <FormattedMessage id='aboutUs__section_2_text_3' />
        </span>
      </div>
      <img className="aboutUs__section2-img" src={imgPath + "/dv.png"} alt="map" />
    </div>
  </section>
)
