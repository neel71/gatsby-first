import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Form,Button} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import contactStyle from './contact.module.scss'
import Header from '../components/header'
import footerStyle from '../components/footer.module.scss'

const ContactPage = () => (

    <div style={{backgroundColor:'#eff4f8'}}>
          <Header/>
          {/* <section>
            <div> 
              <img src={'../../contact2.png'} style={{
                width: '100%',
                height: '668px',
                paddingTop:'15px'
              }}/>
            </div>
          </section> */}
          <section>
          <div style={{

          }}>
            {/* <img src={'../../contact-bg-pattern.png'} style={{
              width:'100%',zIndex: '-1',
              left:'0',right:'0',position:'absolute'}}/> */}
            <div className={contactStyle.text}>HAVE SOME QUESTIONS?</div>
            <div className={contactStyle.text__}>Feel free to contact us if you have any queries?</div>
            <div>
              <Row>
                <Col md="2"></Col>
                <Col md="8" style={{borderBottom:'1px solid black'}}></Col>
                <Col md="2"></Col>
              </Row>
            </div>
            
            <div style={{width:"100%",display:'flex',padding:'100px 150px 150px 150px'}}>

                <div style={{width:"50%"}}>
                    <img src={'../../have-some-qusetion.png'} 
                        style={{
                          height: '400px',
                          width: 'auto',
                          paddingLeft:'150px'
                        }}

                    />
                </div>

                <div style={{width:"40%"}}>
                    <Form>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>FirstName</Form.Label>
                          <Form.Control type="text" placeholder="Firstname" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>LastName</Form.Label>
                          <Form.Control type="text" placeholder="Lastname" />
                        </Form.Group>
                      </Form.Row>

                      <Form.Group controlId="formGridAddress1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>

                      <Form.Group controlId="formGridAddress2">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="phone" />
                      </Form.Group>

                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>Interested In!</Form.Label>
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} id="formGridCheckbox">
                          <Form.Check type="checkbox" label="Web Development" />
                        </Form.Group>

                        <Form.Group as={Col} id="formGridCheckbox">
                          <Form.Check type="checkbox" label="Graphics Design" />
                        </Form.Group>

                        <Form.Group as={Col} id="formGridCheckbox">
                          <Form.Check type="checkbox" label="Content Writing" />
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} id="formGridCheckbox">
                          <Form.Check type="checkbox" label="Lega & Business Services" />
                        </Form.Group>

                          <Form.Group as={Col} id="formGridCheckbox">
                          <Form.Check type="checkbox" label="Digital MArketing" />
                          </Form.Group>

                          <Form.Group as={Col} id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Event Management" />
                          </Form.Group>
                      </Form.Row>
                      
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                          
                          <Form.Control type="text" placeholder="Tell us more about your interest..." />
                        </Form.Group>

                      
                      </Form.Row>

                      <Button variant="primary" type="submit">
                        Connect with us!
                      </Button>
                    </Form>
                </div>
            </div>


          </div>
      </section>
      
      <section className={footerStyle.footer_height}>
                <Row style={{
                    paddingTop:'12px'
                }}>
                    <Col md="4"><span style={{
                        fontFamily: 'Marcellus',
                        fontSize: '23px',
                        fontWeight: '500',
                        fontStyle: 'italic',
                        lineHeight: '26px',
                        paddingLeft:'10px',
                        marginTop:'20px'
                    }}>©2019. <span style={{
                        color:'rgba(253, 5, 40, 0.95)'
                    }}>Nexkraft Limited</span>. All Rights Reserved.</span></Col>
                    <Col md="4" style={{
                        textAlign:'center',

                    }}>
                        <p
                        style={{
                            fontFamily:'montserrat',
                            margin: '0',
                            padding:'0',
                            fontSize:'22px',
                            fontWeight:'700',
                            color:'black'

                        }}
                        >For more information please contact :</p> 
                        <div>
                            <img src={'../../cell_phone.png'} width="auto" height="20px"/>
                            <span
                                className={footerStyle.num_style}
                            >096&nbsp;66&nbsp;77&nbsp;12&nbsp;12</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={'../../cell_phone.png'} width="auto" height="20px"/>
                            <span
                                 className={footerStyle.num_style}
                            >017&nbsp;59&nbsp;355&nbsp;355</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={'../../cell_phone.png'} width="auto" height="20px"/>
                            <span
                                 className={footerStyle.num_style}
                            >019&nbsp;79&nbsp;585&nbsp;905</span>
                        </div>
                        
                    </Col>
                    <Col md="4">
                        <div style={{paddingLeft: '200px'}}>
                            <a href='https://www.facebook.com/BlackboardDigital/?__tn__=%2Cd%2CP-R&eid=ARCTSug5VseA05_TefFvM-lnfskmdxNwlp5K1FVfL9zw1Wm0p64aZP9Fx8vvaC69eUMC3gaRcCwu-qsa' className={footerStyle.fb}>
                                <img src={'../../fb.png'} className={footerStyle.img_prop} height='25px' width='25px'/>
                            </a>
                        </div>
                        <ul className={footerStyle.ul_item}>
                            <li className={footerStyle.float_right}><Link to="/contact" className={footerStyle.link_item}>Contact</Link></li>
                            <li className={footerStyle.float_right}><Link to="" className={footerStyle.link_item}>Service</Link></li>
                            <li className={footerStyle.float_right}><Link to="/about" className={footerStyle.link_item}>About</Link></li>
                            <li className={footerStyle.float_right}><Link to="/" className={footerStyle.link_item}>Home</Link></li>
                        </ul>
                    </Col>
                </Row>
            </section>

    </div>
)

export default ContactPage





{/* <section style={{backgroundColor:'#eae5e5',marginBottom:'80px'}}>
        <div>
          <p className={contactStyle.p_tag}>Want to Have a Meeting With BlackBoard?</p>
          <div className={contactStyle.form_div}>
          
          </div>
          
        </div>
     </section> */}