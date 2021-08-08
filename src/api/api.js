//создадим пути к фотографиям для имитации путей, пришедших в ответе от сервера
const productionPath = process.env.PUBLIC_URL + '/img/production/';
const ingeneeringPath = process.env.PUBLIC_URL + '/img/ingeneering/';

//запросы на сервер для компонента Gallery
export const galleryApi = {
  //имитация запроса по production на сервер
  //async getProductionData() {
  getProductionData() {
    //const response = await fetch('https://kran-dv.dev/api/production/1')
    //const production = await response.json()
    //имитация ответа по production от сервера - код 200
    const production = {
      id: 1,
      header: 'Монтаж двухбалочного мостового крана',
      headerEn: 'Installation of a double girder overhead crane',
      characteristics: 'Грузоподъёмность 18 тонн',
      characteristicsEn: 'Carrying capacity 18 tons',
      date: '10.05.2021',
      photos: [productionPath + '01/1.jpg', productionPath + '01/2.jpg', productionPath + '01/3.jpg', productionPath + '01/4.jpg', productionPath + '01/5.jpg', productionPath + '01/6.jpg']
    }
    return production
  },

  //имитация запроса по ingeneering на сервер
  //async getIngeneeringData() {
  getIngeneeringData() {
    //const response = await fetch('https://kran-dv.dev/api/engeneering/1')
    //const engeneering = await response.json()
    //имитация ответа по ingeneering от сервера - код 200
    const engeneering = {
      id: 1,
      header: 'Приёмо-сдаточные испытания козлового крана',
      headerEn: 'Acceptance tests of the gantry crane',
      characteristics: '16+16 тонн, режим работы А5, система управления с пола по радиоканалу на базе частотного привода',
      characteristicsEn: '16+16 tons, operating mode A5, floor control system via radio channel based on frequency drive',
      date: '20.05.2021',
      photos: [ingeneeringPath + '01/1.jpg', ingeneeringPath + '01/2.jpg', ingeneeringPath + '01/3.jpg', ingeneeringPath + '01/4.jpg']
    }
    return engeneering

  }

}

//имитация post запроса, для отправки данных формы на сервер
export const sendForm = {
  /* 
  async sendContactForm(formData) {
    const response = await fetch('https://kran-dv.dev/api/form', {
      method: 'POST',
      body: JSON.stringify({name: formData.name, phone: formData.phone, email: formData.email, message: formData.message}),
      headers: {
        'content-type': 'application/json'
      }
    })
    if (response.status !== 200) {
      return response.statusText
    }
    return response.statusText
  } 
  */
}
