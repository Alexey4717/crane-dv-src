import { FormattedMessage } from 'react-intl'

export const Requisites = (props) => (
  <div className="contact__requisites">
    <div className="contact__requisites-wrapper">
      <a href="tel:+74212544195">
        <img className="contact__requisites-img" src={props.phone} alt="phone" />
      </a>
      <div>
        <a href="tel:+74212544195">
          <span className="contact__requisites-text">
            +7(4212)54-41-95
          </span>
        </a>
        <a href="tel:+79241085870">
          <span className="contact__requisites-textM">
            +7(924)108-58-70
          </span>
        </a>
      </div>
    </div>
    <div className="contact__requisites-wrapper">
      <a href="mailto:office@microtermplus.ru">
        <img className="contact__requisites-img" src={props.mail} alt="mail" />
      </a>
      <a href="mailto:office@microtermplus.ru">
        <span className="contact__requisites-text">
          office@microtermplus.ru
        </span>
      </a>
    </div>

    <div className="contact__requisites-wrapper" onClick={props.scrLoc}>
      <img className="contact__requisites-img" src={props.address} alt="address" />
      <span className="contact__requisites-text">
        <FormattedMessage id='contact_address' />
      </span>
    </div>

  </div >
)