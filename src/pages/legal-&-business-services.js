import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,ProgressBar} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import lServicesStyle from './legal-&-business-services.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faplay, faplayCircle } from '@fortawesome/free-solid-svg-icons'

const DesignPage = () => (
  <Layout>
        {/* <section style={{
            marginTop:'10px',
            // backgroundImage:'url(../../static/design_ banner,jpg)'
        }}>
            <img 
            src={'../../CW.png'} height='550px'  style={{
                // backgroundColor: '#000320',
                // opacity: '0.7',
                width:'100%',
                backgroundSize:'cover'}}
            />
            
            
        </section> */}

        <section style={{marginTop:'25px',marginBottom:'80px'}}>

            <div className={lServicesStyle.pera__head}>
                legal & Business Services

            </div>

            <div style={{textAlign: 'center', }}>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <p className={lServicesStyle.pera__}>
                            A complete guideline on legal services related to individual organization is 
                            now at your doorstep. Focusing on the assistance, Blackboard has brought a comprehensive 
                            helpline for you to 
                            reduce your stress being less ambiguous.
                        </p>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </div>

            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../webT_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Trade License Support</p>

                    <p className={lServicesStyle.body}>
                        Get your Trade license support with proper guidelines 
                        & help in papers. We are here to help you, and Our skilled team members are waiting. 
                        So don't be late to contact us as soon as possible.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}
                    >Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../short_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Tin Suppory</p>

                    <p className={lServicesStyle.body}>
                        BIN support/guidelines in preparing papers are now at hand. 
                        BLACKBOARD is here to help you with this, and Our skilled team 
                        members are waiting for you. So don't be late to contact us as 
                        soon as possible.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../long_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>VAT Support</p>

                    <p className={lServicesStyle.body}>
                        Tax papers advice, consultation is available in Blackboard. 
                        BLACKBOARD is here to help you with this, and Our skilled 
                        team members are waiting. 
                        So don't be late to contact us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" className={lServicesStyle.interested_button}>
                    Interested!</Link></div>

                </Col>
            </Row>
           
            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
            <hr></hr>
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../mas.PNG'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Company Registration</p>

                    <p className={lServicesStyle.body}>
                        Agreement papers, Lawyer support, will be smoother than butter.
                        BLACKBOARD is here to help you with this, and Our skilled team 
                        members are waiting for you. 
                        So don't be late to contact us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" className={lServicesStyle.interested_button}>
                    Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../blog_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Copyright Support</p>

                    <p className={lServicesStyle.body}>
                        You will get copyright support to make your website more authentic. 
                        BLACKBOARD is here to help you with this, and Our skilled team 
                        members are waiting for you. 
                        So don't be late to contact us as soon as possible.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>
                
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../guides_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>MoU Arrangement Support</p>

                    <p className={lServicesStyle.body}>
                        Agreement papers will be less risked when Blackboard is 
                        handling. BLACKBOARD is here to help you with this, and Our
                        skilled team members are waiting for you. 
                        So don't be late to contact us as soon as possible.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>
            </Row>

            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
            <hr></hr>
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../q_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Trademark Support</p>

                    <p className={lServicesStyle.body}>
                        Repress your stress to get a Trademark; meanwhile, 
                        Blackboard will be helping in the approval. BLACKBOARD
                        is here to help you, and Our skilled team
                        members are waiting. 
                        So don't be late to contact us as soon as possible.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../feature_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Partnership Deed Support</p>

                    <p className={lServicesStyle.body}>
                        Preparing dealing papers with lawyer guidelines will be mentored 
                        in maintaining law. BLACKBOARD is here to help you, and 
                        Our skilled team members are waiting for you. 
                        So don't be late to contact us as soon as possible.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>              
                
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../recipes_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Name patent Support</p>

                    <p className={lServicesStyle.body}>
                        Design patent support will be apprised through Blackboard too. 
                        BLACKBOARD is here to help you with this, and Our skilled team
                        members are waiting for you. 
                        So don't be late to contact us as soon as possible.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>
            </Row>

            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
            <hr></hr>
                <Col md="4" >

                    {/* <img src={'../../copy_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Legal Advisor</p>

                    <p className={lServicesStyle.body}>
                        From our experience, Blackboard provides any kind of business 
                        legal advisory. We concern with our legal team before giving advice.
                        BLACKBOARD is here to help you with this, and Our skilled team 
                        members are waiting for you. 
                        So don't be late to contact us as soon as possible.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div> */}

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../copy_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Legal Advisor</p>

                    <p className={lServicesStyle.body}>
                        From our experience, Blackboard provides any business 
                        legal advisory. We concern with our legal team before giving advice.
                        We are here to help you with this, and Our skilled team 
                        members are waiting. 
                        So don't be late to contact us as soon as possible.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" >

                    {/* <img src={'../../copy_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Translation & Book Binding</p>

                    <p className={lServicesStyle.body}>
                        Quizzes are amusing when Blackboard is digging.
                        A fun place to add endless questionnaires & puzzles 
                        to stop the hustle. BLACKBOARD is here to help you 
                        with this, and Our skilled team members are waiting 
                        for you. So don't be late to contact us as soon as
                        possible.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/content-writing" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div> */}

                </Col>
                
                
            </Row>

            

        </section>
  </Layout>
)

export default DesignPage


