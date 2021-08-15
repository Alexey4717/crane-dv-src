import React from 'react'
import MaskInput from 'react-maskinput';
import { FormattedMessage, useIntl } from 'react-intl'
import { useState } from 'react'
import { sendForm } from '../../../api/api'
import { LOCALES } from '../../../i18n/locales'

export const Form = (props) => {

  const intl = useIntl()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [nameHidden, setNameHidden] = useState(true)
  const [phoneHidden, setPhoneHidden] = useState(true)
  const [emailHidden, setEmailHidden] = useState(true)
  const [messageHidden, setMessageHidden] = useState(true)
  const [formHidden, setFormHidden] = useState(true)
  const [formSent, setFormSent] = useState(false)
  const [statusText, setStatusText] = useState()

  function submitForm(evt) {
    const emailRegEx =
      /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/g // регулярное выражения для email
    const phoneRegEx =
      /([+][7]\([\d]{3}\)[\d]{3}[\-]?[\d]{2}[\-]?[\d]{2})/g // регулярное выражения для номера телефона
    const isNameValid =
      name.length > 3 && name.length < 26 && name.trim() !== ""
    const isPhoneValid =
      phone.length > 15 && phone.length < 17 && phone.trim() !== "" && phoneRegEx.test(phone)
    const isEmailValid = emailRegEx.test(email)
    const isMessageValid =
      message.length > 0 && message.length < 501 && message.trim() !== ""
    const isFormValid = isNameValid && isPhoneValid && isEmailValid && isMessageValid

    if (!isFormValid) {
      evt.preventDefault()
      setFormHidden(false)
      onBlurName()
      onBlurPhone()
      onBlurEmail()
      onBlurMessage()
    } else if (isFormValid) {
      evt.preventDefault() // т.к. post-запрос симитирован, чтоб не возникала ошибка отменим отправку по умолчанию
      setFormHidden(true)
      setFormSent(true)
      setName('')
      setPhone('')
      setEmail('')
      setMessage('')
      setStatusText(sendForm.sendContactForm())
    }
  }

  function onBlurName() {
    const isNameValid =
      name.length > 3 && name.length < 26 && name.trim() !== "";
    if (!isNameValid) {
      setNameHidden(false)
    } else if (isNameValid) {
      setNameHidden(true)
    }
  }

  function onBlurPhone() {
    const phoneRegEx =
      /([+][7]\([\d]{3}\)[\d]{3}[\-]?[\d]{2}[\-]?[\d]{2})/g; // регулярное выражения для номера телефона
    const isPhoneValid =
      phone.length > 15 && phone.length < 17 && phone.trim() !== "" && phoneRegEx.test(phone);
    if (!isPhoneValid) {
      setPhoneHidden(false)
    } else if (isPhoneValid) {
      setPhoneHidden(true)
    }
  }

  function onBlurEmail() {
    const emailRegEx =
      /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/g; // регулярное выражения для email
    const isEmailValid = emailRegEx.test(email);
    if (!isEmailValid) {
      setEmailHidden(false)
    } else if (isEmailValid) {
      setEmailHidden(true)
    }
  }

  function onBlurMessage() {
    const isMessageValid =
      message.length > 0 && message.length < 501 && message.trim() !== "";
    if (!isMessageValid) {
      setMessageHidden(false)
    } else if (isMessageValid) {
      setMessageHidden(true)
    }
  }


  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <form className="contact__form" /* onSubmit={sendForm.sendContactForm} */ method="post" id={"form"}>
      <fieldset className="contact__form-fieldset">
        <legend className="contact__form-legend">
          <FormattedMessage id='contact_form_legend' />
        </legend>
        <div className="contact__form-info">
          <label className="contact__form-label" htmlFor="name">
            <FormattedMessage id='contact_form_label_name' />
            {!nameHidden && <span className="contact__form-error"><FormattedMessage id='contact_form_error_name' /></span>}
          </label>
          <input className="contact__form-input" type="text" id="name" value={name} onChange={handleNameChange} onBlur={onBlurName} placeholder={intl.formatMessage({
            id: "contact_form_placeholder_name",
          })}
            pattern="[A-Za-zА-Яа-яЁё0-9]{3,25}" required />

          <label className="contact__form-label" htmlFor="phone">
            <FormattedMessage id='contact_form_label_phone' />
            {!phoneHidden && <span className="contact__form-error"><FormattedMessage id='contact_form_error_phone' /></span>}
          </label>
          <MaskInput className="contact__form-input" type="tel" id="phone" value={phone} onChange={handlePhoneChange} onBlur={onBlurPhone} placeholder={intl.formatMessage({
            id: "contact_form_placeholder_phone",
          })} mask={'+7(000)000-00-00'} size={20} showMask maskChar="_" pattern="\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}" required
          />
          <label className="contact__form-label" htmlFor="email">
            E-mail
            {!emailHidden && <span className="contact__form-error"><FormattedMessage id='contact_form_error_email' /></span>}
          </label>
          <input className="contact__form-input" type="email" id="email" value={email} onChange={handleEmailChange} onBlur={onBlurEmail} placeholder={intl.formatMessage({
            id: "contact_form_placeholder_mail",
          })}
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})" required />
        </div>
        <div className="contact__form-message">
          <span className="contact__form-span">
            <FormattedMessage id='contact_form_label_span' />
            {!messageHidden && <span className="contact__form-textarea_error"><FormattedMessage id='contact_form_error_message' /></span>}
          </span>
          <textarea className="contact__form-textarea" maxLength="500" value={message} onChange={handleMessageChange} onBlur={onBlurMessage} required></textarea>
        </div>
        <div className="contact__form-button">
          <button className="contact__form-submit" onClick={submitForm}>
            <FormattedMessage id='contact_form_button' />
          </button>
          {!formHidden && <span className="contact__form-submit-error"><FormattedMessage id='contact_form_error_form' /></span>}
        </div>
      </fieldset>
      {formSent && props.currentLocale === LOCALES.RUSSIAN && <div className="contact__form-sent">{statusText.statusText}</div>}
      {formSent && props.currentLocale === LOCALES.ENGLISH && <div className="contact__form-sent">{statusText.statusTextEn}</div>}
    </form>
  )
}