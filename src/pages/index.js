import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Promotion from "../components/Promotion"
import Article from "../components/Article"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Header></Header>
    <Work></Work>
    <About></About>
    <Promotion></Promotion>
    <Article></Article>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
