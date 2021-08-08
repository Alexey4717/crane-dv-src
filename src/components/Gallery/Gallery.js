import { Order } from './Order/Order'
import { useEffect, useState } from 'react'
import { galleryApi } from '../../api/api.js'
import { FormattedMessage } from 'react-intl'

//оборачивам компонент Gallery в контейнер, который будет запускать функции-колбеки для запросов на сервер
export const GalleryContainer = (props) => {

  //инициализируем состояние production: header, characteristics, date, photos
  const [productionId, setProductionId] = useState(0)
  const [productionHeader, setProductionHeader] = useState('')
  const [productionHeaderEn, setProductionHeaderEn] = useState('')
  const [productionCharacteristics, setProductionCharacteristics] = useState('')
  const [productionCharacteristicsEn, setProductionCharacteristicsEn] = useState('')
  const [productionDate, setProductionDate] = useState('')
  const [productionPhotos, setProductionPhotos] = useState([])

  //получаем данные от сервера по production
  //async function setProductionData() {
  function getProductionData() {
    //let response = await galleryApi.getProductionData()
    let response = galleryApi.getProductionData()
    setProductionId(response.id)
    setProductionHeader(response.header)
    setProductionHeaderEn(response.headerEn)
    setProductionCharacteristics(response.characteristics)
    setProductionCharacteristicsEn(response.characteristicsEn)
    setProductionDate(response.date)
    setProductionPhotos(response.photos)
  }
  //сразу делаем запрос по production на сервер после монтирования компонента


  useEffect(() => {
    getProductionData()
  }, [productionHeader] // ПРОБЛЕМА с бесконечным рендерингом, если слежка идет за productionPhotos
  )

  //инициализируем состояние engeneering: header, characteristics, date, photos
  const [engeneeringId, setEngeneeringId] = useState(0)
  const [engeneeringHeader, setEngeneeringHeader] = useState('')
  const [engeneeringHeaderEn, setEngeneeringHeaderEn] = useState('')
  const [engeneeringCharacteristics, setEngeneeringCharacteristics] = useState('')
  const [engeneeringCharacteristicsEn, setEngeneeringCharacteristicsEn] = useState('')
  const [engeneeringDate, setEngeneeringDate] = useState('')
  const [engeneeringPhotos, setEngeneeringPhotos] = useState([])

  //получаем данные от сервера по engeneering
  //async function setEngeneeringData() {
  function getEngeneeringData() {
    //let response = await galleryApi.getEngeneeringImg()
    let response = galleryApi.getIngeneeringData()
    setEngeneeringId(response.id)
    setEngeneeringHeader(response.header)
    setEngeneeringHeaderEn(response.headerEn)
    setEngeneeringCharacteristics(response.characteristics)
    setEngeneeringCharacteristicsEn(response.characteristicsEn)
    setEngeneeringDate(response.date)
    setEngeneeringPhotos(response.photos)
  }
  //сразу делаем запрос по engeneering на сервер после монтирования компонента
  useEffect(() => {
    getEngeneeringData()
  }, [engeneeringHeader]) // ПРОБЛЕМА с бесконечным рендерингом, если слежка идет за engeneeringPhotos

  //Отрисовываем компонент Gallery и передаем ему данные с сервера в props
  //в зависимости от переданного типа page
  if (props.page === 'production') {
    return <>
      <Gallery
        page={'production'}
        currentLocale={props.currentLocale}
        productionId={productionId}
        productionHeader={productionHeader}
        productionHeaderEn={productionHeaderEn}
        productionCharacteristics={productionCharacteristics}
        productionCharacteristicsEn={productionCharacteristicsEn}
        productionDate={productionDate}
        productionPhotos={productionPhotos}
      />
    </>
  }

  if (props.page === 'ingeneering') {
    return <>
      <Gallery
        page={'ingeneering'}
        currentLocale={props.currentLocale}
        engeneeringId={engeneeringId}
        engeneeringHeader={engeneeringHeader}
        engeneeringHeaderEn={engeneeringHeaderEn}
        engeneeringCharacteristics={engeneeringCharacteristics}
        engeneeringCharacteristicsEn={engeneeringCharacteristicsEn}
        engeneeringDate={engeneeringDate}
        engeneeringPhotos={engeneeringPhotos}
      />
    </>
  }

}

export const Gallery = (props) => {

  let state = {
    production: [
      {
        id: props.productionId,
        headerEn: props.productionHeaderEn,
        header: props.productionHeader,
        characteristicsEn: props.productionCharacteristicsEn,
        characteristics: props.productionCharacteristics,
        date: props.productionDate,
        photos: props.productionPhotos
      },
      //Данные для рендера новых выполненных заказов заполняются здесь в виде нового объекта
    ],
    ingeneering: [
      {
        id: props.engeneeringId,
        headerEn: props.engeneeringHeaderEn,
        header: props.engeneeringHeader,
        characteristicsEn: props.engeneeringCharacteristicsEn,
        characteristics: props.engeneeringCharacteristics,
        date: props.engeneeringDate,
        photos: props.engeneeringPhotos
      },
      //Данные для рендера новых выполненных заказов заполняются здесь в виде нового объекта
    ],
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
        props.page === 'ingeneering' && props.state.ingeneering.map(el => {
          return <Order headerEn={el.headerEn} header={el.header} characteristicsEn={el.characteristicsEn} characteristics={el.characteristics} date={el.date} photos={el.photos} page={'ingeneering'} currentLocale={props.currentLocale} key={el.id} />
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