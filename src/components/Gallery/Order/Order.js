import { Slider } from './Slider/Slider'
import { LOCALES } from '../../../i18n/locales'

export const Order = (props) => {
  const currentLocale = props.currentLocale
  return (
    <div className="gallery__slider-wrapper">
      <Slider page={props.page} photos={props.photos} />
      <div className="gallery__slider-descryption">
        <h3 className="gallery__slider-header">
          {currentLocale === LOCALES.RUSSIAN && props.header}
          {currentLocale === LOCALES.ENGLISH && props.headerEn}
        </h3>
        <span className="gallery__slider-characteristics">
          {currentLocale === LOCALES.RUSSIAN && props.characteristics}
          {currentLocale === LOCALES.ENGLISH && props.characteristicsEn}
        </span>
        <span className="gallery__slider-date">
          {props.date}
        </span>
      </div>
    </div>
  )
}