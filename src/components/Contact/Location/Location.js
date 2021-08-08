import { LOCALES } from '../../../i18n/locales'
import { FormattedMessage } from 'react-intl'
import React from 'react'

export const Location = React.forwardRef((props, ref) => (
  <div className="contact__location" id="location" ref={ref} >
    <span className="contact__location-text">
      <FormattedMessage id='contact_location_text' />
    </span>
    {
      props.currentLocale === LOCALES.RUSSIAN && <iframe className="contact__location-map" title="mapRu"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d897.2312954480698!2d135.09638288375714!3d48.37763924082229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5efae5f0470f9e2f%3A0x2a41b93567dc8deb!2z0YPQuy4g0JzQvtC90YLQsNC20L3QsNGPLCAzMNCQLCDQpdCw0LHQsNGA0L7QstGB0LosINCl0LDQsdCw0YDQvtCy0YHQutC40Lkg0LrRgNCw0LksIDY4MDAwMQ!5e0!3m2!1sru!2sru!4v1623495741479!5m2!1sru!2sru"></iframe>
    }

    {
      props.currentLocale === LOCALES.ENGLISH && <iframe className="contact__location-map" title="mapEn" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2650.10152935288!2d135.09500141562245!3d48.3777858792433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5efae5f0470f9e2f%3A0x2a41b93567dc8deb!2sUlitsa%20Montazhnaya%2C%2030%D0%90%2C%20Khabarovsk%2C%20Khabarovskiy%20kray%2C%20680001!5e0!3m2!1sen!2sru!4v1626932091227!5m2!1sen!2sru"></iframe>
    }

  </div>
))