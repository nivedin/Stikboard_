import React from 'react';
import {useState,useEffect} from 'react';
import Router  from 'next/router';
import NProgress from 'nprogress';
import Link from 'next/link'
import {APP_NAME} from '../config';
import {signout,isAuth} from '../actions/auth'

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
  NavbarText
} from 'reactstrap';
import Search from './blog/Search'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0)

  const toggle = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(scrollPosition);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  

  return (
    <React.Fragment>
      <Navbar expand="md" light  className="navBar" >
        <Link href="/"> 
          <NavLink className="font-weight-bold">
            {APP_NAME} 
          </NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>

          
             <React.Fragment>
             <NavItem>
              <Link href="/blogs">
                <NavLink style={{ cursor: 'pointer' }}>
                  Blogs
                </NavLink>
              </Link>
            </NavItem>
             </React.Fragment>

             <React.Fragment>
             <NavItem>
              <Link href="/contact">
                <NavLink style={{ cursor: 'pointer' }}>
                  Contact
                </NavLink>
              </Link>
            </NavItem>
             </React.Fragment>
           

           {!isAuth() && (
             <React.Fragment>
             <NavItem>
              <Link href="/signin">
                <NavLink style={{ cursor: 'pointer' }}>
                  Signin
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/signup">
                <NavLink style={{ cursor: 'pointer' }}>
                  Signup
                </NavLink>
              </Link>
            </NavItem>
             </React.Fragment>
           )}

           {isAuth() && isAuth().role !== "admin" && (
              <NavItem>
               <Link href="/user"> 
               <NavLink style={{ cursor: 'pointer' }}>
                  {`${isAuth().name}`}'s Dashboard
                </NavLink>
               </Link>
              </NavItem>
            )}
           {isAuth() && isAuth().role === "admin" && (
              <NavItem>
               <Link href="/admin"> 
               <NavLink style={{ cursor: 'pointer' }}>
                  {`${isAuth().name}`}'s Dashboard
                </NavLink>
               </Link>
              </NavItem>
            )}
           {isAuth() && (
              <NavItem>
                <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                  Logout
                </NavLink>
              </NavItem>
            )}
            <NavItem>
              <Link href="/user/crud/blog">
                <NavLink className="btn btn-primary text-light" style={{ cursor: 'pointer' }}>
                  Create Blog
                </NavLink>
              </Link>
            </NavItem>
           
          </Nav>
        </Collapse>
      </Navbar>
      <Search/>
    </React.Fragment>
  );
}

export default Header;