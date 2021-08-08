import React from 'react'
import { Logo } from '../Navbar/Logo/Logo'
import { LOCALES } from '../../i18n/locales'
import { FormattedMessage, useIntl } from 'react-intl'

const imgPath = process.env.PUBLIC_URL + '/img';

export const Header = (props) => {

  const intl = useIntl()

  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__logo">
          <Logo linkStyle={"header__logo-link"} imgStyle={"header__logo-img"} setIsAccordionActive={props.setIsAccordionActive} />
          <span className="header__logo-phrase">
            <FormattedMessage id='headers_title' />
          </span>
        </div>
        <div className="header__contacts">
          <a className="header__contacts-text" href="mailto:office@microtermplus.ru">
            office@microtermplus.ru
          </a>
          <a className="header__contacts-text" href="tel:+74212544195">
            +7(4212)54-41-95
          </a>
          <a className="header__contacts-text" href="tel:+79241085870">
            +7(924)108-58-70
          </a>
          <div className="header__wrapper-search">
            <div className="ya-site-form ya-site-form_inited_no" data-bem="{&quot;action&quot;:&quot;https://yandex.ru/search/site/&quot;,&quot;arrow&quot;:false,&quot;bg&quot;:&quot;#F8D418&quot;,&quot;fontsize&quot;:14,&quot;fg&quot;:&quot;#000000&quot;,&quot;language&quot;:&quot;ru&quot;,&quot;logo&quot;:&quot;rb&quot;,&quot;publicname&quot;:&quot;кран-дв&quot;,&quot;suggest&quot;:true,&quot;target&quot;:&quot;_blank&quot;,&quot;tld&quot;:&quot;ru&quot;,&quot;type&quot;:3,&quot;usebigdictionary&quot;:true,&quot;searchid&quot;:2484120,&quot;input_fg&quot;:&quot;#000000&quot;,&quot;input_bg&quot;:&quot;#ffffff&quot;,&quot;input_fontStyle&quot;:&quot;normal&quot;,&quot;input_fontWeight&quot;:&quot;bold&quot;,&quot;input_placeholder&quot;:&quot;&quot;,&quot;input_placeholderColor&quot;:&quot;#000000&quot;,&quot;input_borderColor&quot;:&quot;#000000&quot;}">
              <form className="header__form-search" action="https://yandex.ru/search/site/" method="get" target="_blank" acceptCharset="utf-8">
                <input type="hidden" name="searchid" value="2484120" />
                <input type="hidden" name="l10n" value="ru" />
                <input type="hidden" name="reqenc" value="" />
                <input className="header__form-input" type="search" name="text" placeholder={intl.formatMessage({
                  id: "header_search_placeholder",
                })} />
                <button className="header__form-submit" type="submit" name="searchSubmit"></button>
              </form>
            </div>
          </div>
        </div>
        <div className="header__photo">
          <img className="header__photo-crane" src={imgPath + "/crane-logo.jpg"} alt="crane" />
          <img className="header__photo-circle" src={imgPath + "/circle.png"} alt="circle" />
        </div>
        <span className="header__lang" onClick={props.handleLang}>
          {props.currentLocale === LOCALES.RUSSIAN && 'En'}
          {props.currentLocale === LOCALES.ENGLISH && 'Ru'}
        </span>
      </div>
    </header>
  )
}