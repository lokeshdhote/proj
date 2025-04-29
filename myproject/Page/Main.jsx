import React from 'react'
import Page1 from '../components/Page1/Page1'
import Page2 from '../components/Page2/Page2'
import Nav from '../components/Nav/Nav'
import Others from '../components/Others/Others'
import Page4 from '../components/Page4/Page4'
import Page5 from '../components/Page5/Page5'
import Social from '../components/Social/Social'
import Footer from '../components/Footer/Footer'
import Platfrom from '../components/Platfrom/Platfrom'
import Resource from '../components/Resource/Resource'

const Main = () => {
  return (
    <>
     <Nav/>
    <Page1/>
    <Page2/>
    <Others/>
    {/* <Platfrom/>
    <Resource/>  */}
    <Page4/> 
     <Page5/> 
    <Social/>
    <Footer/>
    </>
  )
}

export default Main