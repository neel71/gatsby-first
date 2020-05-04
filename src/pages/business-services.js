import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Form,Button,Modal} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import headerStyle from '../components/header.module.scss'
import bsStyle from './business-services.module.scss'
import { Nav, NavDropdown,Navbar } from 'react-bootstrap'
import footerStyle from '../components/footer.module.scss'



const ContactPage = () => (

    // function Example() {
        // const [show, setShow] = useState(false);
      
        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
    // }
    
    <div>
        <header>
            <div className={headerStyle.headerHeight}>
            <Row>
                <Col md="3">
                <img src={'../../bb-logo.png'} 
                            style={{
                            width:"394.10px", 
                            height:"98.04px",
                            paddingLeft:'10px',
                            
                            marginTop:"35px",
                            marginBottom:"10px",
                            }} 
                            alt="Black Board Logo"/>
                </Col>
                <Col md="8"> 
                    <div className={headerStyle.nav_class}>
                        <Nav className="justify-content-end" activeKey="/home"  style={{color:'white'}}>

                            <NavDropdown title="Website Development" style={{
                                color:'white',
                                textDecoration: 'none',
                                font: '25px',
                            }}>

                            <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                            <Link to="/business-services" style={{
                                color:'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize:'16.5px',
                            }}>Dynamic Website</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                            <Link to="/business-services" style={{
                                color:'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize:'16.5px',
                            }}>Static Website</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                            <Link to="/business-services" style={{
                                color:'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize:'16.5px',
                            }}>Template Purchase</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                            <Link to="/business-services" style={{
                                color:'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize:'16.5px',
                            }}>UI & UX Design</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                            <Link to="/business-services" style={{
                                color:'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize:'16.5px',
                            }}>Android Development</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                            <Link to="/business-services" style={{
                                color:'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize:'16.5px',
                            }}>iOS Development</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                            <Link to="/business-services" style={{
                                color:'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize:'16.5px',
                            }}>ChatBot Development</Link></NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Domain Support" style={{
                                color:'white',
                                textDecoration: 'none',
                                font: '25px',
                            }}>

                            <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                            <Link to="/business-services" style={{
                                color:'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize:'16.5px',
                            }}>Domain Purchase</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                            <Link to="/business-services" style={{
                                color:'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize:'16.5px',
                            }}>Domain Hosting</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                            <Link to="/business-services" style={{
                                color:'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize:'16.5px',
                            }}>On Demand Server Purchase</Link></NavDropdown.Item>
                            </NavDropdown>


                            <NavDropdown title="Corporate Works" style={{
                                color:'white',
                                textDecoration: 'none',
                                font: '25px',
                            }}>

                            <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                            <Link to="/business-services" style={{
                                color:'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize:'16.5px',
                            }}>Banner</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                            <Link to="/business-services" style={{
                                color:'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize:'16.5px',
                            }}>Bill Board</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                            <Link to="/business-services" style={{
                                color:'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize:'16.5px',
                            }}>Corporat Gift</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                            <Link to="/business-services" style={{
                                color:'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize:'16.5px',
                            }}>On Demand Work</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>
                </Col>
                <Col md="1" style={{ marginTop: '58px'}}>
                    {/* <div >
                        <img src={'../../search_icon.png'} height="20px"  weight="20px"/>
                    </div> */}
                </Col>
                {/* <FontAwesomeIcon icon={faCloudSunRain} /> */}
            </Row> 
            </div>
        </header>
        
        <section style={{marginTop:'100px',marginLeft:'150px',marginRight:'60px'}}>
            <div style={{width:'100%',display:'flex'}}>
                <div style={{width:'65%', paddingTop:'170px'}}>
                    <div style={{paddingBottom:'10px'}}>
                        <img src={'../../y_line.png'} 
                            style={{display:'inline-block',
                            width:'75px'}}
                        />
                        <p
                            style={{display:'inline-block',
                            color: '#110729',
                            fontFamily: 'Montserrat',
                            fontSize: '18px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            margin: '0px 0px 15px 0px',
                            paddingLeft:'10px',
                            }}
                        >EXPLORE OUR EXPERT</p>
                    </div>

                    <p
                        style={{
                            color: '#110729',
                            margin: '0px 0px 30px 0px',
                            fontFamily: 'Montserrat',
                            fontSize: '80px',
                            fontWeight: '800',
                            lineHeight: '90px',
                            letterSpacing:'2px',
                            paddingBottom:'15px',

                        }}
                    >
                        Creative Spaces For Creative Thinkers
                    </p>

                    <p
                        style={{
                            color: '#110729',
                            fontFamily: 'Montserrat',
                            fontSize: '28px',
                            fontWeight: '500',
                            lineHeight: '35px',
                            paddingBottom:'20px',
                            lineHeight: '45px',
                        }}
                    >
                    Nobody reads ads. People read what interests them and sometimes it’s an ad. Howard Luck.
                    </p>

                    <p
                        style={{width: '240px'}}
                       className={bsStyle.Rbutton}
                    ><Link to="/business-services" className={bsStyle.learn_more}>Learn More</Link></p>


                </div>
                
                
                
                
                <div style={{width:'45%'}}>
                    <img src={'../../bs_right.png'} width='518px' height='561px
                    style={{}}
                    '/>
                </div>
            </div>
        </section>

        <section style={{padding: '175px 0px 45px 0px',marginLeft:'170px',marginRight:'170px' }}>
            <div>
                <Row>
                    <Col md="4" 
                        style={{
                            
                            textAlign:'center'
                        }}
                    >
                        <div className={bsStyle.hover_class}>
                            <div style={{paddingBottom:'10px'}}><img src={'../../Featurs_img-1.png'}
                                // style={{height: '120px',width: '120px'}}
                            /></div>
                            <div className={bsStyle.header} 
                            style={{paddingBottom:'10px'}}> <p>Web Development</p></div>
                            <div className={bsStyle.body} 
                            style={{paddingBottom:'10px'}}>
                                <p>A small river named Duden flows by 
                                their place and supplies it with the necessary regelialia.</p>
                            </div>

                        </div>
                        
                    </Col>

                    <Col md="4"
                        style={{
                            
                            textAlign:'center'
                        }}
                    >
                        <div className={bsStyle.hover_class}>
                            <div style={{paddingBottom:'10px'}}>
                            <img src={'../../Featurs_img-2.png'}
                                // style={{height: '120px',width: '120px'}}
                            /></div>
                            <div className={bsStyle.header} 
                            style={{paddingBottom:'10px'}}><p>Creative Design</p></div>
                            <div className={bsStyle.body}
                             style={{paddingBottom:'10px'}}>
                                <p>A small river named Duden flows by 
                                their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                        
                    </Col>
                    
                    <Col md="4"
                        style={{
                            
                            textAlign:'center'
                        }}
                    >
                        <div className={bsStyle.hover_class}>
                            <div style={{paddingBottom:'10px'}}>
                            <img src={'../../Featurs_img-3.png'}
                                // style={{height: '120px',width: '120px'}}
                            /></div>
                            <div className={bsStyle.header} 
                            style={{paddingBottom:'10px'}}><p>Mobile Application</p></div>
                            <div className={bsStyle.body}
                             style={{paddingBottom:'10px'}}>
                                <p>A small river named Duden flows by 
                                their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </section>
    
        <section style={{padding: '45px 0px 45px 0px',marginLeft:'150px',marginRight:'60px'}}>
            <div style={{width:'100%',display:'flex'}}>
                <div style={{width:'50%', }}>
                    <div style={{paddingBottom:'10px'}}>
                        <img src={'../../y_line.png'} 
                            style={{display:'inline-block',
                            width:'75px'}}
                        />
                        <p
                            style={{display:'inline-block',
                            color: '#110729',
                            fontFamily: 'Montserrat',
                            fontSize: '18px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            margin: '0px 0px 15px 0px',
                            paddingLeft:'10px',
                            }}
                        >EXPLORE OUR EXPERT</p>
                    </div>

                    <p
                        style={{
                            color: '#110729',
                            margin: '0px 0px 30px 0px',
                            fontFamily: 'Montserrat',
                            fontSize: '63px',
                            fontWeight: '800',
                            lineHeight: '90px',
                            letterSpacing:'2px',
                            paddingBottom:'15px',

                        }}
                    >
                        Fully dedicated to the best solutions.
                    </p>

                    <p
                        style={{
                            color: '#110729',
                            fontFamily: 'Montserrat',
                            fontSize: '20px',
                            fontWeight: '500',
                            lineHeight: '35px',
                            paddingBottom:'20px',
                            lineHeight: '45px',
                        }}
                    >
                        Lorem Ipsum. Progravida nibh vel velit auctor alinean sollicitudin, 
                        lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem 
                        nibh id euis sed odio sit amet nibh vulputate cursus Lorem ipsum dolor sit amet, consectetur
                    </p>

                    <p
                        style={{width: '240px'}}
                       className={bsStyle.Rbutton}
                    ><Link to="/business-services" className={bsStyle.learn_more}>Learn More</Link></p>


                </div>
                
                 
                
                
                <div style={{width:'50%'}}>
                    <img src={'../../bs__right.png'} 
                        style={{
                            width:'720px',
                            height:'561px',
                            paddingLeft:'50px',
                        }}
                    
                     />
                </div>
            </div>
        </section>
    
        
        <div>
            <Row>
                <Col md="3"></Col>
                <Col md="6">
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../../course_img-2.jpeg" height="100%" width="100%"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../../course_img.jpeg" height="100%" width="100%"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../../course_img-1.jpeg" height="100%" width="100%"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                </Col>
                <Col md="3">
                    {/* <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                    </Button> */}
                    {/*  */}
                    {/* <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal> */}
                </Col>
            </Row>
        </div>



        <section style={{backgroundColor:'#f9f9fb',padding:'117px 0px 105px 0px'}}>
            
            <div style={{marginLeft:'150px'}}>
                <div>
                    <div style={{display:'inline-block'}}>
                        <img src={'../../y__line.PNG'}/>
                    </div>
                    <div style={{display:'inline-block',paddingLeft:'15px'}}>
                        <p
                            style={{
                                color: '#110729',
                                fontFamily: 'Montserrat',
                                fontSize: '18px',
                                fontWeight: '600',
                                lineHeight: '60px',
                            }}                        
                        >EXPLORE OUR TEAM</p>
                        
                    </div>
                </div>
                <p
                            style={{
                                 ccolor: '#110729',
                                fontFamily: 'Montserrat',
                                fontSize: '60px',
                                fontWeight: '600',
                                lineHeight: '60px',
                                paddingBottom: '100px'
                            }}
                        >Creative Team</p>
            </div>
            
            <div>
                <Row style={{paddingLeft:'150px',paddingRight:'150px',paddingBottom:'25px'}}>

                    <Col md="3" style={{textAlign:'center',}}>
                        <div className={bsStyle.item}>
                            <div>
                                <img src={'../../team-1.png'} style={{borderRadius:'50%',backgroundColor:'#7bcdf0'}}/> 
                            </div>
                            <div className={bsStyle.header___}>
                                <p>Harrison Hudson</p>
                            </div>
                            <div>
                                <p className={bsStyle.body___}>Web Developer</p>
                            </div>
                             
                            <div style={{padding:'20px',textAlign:'center'}}>
                                <Link to="www.facebook.com">
                                <div style={{display:'inline-block',height:'40px',width:'40px',marginRight:'10px',borderRadius:'50%',
                                    textAlign:'center'}} className={bsStyle.icon}>
                                    <img src={'../../fb_.png'} style={{height:'30px',
                                        paddingTop: '5px'}}/>
                                </div></Link>
                                <Link to="www.twitter.com" >
                                <div style={{display:'inline-block',height:'40px',width:'40px',paddingRight:'25px',borderRadius:'50%',
                                    textAlign:'center'}} className={bsStyle.icon}>
                                     <img src={'../../twitter__.png'} style={{height:'30px',paddingLeft: '8px',
                                        paddingTop: '5px'}}/>
                                </div></Link>
                            </div>
                        </div>
                    </Col>

                    <Col md="3" style={{textAlign:'center',}}>
                        <div className={bsStyle.item}>
                            <div>
                                <img src={'../../Team-2-1-1.png'} style={{borderRadius:'50%',backgroundColor:'#97a4f6'}}/> 
                            </div>
                            <div className={bsStyle.header___}>
                                <p>Elizabeth Sofia</p>
                            </div>
                            <div>
                                <p className={bsStyle.body___}>Web Developer</p>
                            </div>
                            <div style={{padding:'20px',textAlign:'center'}}>
                                <Link to="www.facebook.com">
                                <div style={{display:'inline-block',height:'40px',width:'40px',marginRight:'10px',borderRadius:'50%',
                                    textAlign:'center'}} className={bsStyle.icon}>
                                    <img src={'../../fb_.png'} style={{height:'30px',
                                        paddingTop: '5px'}}/>
                                </div></Link>
                                <Link to="www.twitter.com" >
                                <div style={{display:'inline-block',height:'40px',width:'40px',paddingRight:'25px',borderRadius:'50%',
                                    textAlign:'center'}} className={bsStyle.icon}>
                                     <img src={'../../twitter__.png'} style={{height:'30px',paddingLeft: '8px',
                                        paddingTop: '5px'}}/>
                                </div></Link>
                            </div>
                        </div>
                    </Col>

                    <Col md="3" style={{textAlign:'center',}}>
                        <div className={bsStyle.item}>
                            <div>
                                <img src={'../../Team-3.png'} style={{borderRadius:'50%',backgroundColor:'#7bcdf0'}}/> 
                            </div>
                            <div className={bsStyle.header___}>
                                <p>Charlie Cooper</p>
                            </div>
                            <div>
                                <p className={bsStyle.body___}>Web Developer</p>
                            </div>
                            <div style={{padding:'20px',textAlign:'center'}}>
                                <Link to="www.facebook.com">
                                <div style={{display:'inline-block',height:'40px',width:'40px',marginRight:'10px',borderRadius:'50%',
                                    textAlign:'center'}} className={bsStyle.icon}>
                                    <img src={'../../fb_.png'} style={{height:'30px',
                                        paddingTop: '5px'}}/>
                                </div></Link>
                                <Link to="www.twitter.com" >
                                <div style={{display:'inline-block',height:'40px',width:'40px',paddingRight:'25px',borderRadius:'50%',
                                    textAlign:'center'}} className={bsStyle.icon}>
                                     <img src={'../../twitter__.png'} style={{height:'30px',paddingLeft: '8px',
                                        paddingTop: '5px'}}/>
                                </div></Link>
                            </div>
                        </div>
                    </Col>

                    <Col md="3" style={{textAlign:'center',}}>
                        <div className={bsStyle.item}>
                            <div>
                                <img src={'../../team-4-1.png'} style={{borderRadius:'50%',backgroundColor:'#97a4f6'}}/> 
                            </div>
                            <div className={bsStyle.header___}>
                                <p>Lucy Evelyn</p>
                            </div>
                            <div>
                                <p className={bsStyle.body___}>Web Developer</p>
                            </div>
                            <div style={{padding:'20px',textAlign:'center'}}>
                                <Link to="www.facebook.com">
                                <div style={{display:'inline-block',height:'40px',width:'40px',marginRight:'10px',borderRadius:'50%',
                                    textAlign:'center'}} className={bsStyle.icon}>
                                    <img src={'../../fb_.png'} style={{height:'30px',
                                        paddingTop: '5px'}}/>
                                </div></Link>
                                <Link to="www.twitter.com" >
                                <div style={{display:'inline-block',height:'40px',width:'40px',paddingRight:'25px',borderRadius:'50%',
                                    textAlign:'center'}} className={bsStyle.icon}>
                                     <img src={'../../twitter__.png'} style={{height:'30px',paddingLeft: '8px',
                                        paddingTop: '5px'}}/>
                                </div></Link>
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>
        </section>

        <footer >
            <section>
                <div>
                <Row>
                        <Col md="4"></Col>
                        <Col md="4"> 
                            <div style={{
                                marginBottom:'20px',
                                paddingBottom:'20px'
                            }} >
                                <img src={'../../bb-logo.png'} height="110.78px" weight="55.22px" />
                            </div>
                        </Col>
                        <Col md="4"></Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col md="4"></Col>
                        <Col md="4" className={footerStyle.small_river_div}> 
                            <div className={footerStyle.small_river}>
                                Small river named Duden flows by their place and supplies it with the necessary 
                                regelialia. It is a paradisematic country
                            </div>
                        </Col>
                        <Col md="4"></Col>
                    </Row>  
                </div>
                <div>
                    <Row>
                        <Col md="4"></Col>
                        <Col md="4" className={footerStyle.allSides}> 
                            <div >
                                <a href='https://www.facebook.com/BlackboardDigital/?__tn__=%2Cd%2CP-R&eid=ARCTSug5VseA05_TefFvM-lnfskmdxNwlp5K1FVfL9zw1Wm0p64aZP9Fx8vvaC69eUMC3gaRcCwu-qsa' className={footerStyle.fb}>
                                    <img src={'../../fb.png'} className={footerStyle.img_prop} height='25px' width='25px'/>
                                </a>
                            </div>
                        </Col>
                        <Col md="4"></Col>
                    </Row>
                </div>
            </section>
            <section className={footerStyle.footer_height}>
                <Row style={{
                    paddingTop:'20px'
                }}>
                    <Col md="4"><span style={{
                        fontFamily: 'Marcellus',
                        fontSize: '20px',
                        fontWeight: '400',
                        fontStyle: 'italic',
                        lineHeight: '26px',
                        paddingLeft:'10px',
                        marginTop:'20px'
                    }}>©2019. <span style={{
                        color:'#fc7c3F'
                    }}>Nexkraft Limited</span>. All Rights Reserved.</span></Col>
                    <Col md="4"></Col>
                    <Col md="4">
                        <ul className={footerStyle.ul_item}>
                            <li className={footerStyle.float_right}><Link to="" className={footerStyle.link_item}>Contact</Link></li>
                            <li className={footerStyle.float_right}><Link to="" className={footerStyle.link_item}>Service</Link></li>
                            <li className={footerStyle.float_right}><Link to="" className={footerStyle.link_item}>About</Link></li>
                            <li className={footerStyle.float_right}><Link to="" className={footerStyle.link_item}>Home</Link></li>
                        </ul>
                    </Col>
                </Row>
            </section>
        </footer>
    
    </div>
)

export default ContactPage