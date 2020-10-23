import Head from "next/head"
import { Component } from 'react'
import about from '../content/about.md';
import Layout from '../components/Layout'


export default class Home extends Component {
  render() {
    let { 
      react,
      attributes: {
      title, 
      image 
    } } = about;
    return (
      <>
        <Layout>

          <Head>
            <title>{title} - The Blended Bakery</title>
          </Head>
          <div className="container">
            <h1>{ title }</h1>
            <div className="body">
              <img className="img-align-right" src={ image } />
              <p>{ react }</p>
            </div>
          </div>
        </Layout>

        <style type="text/css"> {
          ` 
          .img-align-right {
            max-width: 300px;
          }

          .container {
            max-width: 700px;
          }
          
          `
        }

        </style>
      </>
    )
  }
}