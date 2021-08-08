import { FormattedMessage } from 'react-intl'

export const Equipment = (props) => (
  <section className="equipment section container">
    <div className="line-wrapper">
      <hr className="line" />
      <hr className="line-left" />
    </div>
    <div className="equipment__container">
      <img className="equipment__img" src={props.equipments[0]} alt="BALKANSKOECHO" />
      <img className="equipment__img" src={props.equipments[1]} alt="SEWEURODRIVE" />
      <img className="equipment__img" src={props.equipments[2]} alt="SIEMENS" />
      <img className="equipment__img" src={props.equipments[3]} alt="Schneider Electric" />
      <span className="equipment__list-1">
        BALKANSKOECHO (<FormattedMessage id='equipment_li_1' />)
      </span>
      <span className="equipment__list-2">
        SEWEURODRIVE (<FormattedMessage id='equipment_li_2' />)
      </span>
      <span className="equipment__list-3">
        SIEMENS (<FormattedMessage id='equipment_li_3' />)
      </span>
      <span className="equipment__list-4">
        Schneider Electric (<FormattedMessage id='equipment_li_4' />)
      </span>
      <span className="equipment__list-5">
        <FormattedMessage id='equipment_li_5' />
      </span>
      <h2 className="equipment__header1 header-white">
        <FormattedMessage id='equipment_header' />
      </h2>
      <span className="equipment__header2 header-yellow">
        <FormattedMessage id='equipment_header_2' />
      </span>
    </div>
    <div className="line-wrapper">
      <hr className="line" />
      <hr className="line-right" />
    </div>
  </section>
)