import React from 'react'

import Header from './header'
import Footer from './footer' 
import layoutStyle from './layout.module.scss'
import {Container} from 'react-bootstrap'

const Layout = (props) =>{
    return(
        <div>
            <Header/>

            
                <div>
                    {props.children}
                    {props.preBodyComponents}
                </div>
            
             
            <Footer/>
        </div>
    )
}
export default Layout