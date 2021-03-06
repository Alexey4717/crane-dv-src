import React from 'react'
import { withRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ScrollButton } from './utils/ScrollButton'
import { Route, Switch } from "react-router-dom"
import { Main } from './components/Main/Main'
import { Production } from './components/Production/Production'
import { Engineering } from './components/Engineering/Engineering'
import { NotFound } from './components/NotFound/NotFound'
import { AboutUs } from './components/AboutUs/AboutUs'
import { Contact } from './components/Contact/Contact'
import { ScrollToTop } from './utils/ScrollToTop'
import { ModalFon } from './utils/ModalFon'
import { useState } from 'react'
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'

function App() {

  const [currentLocale, setCurrentLocale] = useState(LOCALES.RUSSIAN)
  const [isAccordionActive, setIsAccordionActive] = useState(false);

  const locale = currentLocale

  const handleLang = (event) => {
    event.preventDefault()
    if (locale === LOCALES.RUSSIAN) {
      setCurrentLocale(LOCALES.ENGLISH)
    } else if (locale === LOCALES.ENGLISH) {
      setCurrentLocale(LOCALES.RUSSIAN)
    }
  }

  return (
    <IntlProvider messages={messages[locale]} locale={currentLocale} defaultLocale={LOCALES.RUSSIAN}>
      <div>
        <ScrollToTop />
        <Header currentLocale={currentLocale} handleLang={handleLang} setIsAccordionActive={setIsAccordionActive} />
        <Navbar isAccordionActive={isAccordionActive} setIsAccordionActive={setIsAccordionActive} />
        <main>
          <Switch>
            <Route exact path='/'
              render={() => <Main />} />
            <Route exact path='/aboutus'
              render={() => <AboutUs />} />
            <Route exact path='/production'
              render={() => <Production currentLocale={currentLocale} />} />
            <Route exact path='/ingeneering'
              render={() => <Engineering currentLocale={currentLocale} />} />
            <Route exact path='/contact'
              render={() => <Contact currentLocale={currentLocale} />} />
            <Route
              render={() => <NotFound />} />
          </Switch>
        </main>
        <Footer isAccordionActive={isAccordionActive} setIsAccordionActive={setIsAccordionActive} />
        <ScrollButton />
        {isAccordionActive && <ModalFon isAccordionActive={isAccordionActive} setIsAccordionActive={setIsAccordionActive} />}
      </div>
    </IntlProvider>
  );
}

export default withRouter(App);
