// import React,{Component} from 'react'
// import {Link, graphql, useStaticQuery} from 'gatsby'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from '../components/layout'
// import { Row, Col,Container,Form,Button} from 'react-bootstrap'
// import Carousel from 'react-bootstrap/Carousel'
// import headerStyle from '../components/header.module.scss'
// import phStyle from './photography.module.scss'
// // import msStyle from './digital-marketing.module.scss'
// import { Nav, NavDropdown,Navbar,Card,ProgressBar } from 'react-bootstrap'
// // import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// // import {faClock,faRing,faMailBulk} from '@fortawesome/free-solid-svg-icons'
// import footerStyle from '../components/footer.module.scss'

// const ContactPage = () => (
//     <div>
//         <header>
//             <div className={headerStyle.headerHeight}>
//             <Row>
//                 <Col md="3">
//                 <img src={'../../bb-logo.png'} 
//                             style={{
//                             width:"394.10px", 
//                             height:"98.04px",
//                             paddingLeft:'10px',
                            
//                             marginTop:"35px",
//                             marginBottom:"10px",
//                             }} 
//                             alt="Black Board Logo"/>
//                 </Col>
//                 {/* #ff1d4d */}
//                 <Col md="8"> 
//                     <div className={msStyle.nav_class}>
//                         <Nav className="justify-content-end" activeKey="/home"  style={{color:'white',justifyContent:'left'}}>

//                             <Nav.Item>
//                                 <Nav.Link>
//                                     <Link to="" className={headerStyle.nav_item}>Studio Shoots</Link>
//                                 </Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link>
//                                     <Link to="" className={headerStyle.nav_item}>On-location shoots</Link>
//                                 </Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link>
//                                     <Link to="" className={headerStyle.nav_item}>Event Coverage</Link>
//                                 </Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link>
//                                     <Link to="" className={headerStyle.nav_item}>Photo-essays</Link>
//                                 </Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link>
//                                     <Link to="" className={headerStyle.nav_item}>Social Photos</Link>
//                                 </Nav.Link>
//                             </Nav.Item>
//                             <NavDropdown title="Photography" style={{
//                                 color:'white',
//                                 textDecoration: 'none',
//                                 font: '25px',
                                
//                             }} className={msStyle.sample}>

//                             <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
//                             <Link to="/photography" style={{
//                                 color:'black',
//                                 textDecoration: 'none',
//                                 fontWeight: 'bold',
//                                 fontSize:'16.5px',
//                             }}>Weeding</Link></NavDropdown.Item>
//                             <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
//                             <Link to="/photography" style={{
//                                 color:'black',
//                                 textDecoration: 'none',
//                                 fontWeight: 'bold',
//                                 fontSize:'16.5px',
//                             }}>Corporate</Link></NavDropdown.Item>
//                             <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
//                             <Link to="/photography" style={{
//                                 color:'black',
//                                 textDecoration: 'none',
//                                 fontWeight: 'bold',
//                                 fontSize:'16.5px',
//                             }}>Interview</Link></NavDropdown.Item>
//                             <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
//                             <Link to="/photography" style={{
//                                 color:'black',
//                                 textDecoration: 'none',
//                                 fontWeight: 'bold',
//                                 fontSize:'16.5px',
//                             }}>Functions</Link></NavDropdown.Item>
//                             <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
//                             <Link to="/photography" style={{
//                                 color:'black',
//                                 textDecoration: 'none',
//                                 fontWeight: 'bold',
//                                 fontSize:'16.5px',
//                             }}>Photo Booth</Link></NavDropdown.Item>
                            
//                             <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
//                             <Link to="/photography" style={{
//                                 color:'black',
//                                 textDecoration: 'none',
//                                 fontWeight: 'bold',
//                                 fontSize:'16.5px',
//                             }}>On Demand</Link></NavDropdown.Item>
//                             </NavDropdown>

//                         </Nav>
//                     </div>
//                 </Col>
//                 <Col md="1" style={{ marginTop: '58px'}}>
//                     {/* <div >
//                         <img src={'../../search_icon.png'} height="20px"  weight="20px"/>
//                     </div> */}
//                 </Col>
//                 {/* <FontAwesomeIcon icon={faCloudSunRain} /> */}
//             </Row> 
//             </div>
//         </header>
        
//         <section style={{marginBottom:'940px'}}>
//             <img src={'../../p_back.jpeg'}
//                 style={{
//                     width:'100%',
//                     // height:'',
//                     position:'absolute',
//                     paddingTop:'25px'
//                 }}
//             />
//             <div
//                 style={{
//                     width:'100%',
//                     display:'flex',
//                     paddingLeft:'170px',
//                     paddingTop:'100px'
//                 }}
//             >
//                 <div
//                     style={{width:'58%',
//                     color:'white',
//                         position:'absolute',}}
//                 >
//                     <p
//                     style={{
//                         padding: '280px 0px 325px 0px',
                        
//                         color:' #ffffff',
//                         fontFamily: 'cursive',
//                         fontSize: '68px',
//                         fontWeight: '700',
//                         textTransform: 'uppercase',
//                         lineHeight: '72px',
//                         letterSpacing: '-1.375px',
//                     }}
//                 >Great Photography Depth of feeling</p>
//                 </div>
//                 <div  style={{width:'58%'}} >
                    
//                 </div>

//             </div>
            
//             <div style={{color: 'white', position: 'absolute',marginTop:'700px',width:'100%'}}>
//                 <Row style={{marginLeft:'150px',marginRight:'150px'}}>
//                     <Col md="4">
//                         <img src={'../../p_left.jpeg'} style={{height: '350px', width: '420px',position:'absolute',zIndex:'0'}}/>
//                         <div style={{zIndex:'99999'}}>
//                             <p>Studio Shoots</p>
//                         </div>    
                        
                        
//                     </Col>
//                     <Col md="4">
//                         <img src={'../../p_middle.jpeg'} style={{height: '350px', width: '420px'}}/>
//                     </Col>
//                     <Col md="4">
//                         <img src={'../../p_right.jpeg'} style={{height: '350px', width: '420px'}}/>
//                     </Col>
//                 </Row>
            
                
//                 <div style={{
//                     marginTop: '550px',
//                     width: '100%',
//                     display: 'flex',
//                     paddingLeft: '165px',
//                 }}>
//                     <div style={{width:'45%'}}>
//                         <div>
//                             <img src={'../../violet_line.PNG'}/>
//                         </div>
//                         <p
//                             style={{
//                                 color: '#ffffff',
//                                 margin: '0px 0px 25px 0px',
//                                 fontFamily: 'Lato',
//                                 fontSize: '56px',
//                                 fontWeight: '700',
//                                 lineHeight: '63px',
//                                 paddingTop:'56px',
//                             }}
//                         >
//                             My name is Steve McCurry,
//                             I’m a Photographer.
//                         </p>
//                         <p
//                             style={{
//                                 color: '#c3c5ce',
//                                 fontFamily: 'poppins',
//                                 fontSize: '18px',
//                                 fontWeight: '200',
//                                 lineHeight: '27px',
//                                 paddingTop:'50px',
//                             }}
//                         >
//                             Behind the word mountains, far from the countries Vokalia and Consonantia, 
//                             there live the blind texts. Separated they live arts Bookmark grove right 
//                             at the coast without compromising our we do in the world of finance.
//                         </p>
//                     </div>

//                     <div style={{width:'55%',paddingLeft:'60px'}}>
//                         <img src={'../../left_img.png'} style={{    width: 'auto', height: '540px'}}/>
//                     </div>
//                 </div>
                
//                 <div style={{textAlign:'center'}}>
//                     <p
//                         style={{
//                             fontSize:'40px',
//                             paddingTop:'50px'
//                         }}
//                     >Our Works</p>
//                     <img src={'../../violet_line.PNG'}/>
//                 </div>

//             </div>

            

//         </section>
        
//         <div style={{marginTop:'100px',backgroundColor:'#101015',height:'1470px'}}>

//             <div style={{color: 'white', position: 'absolute',marginTop:'200px',width:'100%'}}>
//                 <Row style={{marginLeft:'150px',marginRight:'150px'}}>
//                     <Col md="4">
//                         <img src={'../../p_left.jpeg'} style={{height: '350px', width: '420px'}}/>
//                     </Col>
//                     <Col md="4">
//                         <img src={'../../p_middle.jpeg'} style={{height: '350px', width: '420px'}}/>
//                     </Col>
//                     <Col md="4">
//                         <img src={'../../p_right.jpeg'} style={{height: '350px', width: '420px'}}/>
//                     </Col>
//                 </Row> 
//             </div>
         
//         </div>

//         <div style={{backgroundColor:'#202024',height:'800px',marginBottom:'150px'}}>
            
//             <div style={{
//                 paddingTop:'100px',width:'100%',display:'flex',paddingLeft:'150px',color:'white',paddingRight:'150px'
//             }}>
//                 <div style={{width:'45%'}}>
//                     <img src={'../../p_p.jpeg'} style={{width: '600px'}}/>
//                 </div>

//                 <div style={{width:'55%'}}>
//                     <p
//                         style={{
//                             color: '#ffffff',
//                             margin: '0px 0px 10px 0px',
//                             fontFamily: 'Roboto',
//                             fontSize: '50px',
//                             fontWeight: '700',
//                             textTransform: 'capitalize',
//                             lineHeight: '46px',
//                             paddingBottom:'15px',
//                         }}
//                     >A Little About Me</p>
//                     <p
//                     style={{
//                         color: '#c3c5ce',
//                         fontFamily: 'Roboto, Sans-serif',
//                         fontSize: '24px',
//                         fontWeight: '400',
//                         lineHeight: '28px',
//                         paddingBottom:'15px',
//                     }}
//                     >
//                         Every wedding day moment looks away thousands untold 
//                         emotions memories video capture your unique style
//                     </p>

//                     <div >
                        
//                     <div style={{paddingTop:'15px'}}>
//                         <Row>
//                           <Col md="3"><p style={{
//                             color: 'white',
//                             fontFamily: 'Lato',
//                             fontSize: '20px',
//                             fontWeight: '400',
//                           }}>photoshop</p></Col>
//                           <Col md="7"> </Col>
//                           <Col md="2"><p style={{color: 'white',fontWeight:'400'}}>90%</p>  </Col>
//                         </Row>
//                         <ProgressBar animated now={90}  style={{
                           
//                            borderRadius: '10px 10px 10px 10px',
//                         }}/>
//                       </div>
                      
//                       <br></br>
//                       <div>
//                         <Row>
//                           <Col md="3"><p style={{
//                             color: 'white',
//                             fontFamily: 'Lato',
//                             fontSize: '20px',
//                             fontWeight: '400',
//                           }}>Final Cut</p></Col>
//                           <Col md="7"> </Col>
//                           <Col md="2"> <p style={{
//                             paddingLeft:'25px',color: 'white',fontWeight:'600'}}>95%</p> </Col>
//                         </Row>  
//                         <ProgressBar animated striped variant="success" now={95} style={{
                           
//                            borderRadius: '10px 10px 10px 10px',
//                         }} />
//                       </div>
                     
//                       <br></br>
//                       <div>
//                         <Row>
//                           <Col md="5"><p style={{
//                             color: 'white',
//                             fontFamily: 'Lato',
//                             fontSize: '20px',
//                             fontWeight: '400',
//                           }}>Studio Photography</p></Col>
//                           <Col md="6"> </Col>
//                           <Col md="1"><p style={{color: 'white',fontWeight:'400'}}>98%</p>  </Col>
//                         </Row>
//                         <ProgressBar animated striped variant="warning" now={98} style={{
                           
//                            borderRadius: '10px 10px 10px 10px',
//                         }}  />
//                       </div>
                        
//                       <div style={{paddingTop:'15px'}}>
//                         <Row>
//                           <Col md="3"><p style={{
//                             color: 'white',
//                             fontFamily: 'Lato',
//                             fontSize: '20px',
//                             fontWeight: '400',
//                           }}>Motion Video</p></Col>
//                           <Col md="7"> </Col>
//                           <Col md="2"><p style={{color: 'white',fontWeight:'400'}}>90%</p>  </Col>
//                         </Row>
//                         <ProgressBar animated striped variant="danger" now={90}  style={{
                           
//                            borderRadius: '10px 10px 10px 10px',
//                         }}/>
//                       </div>
                      
                        
//                     </div>

//                 </div>

//             </div>

//         </div>

//         <footer >
//             <section>
//                 <div>
//                 <Row>
//                         <Col md="4"></Col>
//                         <Col md="4"> 
//                             <div style={{
//                                 marginBottom:'20px',
//                                 paddingBottom:'20px'
//                             }} >
//                                 <img src={'../../bb-logo.png'} height="110.78px" weight="55.22px" />
//                             </div>
//                         </Col>
//                         <Col md="4"></Col>
//                     </Row>
//                 </div>
//                 <div>
//                     <Row>
//                         <Col md="4"></Col>
//                         <Col md="4" className={footerStyle.small_river_div}> 
//                             <div className={footerStyle.small_river}>
//                                 Small river named Duden flows by their place and supplies it with the necessary 
//                                 regelialia. It is a paradisematic country
//                             </div>
//                         </Col>
//                         <Col md="4"></Col>
//                     </Row>  
//                 </div>
//                 <div>
//                     <Row>
//                         <Col md="4"></Col>
//                         <Col md="4" className={footerStyle.allSides}> 
//                             <div >
//                                 <a href='https://www.facebook.com/BlackboardDigital/?__tn__=%2Cd%2CP-R&eid=ARCTSug5VseA05_TefFvM-lnfskmdxNwlp5K1FVfL9zw1Wm0p64aZP9Fx8vvaC69eUMC3gaRcCwu-qsa' className={footerStyle.fb}>
//                                     <img src={'../../fb.png'} className={footerStyle.img_prop} height='25px' width='25px'/>
//                                 </a>
//                             </div>
//                         </Col>
//                         <Col md="4"></Col>
//                     </Row>
//                 </div>
//             </section>
//             <section className={footerStyle.footer_height}>
//                 <Row style={{
//                     paddingTop:'20px'
//                 }}>
//                     <Col md="4"><span style={{
//                         fontFamily: 'Marcellus',
//                         fontSize: '20px',
//                         fontWeight: '400',
//                         fontStyle: 'italic',
//                         lineHeight: '26px',
//                         paddingLeft:'10px',
//                         marginTop:'20px'
//                     }}>©2019. <span style={{
//                         color:'#fc7c3F'
//                     }}>Nexkraft Limited</span>. All Rights Reserved.</span></Col>
//                     <Col md="4"></Col>
//                     <Col md="4">
//                         <ul className={footerStyle.ul_item}>
//                             <li className={footerStyle.float_right}><Link to="" className={footerStyle.link_item}>Contact</Link></li>
//                             <li className={footerStyle.float_right}><Link to="" className={footerStyle.link_item}>Service</Link></li>
//                             <li className={footerStyle.float_right}><Link to="" className={footerStyle.link_item}>About</Link></li>
//                             <li className={footerStyle.float_right}><Link to="" className={footerStyle.link_item}>Home</Link></li>
//                         </ul>
//                     </Col>
//                 </Row>
//             </section>
//         </footer>

//     </div>
// )

// export default ContactPage