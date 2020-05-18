import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,ProgressBar} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import contentStyle from './content-writing.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faplay, faplayCircle } from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/seo'
const DesignPage = () => (
  <Layout>
        
<SEO title="Content Writing"/>
        <section style={{marginTop:'25px',marginBottom:'30px'}}>

            <div className={contentStyle.pera__head}>
               Content Writing
            </div>

            <div style={{textAlign: 'center', }}>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <p className={contentStyle.pera__}>
                            Stop crawling to get perfect writing. Features article, Short form article, Listicles, 
                            Blog & many more are attainable in just one tap.
                            Grab your desired articles from this website whenever you need it.
                        </p>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </div>
            
            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'30px'}}>
                <Col md="4" className={contentStyle.common}>

                    <img src={'../../webT_.png'} className={contentStyle.image_item}/>

                    <p className={contentStyle.heading}>Website Text Writing</p>

                    <p className={contentStyle.body}>
                        Blackboard is a place where website text writing is 
                        trouble-free at the same time manageable. BLACKBOARD 
                        is here to help you with this, and Our skilled team 
                        members are waiting for you. So don't be late to contact 
                        us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={contentStyle.interested_button}
                    >Interested!</Link></div>

                </Col>

                <Col md="4" className={contentStyle.common}>

                    <img src={'../../short_.png'} className={contentStyle.image_item}/>

                    <p className={contentStyle.heading}>Short-form Articles</p>

                    <p className={contentStyle.body}>
                        Quick forms have to make sure real quick. Now you can collect your 
                        short-form articles from Blackboard. BLACKBOARD is here to help you 
                        with this, and Our skilled team members are waiting for you. So don't 
                        be late to contact us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={contentStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={contentStyle.common}>

                    <img src={'../../blog_.png'} className={contentStyle.image_item}/>

                    <p className={contentStyle.heading}>Blogs</p>

                    <p className={contentStyle.body}>
                        Are you struggling with blogs? Have endless blogging &
                        your suitable category on Blackboard! BLACKBOARD is 
                        here to help you with this, and Our skilled team 
                        members are waiting for you. So don't be late to 
                        contact us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={contentStyle.interested_button}>Interested!</Link></div>

                </Col>
                
            </Row>
           
            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'30px'}}>
            <hr></hr>
                <Col md="4" className={contentStyle.common}>

                    <img src={'../../copy_.png'} className={contentStyle.image_item}/>

                    <p className={contentStyle.heading}>Copywriting</p>

                    <p className={contentStyle.body}>
                        Copywriting makes your activity easier & 
                        Blackboard brings out the jest with the platform for it. 
                        BLACKBOARD is here to help you with this, and Our skilled 
                        team members are waiting for you. So don't be late to contact
                        us as soon as possible.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={contentStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={contentStyle.common}>

                    <img src={'../../feature_.png'} className={contentStyle.image_item}/>

                    <p className={contentStyle.heading}>Feature Articles</p>

                    <p className={contentStyle.body}>
                        Featured articles are available on Blackboard.
                        Describe your features & get articles whenever 
                        you want! BLACKBOARD is here to help you with this,
                        and Our skilled team members are waiting for you. 
                        So don't be late to contact us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={contentStyle.interested_button}>Interested!</Link></div>

                </Col>
                
                <Col md="4" className={contentStyle.common}>

                    <img src={'../../recipes_.png'} className={contentStyle.image_item}/>

                    <p className={contentStyle.heading}>Recipes</p>

                    <p className={contentStyle.body}>
                        Get adventurous with food & stay healthy while 
                        trying out new recipes at home. BLACKBOARD is
                        here to help you with this, and Our skilled 
                        team members are waiting for you. So don't be
                        late to contact us as soon as possible.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={contentStyle.interested_button}>Interested!</Link></div>

                </Col>

            </Row>

            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'30px'}}>
            <hr></hr>
                <Col md="4" className={contentStyle.common}>

                    <img src={'../../q_.png'} className={contentStyle.image_item}/>

                    <p className={contentStyle.heading}>Q & As</p>

                    <p className={contentStyle.body}>
                        Any systematic, knowledgeable, informative Q & As will 
                        appear on with the answering session to make your day 
                        more productive. BLACKBOARD is here to help you with 
                        this, and Our skilled team members are waiting for you. 
                        So don't be late to contact us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={contentStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={contentStyle.common}>

                    <img src={'../../copy_.png'} className={contentStyle.image_item}/>

                    <p className={contentStyle.heading}>Translation & Book Binding</p>

                    <p className={contentStyle.body}>
                        Quizzes are amusing when Blackboard is digging.
                        A fun place to add endless questionnaires & puzzles 
                        to stop the hustle. BLACKBOARD is here to help you 
                        with this, and Our skilled team members are waiting 
                        for you. So don't be late to contact us as soon as
                        possible.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={contentStyle.interested_button}>Interested!</Link></div>

                </Col>
                         
                <Col md="4" className={contentStyle.common}>

                    <img src={'../../guides_.png'} className={contentStyle.image_item}/>

                    <p className={contentStyle.heading}>Listicles / Guides</p>

                    <p className={contentStyle.body}>
                        Listicles are magnetic & Guides are constructive. Blackboard is 
                        linking both in one place & presenting you to cooperate. BLACKBOARD 
                        is here to help you with this, and Our skilled team members are
                        waiting for you. So don't be late to contact us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={contentStyle.interested_button}>Interested!</Link></div>

                </Col>

                
            </Row>

            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'30px'}}>
            <hr></hr>
              
                <Col md="2" ></Col>

                <Col md="4" className={contentStyle.common}>

                    <img src={'../../how_.PNG'} className={contentStyle.image_item}/>

                    <p className={contentStyle.heading}>GhostWritten Articles</p>

                    <p className={contentStyle.body}>
                        Ghostwritten articles are purchasable to twist up the taste. 
                        BLACKBOARD is here to help you with this, and Our skilled team 
                        members are waiting for you. So don't be late to contact us as
                        soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" className={contentStyle.interested_button}>
                    Interested!</Link></div>

                    

                </Col>

                <Col md="4" className={contentStyle.common}>

                    <img src={'../../long_.png'} className={contentStyle.image_item}/>

                    <p className={contentStyle.heading}>Long-form Articles</p>

                    <p className={contentStyle.body}>
                        Blackboard has a place for long-form articles for you to fetch 
                        yours one too.
                        BLACKBOARD is here to help you with this, and Our skilled 
                        team members are waiting for you. So don't be late to 
                        contact us as soon as possible. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" className={contentStyle.interested_button}>
                    Interested!</Link></div>

                </Col>
                
                <Col md="2" ></Col>
            </Row>

            

        </section>
  </Layout>
)

export default DesignPage


