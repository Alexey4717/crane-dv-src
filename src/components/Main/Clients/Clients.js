import { FormattedMessage } from 'react-intl'

export const Clients = (props) => (
  <section className="clients section container">
    <div className="line-wrapper">
      <hr className="line" />
      <hr className="line-left" />
    </div>
    <h2 className="clients__header header-white">
      <FormattedMessage id='clients_header' />
    </h2>
    <div className="clients__container">
      <img className="clients__img1" src={props.clients[0]} alt="rzd" />
      <img className="clients__img2" src={props.clients[1]} alt="evraz" />
      <img className="clients__img3" src={props.clients[2]} alt="kkk" />
      <span className="clients__list1">
        <FormattedMessage id='clients__list_1' />
      </span>
      <span className="clients__list2">
        <FormattedMessage id='clients__list_2' />
      </span>
      <span className="clients__list3">
        <FormattedMessage id='clients__list_3' />
      </span>
    </div>
    <div className="line-wrapper">
      <hr className="line" />
      <hr className="line-right" />
    </div>
  </section>
)