import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Nav, NavDropdown,Navbar } from 'react-bootstrap'
// import { Search } from 'react-bootstrap-icons'
import headerStyle from './header.module.scss'
import PropTypes from "prop-types"
// import { Dropdown, Menu } from 'semantic-ui-react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp } from '@fortawesome/free-solid-svg-icons'
const Header = ({ siteTitle }) =>{
   
   return(
      <header>
         <div className={headerStyle.headerHeight}>
           <Row>
              <Col md="3">
               <img src={'../../bb-logo.png'} 
                        style={{
                           width:"350.10px", 
                           height:"89.04px",
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
                              color:'blue',
                           }}>
                              <Link to="/" className={headerStyle.nav_item}>HOME</Link>
                           </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                           <Nav.Link style={{
                              color:'blue',
                           }}>
                              <Link to="#" className={headerStyle.nav_item}>PORTFOLIO</Link>
                           </Nav.Link>
                        </Nav.Item>

                        <NavDropdown title="SERVICES"
                           ClassName = {headerStyle.activeNavItem} 
                        style={{
                              color:'blue',
                              textDecoration: 'none',
                              font: '20px',
                           }}
                           >

                           <NavDropdown.Item style={{paddingTop:'10px',paddingBottom:'10px'}}>
                               <Link to="/web-development" 
                               className={headerStyle.sub_menu}>Web Development</Link>
                           </NavDropdown.Item>

                           <NavDropdown.Item style={{paddingTop:'10px',paddingBottom:'10px'}}>
                              <Link to="/graphics-design" 
                              className={headerStyle.sub_menu}>Graphics Design</Link>
                           </NavDropdown.Item>

                           <NavDropdown.Item style={{paddingTop:'10px',paddingBottom:'10px'}}>
                              <Link to="/content-writing" 
                              className={headerStyle.sub_menu}>Content Writing </Link>
                           </NavDropdown.Item>

                           <NavDropdown.Item style={{paddingTop:'10px',paddingBottom:'10px'}}>
                              <Link to="/legal-&-business-services" 
                              className={headerStyle.sub_menu}>Legal & Business Services</Link>
                            </NavDropdown.Item>
                           
                           <NavDropdown.Item style={{paddingTop:'10px',paddingBottom:'10px'}}>
                               <Link to="digital-marketing" 
                               className={headerStyle.sub_menu}>Digital Marketing</Link>
                           </NavDropdown.Item>

                           <NavDropdown.Item style={{paddingTop:'10px',paddingBottom:'10px'}}>
                               <Link to="/event-management" 
                               className={headerStyle.sub_menu}>Event Management</Link>
                           </NavDropdown.Item>
                           
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
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
