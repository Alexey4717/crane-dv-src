import React from 'react'
import { Certificate } from './Certificate/Certificate'
import { Equipment } from './Equipment/Equipment'
import { Team } from './Team/Team'
import { Clients } from './Clients/Clients'
import { ContactUs } from './ContactUs/ContactUs'
import { Layer } from './Layer/Layer'

const imgPath = process.env.PUBLIC_URL + '/img';

export const Main = () => {

  let state = {
    layers: [
      { layerNum: 'layer1', classImg: 'layer1__img', src: imgPath + "/crane.png" },
      { layerNum: 'layer2', classImg: 'layer2__img', src: imgPath + "/crane2.png" },
      { layerNum: 'layer3', classImg: 'layer3__img', src: imgPath + "/crane3.png" }
    ],
    equipments: [imgPath + "/balkansko.png", imgPath + "/SEW_LOGO.svg", imgPath + "/siemens.png", imgPath + "/Schneider-Electricl.png"],
    clients: [imgPath + "/client1.png", imgPath + "/client2.png", imgPath + "/client3.png"],
    contactUs: [imgPath + "/contact-us.png", imgPath + "/crane4.png"]
  }

  return (
    <div className="main content">
      <div className="certificate-background">
        <Certificate />
        <Layer layerNum={state.layers[0].layerNum} classImg={state.layers[0].classImg} src={state.layers[0].src} />
      </div>

      <div className="equipment-background">
        <Equipment equipments={state.equipments} />
        <Layer layerNum={state.layers[1].layerNum} classImg={state.layers[1].classImg} src={state.layers[1].src} />
      </div>

      <div className="team-background">
        <Team />
      </div>

      <div className="layer3-background">
        <Layer layerNum={state.layers[2].layerNum} classImg={state.layers[2].classImg} src={state.layers[2].src} />
      </div>

      <div className="clients-background">
        <Clients clients={state.clients} />
      </div>

      <div className="contactUs-background">
        <ContactUs contactUs={state.contactUs} />
      </div>

    </div>
  )
}