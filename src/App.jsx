import React from 'react'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import SubstanceActions from './components/substanceActions/SubstanceActions'
import Video from './components/video/Video'
import Products from './components/products/Products'
import Instagram from './components/instagram/Instagram'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <nav aria-label="navigation"><Nav/></nav>
      <main>
        <section aria-labelledby="heroTitle"><Hero/></section>
        <section aria-labelledby="substanceActionsTitle"><SubstanceActions/></section>
        <section aria-label="video"><Video/></section>
        <section aria-labelledby="productTitle1 productTitle2 productTitle3"><Products/></section>
        <section aria-labelledby="instagramTitle"><Instagram/></section>
      </main>
      <footer aria-label="footer"><Footer/></footer>
    </>
  )
}

export default App
