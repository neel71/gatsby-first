import React,{Component,useState} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Modal from 'react-modal'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,ProgressBar,Button} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import lServicesStyle from './event-management.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faplay, faplayCircle,faArrowRight } from '@fortawesome/free-solid-svg-icons'

function LegalServicesPage () {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
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
                Event Management

            </div>

            <div style={{textAlign: 'center', }}>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <p className={lServicesStyle.pera__}>
                            Organize your events at any time you want! Get in here, 
                            Dig deep to assemble your events as you imagine.
                            Now you can even customize your events with Blackboard.
                        </p>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </div>

            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../webT_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Corporate Event</p>

                    <p className={lServicesStyle.body}>
                        If you want to organize a corporate event but don’t know how to
                        manage it, don’t worry. We have an 
                        experienced event management team 
                        who helps you to organize any kind of corporate event.
                    </p>      

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}
                    >Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../short_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Personal Event</p>

                    <p className={lServicesStyle.body}>
                        If you want to organize a personal event, don’t worry, just let
                        us do that. We have an experienced event management team who helps you 
                        to organize any kind of personal event. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../long_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Customized Event</p>

                    <p className={lServicesStyle.body}>
                        We also give you the freedom to arranging any type of customized event. 
                        Blackboard provides any kind of E-mail support. 
                        So, contact us as soon as possible.  
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" className={lServicesStyle.interested_button}>
                    Interested!</Link></div>

                </Col>
            </Row>
           
            <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'50px'}}>
            <hr></hr>
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../micro_.PNG'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Festival Event</p>

                    <p className={lServicesStyle.body}>
                        BLACKBOARD is here to help you with this, and Our skilled team
                        members are waiting for you. 
                        So don't be late to contact us as soon as possible. Blackboard is with you.
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" className={lServicesStyle.interested_button}>
                    Interested!</Link></div>

                </Col>

                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../feature_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Sales Event</p>

                    <p className={lServicesStyle.body}>
                        Are you having difficulties in the sales & marketing event?
                        Get perfect sales & marketing event guidance with a superfast
                        working team to chase your goal in no time. 
                    </p>

                    <div style={{fontSize: '20px',fontFamily:'Lato'}}>
                    <Link to="/contact" 
                    className={lServicesStyle.interested_button}>Interested!</Link></div>

                </Col>
                
                <Col md="4" className={lServicesStyle.common}>

                    <img src={'../../guides_.png'} style={{height: '80px',width: '85px'}}/>

                    <p className={lServicesStyle.heading}>Corporate Works</p>

                    <p className={lServicesStyle.body}>
                        The in-house professionals are waiting for you to respond to pick 
                        your plans. We also provide Banner, Billboard, 
                        Corporate gift & so on are now handy on this website.  
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
                                    >Corporate Works Services List</h2>
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
                                                    The in-house professionals are waiting for you to respond to pick your plans.
                                                    We also provide Banner, Billboard,
                                                    Corporate gift & so on are now handy on this website. 
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
                                                    className={lServicesStyle.F_head}>Banner</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    Do you need banner for your personal or corporate event? Blackboard provide any kind of banner and other staff. Feel free to contact with us.
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                    <Col md="4">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}}>
                                                    <img src={'../../digital-marketing.png'} 
                                                    style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                    className={lServicesStyle.F_head}>Bill Board</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    Blackboard also provide various types of billboards. We provide complete billboard service from design to production. Getting billboard is easier than ever.
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                    <Col md="4">
                                                <div className={lServicesStyle.div1}>
                                                    <div style={{marginBottom: '16px'}}>
                                                    <img src={'../../content-writing.png'} 
                                                    style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                    <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                    className={lServicesStyle.F_head}>Corporate Gift</p>
                                                    </div>
                                                    <p className={lServicesStyle.Far_m}>
                                                    Are you planning for sending gift to your client or customers? But can’t source your gifts. No need to worry. Blackboard is here to help you. Let’s have a cup of coffee.
                                                    </p>
                                                    
                                                </div>
                                            </Col>

                                 </Row>

                                <Row style={{marginTop:'40px'}}>

                                    <Col md="4">
                                            <div className={lServicesStyle.div1}>
                                                <div style={{marginBottom: '16px'}} >
                                                <img src={'../../cell_phone.png'} 
                                                style={{display:'inline-block',width:'50px',height:"50px"}}/>

                                                <p style={{display:'inline-block',paddingLeft:'15px'}} 
                                                className={lServicesStyle.F_head}>On-demand Work</p>
                                                </div>
                                                <p className={lServicesStyle.Far_m}>
                                                Blackboard provide any kind of on-demand event management support. Blackboard is always there for you whenever you need. Just make a phone call for getting our support. 
                                                </p>
                                                
                                            </div>
                                        </Col>

                                    <Col md="4">
                                            <div className={lServicesStyle.div1}>
                                                <div style={{marginBottom: '16px'}}>
                                                <img src={'../../media_player.png'} 
                                                style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                className={lServicesStyle.F_head}>Photography</p>
                                                </div>
                                                <p className={lServicesStyle.Far_m}>
                                                Blackboard is also provide photography service. If you need urgent and professional photographer just make phone call, we will be there for you.
                                                </p>
                                                
                                            </div>
                                        </Col>

                                    <Col md="4">
                                            <div className={lServicesStyle.div1}>
                                                <div style={{marginBottom: '16px'}}>
                                                <img src={'../../cinemographers_.PNG'} 
                                                style={{display:'inline-block',height:"50px",width:'50px'}}/>

                                                <p style={{display:'inline-block',paddingLeft:'15px'}}
                                                className={lServicesStyle.F_head}>Videography</p>
                                                </div>
                                                <p className={lServicesStyle.Far_m}>
                                                Blackboard is also provide Videography service. Our skilled videographers are waiting for you. You just contact with us we will take care the rest.
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
            </Row>

            

            

            

        </section>
  </Layout>
    )

}
export default LegalServicesPage


