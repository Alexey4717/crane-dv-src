import { HashLink as Link } from 'react-router-hash-link'
import { FormattedMessage } from 'react-intl'

export const Certificate = () => {

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

        <Link className="certificate__link" to="/contact#form">
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