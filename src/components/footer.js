import React from 'react'
import {Link} from "gatsby"
import {graphql , useStaticQuery} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import footerStyle from './footer.module.scss'
import { Col,Row } from 'react-bootstrap'

const Footer = () => {

    return (
        <footer >
            <section>
                <div>
                    <Row>
                        <Col md="4"></Col>
                        <Col md="4" style={{
                            textAlign:'center',
                        }}> 
                            <div 
                            style={{
                                marginBottom:'10px',
                                paddingBottom:'10px'
                            }} 
                            >
                                <img src={'../../bb-logo.png'} height="100.78px" weight="50.22px" />
                            </div>
                        </Col>
                        <Col md="4"></Col>
                    </Row>
                </div>
               
                {/* <div>
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
                </div> */}
               
                {/* <div>
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
                </div> */}
            
            </section>


            <section className={footerStyle.footer_height}>
                <Row style={{
                    
                }}>
                    <Col md="4">
                        <div style={{width:'100%',display:'flex'}}>
                             <div style={{width:'13%',marginLeft:'20px'}}>
                                <img src={'../../QR.jpg'} height="80px" width="80x"
                                    style={{    verticalAlign: 'baseline'}}

                                />
                             </div>

                             <div style={{width:'60%',paddingTop:'12px'}}>
                                <span style={{
                                    fontFamily: 'Marcellus',
                                    fontSize: '23px',
                                    fontWeight: '500',
                                    // fontStyle: 'italic',
                                    lineHeight: '26px',
                                    paddingLeft:'20px',
                                     marginTop:'20px'
                                    }}>
                                        ©2020. 
                                    <span style={{
                                    fontWeight:'bold'
                                    }}>
                                        BlackBoard
                                    </span>
                                </span>

                                <div
                                    style={{
                                        fontFamily: 'Marcellus',
                                        fontSize: '23px',
                                        fontWeight: '500',
                                        // fontStyle: 'italic',
                                        lineHeight: '26px',
                                        paddingLeft:'20px',
                                        
                                    }}
                                    >Made by NexKraft limited
                                </div>
                    
                             </div>
                        </div>
                    
                    </Col>


                    <Col md="4" style={{
                        textAlign:'center',
                        paddingTop:'12px'
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
                    
                    <Col md="4" style={{paddingTop:'12px'}}>
                        <div style={{paddingLeft: '260px'}}>
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
        </footer>
    )
}

export default Footer