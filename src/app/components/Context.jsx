import React, { createContext } from 'react'


export const AppContext = createContext();
const Context = ({children}) => {


    const contextValue = {}
  return (
    <AppContext.Provider value= {contextValue}>
        {children}
    </AppContext.Provider>
  )
}

export default Context
