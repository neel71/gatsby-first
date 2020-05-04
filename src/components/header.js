import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Nav, NavDropdown,Navbar } from 'react-bootstrap'
// import { Search } from 'react-bootstrap-icons'
import headerStyle from './header.module.scss'

// import { Dropdown, Menu } from 'semantic-ui-react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp } from '@fortawesome/free-solid-svg-icons'
const Header = () =>{
   
   return(
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
                        <Nav.Item>
                           <Nav.Link style={{
                              color:'white',
                           }}>
                              <Link to="/" className={headerStyle.nav_item}>HOME</Link>
                           </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link style={{
                              color:'white',
                           }}>
                              <Link to="#" className={headerStyle.nav_item}>PORTFOLIO</Link>
                           </Nav.Link>
                        </Nav.Item>
                        <NavDropdown title="SERVICES"
                           ClassName = {headerStyle.activeNavItem} 
                        style={{
                              color:'white',
                              textDecoration: 'none',
                              font: '20px',
                           }}
                           >

                           <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                           <Link to="/web-development" style={{
                              color:'black',
                              textDecoration: 'none',
                              fontWeight: 'bold',
                              fontSize:'17.5px',
                           }}>Web Development</Link></NavDropdown.Item>
                           <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}><Link to="/graphics-design" style={{
                              color:'black',
                              textDecoration: 'none',
                              fontWeight: 'bold',
                              fontSize:'17.5px',
                           }}>Graphics Design</Link></NavDropdown.Item>
                           <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}><Link to="/content-writing" style={{
                              color:'black',
                              textDecoration: 'none',
                              fontWeight: 'bold',
                              fontSize:'17.5px',
                           }}>Content Writing</Link></NavDropdown.Item>
                           <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}><Link to="/legal-&-business-services" style={{
                              color:'black',
                              textDecoration: 'none',
                              fontWeight: 'bold',
                              fontSize:'17.5px',
                           }}>Legal & Business Services</Link></NavDropdown.Item>
                           {/* <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}><Link to="/photography" style={{
                              color:'black',
                              textDecoration: 'none',
                              fontWeight: 'bold',
                              fontSize:'16.5px',
                           }}>Photography</Link></NavDropdown.Item>
                           <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}><Link to="/video" style={{
                              color:'black',
                              textDecoration: 'none',
                              fontWeight: 'bold',
                              fontSize:'16.5px',
                           }}>Video</Link></NavDropdown.Item> */}
                           <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                           <Link to="digital-marketing" style={{
                              color:'black',
                              textDecoration: 'none',
                              fontWeight: 'bold',
                              fontSize:'17.5px',
                           }}>Digital Marketing</Link></NavDropdown.Item>
                           <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}>
                           <Link to="/event-management" style={{
                              color:'black',
                              textDecoration: 'none',
                              fontWeight: 'bold',
                              fontSize:'17.5px',
                           }}>Event Management</Link></NavDropdown.Item>
                           {/* <NavDropdown.Item style={{paddingTop:'15px',paddingBottom:'15px'}}><Link to="/training" style={{
                              color:'black',
                              textDecoration: 'none',
                              fontWeight: 'bold',
                              fontSize:'17.5px',
                           }}>Training & Recruitment</Link></NavDropdown.Item> */}
                        </NavDropdown>
                        <Nav.Item>
                           <Nav.Link>
                              <Link to="/contact" className={headerStyle.nav_item}>CONTACT</Link>
                           </Nav.Link>
                        </Nav.Item>
                       
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
    )
   
}
export default Header
