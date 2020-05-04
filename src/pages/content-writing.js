import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,ProgressBar} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import lServicesStyle from './content-writing.module.scss'

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
               Content Writing
            </div>

            <div style={{textAlign: 'center', }}>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <p className={lServicesStyle.pera__}>
                            Stop crawling to get perfect writing. Features article, Short form article, Listicles, 
                            Blog & many more are attainable in just one tap.
                            Grab your desired articles from this website whenever you need it.
                        </p>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </div>
            
            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../webT_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Website Text Writing</p>

                    <p className={lServicesStyle.body}>
                        Blackboard is a place where website text writing is 
                        trouble-free at the same time manageable. BLACKBOARD 
                        is here to help you with this, and Our skilled team 
                        members are waiting for you. So don't be late to contact 
                        us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}
                    >Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../short_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Short-form Articles</p>

                    <p className={lServicesStyle.body}>
                        Quick forms have to make sure real quick. Now you can collect your 
                        short-form articles from Blackboard. BLACKBOARD is here to help you 
                        with this, and Our skilled team members are waiting for you. So don't 
                        be late to contact us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../blog_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Blogs</p>

                    <p className={lServicesStyle.body}>
                        Are you struggling with blogs? Have endless blogging &
                        your suitable category on Blackboard! BLACKBOARD is 
                        here to help you with this, and Our skilled team 
                        members are waiting for you. So don't be late to 
                        contact us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>
                
            </Row>
           
            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
            <hr></hr>
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../copy_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Copywriting</p>

                    <p className={lServicesStyle.body}>
                        Copywriting makes your activity easier & 
                        Blackboard brings out the jest with the platform for it. 
                        BLACKBOARD is here to help you with this, and Our skilled 
                        team members are waiting for you. So don't be late to contact
                        us as soon as possible.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../feature_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Feature Articles</p>

                    <p className={lServicesStyle.body}>
                        Featured articles are available on Blackboard.
                        Describe your features & get articles whenever 
                        you want! BLACKBOARD is here to help you with this,
                        and Our skilled team members are waiting for you. 
                        So don't be late to contact us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>
                
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../recipes_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Recipes</p>

                    <p className={lServicesStyle.body}>
                        Get adventurous with food & stay healthy while 
                        trying out new recipes at home. BLACKBOARD is
                        here to help you with this, and Our skilled 
                        team members are waiting for you. So don't be
                        late to contact us as soon as possible.
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

                    <p className={lServicesStyle.heading}>Q & As</p>

                    <p className={lServicesStyle.body}>
                        Any systematic, knowledgeable, informative Q & As will 
                        appear on with the answering session to make your day 
                        more productive. BLACKBOARD is here to help you with 
                        this, and Our skilled team members are waiting for you. 
                        So don't be late to contact us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../copy_.png'} style={{height: '80px',width: '85px'}}/>

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
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>
                
                
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../guides_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Listicles / Guides</p>

                    <p className={lServicesStyle.body}>
                        Listicles are magnetic & Guides are constructive. Blackboard is 
                        linking both in one place & presenting you to cooperate. BLACKBOARD 
                        is here to help you with this, and Our skilled team members are
                        waiting for you. So don't be late to contact us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>

                
            </Row>

            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
            <hr></hr>
              
                <Col md="2" ></Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../how_.PNG'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>GhostWritten Articles</p>

                    <p className={lServicesStyle.body}>
                        Ghostwritten articles are purchasable to twist up the taste. 
                        BLACKBOARD is here to help you with this, and Our skilled team 
                        members are waiting for you. So don't be late to contact us as
                        soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" className={lServicesStyle.interested_button}>
                    Interested!</Link></div>

                    

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../long_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Long-form Articles</p>

                    <p className={lServicesStyle.body}>
                        Blackboard has a place for long-form articles for you to fetch 
                        yours one too.
                        BLACKBOARD is here to help you with this, and Our skilled 
                        team members are waiting for you. So don't be late to 
                        contact us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" className={lServicesStyle.interested_button}>
                    Interested!</Link></div>

                </Col>
                
                <Col md="2" ></Col>
            </Row>

            

        </section>
  </Layout>
)

export default DesignPage


