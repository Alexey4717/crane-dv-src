import { GalleryContainer } from '../Gallery/Gallery'
import { FormattedMessage } from 'react-intl'

const imgPath = process.env.PUBLIC_URL + '/img';

export const Production = (props) => (
  <div className="production container content">
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
          <h2 className="production__header">
            <FormattedMessage id='production_header' />
          </h2>
          <p className="production__p text">
            <FormattedMessage id='production_text_1' />
          </p>
          <div className="production__content">
            <img className="production__schema" src={imgPath + "/schema.png"} alt="schema" />
            <div className="production__wrapper">
              <div>
                <h3 className="production__h3">
                  <FormattedMessage id='production_h3_1' />
                </h3>
                <ol>
                  <li className="production__h4">
                    <FormattedMessage id='production_h4_1' />
                    <span className="text">
                      <FormattedMessage id='production_span_1' />
                    </span>
                  </li>
                  <li className="production__h4">
                    <FormattedMessage id='production_h4_2' />
                    <span className="text">
                      <FormattedMessage id='production_span_2' />
                    </span>
                  </li>
                  <li className="production__h4">
                    <FormattedMessage id='production_h4_3' />
                    <span className="text">
                      <FormattedMessage id='production_span_3' />
                    </span>
                  </li>
                </ol>
              </div>
              <div>
                <p className="production__span production__h3">
                  <FormattedMessage id='production_h3_2' />
                </p>
                <ul className="production__h3">
                  <li className="production__h5">
                    <span className="text">
                      <FormattedMessage id='production_span_4' />
                    </span>
                  </li>
                  <li className="production__h5">
                    <span className="text">
                      <FormattedMessage id='production_span_5' />
                    </span>
                  </li>
                  <li className="production__h5">
                    <span className="text">
                      <FormattedMessage id='production_span_6' />
                    </span>
                  </li>
                  <li className="production__h5">
                    <span className="text">
                      <FormattedMessage id='production_span_7' />
                    </span>
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </div>
        <div className="intro__slings"></div>
      </div>
      <img className="intro__img" src={imgPath + "/crane5.png"} alt="crane" />
    </div>
    <GalleryContainer page={'production'} currentLocale={props.currentLocale} />
  </div>
)