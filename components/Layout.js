import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// Explicar lo de los props porque no entendi 

export default function Layout({children, title, description}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Head>
      <Navbar/>
      {children} 
      <Footer />
    </>
  )
} 