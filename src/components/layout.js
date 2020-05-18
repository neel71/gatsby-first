import React from 'react'
import {useStaticQuery} from "gatsby"
import Header from './header'
import Footer from './footer' 
import layoutStyle from './layout.module.scss'
import {Container} from 'react-bootstrap'

const Layout = (props) =>{
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return(
        <div style={{overflowX:'hidden'}}>
            <Header siteTitle={data.site.siteMetadata.title}/>
                <div>
                    {props.children}
                    {props.preBodyComponents}
                </div>          
            <Footer/>
        </div>
    )
}
export default Layout