import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,ProgressBar} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import wdevStyle from './web-development.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faplay, faplayCircle } from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/seo'

const WebDevelopmentPage = () => (
  <Layout>
        
        <SEO title="Web Development"/>
        <section style={{marginTop:'20px',marginBottom:'50px'}}>
            <div className={wdevStyle.pera__head}>
                Website Development

            </div>

            <div style={{textAlign: 'center', }}>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <p className={wdevStyle.pera__}>
                            The way of our building website is your customer will stay a little more with you. We build a flawless website
                            from scratch to a fully finished products.
                        </p>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </div>

            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'30px'}}>
                <Col md="4" className={wdevStyle.common}>

                    <img src={'../../tls.png'} className={wdevStyle.image_item}/>

                    <p className={wdevStyle.heading}>Dynamic Website</p>

                    <p className={wdevStyle.body}>
                        We are proficient in designing a tremendous & flawless 
                        website from scratch to a fully furnished product. 
                        If you are thinking of world-class website & 
                        functional web development, Blackboard is here for you.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={wdevStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={wdevStyle.common}>

                    <img src={'../../Ts.png'} className={wdevStyle.image_item}/>

                    <p className={wdevStyle.heading}>Static Website</p>

                    <p className={wdevStyle.body}>
                        The online image of yours is essential to the success 
                        of your business; that's why you need a fancy design. 
                        It doesn't matter what type of organization do you have, 
                        and any website can help you get customers. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={wdevStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={wdevStyle.common}>

                    <img src={'../../logo_.PNG'} className={wdevStyle.image_item}/>

                    <p className={wdevStyle.heading}>UI & UX Design</p>

                    <p className={wdevStyle.body}>
                        We have an experienced UI & UX designer team to help 
                        you to make a tremendous & flawless UI & UX design for
                        your business. BLACKBOARD is here to help you with 
                        this, and Our skilled designers are waiting for you. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={wdevStyle.interested_button}>Interested!</Link></div>

                </Col>
                
            </Row>
    
            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'30px'}}>
            <hr></hr>
                
                <Col md="4" className={wdevStyle.common}>
                    <img src={'../../tls.png'} className={wdevStyle.image_item}/>

                    <p className={wdevStyle.heading}>Chatbot Development</p>

                    <p className={wdevStyle.body}>
                        Did feeling stress add another dimension to your 
                        business? Put your requirements in front to get 
                        what you are looking for. Develop your business 
                        service to grab your success & cease. Our experienced 
                        team will help you to grow your business. We also 
                        provide chatbot services.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={wdevStyle.interested_button}>Interested!</Link></div>
                    
                </Col>

                <Col md="4" className={wdevStyle.common}>

                    <img src={'../../cs.png'} className={wdevStyle.image_item}/>

                    <p className={wdevStyle.heading}>Android Development</p>

                    <p className={wdevStyle.body}>
                        We all know that the customers go to search for a 
                        product/service is online. When your business is 
                        accessible online, plus you have an app that users
                        can download to their devices, your business will
                        make an excellent impression. We have an experienced 
                        Android App developer team.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={wdevStyle.interested_button}>Interested!</Link></div>

                </Col>
                
                <Col md="4" className={wdevStyle.common}>

                    <img src={'../../mas.png'} className={wdevStyle.image_item}/>

                    <p className={wdevStyle.heading}>IOS Development</p>

                    <p className={wdevStyle.body}>
                        We all know that the customers go to search for 
                        a product/service is online. When your business 
                        is accessible online, plus you have an app that 
                        users can download to their devices, your business
                        will make an excellent impression. We have an 
                        experienced iOS App developer team.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={wdevStyle.interested_button}>Interested!</Link></div>

                </Col>
            </Row>
           
            <Row style={{paddingLeft:'170px',paddingRight:'170px'}}>
            
                <Col md="4" >

                    {/* <img src={'../../tls.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={wdevStyle.heading}>Chatbot Development</p>

                    <p className={wdevStyle.body}>
                        Did feeling stress add another dimension to your 
                        business? Put your requirements in front to get 
                        what you are looking for. Develop your business 
                        service to grab your success & cease. Our experienced 
                        team will help you to grow your business. We also 
                        provide chatbot services.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/legal-services" 
                    className={wdevStyle.interested_button}>Interested!</Link></div> */}

                </Col>

                <Col md="4" className={wdevStyle.common}>

                    <img src={'../../vs.png'} className={wdevStyle.image_item}/>

                    <p className={wdevStyle.heading}>Template Purchase</p>

                    <p className={wdevStyle.body}>
                        If you are thinking of purchasing a world-class website
                        design template, Blackboard is here for you; we provide
                        you all the support for buying the template. The online
                        image of yours is essential to the success of your 
                        business.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={wdevStyle.interested_button}>Interested!</Link></div>

                </Col>            
                
                <Col md="4">

                    {/* <img src={'../../nps.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={wdevStyle.heading}>Name Patent Support</p>

                    <p className={wdevStyle.body}>Blackboard provides Name patent support at the same time to compose a convincing company.</p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/legal-services" style={{
                        fontWeight: '500',
                        backgroundColor: '#61ce70',
                        textDecoration:'none',
                        color:'white',
                        padding: '12px 24px',
                        borderRadius: '3px',
                        border:'1px solid #61ce70'
                    }}>Interested!</Link></div> */}
                </Col>
               
            </Row>
            
        </section>

        <section style={{marginTop:'50px',marginBottom:'0px'}}>
            <div className={wdevStyle.pera__head}>
                Domain Support
                
            </div>
            <div style={{textAlign: 'center', }}>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <p className={wdevStyle.pera__}>
                            Find your desire domain name at a nominal price. We provide any kind of domain name like .com, .org,
                            .net and so on with the best after-sales services.
                        </p>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </div>
            
            
            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'30px'}}>
                <Col md="4" className={wdevStyle.common}>

                    <img src={'../../tls.png'} className={wdevStyle.image_item}/>

                    <p className={wdevStyle.heading}>Domain Purchase</p>

                    <p className={wdevStyle.body}>
                        Over the years, we have provided specialist services 
                        to many clients in a variety of industries. Blackboard
                        offers various types of domain support. We offer any 
                        kind of domain & hosting support.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={wdevStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={wdevStyle.common}>

                    <img src={'../../tra_.PNG'} className={wdevStyle.image_item}/>

                    <p className={wdevStyle.heading}>Amazon Web Services</p>

                    <p className={wdevStyle.body}>
                        Design the future of your organization with Blackboard. 
                        The in-house professionals are waiting for you to respond 
                        to pick your plans. If you need any kind of on-demand work,
                        we are here.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={wdevStyle.interested_button}
                    >Interested!</Link></div>

                </Col>

                <Col md="4" className={wdevStyle.common}>

                    <img src={'../../vs.png'} className={wdevStyle.image_item}/>

                    <p className={wdevStyle.heading}>Server Purchase</p>

                    <p className={wdevStyle.body}>
                        Design the future of your organization with Blackboard. 
                        The in-house professionals are waiting for you to 
                        respond to pick your plans. If you need any kind of 
                        on-demand work, we are here.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={wdevStyle.interested_button}>Interested!</Link></div>

                </Col>
            </Row>
    
            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'30px'}}>
            <hr></hr>
                <Col md="4" >
                </Col>

                <Col md="4" className={wdevStyle.common}>

                    <img src={'../../Ts.png'} className={wdevStyle.image_item}/>

                    <p className={wdevStyle.heading}>Domain Hosting</p>

                    <p className={wdevStyle.body}>
                        Having difficulties in data hosting & reaching clients faster? 
                        Get perfect hosting support with a superfast working team to 
                        chase your goal in no time. Blackboard is there for you.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={wdevStyle.interested_button}>Interested!</Link></div>

                </Col>
                
                
                <Col md="4" >

                </Col>
            </Row>

           
            

        </section>
  
  </Layout>
)

export default WebDevelopmentPage


