import { HashLink as Link } from 'react-router-hash-link'
import { FormattedMessage } from 'react-intl'
import { useState } from 'react';

const imgPath = process.env.PUBLIC_URL + '/img';

export const Certificate = () => {

  const [hoverMouse, setHoverMouse] = useState(false)

  function enterMouse() {
    setHoverMouse(true)
  }

  function leaveMouse() {
    setHoverMouse(false)
  }

  return (
    <section className="certificate section container">
      <div className="line-wrapper">
        <hr className="line" />
        <hr className="line-left" />
      </div>
      <h2 className="certificate__header1 header-white">
        <FormattedMessage id='сertificate_header' />
      </h2>
      <div className="certificate__content">
        <ul className="certificate__wrapper-list">
          <li className="certificate__list">
            <FormattedMessage id='сertificate_li_1' />
            <span className="certificate__descryption">
              <FormattedMessage id='сertificate_descryption_1' />
            </span>
          </li>
          <li className="certificate__list">
            <FormattedMessage id='сertificate_li_2' />
            <span className="certificate__descryption">
              <FormattedMessage id='сertificate_descryption_2' />
            </span>
          </li>
          <li className="certificate__list">
            <FormattedMessage id='сertificate_li_3' />
            <span className="certificate__descryption">
              <FormattedMessage id='сertificate_descryption_3' />
            </span>
          </li>
        </ul>
        <ul className="certificate__wrapper-list2">
          <li className="certificate__list">
            <span className="certificate__descryption">
              <FormattedMessage id='сertificate_li_4' />
            </span>
          </li>
          <li className="certificate__list">
            <span className="certificate__descryption">
              <FormattedMessage id='сertificate_li_5' />
            </span>
          </li>
          <li className="certificate__list">
            <span className="certificate__descryption">
              <FormattedMessage id='сertificate_li_6' />
            </span>
          </li>
          <li className="certificate__list">
            <span className="certificate__descryption">
              <FormattedMessage id='сertificate_li_7' />
            </span>
          </li>
        </ul>

        <Link className="certificate__link" onMouseOver={() => enterMouse()} onMouseOut={() => leaveMouse()} to="/contact#form">
          {!hoverMouse && <img className="certificate__crane" src={imgPath + '/crane-yellow.png'} alt="crane" />}
          {hoverMouse && <img className="certificate__crane" src={imgPath + '/crane-red.png'} alt="crane" />}
          <FormattedMessage id='сertificate_request' />
        </Link>
      </div>
      <div className="certificate__wrapper">
        <span className="certificate__header2 header-yellow">
          <FormattedMessage id='сertificate_header_2' />
        </span>
      </div>
      <div className="line-wrapper">
        <hr className="line" />
        <hr className="line-right" />
      </div>
    </section>
  )
}