import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Form,Button} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import contactStyle from './contact.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import footerStyle from '../components/footer.module.scss'

const ContactPage = () => (

    <div style={{backgroundColor:'#eff4f8'}}>
      <Header/>
      <section>
        <div>
            {/* <img src={'../../contact-bg-pattern.png'} style={{
              width:'100%',zIndex: '-1',
              left:'0',right:'0',position:'absolute'}}/> */}
            <div className={contactStyle.text}>HAVE SOME QUESTIONS?</div>
            <div className={contactStyle.text__}>Feel free to contact us if you have any queries.</div>
            <div>
              <Row>
                <Col md="2"></Col>
                <Col md="8" style={{borderBottom:'1px solid black'}}></Col>
                <Col md="2"></Col>
              </Row>
            </div>
            
            <div style={{width:"100%",display:'flex',padding:'50px 150px 100px 150px'}}>

                <div style={{width:"50%"}}>
                    <img src={'../../have-some-qusetion.png'} 
                        style={{
                          height: '300px',
                          width: 'auto',
                          paddingLeft:'100px'
                        }}

                    />
                </div>

                <div style={{width:"40%"}}>
                    <Form method="post" name="contact_contact_form" data-netlify="true">
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
      <Footer/>
    </div>
)

export default ContactPage

