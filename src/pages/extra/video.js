// import React,{Component} from 'react'
// import {Link, graphql, useStaticQuery} from 'gatsby'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from '../components/layout'
// import { Row, Col,ProgressBar} from 'react-bootstrap'
// import Carousel from 'react-bootstrap/Carousel'
// import lServicesStyle from './video.module.scss'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faplay, faplayCircle } from '@fortawesome/free-solid-svg-icons'

// const LegalServicesPage = () => (
//   <Layout>
//         <section style={{marginTop:'10px'}}>
//             <img src={'../../video_banner.jpeg'} height='550px'  style={{
//                 backgroundColor: '#000320',
//                 opacity: '0.7',width:'100%',
//             }}/>
//         </section>

//         <section style={{marginTop:'125px',marginBottom:'170px'}}>

//             <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'60px'}}>
//                 <Col md="4" className={lServicesStyle.common}>

//                     <img src={'../../promo_.png'} style={{height: '100px',width: '100px'}}/>

//                     <p className={lServicesStyle.heading}>Promo Video</p>

//                     <p className={lServicesStyle.body}>You can make your promo video from the professional video makers mentioning your demand & aspects.</p>

//                     <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/video" style={{
//                         fontWeight: '500',
//                         backgroundColor: '#61ce70',
//                         textDecoration:'none',
//                         color:'white',
//                         padding: '12px 24px',
//                         borderRadius: '3px',
//                         border:'1px solid #61ce70'
//                     }}>Interested!</Link></div>

//                 </Col>

//                 <Col md="4" className={lServicesStyle.common}>

//                     <img src={'../../how_.png'} style={{height: '100px',width: '100px'}}/>

//                     <p className={lServicesStyle.heading}>How to's</p>

//                     <p className={lServicesStyle.body}>Create your how-to videos with professionals 
//                     in affordable budget within limited time and</p>

//                     <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/video" style={{
//                         fontWeight: '500',
//                         backgroundColor: '#61ce70',
//                         textDecoration:'none',
//                         color:'white',
//                         padding: '12px 24px',
//                         borderRadius: '3px',
//                         border:'1px solid #61ce70'
//                     }}>Interested!</Link></div>

//                 </Col>

//                 <Col md="4" className={lServicesStyle.common}>

//                     <img src={'../../animated_.png'} style={{height: '100px',width: '100px'}}/>

//                     <p className={lServicesStyle.heading}>Animated Explainers</p>

//                     <p className={lServicesStyle.body}>Hire animated explainers for an exclusive time 
//                     period to meet your goal with expected output.</p>

//                     <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/video" style={{
//                         fontWeight: '500',
//                         backgroundColor: '#61ce70',
//                         textDecoration:'none',
//                         color:'white',
//                         padding: '12px 24px',
//                         borderRadius: '3px',
//                         border:'1px solid #61ce70'
//                     }}>Interested!</Link></div>

//                 </Col>
//             </Row>

            
//             <Row style={{paddingLeft:'170px',paddingRight:'170px',paddingBottom:'60px'}}>
//             <hr></hr>
//                 <Col md="4" className={lServicesStyle.common}>

//                     <img src={'../../mini_.png'} style={{height: '100px',width: '100px'}}/>

//                     <p className={lServicesStyle.heading}>Mini Documentation</p>

//                     <p className={lServicesStyle.body}>Generating mini documentaries on 
//                     numerous ideas, events is much easier with Blackboard.</p>

//                     <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/video" style={{
//                         fontWeight: '500',
//                         backgroundColor: '#61ce70',
//                         textDecoration:'none',
//                         color:'white',
//                         padding: '12px 24px',
//                         borderRadius: '3px',
//                         border:'1px solid #61ce70'
//                     }}>Interested!</Link></div>

//                 </Col>

//                 <Col md="4" className={lServicesStyle.common}>

//                     <img src={'../../social_.png'} style={{height: '100px',width: '100px'}}/>

//                     <p className={lServicesStyle.heading}>Social / Mobile</p>

//                     <p className={lServicesStyle.body}>Grab your customized videos on
//                      Social/Mobile created by our in house professionals.</p>

//                     <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/video" style={{
//                         fontWeight: '500',
//                         backgroundColor: '#61ce70',
//                         textDecoration:'none',
//                         color:'white',
//                         padding: '12px 24px',
//                         borderRadius: '3px',
//                         border:'1px solid #61ce70'
//                     }}>Interested!</Link></div>

//                 </Col>
                
//                 <Col md="4" className={lServicesStyle.common}>

//                     <img src={'../../influencer_.PNG'} style={{height: '100px',width: '100px'}}/>

//                     <p className={lServicesStyle.heading}>Influencer</p>

//                     <p className={lServicesStyle.body}>Looking for an influencer to meet your 
//                     target in short time? Depict your demand to book the best influencer.</p>

//                     <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/video" style={{
//                         fontWeight: '500',
//                         backgroundColor: '#61ce70',
//                         textDecoration:'none',
//                         color:'white',
//                         padding: '12px 24px',
//                         borderRadius: '3px',
//                         border:'1px solid #61ce70'
//                     }}>Interested!</Link></div>

//                 </Col>
//             </Row>

           
//             <Row style={{paddingLeft:'170px',paddingRight:'170px'}}>
            
//                 <Col md="4" className={lServicesStyle.common}>

//                     <img src={'../../gif_.png'} style={{height: '100px',width: '100px'}}/>

//                     <p className={lServicesStyle.heading}>Animated GIFs</p>

//                     <p className={lServicesStyle.body}>Purchase your personalized GIFs from Blackboard 
//                     from the skilled professionals to make it more authentic.</p>

//                     <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/video" style={{
//                         fontWeight: '500',
//                         backgroundColor: '#61ce70',
//                         textDecoration:'none',
//                         color:'white',
//                         padding: '12px 24px',
//                         borderRadius: '3px',
//                         border:'1px solid #61ce70'
//                     }}>Interested!</Link></div>

//                 </Col>

//                 <Col md="4" className={lServicesStyle.common}>

//                     <img src={'../../cinemographers_.PNG'} style={{height: '100px',width: '100px'}}/>

//                     <p className={lServicesStyle.heading}>Cinemographs</p>
                    
//                     <p className={lServicesStyle.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//                      luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

//                     <div style={{fontSize: '20px',fontFamily:'Lato'}}><Link to="/video" style={{
//                         fontWeight: '500',
//                         backgroundColor: '#61ce70',
//                         textDecoration:'none',
//                         color:'white',
//                         padding: '12px 24px',
//                         borderRadius: '3px',
//                         border:'1px solid #61ce70'
//                     }}>Interested!</Link></div>
//                 </Col>
                
                
//             </Row>

//         </section>
//   </Layout>
// )

// export default LegalServicesPage


