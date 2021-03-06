import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Form,Button} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import indexStyle from './index.module.scss'
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
      <SEO title="Home" />
      <section class={indexStyle.sec1_row}>
        <div class={indexStyle.sec1_left}>
            <h3 class={indexStyle.sec1_title}>
              We are a digital marketing agency that delivers enterprise-level 
              strategy with local market activation.
            </h3>
        </div>

        <div class={indexStyle.sec1_right}>
            <img src={'../../home-page-02.png'} style={{
                height: '460px',
              width: '100%',
            }}/>
        </div>
      </section>

      <section style={{
        padding:'105px 0px 20px 0px',
        backgroundColor:'#f7f9fb',
        display:'block',
        zIndex:'1',
      }}>

        <div class={indexStyle.sec2_row}>
          <div class={indexStyle.sec2_left}>
              <div>
                
                 <p style={{
                color: 'rgb(17, 22, 51)',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '18px',
                fontWeight: '550',
                margin: '0px 0px 6px 0px',
              }}> <img src={'../../line.png'}/> Know Who We Are</p>
              </div>
              <div style={{
                margin: '0px 0px 20px 0px',
                fontFamily: 'Poppins, Sans-serif',
                fontSize: '40px',
                fontWeight: '700',
                fontStretch: 'extra-expanded'
              }}>
                About our company
              </div>
              <div style={{
                color: '#111633',
                fontSize: '15px',
                marginBottom: '10px',
                
              }}>
                <p style={{
                  margin: '0 0 30px',
                  wordSpacing: '-1px',
                lineHeight: '1.4',
                fontFamily:'montserrat'}}>
                    <b>BLACKBOARD</b> is a Bangladeshi digital-marketing agency, powered by the best talented,
                    dedicated and bangladeshi's first startup focused digital experts.
                </p>
              </div>
              <div style={{
                color: '#111633',
                fontSize: '15px',
                marginBottom: '10px',
                fontFamily:'montserrat',
                
              }}>
                <p style={
                  {margin: '0 0 30px',
                  wordSpacing: '-1px',
                lineHeight: '1.4',
                fontFamily:'montserrat'}}>
                    We provide Web Design & Development, Graphics Design , Logo Design, Digital marketing,
                    Legal & Business Support , Event Management and Training. 
                  </p>
              </div>
              <div style={{
                color: '#111633',
                fontSize: '15px',
                marginBottom: '10px',fontFamily:'montserrat',
                
              }}>
              <p style={{
                margin: '0 0 30px',
                wordSpacing: '-1px',
                lineHeight: '1.4',
                }}>
                    Over the years, we have provided specialist services to many clients in a varity of industries 
                    including travel,e-commerce, software firm and service provider.
                </p>   
              </div>
          </div>

          <div class={indexStyle.sec2_right}>
              <span style={{paddingLeft: '35px'}} ><img src={'../../our-company.png'} 
              width="500px" height="320px" style={{
                backgroundColor: 'black',
                // opacity: '0.5',
                position: 'absolute',
                marginTop:'40px',
              }}/></span>  
          </div>
        </div>
        
        
      </section>
      
      <section style={{padding:' 55px 0px 10px 0px',position:'relative',display:'block'}}>
          <div style={{ 
          }}>
              <div style={{
                textAlign: 'center',
              }}>
                <div style={{color: '#111633',
                margin: '0px 0px 1px 0px',
                fontFamily:'Lato, Sans-serif',
                fontSize: '40px',
                fontWeight: '900',
                wordSpacing: '-3px',}}>
                
                  What We Do
                </div>

                <div style={{
                  fontSize: '20px',
                  paddingBottom: '5px',
                  textAlign:"center",
                  fontFamily:'montserrat'
                }}>
               </div>

               <div>
                  <img src={'../../dot_dot.png'}/>
               </div>
              </div>
              
              <section style={{marginBottom:'-20px',paddingLeft:'170px',paddingRight:'10px'}}>
                  <div style={{width:'100%',display:'flex',paddingBottom:'0px'}}>
                      <div style={{width:'30%',}}
                      className={indexStyle.col}>
                          <div style={{padding: '30px 0px 10px 10px',}}>

                            <div style={{width:'100%',display:'flex'}} >
                              <div style={{width:'25%',marginRight:'13px'}}
                              className={indexStyle.circle}>
                                <img src={'../../web-development.png'}

                                  className ={indexStyle.image_item} 
                                />
                              </div>
                              <div style={{width:'65%'}}>
                                 <p className={indexStyle.heading}>Web Development</p>
                                 <p className={indexStyle.body}>
                                    The website is the face of an organization nowadays. 
                                    We always are there for you every step of the way, 
                                    from design & develop your website and taking your website to market.
                                 </p>
                              </div>
                            </div>
                            <div style={{width:'100%',display:'flex'}} >
                              <div style={{width:'24%',marginRight:'13px'}}>
                                
                              </div>
                              <div style={{width:'60%'}}>
                                <div className={indexStyle.button}>
                                  <Link to="/web-development" className={indexStyle.Rbutton}> Learn more </Link>
                                </div>
                                 
                                 {/* <p className={indexStyle.body}>A small river named Duden flow by their
                              place and supplies with the necessary.</p> */}
                              </div>
  
                                                        
                            </div>

                         </div>
                      </div>

                      <div style={{ width:'30%'}}
                      className={indexStyle.col}>
                          <div style={{padding: '30px 0px 10px 10px',}}>


                            <div style={{width:'100%',display:'flex'}} >
                              <div style={{width:'25%',marginRight:'13px'}}
                              className={indexStyle.circle}
                              >
                                <img src={'../../graphics-design.png'} className ={indexStyle.image_item} />
                              </div>
                              <div style={{width:'65%'}}>
                                 <p className={indexStyle.heading}>Graphics Design</p>
                                 <p className={indexStyle.body}>
                                    Design the future of organization with Blackboard. The in-house professionals are waiting
                                    for you. Illustrations, Logo Design, Micrographics & so on are now handy on this.
                                 </p>
                              </div>
                            </div>
                            <div style={{width:'100%',display:'flex'}} >
                              <div style={{width:'25%',marginRight:'13px'}}
                              // className={indexStyle.circle}
                              >
                                
                              </div>
                              <div style={{width:'60%'}}>
                                <div className={indexStyle.button}>
                                  <Link to="/graphics-design" className={indexStyle.Rbutton}> Learn more </Link>
                                </div>
                                 
                                 
                              </div>                          
                            </div>

                         </div>
                      </div>

                      <div style={{width:'30%',}}
                      className={indexStyle.col}>
                          <div style={{padding: '30px 0px 10px 10px',}}>


                            <div style={{width:'100%',display:'flex'}} >
                              <div style={{width:'25%',marginRight:'13px'}}
                              className={indexStyle.circle}
                              >
                                <img src={'../../content-writing.png'} className ={indexStyle.image_item} />
                              </div>
                              <div style={{width:'65%'}}>
                                 <p className={indexStyle.heading}>Content Writing</p>
                                 <p className={indexStyle.body}>
                                    Stop crawling to get perfect writing. Features article, Short form article,
                                      Listicles, Blog & many more. 
                                    Grab your desired articles from this website whenever you need it.
                                 </p>
                              </div>
                            </div>
                            <div style={{width:'100%',display:'flex'}} >
                              <div style={{width:'24%',marginRight:'13px'}}
                              // className={indexStyle.circle}
                              >
                                {/* <img src={'../../features-icon_img-3.png'}/> */}
                              </div>
                              <div style={{width:'60%'}}>
                                <div className={indexStyle.button}>
                                  <Link to="/content-writing" className={indexStyle.Rbutton}> Learn more </Link>
                                </div>
                                 
                                 {/* <p className={indexStyle.body}>A small river named Duden flow by their
                              place and supplies with the necessary.</p> */}
                              </div>                          
                            </div>

                         </div>
                      </div>

                  </div>

                  <div style={{width:'100%',display:'flex',paddingBottom:'30px'}} >

                      <div style={{ width:'30%', }}
                      className={indexStyle.col}>
                          <div style={{padding: '30px 0px 10px 10px',}}>


                            <div style={{width:'100%',display:'flex'}} >
                              <div style={{width:'25%',marginRight:'13px'}}
                              className={indexStyle.circle}
                              >
                                <img src={'../../legal-and-business.png'} className ={indexStyle.image_item}/>
                              </div>
                              <div style={{width:'65%'}}>
                                 <p className={indexStyle.heading}>Legal & Business</p>
                                 <p className={indexStyle.body}>
                                    A complete guideline on legal services related to individual 
                                    organization is now at your doorstep. We have brought a
                                      complete helpline for you to reduce your stress.
                                  </p>
                              </div>
                            </div>
                            <div style={{width:'100%',display:'flex'}} >
                              <div style={{width:'24%',marginRight:'13px'}}
                              // className={indexStyle.circle}
                              >
                                {/* <img src={'../../features-icon_img-3.png'}/> */}
                              </div>
                              <div style={{width:'60%'}}>
                                <div className={indexStyle.button}>
                                  <Link to="/legal-&-business-services" className={indexStyle.Rbutton}> Learn more </Link>
                                </div>
                                 
                                 {/* <p className={indexStyle.body}>A small river named Duden flow by their
                              place and supplies with the necessary.</p> */}
                              </div>                          
                            </div>

                         </div>
                      </div>

                      <div style={{
                        width:'30%',
                        
                      }}
                      className={indexStyle.col}>
                          <div style={{padding: '30px 0px 10px 10px',}}>


                            <div style={{width:'100%',display:'flex'}} >
                              <div style={{width:'25%',marginRight:'13px'}}
                              className={indexStyle.circle}
                              >
                                <img src={'../../digital-marketing.png'} className ={indexStyle.image_item}/>
                              </div>
                              <div style={{width:'65%'}}>
                                 <p className={indexStyle.heading}>Digital Marketing</p>
                                 <p className={indexStyle.body}>
                                    Every impression counts When it comes to capture customer online. 
                                    Your online image is essential to the success of your business. 
                                    our skilled professionals are waiting.
                                 </p>
                              </div>
                            </div>
                            <div style={{width:'100%',display:'flex'}} >
                              <div style={{width:'24%',marginRight:'13px'}}
                              // className={indexStyle.circle}
                              >
                                {/* <img src={'../../features-icon_img-3.png'}/> */}
                              </div>
                              <div style={{width:'60%'}}>
                                <div className={indexStyle.button}>
                                  <Link to="/digital-marketing" className={indexStyle.Rbutton}> Learn more </Link>
                                </div>
                                 
                                 {/* <p className={indexStyle.body}>A small river named Duden flow by their
                              place and supplies with the necessary.</p> */}
                              </div>                          
                            </div>

                         </div>
                      </div>

                      <div style={{
                        width:'30%',
                        
                      }}
                      className={indexStyle.col}>
                          <div style={{padding: '30px 0px 10px 10px',}}>


                            <div style={{width:'100%',display:'flex'}} >
                              <div style={{width:'25%',marginRight:'13px'}}
                              className={indexStyle.circle}
                              >
                                <img src={'../../event-management.png'} className ={indexStyle.image_item}/>
                              </div>
                              <div style={{width:'65%'}}>
                                 <p className={indexStyle.heading}>Event Management</p>
                                 <p className={indexStyle.body}>
                                    Organize your events at any time you want! Get in here,
                                      Dig deep to assemble your events as you imagine. 
                                    Now you can even customize your events with Blackboard.
                                 </p>
                              </div>
                            </div>
                            <div style={{width:'100%',display:'flex'}} >
                              <div style={{width:'24%',marginRight:'13px'}}
                              // className={indexStyle.circle}
                              >
                                {/* <img src={'../../features-icon_img-3.png'}/> */}
                              </div>
                              <div style={{width:'60%'}}>
                                <div className={indexStyle.button}>
                                  <Link to="/event-management" className={indexStyle.Rbutton}> Learn more </Link>
                                </div>
                                 
                                 {/* <p className={indexStyle.body}>A small river named Duden flow by their
                              place and supplies with the necessary.</p> */}
                              </div>                          
                            </div>

                         </div>
                      </div>

                  </div>

                  
              </section>


          </div>
      </section>
  
      <section style={{padding: '0px 0px 90px 0px',marginBottom:'0px'}}>

        <section style={{textAlign:'center',marginBottom:'0px'}}>
          
          <div style={{marginBottom:'15px'}}>
            <p style={{
              color: '#111633',
              margin: '0px 0px 8px 0px',
              fontFamily: 'Lato, Sans-serif',
              fontSize: '40px',
              fontWeight: '850',
            }}> Request a Call Back?</p>
          </div>

          <div style={{marginBottom:'8px'}}>
              <p style={{fontSize:'18px'}}>
                Lets have a Cup of Coffee !!!
              </p>
          </div>

          <div><img src={'../../dot_dot.png'}/></div>

        </section>
        
        <section style={{width:'100%',display:'flex'}}>
          <div style={{paddingLeft:'150px',width:'70%'}}> 
            <img src={'../../call-back-requeset.png'} style={{width:'80%', height:'480px'}}/>

          </div>
          <div style={{width:'50%'}}> 
              <div className={indexStyle.allSides}>
                <div style={{
                      color: 'rgb(1, 1, 1)',
                      fontFamily: 'poppins, Lato',
                      fontSize: '20px',
                      fontWeight: '720',
                      paddingTop: '67px',
                      wordSpacing: '1px',
                      paddingLeft: '63px',
                }}>
                    Make an appointment
                </div>
                <div style={{
                      fontFamily: 'Roboto, Sans-serif',
                      fontSize: '15px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      margin: '0px 0px 0px 0px',
                      color: 'rgba(0, 0, 0, 0.5)',
                      paddingLeft: '63px',
                      paddingTop: '11px',
                }}>
                   FOR ANY INQUERY
                </div>
                
                <div style={{
                      fontFamily: 'Roboto, Sans-serif',
                      paddingLeft: '53px',
                      paddingTop: '10px',
                }}>
                  <form name="Index_contact_form" method="post" data-netlify="true" netlify-honeypot="bot-field">
                      
                      <div style={{padding:'10px 10px 0px 10px'}}>
                        <label style={{
                              display: 'block',
                              fontWeight: '650',
                              fontSize: '15px',
                              float: 'none',
                              lineHeight: '1.3',
                              margin: '0 0 4px 0',
                              padding: '0',
                              fontFamily:'poppins, Lato'
                        }}>
                           Name <sup style= {{color:'red'}}>*</sup>
                        </label>
                        <section style={{
                          width:'90%',
                          display: 'flex'
                         }}>
                           <input type="text" name="name" id="name" style={{

                              backgroundColor: '#fff',             
                                borderRadius: '2px',
                                
                                color: '#333',
                                fontSize: '15px',
                                border: '1px solid #ccc',
                                padding:' 6px 10px',
                                height: '30px',
                                width: '100%',
                                lineHeight:'1.3',
                                
                             }} required/>

                        </section>

                      </div>
                      
                      <div style={{padding:'10px 10px 0px 10px'}}>
                        <label style={{
                             display: 'block',
                              fontWeight: '650',
                              fontSize: '15px',
                              float: 'none',
                              lineHeight: '1.3',
                              margin: '0 0 4px 0',
                              padding: '0',
                              fontFamily:'poppins, Lato'
                        }}>
                           Phone <sup style= {{color:'red'}}>*</sup>
                        </label>
                        <section style={{
                          width:'90%',
                          display: 'flex'
                         }}>
                           <input type="text" name="phone" id="phone" style={{

                              backgroundColor: '#fff',             
                                borderRadius: '2px',
                                
                                color: '#333',
                                fontSize: '15px',
                                border: '1px solid #ccc',
                                padding:' 6px 10px',
                                height: '30px',
                                width: '100%',
                                lineHeight:'1.3',
                                
                             }} required/>

                        </section>

                      </div>

                      <div style={{padding:'10px 10px 0px 10px'}}>
                        <label style={{
                              display: 'block',
                              fontWeight: '650',
                              fontSize: '15px',
                              float: 'none',
                              lineHeight: '1.3',
                              margin: '0 0 4px 0',
                              padding: '0',
                              fontFamily:'poppins, Lato'
                        }}>
                           Email 
                        </label>
                        <section style={{
                          width:'90%',
                          display: 'flex'
                         }}>
                           <input type="email" name="email" id="email" style={{

                              backgroundColor: '#fff',             
                                borderRadius: '2px',
                                
                                color: '#333',
                                fontSize: '15px',
                                border: '1px solid #ccc',
                                padding:' 6px 10px',
                                height: '30px',
                                width: '100%',
                                lineHeight:'1.3',
                                
                             }} />

                        </section>

                      </div>

                      <div style={{padding:'10px 10px 0px 10px',}}>
                        <label style={{
                              display: 'block',
                              fontWeight: '650',
                              fontSize: '15px',
                              float: 'none',
                              lineHeight: '1.3',
                              margin: '0 0 4px 0',
                              padding: '0',
                              fontFamily:'poppins, Lato'
                        }}>
                           Comment or Message <sup style= {{color:'red'}}>*</sup>
                        </label>

                        <section style={{
                          width:'100%',
                          display: 'flex'
                         }}>
                          <textarea name="message" id="message" rows="5" style={{

                                backgroundColor: '#fff',             
                                  borderRadius: '2px',
                                  color: '#333',
                                  fontSize: '15px',
                                  border: '1px solid #ccc',
                                  padding:' 6px 10px',
                                  width: '90%',
                                  lineHeight:'1.3',
                                  
                                }} required />
                        </section>
                      </div>
                      
                      <div style={{paddingLeft:'10px',paddingTop:'10px'}}>

                        <button type="submit" className={indexStyle.btn} style={{
                          fontSize:'18px'
                        }}>Submit</button>  
                      </div> 
                  </form>
                </div>
            
              </div>
          </div>
        </section>
        
      </section>


  </Layout>
)

export default IndexPage
