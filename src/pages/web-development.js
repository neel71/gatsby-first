import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,ProgressBar} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import lServicesStyle from './web-development.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faplay, faplayCircle } from '@fortawesome/free-solid-svg-icons'

const LegalServicesPage = () => (
  <Layout>
        {/* <section style={{marginTop:'10px'}}>
             
                <img src={'../../leagal.jpg'} height='550px'  style={{
                    backgroundColor: '#000320',
                    opacity: '0.7',width:'100%',
                }}/> 
            
        </section> */}

        <section style={{marginTop:'25px',marginBottom:'80px'}}>
            <div className={lServicesStyle.pera__head}>
                Website Development

            </div>

            <div style={{textAlign: 'center', }}>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <p className={lServicesStyle.pera__}>
                            The way of our building website is your customer will stay a little more with you. We build a flawless website
                            from scratch to a fully finished products.
                        </p>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </div>

            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../tls.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Dynamic Website</p>

                    <p className={lServicesStyle.body}>
                        We are proficient in designing a tremendous & flawless 
                        website from scratch to a fully furnished product. 
                        If you are thinking of world-class website design & 
                        functional website development, Blackboard is here for you.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../Ts.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Static Website</p>

                    <p className={lServicesStyle.body}>
                        The online image of yours is essential to the success 
                        of your business; that's why you need a fancy design. 
                        It doesn't matter what type of organization do you have, 
                        and any website can help you get and contain customers. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../logo_.PNG'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>UI & UX Design</p>

                    <p className={lServicesStyle.body}>
                        We have an experienced UI & UX designer team to help 
                        you to make a tremendous & flawless UI & UX design for
                        your business. BLACKBOARD is here to help you with 
                        this, and Our skilled designers are waiting for you. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>
                
            </Row>
    
            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
            <hr></hr>
                
                <Col md="4" className={lServicesStyle.common}>
                    <img src={'../../tls.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Chatbot Development</p>

                    <p className={lServicesStyle.body}>
                        Did feeling stress add another dimension to your 
                        business? Put your requirements in front to get 
                        what you are looking for. Develop your business 
                        service to grab your success & cease. Our experienced 
                        team will help you to grow your business. We also 
                        provide chatbot services.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>
                    
                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../cs.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Android Development</p>

                    <p className={lServicesStyle.body}>
                        We all know that the customers go to search for a 
                        product/service is online. When your business is 
                        accessible online, plus you have an app that users
                        can download to their devices, your business will
                        make an excellent impression. We have an experienced 
                        Android App developer team.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>
                
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../mas.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>IOS Development</p>

                    <p className={lServicesStyle.body}>
                        We all know that the customers go to search for 
                        a product/service is online. When your business 
                        is accessible online, plus you have an app that 
                        users can download to their devices, your business
                        will make an excellent impression. We have an 
                        experienced iOS App developer team.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>
            </Row>
           
            <Row style={{paddingLeft:'170px',paddingRight:'170px'}}>
            
                <Col md="4" >

                    {/* <img src={'../../tls.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Chatbot Development</p>

                    <p className={lServicesStyle.body}>
                        Did feeling stress add another dimension to your 
                        business? Put your requirements in front to get 
                        what you are looking for. Develop your business 
                        service to grab your success & cease. Our experienced 
                        team will help you to grow your business. We also 
                        provide chatbot services.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/legal-services" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div> */}

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../vs.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Template Purchase</p>

                    <p className={lServicesStyle.body}>
                        If you are thinking of purchasing a world-class website
                        design template, Blackboard is here for you; we provide
                        you all the support for buying the template. The online
                        image of yours is essential to the success of your 
                        business.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>
                
                
                <Col md="4">

                    {/* <img src={'../../nps.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Name Patent Support</p>

                    <p className={lServicesStyle.body}>Blackboard provides Name patent support at the same time to compose a convincing company.</p>

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
            <div className={lServicesStyle.pera__head}>
                Domain Support
                
            </div>
            <div style={{textAlign: 'center', }}>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <p className={lServicesStyle.pera__}>
                            Find your desire domain name at a nominal price. We provide any kind of domain name like .com, .org,
                            .net and so on with the best after-sales services.
                        </p>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </div>
            
            
            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'80px'}}>
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../tls.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Domain Purchase</p>

                    <p className={lServicesStyle.body}>
                        Over the years, we have provided specialist services 
                        to many clients in a variety of industries. Blackboard
                        offers various types of domain support. We offer any 
                        kind of domain & hosting support.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../tra_.PNG'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Amazon Web Services</p>

                    <p className={lServicesStyle.body}>
                        Design the future of your organization with Blackboard. 
                        The in-house professionals are waiting for you to respond 
                        to pick your plans. If you need any kind of on-demand work,
                        we are here.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={lServicesStyle.interested_button}
                    >Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../vs.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>On-Demand Server Purchase</p>

                    <p className={lServicesStyle.body}>
                        Design the future of your organization with Blackboard. 
                        The in-house professionals are waiting for you to 
                        respond to pick your plans. If you need any kind of 
                        on-demand work, we are here.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>
            </Row>
    
            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'120px'}}>
            <hr></hr>
                <Col md="4" >

                    {/* <img src={'../../T_s.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Amazon Web Services</p>

                    <p className={lServicesStyle.body}>
                        Design the future of your organization with Blackboard. 
                        The in-house professionals are waiting for you to respond 
                        to pick your plans. If you need any kind of on-demand work,
                        we are here.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/web-development" 
                    className={lServicesStyle.interested_button}
                    // style={{
                    //     fontWeight: '500',
                    //     backgroundColor: '#61ce70',
                    //     textDecoration:'none',
                    //     color:'white',
                    //     padding: '12px 24px',
                    //     borderRadius: '3px',
                    //     border:'1px solid #61ce70'
                    // }}
                    >Interested!</Link></div> */}

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../Ts.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Domain Hosting</p>

                    <p className={lServicesStyle.body}>
                        Having difficulties in data hosting & reaching clients faster? 
                        Get perfect hosting support with a superfast working team to 
                        chase your goal in no time. Blackboard is there for you.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>
                
                
                <Col md="4" >

                    {/* <img src={'../../mas.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>MoU Arrangement Support</p>

                    <p className={lServicesStyle.body}>Agreement papers will be less risked when Blackboard is handling.</p>

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

           
            {/* <Row style={{paddingLeft:'170px',paddingRight:'170px'}}>
            
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../tls.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Trademark Support</p>

                    <p className={lServicesStyle.body}>Repress your stress to get a Trademark.Blackboard will be helping in the approval.</p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/legal-services" style={{
                        fontWeight: '500',
                        backgroundColor: '#61ce70',
                        textDecoration:'none',
                        color:'white',
                        padding: '12px 24px',
                        borderRadius: '3px',
                        border:'1px solid #61ce70'
                    }}>Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../Ts.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Copyright Support</p>
                    
                    <p className={lServicesStyle.body}>You will get copyright support to make your website more authentic.</p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/legal-services" style={{
                        fontWeight: '500',
                        backgroundColor: '#61ce70',
                        textDecoration:'none',
                        color:'white',
                        padding: '12px 24px',
                        borderRadius: '3px',
                        border:'1px solid #61ce70'
                    }}>Interested!</Link></div>
                </Col>
                
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../nps.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Name Patent Support</p>

                    <p className={lServicesStyle.body}>Blackboard provides Name patent support at the same time to compose a convincing company.</p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/legal-services" style={{
                        fontWeight: '500',
                        backgroundColor: '#61ce70',
                        textDecoration:'none',
                        color:'white',
                        padding: '12px 24px',
                        borderRadius: '3px',
                        border:'1px solid #61ce70'
                    }}>Interested!</Link></div>
                </Col>
               
            </Row> */}

        </section>
  
  </Layout>
)

export default LegalServicesPage


