import React from 'react'
import Header from './components/header'
import Balance from './components/balance'
import Income from './components/income'
import History from './components/history'
import Newtransaction from './components/newtransaction'
import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <Income />
          <History />
          <Newtransaction />
        </div>
      </GlobalProvider>
    </>
  )
}

export default App
