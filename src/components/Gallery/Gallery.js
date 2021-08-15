import { Order } from './Order/Order'
import { useEffect, useState } from 'react'
import { galleryApi } from '../../api/api.js'
import { FormattedMessage } from 'react-intl'

//оборачивам компонент Gallery в контейнер, который будет запускать функции-колбеки для запросов на сервер
export const GalleryContainer = (props) => {

  //инициализируем состояние production: header, characteristics, date, photos
  const [production, setProduction] = useState([])

  //получаем данные от сервера по production
  //async function setProductionData() {
  function setProductionData() {

    //let response = await galleryApi.getProductionData()
    let response = galleryApi.getProductionData()
    setProduction(response.items)
  }
  //сразу делаем запрос по production на сервер после монтирования компонента

  useEffect(() => {
    setProductionData()
    console.log('production')
  }, []
  )

  //инициализируем состояние engeneering: header, characteristics, date, photos
  const [engineering, setEngineering] = useState([])

  //получаем данные от сервера по engeneering
  //async function setEngeneeringData() {
  function setEngeneeringData() {
    //let response = await galleryApi.getEngeneeringImg()
    let response = galleryApi.getIngeneeringData()
    setEngineering(response.items)

  }
  //сразу делаем запрос по engeneering на сервер после монтирования компонента
  useEffect(() => {
    setEngeneeringData()
  }, [])

  //Отрисовываем компонент Gallery и передаем ему данные с сервера в props
  //в зависимости от переданного типа page
  if (props.page === 'production') {
    return <>
      <Gallery
        page={'production'}
        currentLocale={props.currentLocale}
        production={production}
      />
    </>
  }

  if (props.page === 'engineering') {
    return <>
      <Gallery
        page={'engineering'}
        currentLocale={props.currentLocale}
        engineering={engineering}
      />
    </>
  }

}

export const Gallery = (props) => {

  let state = {
    production: props.production,
    engineering: props.engineering
  }

  return (
    <div className="gallery">
      <h2 className="gallery__h2">
        <FormattedMessage id='gallery_header' />
      </h2>
      <Orders page={props.page} state={state} currentLocale={props.currentLocale} />
    </div>
  )
}

const Orders = (props) => {

  return (
    <div>
      {
        props.page === 'engineering' && props.state.engineering.map(el => {
          return <Order headerEn={el.headerEn} header={el.header} characteristicsEn={el.characteristicsEn} characteristics={el.characteristics} date={el.date} photos={el.photos} page={'engineering'} currentLocale={props.currentLocale} key={el.id} />
        })
      }
      {
        props.page === 'production' && props.state.production.map(el => {
          return <Order headerEn={el.headerEn} header={el.header} characteristicsEn={el.characteristicsEn} characteristics={el.characteristics} date={el.date} photos={el.photos} page={'production'} currentLocale={props.currentLocale} key={el.id} />
        })
      }

    </div>
  )
}