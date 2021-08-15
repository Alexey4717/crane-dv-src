import { GalleryContainer } from '../Gallery/Gallery'
import { FormattedMessage } from 'react-intl'

const imgPath = process.env.PUBLIC_URL + '/img';

export const Engineering = (props) => {

  return (
    <div className="ingeneering container content">
      <div className="intro"></div>
      <div className="intro__container">
        <div className="line__black-wrapper">
          <hr className="line__black" />
          <hr className="line__black-right longer" />
          <hr className="line__black-left" />
        </div>

        <div className="intro__wrapper">
          <div className="intro__slings"></div>
          <div className="intro__content">
            <h2 className="ingeneering__header">
              <FormattedMessage id='ingeneering_header' />
            </h2>
            <div className="ingeneering__content">

              <img className="ingeneering__img" src={imgPath + "/controller.jpg"} alt="controller" />
              <div className="ingeneering__wrapper">
                <h3 className="ingeneering__h3">
                  <FormattedMessage id='ingeneering_h3_1' />
                </h3>
                <ol className="ingeneering__list">
                  <li className="ingeneering__h4">
                    <FormattedMessage id='ingeneering_h4_1' />
                  </li>
                  <li className="ingeneering__h4">
                    <FormattedMessage id='ingeneering_h4_2' />
                  </li>
                  <li className="ingeneering__h4">
                    <FormattedMessage id='ingeneering_h4_3' />
                  </li>
                </ol>
                <h3 className="ingeneering__h3">
                  <FormattedMessage id='ingeneering_h3_2' />
                </h3>
                <ol className="ingeneering__list">
                  <li className="ingeneering__h4">
                    <FormattedMessage id='ingeneering_h4_4' />
                  </li>
                  <li className="ingeneering__h4">
                    <FormattedMessage id='ingeneering_h4_5' />
                  </li>
                </ol>
                <h3 className="ingeneering__h3">
                  <FormattedMessage id='ingeneering_h3_3' />
                </h3>
                <ol className="ingeneering__list">
                  <li className="ingeneering__h4">
                    <FormattedMessage id='ingeneering_h4_6' />
                  </li>
                  <li className="ingeneering__h4">
                    <FormattedMessage id='ingeneering_h4_7' />
                  </li>
                  <li className="ingeneering__h4">
                    <FormattedMessage id='ingeneering_h4_8' />
                  </li>
                  <li className="ingeneering__h4">
                    <FormattedMessage id='ingeneering_h4_9' />
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="intro__slings"></div>
        </div>
        <img className="intro__img" src={imgPath + "/crane5.png"} alt="crane" />
      </div>
      <GalleryContainer page={'engineering'} currentLocale={props.currentLocale} />
    </div>
  )
}