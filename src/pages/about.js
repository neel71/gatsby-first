import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,ProgressBar} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import aboutStyle from './about.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faplay, faplayCircle } from '@fortawesome/free-solid-svg-icons'

const AboutPage = () => (

  <Layout>
      <section style={{padding: '10px 0px 100px 0px',}}>
          <div className={aboutStyle.fst_div}>
              <h3 className={aboutStyle.h3}>Elements Kit</h3>
              <h2 className={aboutStyle.h2}>Take your website to next level</h2>
              <p className={aboutStyle.p}>It is beautifully designed in a very smart way to bring the
                        best user experience that you will love.</p>
          </div>

          <div className={aboutStyle.f2st_div}>
            <div style={{display: 'inline-block'}}>
              <Link to="/about" className={aboutStyle.Rbutton}> Read more </Link>
            </div>
                
          </div>
        </section>
     
      <section>
        <div>
            <p className={aboutStyle.w_p}>WHAT WE DO</p>
        </div>
          <div>
            <p className={aboutStyle.w1_p}>Don't be afraid to give up the good<br></br>to go for the great</p>
          </div>
      </section>

      <section style={{paddingLeft:'160px',paddingTop:'65px',paddingBottom:'105px',paddingRight:'160px'}}>


          <Row >

            <Col md="4">
              <div className={aboutStyle.div1}>
                <div style={{marginBottom: '16px'}} >
                  <img src={'../../web-development.png'} style={{display:'inline-block',height:"100px"}}/>

                  <p style={{display:'inline-block',paddingLeft:'15px'}} 
                  className={aboutStyle.F_head}>Web Development</p>
                </div>
                <p className={aboutStyle.Far_m}>
                  The website is the face of an organization nowadays. We always are there
                  for you every step of the way, 
                  from design & develop your website and taking your website to market.
                </p>
                <p ><Link to="/web-development" className={aboutStyle.read_m}>READ MORE...</Link></p>
              </div>
            </Col>

            <Col md="4">
              <div className={aboutStyle.div1}>
                <div style={{marginBottom: '16px'}}>
                  <img src={'../../graphics-design.png'} style={{display:'inline-block',height:"100px",width:'99px'}}/>

                  <p style={{display:'inline-block',paddingLeft:'15px'}}
                  className={aboutStyle.F_head}>Graphics Design</p>
                </div>
                <p className={aboutStyle.Far_m}>
                Design the future of organization with Blackboard. The in-house professionals 
                are waiting for you to respond for you. Illustrations, 
                Logo Design, Micrographics & so on are now handy on this.
                </p>
                <p ><Link to="/graphics-design" className={aboutStyle.read_m}>READ MORE...</Link></p>
              </div>
            </Col>

            <Col md="4">
              <div className={aboutStyle.div1}>
                <div style={{marginBottom: '16px'}}>
                  <img src={'../../event-management.png'} style={{display:'inline-block',height:"100px"}}/>

                  <p style={{display:'inline-block',paddingLeft:'15px'}}
                  className={aboutStyle.F_head}>Event Management</p>
                </div>
                <p className={aboutStyle.Far_m}>
                  Organize your events at any time you want! Get in here, Dig deep to assemble
                  your events as you imagine.
                  Now you can even customize your events with Blackboard.
                </p>
                <p >
                  <Link to="/event-management" className={aboutStyle.read_m}>READ MORE...</Link></p>
              </div>
            </Col>

            

          </Row>

          <Row style={{marginTop:'40px'}}>

            <Col md="4">
              <div className={aboutStyle.div1}>
                <div style={{marginBottom: '16px'}} >
                  <img src={'../../legal-and-business.png'} style={{display:'inline-block',height:"100px"}}/>

                  <p style={{display:'inline-block',paddingLeft:'15px'}} 
                  className={aboutStyle.F_head}>Legal & Business</p>
                </div>
                <p className={aboutStyle.Far_m}>
                  A complete guideline on legal services related to individual organization 
                  now at your doorstep. We have brought a complete helpline
                  for you to reduce your stress being less ambiguous.
                </p>
                <p ><Link to="/legal-&-business-services" className={aboutStyle.read_m}>READ MORE...</Link></p>
              </div>
            </Col>

            <Col md="4">
              <div className={aboutStyle.div1}>
                <div style={{marginBottom: '16px'}}>
                  <img src={'../../digital-marketing.png'} style={{display:'inline-block',height:"100px",width:'99px'}}/>

                  <p style={{display:'inline-block',paddingLeft:'15px'}}
                  className={aboutStyle.F_head}>Digital Marketing</p>
                </div>
                <p className={aboutStyle.Far_m}>
                  Every impression counts When it comes to capture customer online. Your 
                  online image is essential to the success of your business. We are here 
                  to help you and our skilled professionals are waiting.
                </p>
                <p ><Link to="/digital-marketing" className={aboutStyle.read_m}>READ MORE...</Link></p>
              </div>
            </Col>

            <Col md="4">
              <div className={aboutStyle.div1}>
                <div style={{marginBottom: '16px'}}>
                  <img src={'../../content-writing.png'} style={{display:'inline-block',height:"100px"}}/>

                  <p style={{display:'inline-block',paddingLeft:'15px'}}
                  className={aboutStyle.F_head}>Content Writing</p>
                </div>
                <p className={aboutStyle.Far_m}>
                Stop crawling to get perfect writing. Features article, Short form article,
                 Listicles, Blog & many more are attainable in just one tap. Grab your 
                desired articles from this website whenever you need it.
                </p>
                <p >
                  <Link to="/content-writing" className={aboutStyle.read_m}>READ MORE...</Link></p>
              </div>
            </Col>

          </Row>

                      
        </section>
        
      <section style={{padding: '200px 0px 155px 0px'}}>

        <div style={{    marginLeft: '270px'}}>
            <div className={aboutStyle.last_sec}>

                <div style={{width:'58%'}}>
                    {/* +++++++++++++++++ */}
                      <div className={aboutStyle.div_left}>
                        <div style={{zIndex:'999999',padding:'90px 75px 90px 75px'}} >
                      
                          <div><p className={aboutStyle.about_us}>ABOUT US</p></div>
                          <div><p  className={aboutStyle.nd_2part}>World’s best solution</p></div>
                          <div><p className={aboutStyle.nd_3part}>At the coast of the Semantics, a large language ocean. 
                          A small river named Consonantia, there live the blind texts. 
                          Separated they live in BookmarFar far away, behind the word mountains far 
                          from the countries.</p>
                          </div>

                          <div style={{paddingTop:'15px'}}>
                            <Row>
                              <Col md="3"><p style={{
                                color: '#323850',
                                fontFamily: 'Lato',
                                fontSize: '20px',
                                fontWeight: '700',
                              }}>WordPress</p></Col>
                              <Col md="7"> </Col>
                              <Col md="2"><p style={{color: '#ff1d4d',fontWeight:'800'}}>90%</p>  </Col>
                            </Row>
                            <ProgressBar animated now={90}  style={{
                              
                              borderRadius: '10px 10px 10px 10px',
                            }}/>
                          </div>
                          
                          <br></br>
                          <div>
                            <Row>
                              <Col md="3"><p style={{
                                color: '#323850',
                                fontFamily: 'Lato',
                                fontSize: '20px',
                                fontWeight: '700',
                              }}>Web Design</p></Col>
                              <Col md="7"> </Col>
                              <Col md="2"> <p style={{
                                paddingLeft:'25px',color: '#ff1d4d',fontWeight:'800'}}>95%</p> </Col>
                            </Row>  
                            <ProgressBar animated striped variant="success" now={95} style={{
                              
                              borderRadius: '10px 10px 10px 10px',
                            }} />
                          </div>
                        
                          <br></br>
                          <div>
                            <Row>
                              <Col md="5"><p style={{
                                color: '#323850',
                                fontFamily: 'Lato',
                                fontSize: '20px',
                                fontWeight: '700',
                              }}>Digital Marketing</p></Col>
                              <Col md="6"> </Col>
                              <Col md="1"><p style={{color: '#ff1d4d',fontWeight:'800'}}>98%</p>  </Col>
                            </Row>
                            <ProgressBar animated striped variant="danger" now={98} style={{
                              
                              borderRadius: '10px 10px 10px 10px',
                            }}  />
                          </div>

                        </div>
                    </div>
                    {/* =========================================== */}
                  
                    {/* =========================================== */}
                    {/* ++++++++++++++ */}
                </div>

                <div style={{width:'42%',
                
                display: 'flex',
                justifyContent: 'center'}}>
                  <img src={'../../about_img-2.png'} style={{
                        height: '600px',
                        width: 'auto',textAlign:'centre',marginRight:'70px'}}
                  />
                </div>

            </div>
        </div>

        </section>
      
  </Layout>
)

export default AboutPage




