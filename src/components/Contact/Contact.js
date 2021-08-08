import { Location } from './Location/Location'
import { Requisites } from './Requisites/Requisites'
import { Form } from './Form/Form'
import { FormattedMessage } from 'react-intl'
import React from 'react'
import { useRef } from 'react'

const imgPath = process.env.PUBLIC_URL + '/img';

export const Contact = (props) => {

  const ref = useRef()

  function scrLoc() {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className="contact container content">
      <h2 className="contact__header">
        <FormattedMessage id='contact_header' />
      </h2>
      <div className="contact__container">
        <Requisites phone={imgPath + "/phone.png"} mail={imgPath + "/mail.png"} address={imgPath + "/address.png"} scrLoc={scrLoc} />
        <Form />
      </div>
      <Location ref={ref} currentLocale={props.currentLocale} />
    </div>
  )
}