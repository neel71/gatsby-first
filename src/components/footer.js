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
                                <img src={'../../bb-logo.png'} height="77.78px" weight="40.22px" />
                            </div>
                        </Col>
                        <Col md="4"></Col>
                    </Row>
                </div>
            </section>

            <section className={footerStyle.footer_height}>
                <Row>
                    <Col md="4">
                        <div style={{width:'100%',display:'flex'}}>
                             <div style={{width:'13%',marginLeft:'20px'}}>
                                <img src={'../../QR.jpg'} height="70px" width="70x"
                                    style={{    verticalAlign: 'baseline'}}

                                />
                             </div>

                             <div style={{width:'45%',paddingTop:'12px',paddingLeft:'5px'}}>
                                <span style={{
                                    fontFamily: 'Marcellus',
                                    fontSize: '15px',
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
                                        fontSize: '15px',
                                        fontWeight: '500',
                                        // fontStyle: 'italic',
                                        lineHeight: '26px',
                                        paddingLeft:'20px',
                                        
                                    }}
                                    >Made by NexKraft limited
                            </div>
                    
                             </div>
                             <div style={{width:'10%',paddingTop:'12px'}}>
                                <a href='https://www.facebook.com/Blackboardlimited/?ref=br_rs' className={footerStyle.fb}>
                                <img src={'../../fb.png'} className={footerStyle.img_prop} height='25px' width='25px'/>
                            </a>
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
                            fontSize:'18px',
                            fontWeight:'600',
                            color:'black'

                        }}
                        >For more information please contact :</p> 
                        <div>
                            <img src={'../../cell_phone.png'} width="auto" height="10px"/>
                            <span
                                className={footerStyle.num_style}
                            >096&nbsp;66&nbsp;77&nbsp;12&nbsp;12</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={'../../cell_phone.png'} width="auto" height="10px"/>
                            <span
                                 className={footerStyle.num_style}
                            >017&nbsp;59&nbsp;355&nbsp;355</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={'../../cell_phone.png'} width="auto" height="10px"/>
                            <span
                                 className={footerStyle.num_style}
                            >019&nbsp;79&nbsp;585&nbsp;905</span>
                        </div>
                    </Col>
                    
                    <Col md="4" style={{paddingTop:'12px'}}>
                        
                        <ul className={footerStyle.ul_item}>
                        
                            <li className={footerStyle.float_right}><Link to="/contact" className={footerStyle.link_item}>Contact</Link></li>
                            
                            <li className={footerStyle.float_right}><Link to="/" className={footerStyle.link_item}>Portfolio</Link></li>
                            <li className={footerStyle.float_right}><Link to="/" className={footerStyle.link_item}>Home</Link></li>
                            <li className={footerStyle.float_right}><div >
                            
                            </div></li>

                        </ul>
                    </Col>
                </Row>
            </section>
        </footer>
    )
}

export default Footer