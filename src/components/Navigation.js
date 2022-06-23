import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from 'react-router-dom'
import Logo from '../../src/logo.png.webp'
import Link from '@mui/material/Link'
import Login from '../components/Login'
import Register from './Register'
const Navigation = () => {
  return (
    <>
      <Router>
        <div
          className='navigate'
          id='navigate'
          style={{ backgroundColor: '#584a89' }}>
          <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <a className='navbar-brand' href='#'>
                <img
                  src={Logo}
                  className='logo-img'
                  alt='Logo'
                  title='iTech India Pvt Ltd'
                />
              </a>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>

              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                  <li className='nav-item'>
                    <NavLink to='/'>Register</NavLink>
                    {/* <a className='nav-link' href='#'>
                      Register
                    </a> */}
                  </li>
                  <li className='nav-item'>
                    <NavLink exact='true' to='/login'>
                      Login
                    </NavLink>
                    {/* <a className='nav-link' href='#'>
                    Login
                  </a> */}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <Routes>
          <Route
            key='/login'
            path='/login'
            element={
              <React.Fragment>
                <Login />
              </React.Fragment>
            }
          />
          <Route
            key='/register'
            path='/'
            element={
              <React.Fragment>
                <Register />
              </React.Fragment>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default Navigation
