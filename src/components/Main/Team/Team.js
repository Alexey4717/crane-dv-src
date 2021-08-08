import { FormattedMessage } from 'react-intl'

export const Team = () => (
  <section className="team section container">
    <div className="line-wrapper">
      <hr className="line" />
      <hr className="line-left" />
    </div>
    <div className="team__container">
      <div className="team__header">
        <h2 className="header-white">
          <FormattedMessage id='team_header' />
        </h2>
      </div>
      <div className="team__wrapper">
        <span className="team__content">
          <FormattedMessage id='team__content_1' />
        </span>
        <span className="team__content">
          <FormattedMessage id='team__content_2' />
        </span>
      </div>
    </div>
    <div className="line-wrapper">
      <hr className="line" />
      <hr className="line-right" />
    </div>
  </section>
)