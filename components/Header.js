import React from 'react';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Link from 'next/link'
import { API, APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Search from './blog/Search'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false)

  const toggle = () => setIsOpen(!isOpen);

 
 const changeBackground = () => {
   let screenY = window.scrollY
   if(screenY >= 120){
     setNavbar(true)
   }else{
     setNavbar(false)
   }

 } 

 useEffect(() => {
  window.addEventListener('scroll',changeBackground)
 }, [])

  return (
    <React.Fragment>
      <Navbar expand="md" light className={navbar ? "navBar active" : "navBar"} >
        <NavbarBrand>
          <Link href="/">
            <NavLink className="navLogo">
              {/* {APP_NAME}  */}
              <img src="/images/logo2.png" alt="logo" />
            </NavLink>
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>


            <React.Fragment>
              <NavItem>
                <Search />
              </NavItem>
            </React.Fragment>

            <React.Fragment>
              <NavItem>
                <Link href="/blogs">
                  <NavLink style={{ cursor: 'pointer', margin: '0 10px' }}>
                   Blogs
                  </NavLink>
                </Link>
              </NavItem>
            </React.Fragment>

            {/* <React.Fragment>
              <NavItem>
                <Link href="/contact">
                  <NavLink style={{ cursor: 'pointer' }}>
                    Contact
                </NavLink>
                </Link>
              </NavItem>
            </React.Fragment> */}

            {isAuth() && isAuth().role === "admin" && (
                <React.Fragment>
                   <Link href="/admin">
                      <NavLink style={{ cursor: 'pointer' }}>
                          {`${isAuth().name}`}'s Dashboard
                        </NavLink>
                      </Link>
                </React.Fragment>
            )}
            {isAuth() && isAuth().role !== "admin" && (
                <React.Fragment>
                <Link href="/user">
                          <NavLink style={{ cursor: 'pointer' }}>
                            {`${isAuth().name}`}'s Dashboard
                          </NavLink>
                        </Link>
                </React.Fragment>
            )}

            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link href="/getStarted">
                    <NavLink style={{ cursor: 'pointer' }} className="getStartedBtn text-light">
                     <a> Get Started</a>
                    </NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}

            {isAuth() && (
              <React.Fragment>
              <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <NavLink style={{ cursor: 'pointer' }}>
                    <img
                      src={`${API}/user/photo/${isAuth().username}`}
                      className="img img-fluid"
                      style={{ height: '3rem', width: '3rem', borderRadius: '50%' }}
                      alt="user profile"
                    />
                  </NavLink>
                </DropdownToggle>
                <DropdownMenu right>
                  {/* <DropdownItem>
                    {isAuth() && isAuth().role === "admin" && (
                     
                        <Link href="/admin">
                          <NavLink style={{ cursor: 'pointer' }}>
                            {`${isAuth().name}`}'s Dashboard
                          </NavLink>
                        </Link>
                     
                    )}
                  </DropdownItem>
                  <DropdownItem>
                    {isAuth() && isAuth().role !== "admin" && (
                     
                        <Link href="/user">
                          <NavLink style={{ cursor: 'pointer' }}>
                            {`${isAuth().name}`}'s Dashboard
                          </NavLink>
                        </Link>
                     
                    )}
                  </DropdownItem> */}
                  <DropdownItem>
                    <Link href="/user/crud/blog">
                      <NavLink style={{ cursor: 'pointer' }}>
                        Create Blog
                      </NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    {isAuth() && (
                     
                        <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                          Logout
                        </NavLink>
                     
                    )}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>
              </React.Fragment>
            )}

          </Nav>
        </Collapse>
      </Navbar>
      {/* //search/// */}
    </React.Fragment>
  );
}

export default Header;