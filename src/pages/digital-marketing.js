import React,{Component,useState} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Modal from 'react-modal'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Form,Button} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import headerStyle from '../components/header.module.scss'
import bsStyle from './business-services.module.scss'
import msStyle from './digital-marketing.module.scss'
import { Nav, NavDropdown,Navbar,Card } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock,faRing,faMailBulk,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import footerStyle from '../components/footer.module.scss'

import lServicesStyle from './digital-marketing.module.scss'

function ContactPage () {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [SocialmodalIsOpen, setSocialModalIsOpen] = useState(false)
    const [FBmodalIsOpen, setFBModalIsOpen] = useState(false)
    const [ADVmodalIsOpen, setADVModalIsOpen] = useState(false)
    return(
        <div>
            <Layout>
                <section style={{marginTop:'25px',marginBottom:'80px'}}>


                    <div className={lServicesStyle.pera__head}>
                        Digital Marketing

                    </div>

                    <div style={{textAlign: 'center', }}>
                        <Row>
                            <Col md="3"></Col>
                            <Col md="6">
                                <p className={lServicesStyle.pera__}>
                                    Every impression counts When it comes to capture customer online.
                                    Your online image is essential to the success of your business.
                                    We are here to help you and our skilled professionals are waiting.
                                </p>
                            </Col>
                            <Col md="3"></Col>
                        </Row>
                    </div>
                    
                    
                    <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
                        <Col md="4" className={lServicesStyle.common}>
                            {/* <div style={{textAlign: 'center'}}>  */}
                                <img src={'../../webT_.png'} style={{height: '80px',width: '85px',}}/>

                                <p className={lServicesStyle.heading}>Social Media</p>

                                <p className={lServicesStyle.body}>
                                    We have been on the cutting edge of all social platforms, 
                                    helping brands to find and engage their potential customers. Let us take a look at your current 
                                    social media profiles, 
                                    and we'll offer you free 1-to-1 advice on how to improve.                                 
                                </p>
                            {/* </div> */}
                            
                            <div style={{width:'100%'}}>
                                <div style={{display:'inline-block',fontSize: '18px',fontFamily:'Lato',}}>
                                    <Link to="/contact" 
                                    className={lServicesStyle.interested_button}
                                    >Interested!</Link>
                                </div>
                                <div style={{display:'inline-block',paddingLeft:'80px'}}>
                                    <Button
                                    style={{fontSize: '18px',fontFamily:'Lato',}}
                                    className={lServicesStyle.read_button}
                                    onClick={()=> setSocialModalIsOpen(true)}>
                                    Read More&nbsp; <FontAwesomeIcon icon={faArrowRight} /></Button>
                                </div>

                            </div>
                            <div style={{marginTop:'50px',}}>
                                <Modal isOpen={SocialmodalIsOpen} style={{width:'500px',height:'450px'}}>
                                    <h2 className={lServicesStyle.modal_heading}
                                        style={{
                                            marginTop:'50px',
                                            textAlign:'center',
                                        }}
                                    >Social Media Services List</h2>
                                    <div style={{
                                            marginTop:'10px',
                                            textAlign:'center',
                                            fontFamily:'montserrat',
                                            fontSize:'20px'
                                        }}>
                                        <Row>
                                            <Col md="3"></Col>
                                            <Col md="6">
                                                <p>
                                                We have been on the cutting edge of all social platforms, 
                                                helping brands to find and engage their potential customers.
                                                 Let us take a look at your current social media profiles,
                                                 and we'll offer you free 1-to-1 advice on how to improve. 
                                                </p>
                                            </Col>
                                            <Col md="3"></Col>
                                        </Row>
                                    </div>
                                   
                                    <div>

                                        <Row style={{marginTop:'40px'}}>

                                        <Col md="4">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}} >
                                                    <img src={'../../legal-and-business.png'} 
                                                    style={{display:'inline-block',width:'50px',height:"50px"}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}} 
                                                    className={lServicesStyle.F_head}>Social Media marketing </p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    If you think about Social media marketing, we are here to help you. 
                                                    
                                                    Let’s have a cup of coffee together.
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                        <Col md="4">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}}>
                                                    <img src={'../../digital-marketing.png'} 
                                                    style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                    className={lServicesStyle.F_head}>Social Media Campaign</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    Blackboard also run various social media 
                                                    campaign on behalf of his clients. Need this service 
                                                    just contact with us.
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                        <Col md="4">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}}>
                                                    <img src={'../../content-writing.png'} 
                                                    style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                    className={lServicesStyle.F_head}>Social Brand Building</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    Do you want make your own brand. We will give you the proper guideline. 
                                                    So why be late? Make your own brand.
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                        </Row>

                                        <Row style={{marginTop:'40px'}}>
                                        
                                        <Col md="2"></Col>
                                        <Col md="4">
                                            <div className={lServicesStyle.div1}>
                                                <div style={{marginBottom: '16px'}} >
                                                <img src={'../../gif_.PNG'} 
                                                style={{display:'inline-block',width:'50px',height:"50px"}}/>

                                                <p style={{display:'inline-block',paddingLeft:'15px'}} 
                                                className={lServicesStyle.F_head}>Social Customer Service</p>
                                                </div>
                                                <p className={lServicesStyle.Far_m}>
                                                Blackboard also provide social customer service, if you need social customer service Blackboard can help you in that.
                                                 Let’s have a cup of coffee.
                                                </p>
                                                
                                            </div>
                                        </Col>

                                        <Col md="4">
                                            <div className={lServicesStyle.div1}>
                                                <div style={{marginBottom: '16px'}}>
                                                <img src={'../../fb_.PNG'} 
                                                style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                className={lServicesStyle.F_head}>Facebook ChatBot</p>
                                                </div>
                                                <p className={lServicesStyle.Far_m}>
                                                Blackboard offer facebook chatbot. Chatbot helps you to communicate with your customer effectively. 
                                                We are just a phone call ahead from you.
                                                </p>
                                                
                                            </div>
                                        </Col>
                                        <Col md="2"></Col>
                                        {/* <Col md="4">
                                            <div className={lServicesStyle.div1}>
                                                <div style={{marginBottom: '16px'}}>
                                                <img src={'../../content-writing.png'} 
                                                style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                className={lServicesStyle.F_head}>Social Brand Building</p>
                                                </div>
                                                <p className={lServicesStyle.Far_m}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's                                                    
                                                standard dummy text ever since the 1500s,
                                                </p>
                                                
                                            </div>
                                        </Col> */}

                                    </Row>
                                        
                                    </div>    
                                   
                                    <div style={{textAlign:'center',marginTop:'60px'}}>
                                        <Button variant="success" onClick={()=> setSocialModalIsOpen(false)}>Close</Button>
                                    </div>
                                </Modal>
                            </div>

                        </Col>

                        <Col md="4" className={lServicesStyle.common}>

                            <img src={'../../short_.png'} style={{height: '80px',width: '85px'}}/>

                            <p className={lServicesStyle.heading}>SEO</p>

                            <p className={lServicesStyle.body}>
                                We look more like a management consultancy figure out major SEO problems 
                                for businesses, from marketing strategy and SEO experience to 
                                lead generation-even culture transformation. 
                                We serve bellow services - 
                            </p>

                            <div style={{width:'100%'}}>
                                <div style={{display:'inline-block',fontSize: '18px',fontFamily:'Lato',}}>
                                    <Link to="/contact" 
                                    className={lServicesStyle.interested_button}
                                    >Interested!</Link>
                                </div>
                                <div style={{display:'inline-block',paddingLeft:'80px'}}>
                                    <Button
                                    style={{fontSize: '18px',fontFamily:'Lato',}}
                                    className={lServicesStyle.read_button}
                                    onClick={()=> setModalIsOpen(true)}>
                                    Read More&nbsp; <FontAwesomeIcon icon={faArrowRight} /></Button>
                                </div>

                            </div>

                            <div style={{marginTop:'50px',}}>
                                
                                <Modal isOpen={modalIsOpen} style={{width:'500px',height:'450px'}}>
                                    <h2 className={lServicesStyle.modal_heading}
                                        style={{
                                            marginTop:'50px',
                                            textAlign:'center',
                                        }}
                                    >SEO Services List</h2>
                                    <div style={{
                                            marginTop:'10px',
                                            textAlign:'center',
                                            fontFamily:'montserrat',
                                            fontSize:'20px'
                                        }}>
                                        <Row>
                                            <Col md="3"></Col>
                                            <Col md="6">
                                                <p>
                                                    We look more like a management consultancy figure out major SEO problems for businesses, 
                                                    from marketing strategy and SEO experience to
                                                    lead generation-even culture transformation. We serve bellow services - 
                                                </p>
                                            </Col>
                                            <Col md="3"></Col>
                                        </Row>
                                    </div>
                                   
                                    <div>

                                        <Row style={{marginTop:'40px'}}>

                                        <Col md="4">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}} >
                                                    <img src={'../../legal-and-business.png'} 
                                                    style={{display:'inline-block',width:'50px',height:"50px"}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}} 
                                                    className={lServicesStyle.F_head}>SEO strategy</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    Do you need a proper SEO strategy? Why roaming here and here when blackboard is here. Let’s have a cup of coffee.
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                        <Col md="4">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}}>
                                                    <img src={'../../digital-marketing.png'} 
                                                    style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                    className={lServicesStyle.F_head}>SEO Audit</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    Blackboard provide effective SEO audit. If you want a proper SEO audit for your business then don’t waste your time. Make a move now.
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                        <Col md="4">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}}>
                                                    <img src={'../../content-writing.png'} 
                                                    style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                    className={lServicesStyle.F_head}>On-site SEO</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    Do you want on-site SEO. We will give you the proper guideline. So why be late? Let’s work together.
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                    </Row>
                                    
                                        <Row style={{marginTop:'40px'}}>

                                        <Col md="4">
                                            <div className={lServicesStyle.div1}>
                                                <div style={{marginBottom: '16px'}} >
                                                <img src={'../../gif_.PNG'} 
                                                style={{display:'inline-block',width:'50px',height:"50px"}}/>

                                                <p style={{display:'inline-block',paddingLeft:'15px'}} 
                                                className={lServicesStyle.F_head}>Off-site SEO</p>
                                                </div>
                                                <p className={lServicesStyle.Far_m}>
                                                Blackboard also provide off-line SEO. If you are planning for off-line SEO, you can take our expert help for off-line SEO. Let’s sit together.
                                                </p>
                                                
                                            </div>
                                        </Col>

                                        <Col md="4">
                                            <div className={lServicesStyle.div1}>
                                                <div style={{marginBottom: '16px'}}>
                                                <img src={'../../guides_.PNG'} 
                                                style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                className={lServicesStyle.F_head}>Keyword Search</p>
                                                </div>
                                                <p className={lServicesStyle.Far_m}>
                                                We provide keyword research service. If you think about keyword research, we are here to help you. Let’s have a cup of coffee together.
                                                </p>
                                                
                                            </div>
                                        </Col>

                                        <Col md="4">
                                            <div className={lServicesStyle.div1}>
                                                <div style={{marginBottom: '16px'}}>
                                                <img src={'../../feature_.PNG'} 
                                                style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                className={lServicesStyle.F_head}>Link Building</p>
                                                </div>
                                                <p className={lServicesStyle.Far_m}>
                                                Do you need a proper link building? Why roaming here and here when blackboard is here. Let’s have a cup of coffee.
                                                </p>
                                                
                                            </div>
                                        </Col>

                                    </Row>
                                        
                                    </div>    
                                   
                                    <div style={{textAlign:'center',marginTop:'60px'}}>
                                        <Button variant="success" onClick={()=> setModalIsOpen(false)}>Close</Button>
                                    </div>
                                </Modal>
                            </div>


                        </Col>

                        <Col md="4" className={lServicesStyle.common}>

                            <img src={'../../feature_.png'} style={{height: '80px',width: '85px'}}/>

                            <p className={lServicesStyle.heading}>Facebook Marketing</p>

                            <p className={lServicesStyle.body}>
                                We blend a classic brand with digital blueprint, 
                                data, and user research to find a brand's true capability. We 
                                turn this expertise into content, products, services, and campaigns – 
                                creating and defining experiences that users love. 
                              
                            </p>

                            <div style={{width:'100%'}}>
                                <div style={{display:'inline-block',fontSize: '18px',fontFamily:'Lato',}}>
                                    <Link to="/contact" 
                                    className={lServicesStyle.interested_button}
                                    >Interested!</Link>
                                </div>
                                <div style={{display:'inline-block',paddingLeft:'80px'}}>
                                    <Button
                                    style={{fontSize: '18px',fontFamily:'Lato',}}
                                    className={lServicesStyle.read_button}
                                    onClick={()=> setFBModalIsOpen(true)}>
                                    Read More&nbsp; <FontAwesomeIcon icon={faArrowRight} /></Button>
                                </div>

                            </div>

                            <div style={{marginTop:'50px',}}>
                            
                                <Modal isOpen={FBmodalIsOpen} style={{width:'500px',height:'450px'}}>
                                    <h2 className={lServicesStyle.modal_heading}
                                        style={{
                                            marginTop:'50px',
                                            textAlign:'center',
                                        }}
                                    >Facebook Services List</h2>
                                    <div style={{
                                            marginTop:'10px',
                                            textAlign:'center',
                                            fontFamily:'montserrat',
                                            fontSize:'20px'
                                        }}>
                                        <Row>
                                            <Col md="3"></Col>
                                            <Col md="6">
                                                <p>
                                                    We look more like a management consultancy figure out major SEO problems for businesses, 
                                                    from marketing strategy and SEO experience to
                                                    lead generation-even culture transformation. We serve bellow services - 
                                                </p>
                                            </Col>
                                            <Col md="3"></Col>
                                        </Row>
                                    </div>
                                   
                                    <div>

                                    <Row style={{marginTop:'40px'}}>

                                        <Col md="4">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}} >
                                                    <img src={'../../legal-and-business.png'} 
                                                    style={{display:'inline-block',width:'50px',height:"50px"}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}} 
                                                    className={lServicesStyle.F_head}>Facebook Page Manager</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    Do need an expert for your F-commerce? Our skilled professional will help you to manager your page with proper way. 
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                        <Col md="4">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}}>
                                                    <img src={'../../digital-marketing.png'} 
                                                    style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                    className={lServicesStyle.F_head}>Facebook Page Creation</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    If you are planning for expanding your business or if you new in online business. We will create a professional page for your brand. Let’s have a discussion.
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                        <Col md="4">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}}>
                                                    <img src={'../../content-writing.png'} 
                                                    style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                    className={lServicesStyle.F_head}>Facebook post (Content Creation)</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    Blackboard also provide post content. We have an experienced content writer team to help you. Let’s have a cup of coffee together.
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                    </Row>
                                    
                                    <Row style={{marginTop:'40px'}}>
                                        <Col md="2"></Col>
                                        <Col md="4">
                                            <div className={lServicesStyle.div1}>
                                                <div style={{marginBottom: '16px'}} >
                                                <img src={'../../g_d.png'} 
                                                style={{display:'inline-block',width:'50px',height:"50px"}}/>

                                                <p style={{display:'inline-block',paddingLeft:'15px'}} 
                                                className={lServicesStyle.F_head}>Facebook Boost</p>
                                                </div>
                                                <p className={lServicesStyle.Far_m}>
                                                If you want to boost your post or page but can’t boost for not having a international card don’t worry. We also provide facebook boost service.
                                                </p>
                                                
                                            </div>
                                        </Col>

                                        <Col md="4">
                                            <div className={lServicesStyle.div1}>
                                                <div style={{marginBottom: '16px'}}>
                                                <img src={'../../f_b.PNG'} 
                                                style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                className={lServicesStyle.F_head}>Facebook Graphical Contents</p>
                                                </div>
                                                <p className={lServicesStyle.Far_m}>
                                                Are you planning for graphical content? No need to worry for that. We provide best service with best price in the town.
                                                </p>
                                                
                                            </div>
                                        </Col>
                                        <Col md="2"></Col>
                                        {/* <Col md="4">
                                            <div className={lServicesStyle.div1}>
                                                <div style={{marginBottom: '16px'}}>
                                                <img src={'../../content-writing.png'} 
                                                style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                className={lServicesStyle.F_head}>Videography</p>
                                                </div>
                                                <p className={lServicesStyle.Far_m}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's                                                    
                                                standard dummy text ever since the 1500s,
                                                </p>
                                                
                                            </div>
                                        </Col> */}

                                    </Row>
                                        
                                    </div>    
                                   
                                    <div style={{textAlign:'center',marginTop:'60px'}}>
                                        <Button variant="success" onClick={()=> setFBModalIsOpen(false)}>Close</Button>
                                    </div>
                                </Modal>
                            </div>

                        </Col>                        
                        
                    
                    </Row>

                    <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
                    <hr></hr>
                        <Col md="4" className={lServicesStyle.common}>

                            <img src={'../../seo-[Converted] (1).png'} style={{height: '80px',width: '85px'}}/>

                            <p className={lServicesStyle.heading}>SMS Marketing</p>

                            <p className={lServicesStyle.body}>
                                Having difficulties in the marketing & reaching clients faster? 
                                Get comprehensive marketing guidance with a superfast working 
                                team to chase your goal in no time. 
                                Blackboard provide any kind of SMS marketing support.  
                            </p>

                            <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                            <Link to="/contact" className={lServicesStyle.interested_button}>
                            Interested!</Link></div>

                        </Col>
                        
                        <Col md="4" className={lServicesStyle.common}>

                            <img src={'../../long_.png'} style={{height: '80px',width: '85px'}}/>

                            <p className={lServicesStyle.heading}>Email Marketing</p>

                            <p className={lServicesStyle.body}>
                                Having difficulties in the marketing & reaching clients faster? 
                                Get comprehensive marketing guidance with a superfast working 
                                team to chase your goal in no time. 
                                Blackboard provide any kind of E-mail support. 
                            </p>

                            <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                            <Link to="/contact" className={lServicesStyle.interested_button}>
                            Interested!</Link></div>

                        </Col>
                    
                        <Col md="4" className={lServicesStyle.common}>

                            <img src={'../../q_.png'} style={{height: '80px',width: '85px'}}/>

                            <p className={lServicesStyle.heading}>Google Marketing</p>

                            <p className={lServicesStyle.body}>
                                Google Ads offers a few key benefits that can set it apart 
                                from some of your other options. Google's reach is vast. You can target 
                                ads for relevance. You only
                                pay when someone clicks on your ad.
                                It's easy to control your budget. 
                            </p>

                            <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                            <Link to="/contact" 
                            className={lServicesStyle.interested_button}>Interested!</Link></div>

                        </Col>                    
                    
                    
                    </Row>

                    <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
                    <hr></hr>

                        {/* <Col md="2" > </Col> */}
                        
                        <Col md="4" className={lServicesStyle.common}>

                            <img src={'../../guides_.png'} style={{height: '80px',width: '85px'}}/>

                            <p className={lServicesStyle.heading}>Youtube Marketing</p>

                            <p className={lServicesStyle.body}>
                                You can enjoy boosts in SEO, build your traffic and brand awareness, 
                                expand your social reach, market to audiences overseas, improve your 
                                ROI, 
                                and diversify your video marketing strategy 
                            </p>

                            <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                            <Link to="/contact" 
                            className={lServicesStyle.interested_button}>Interested!</Link></div>

                        </Col>
                       
                        <Col md="4" className={lServicesStyle.common}>

                            <img src={'../../recipes_.png'} style={{height: '80px',width: '85px'}}/>

                            <p className={lServicesStyle.heading}>Advertisement</p>

                            <p className={lServicesStyle.body}>
                                The slogans and characters from famous advertising campaigns become 
                                staples of the pop-cultural lexicon and landscape. As part of an overall 
                                marketing effort. 
                                
                            </p>

                            <div style={{width:'100%'}}>
                                <div style={{display:'inline-block',fontSize: '18px',fontFamily:'Lato',}}>
                                    <Link to="/contact" 
                                    className={lServicesStyle.interested_button}
                                    >Interested!</Link>
                                </div>
                                <div style={{display:'inline-block',paddingLeft:'80px'}}>
                                    <Button
                                    style={{fontSize: '18px',fontFamily:'Lato',}}
                                    className={lServicesStyle.read_button}
                                    onClick={()=> setADVModalIsOpen(true)}>
                                    Read More&nbsp; <FontAwesomeIcon icon={faArrowRight} /></Button>
                                </div>

                            </div>

                             <div style={{marginTop:'50px',}}>
                                
                                <Modal isOpen={ADVmodalIsOpen} style={{width:'500px',height:'450px'}}>
                                    <h2 className={lServicesStyle.modal_heading}
                                        style={{
                                            marginTop:'50px',
                                            textAlign:'center',
                                        }}
                                    >Advertisement Services List</h2>
                                    <div style={{
                                            marginTop:'10px',
                                            textAlign:'center',
                                            fontFamily:'montserrat',
                                            fontSize:'20px'
                                        }}>
                                        <Row>
                                            <Col md="3"></Col>
                                            <Col md="6">
                                                <p>
                                                The slogans and characters from famous advertising campaigns become 
                                                staples of the pop-cultural lexicon and landscape. As part of an overall 
                                                marketing effort. 
                                                </p>
                                            </Col>
                                            <Col md="3"></Col>
                                        </Row>
                                    </div>
                                   
                                    <div>

                                        <Row style={{marginTop:'40px'}}>

                                            <Col md="3">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}} >
                                                    <img src={'../../legal-and-business.png'} 
                                                    style={{display:'inline-block',width:'50px',height:"50px"}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}} 
                                                    className={lServicesStyle.F_head}>Search Advertising</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    Do you need search advertising? Blackboard provide the best search advertising service in the town. Feel free to contact with us.
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                            <Col md="3">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}}>
                                                    <img src={'../../digital-marketing.png'} 
                                                    style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                    className={lServicesStyle.F_head}>Display Advertising</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    Are you planning for display advertising and don’t know where to go for that. Blackboard is here to help you. Let’s have a cup of coffee.
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                            <Col md="3">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}}>
                                                    <img src={'../../content-writing.png'} 
                                                    style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                    className={lServicesStyle.F_head}>Instagram Ads</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    Blackboard also provide instagram ads services. We have an experienced team to help you. Let’s have a cup of coffee together.
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                            <Col md="3">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}}>
                                                    <img src={'../../copy_.PNG'} 
                                                    style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                    className={lServicesStyle.F_head}>Instagram Ads</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    Blackboard also provide linkedln ads services. We have an experienced team to help you. Make a call &  have a cup of coffee together.
                                                    </p>
                                                    
                                                </div>
                                            </Col>
                                        </Row>

                                        
                                        
                                    </div>    
                                   
                                    <div style={{textAlign:'center',marginTop:'60px'}}>
                                        <Button variant="success" onClick={()=> setADVModalIsOpen(false)}>Close</Button>
                                    </div>
                                </Modal>
                            </div> 


                        </Col>
                       
                        <Col md="4" className={lServicesStyle.common}>

                            <img src={'../../recipes_.png'} style={{height: '80px',width: '85px'}}/>

                            <p className={lServicesStyle.heading}>Creative Content</p>

                            <p className={lServicesStyle.body}>
                                The slogans and characters from famous advertising campaigns become 
                                staples of the pop-cultural lexicon and landscape. As part of an overall 
                                marketing effort. 
                                We serve bellow services -
                            </p>

                            <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                            <Link to="/contact" 
                            className={lServicesStyle.interested_button}>Interested!</Link></div>

                             {/* <div style={{marginTop:'50px',}}>
                                <Button variant="success" 
                                 onClick={()=> setADVModalIsOpen(true)}
                                >Check our Work list</Button>
                                <Modal isOpen={ADVmodalIsOpen} style={{width:'500px',height:'450px'}}>
                                    <h2 className={lServicesStyle.heading}>Advertisement Services List</h2>
                                    <div className={lServicesStyle.list}>
                                        <ul>
                                            <li>Search Advertising</li>
                                            <li>Instagram Ads</li>
                                            <li>LinkedIn Ads</li>
                                            <li>Instagram Ads</li>
                                            
                                        </ul>
                                    </div>
                                    <div>
                                        <Button variant="primary" onClick={()=> setADVModalIsOpen(false)}>Close</Button>
                                    </div>
                                </Modal>
                            </div>  */}


                        </Col>
                        
                    
                    </Row>

                </section>
            </Layout>
        </div>
    )
}
export default ContactPage