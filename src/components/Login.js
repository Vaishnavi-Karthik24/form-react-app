import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { AiFillWarning } from 'react-icons/ai'

const Login = () => {
  const USER_REGEX = /^[a-zA-Z_][a-zA-Z0-9-_]{3,23}$/
  const PASS_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-zd@$!%*?&].{8,24}$/
  const MAIL_REGEX = /\S+@\S+\.\S+/

  const [customer, setCustomer] = useState([
    { user: 'karthik', pwd: '@@12345Dfg', email: 'karthik@gmail.com' },
    { user: 'test', pwd: '@!12345D8fg', email: 'test@gmail.in' },
    { user: 'testname', pwd: '@#12345D6fg', email: 'testname@gmail.co' },
    { user: 'Shanthanu', pwd: '@%12345Dfg9', email: 'shan@gmail.com' },
  ])

  const userRef = useRef()
  const errRef = useRef()

  // Validates user
  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  // Validates email
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

  // Validates passwords
  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  // This variable determines whether password is shown or not
  const [isShown, setIsSHown] = useState(false)

  //   useEffect(() => {
  //     userRef.current.focus()
  //   }, [])

  const validInput = () => {
    let existsUser = customer.find(
      (x) => x.user === user && x.email === email && x.pwd === pwd
    )
    if (existsUser) {
      setSuccess(true)
      alert('Your Login was successful')
    } else {
      alert('Your Login is invalid')
      setErrMsg('Invalid Credentials')
    }
  }

  // Validate password
  useEffect(() => {
    const result = PASS_REGEX.test(pwd)
    console.log(result)
    console.log(pwd)
    setValidPwd(result)
  }, [pwd])

  // Validate email
  useEffect(() => {
    const result = MAIL_REGEX.test(email)
    console.log(result)
    console.log(email)
    setValidEmail(result)
  }, [email])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd, email])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUser('')
    setPwd('')
    let existsUser = customer.find(
      (x) => x.user === user && x.email === email && x.pwd === pwd
    )
    let items = { user, pwd, email }
    console.warn(items)
  }

  const errorMsg = 'Login failed'

  return (
    <>
      {success ? (
        <section className='successful-login pt-2'>
          {/* <h2>
            Dear
            <span
              className='user-name text-capitalize'
              style={{ paddingLeft: '0.2em', paddingRight: '0.2em' }}>
              {user},
            </span>
            You have successfully logged in
          </h2> */}
          <h2 className='mt-3' style={{ color: '#584a89' }}>
            Welcome to Dashboard
          </h2>
        </section>
      ) : (
        <section
          className='login-section login-page'
          style={{ marginTop: '1.5em' }}>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'>
            {errMsg}
          </p>
          <h1 className='text-center'>Login</h1>
          <form
            className='login-form mx-auto'
            style={{ width: 'fit-content' }}
            onSubmit={handleSubmit}>
            <div className='input-fields'>
              <label
                className='sr-only mb-2 fullname my-label w-auto'
                htmlFor='username'>
                Full Name
              </label>
              <input
                className='form-control form-control-lg'
                type='text'
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validName ? 'false' : 'true'}
                aria-describedby='usernote'
                placeholder='Your name'
                autoFocus
              />
              <p id='usernote' className={!user ? 'instructions' : 'offscreen'}>
                <span className='validatename mt-2'>
                  <AiFillWarning />
                  Name cannot be empty
                </span>
              </p>
            </div>
            <div className='input-fields'>
              <label
                className='sr-only mb-2 fullname my-label w-auto'
                htmlFor='email'>
                Email
              </label>
              <input
                className='form-control form-control-lg'
                type={isShown ? 'text' : 'email'}
                id='email'
                ref={userRef}
                value={email}
                autoComplete='on'
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? 'true' : 'false'}
                aria-describedby='mailnote'
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(true)}
                placeholder='Your email'
                aria-label='.form-control-lg example'
              />
              <p
                id='mailnote'
                className={
                  emailFocus && !validEmail ? 'instructions' : 'offscreen'
                }>
                <span className='validatemail mt-2'>
                  <AiFillWarning />
                  Please enter valid email address
                </span>
              </p>
            </div>
            <div className='input-fields'>
              <label
                className='sr-only mb-2 fullname my-label w-auto mt-3'
                htmlFor='password'>
                Password
              </label>
              <input
                className='form-control form-control-lg'
                type='password'
                id='password'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-describedby='passnote'
                placeholder='Your password'
              />
            </div>
            <div className='submit-btn mt-4'>
              <input
                className='btn btn-primary mx-auto w-100'
                type='submit'
                onClick={validInput}
                value='Sign In'
                style={{ backgroundColor: '#584a89', borderColor: '#584a89' }}
              />
            </div>
            <div className={validInput ? 'offscreen' : { errorMsg }}>
              {errorMsg}
            </div>
            <div className='regist mt-3'>
              <p>
                Not Registered ?
                <a href='#' className='mx-2'>
                  Click here to register
                </a>
              </p>
            </div>
          </form>
        </section>
      )}
    </>
  )
}

export default Login
