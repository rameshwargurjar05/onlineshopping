import React, { createContext, useEffect, useState } from 'react'
import About from './About'
import Gallery from './Gallery'
import Home from './Home'
import Services from './Services'
const myData={
    "appname":"Shopping App",
    "version":"2.3.4"
  }
const Users=['Admin','Manager','Client','Super Admin']
export const AppInfo=createContext()
export const AppUsers=createContext()
function Index() {
    const [appname,setAppname]=useState({
        appname:'Shopping',
        version:'2.3.4'
    })
    const changeName=(name)=>{
        setAppname(name)
    }
    useEffect(()=>{
    console.log('App Name Change ',appname)
    },[appname])
    console.log(myData.appname)
    return (
        <AppInfo.Provider value={appname}>
            <AppUsers.Provider value={Users}>
                
        <Home></Home>
        <About></About>
        <Gallery></Gallery>
        <Services changeName={changeName}></Services>
        </AppUsers.Provider>
        </AppInfo.Provider>
    )
}

export default Index
