import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,ProgressBar} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import lServicesStyle from './graphics-design.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faplay, faplayCircle } from '@fortawesome/free-solid-svg-icons'

const DesignPage = () => (
  <Layout>
        {/* <section style={{
            marginTop:'10px',
            // backgroundImage:'url(../../static/design_ banner,jpg)'
        }}>
            <img 
            src={'../../design_ banner.jpg'} height='550px'  style={{
                backgroundColor: '#000320',
                opacity: '0.7',width:'100%',
                backgroundSize:'cover'}}
            />
        </section> */}

        <section style={{marginTop:'25px',marginBottom:'80px'}}>

            <div className={lServicesStyle.pera__head}>
                Graphics Design
            </div>

            <div style={{textAlign: 'center', }}>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <p className={lServicesStyle.pera__}>
                            Design the future of your organization with Blackboard. The in-house professionals are waiting 
                            for you to respond to pick your plans. 
                            Illustrations, Logo Design, Micrographics & so on are now handy on this.
                        </p>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </div>

            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../logo_.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Logo Design</p>

                    <p className={lServicesStyle.body}>
                        A perfect logo for your company/organization is 
                        less stressful when Blackboard has a proper place
                        for it. Get limitless authentic designs according
                        to your taste & budget. Blackboard provides a
                        logo at a reasonable price.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../info_.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Infographics</p>

                    <p className={lServicesStyle.body}>
                        Choose, customize according to your choice & get the right taste 
                        for your website. Make your organization more lifelike & 
                        discernible using infographics data. Blackboard provides it at
                        a reasonable price.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact"className={lServicesStyle.interested_button}
                       >Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../data_.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Data Visualizations</p>

                    <p className={lServicesStyle.body}>
                        Get the perfect visualization from our website & 
                        ease your data processing. A complete guideline 
                        on data visualization services. Blackboard has 
                        brought a comprehensive helpline for your data 
                        visualization.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" className={lServicesStyle.interested_button}
                    >Interested!</Link></div>

                </Col>
            </Row>

            
            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
            <hr></hr>
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../micro_.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Micrographics</p>

                    <p className={lServicesStyle.body}>
                        Purchase Micrographics according to your needs & drop your requirement. 
                        A complete guideline on micrographics services. Blackboard has brought
                        a comprehensive helpline for your Micrographics.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" className={lServicesStyle.interested_button}
                    >Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../graphics_.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Social Graphics</p>

                    <p className={lServicesStyle.body}>
                        Social graphics are available on Blackboard & grab yours 
                        one too! A complete guideline on social graphics services. 
                        Blackboard has brought a comprehensive helpline for your 
                        social graphics.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>
                
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../ill_.png'} style={{height: '100px',width: '100px'}}/>

                    <p className={lServicesStyle.heading}>Illustrations</p>

                    <p className={lServicesStyle.body}>
                        Are you not getting the accurate illustration?
                        This website is providing a platform for illustrations
                        too. For more information, please contact us soon. 
                        Blackboard also provides Illustrations too.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" className={lServicesStyle.interested_button}
                    >Interested!</Link></div>

                </Col>
            </Row>


        </section>
  
  
  </Layout>
)

export default DesignPage


