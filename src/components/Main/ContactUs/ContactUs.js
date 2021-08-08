import { FormattedMessage } from 'react-intl'

export const ContactUs = (props) => (
  <section className="contactUs container">
    <img className="contactUs__img" src={props.contactUs[0]} alt="contact Us" />
    <div className="contactUs__wrapper">
      <h2 className="contactUs__question"><FormattedMessage id='contactUs__question' /></h2>
      <div className="contactUs__requisites">
        <a className="contactUs__cityNum" href="tel:+74212544195">
          +7(4212)54-41-95
        </a>
        <a className="contactUs__mobNum" href="tel:+79241085870">
          +7(924)108-58-70
        </a>
        <a className="contactUs__email" href="mailto:office@microtermplus.ru">
          office@microtermplus.ru
        </a>
      </div>

    </div>
    <img className="contactUs__crane" src={props.contactUs[1]} alt="crane" />
  </section>
)