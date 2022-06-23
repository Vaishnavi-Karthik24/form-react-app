import React from 'react'
// import { BrowserRouter as Routes, Route } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { AiOutlineCheck, AiOutlineClose, AiFillWarning } from 'react-icons/ai'
import Login from './Login'

const Register = () => {
  // Username and Password Validators
  const USER_REGEX = /^[a-zA-Z_][a-zA-Z0-9-_]{3,23}$/
  const PASS_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-zd@$!%*?&].{8,24}$/
  const MAIL_REGEX = /\S+@\S+\.\S+/

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

  // Validates gender
  const [gender, setGender] = useState('')

  // Validates dob
  const [dob, setDob] = useState('')
  const [validDob, setValidDob] = useState(false)

  // Validates passwords
  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  // Validates field match
  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setvalidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  // Success & Error messages
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState('')

  // To focus on user
  useEffect(() => {
    userRef.current.focus()
  }, [])

  // Validate username
  useEffect(() => {
    const result = USER_REGEX.test(user)
    console.log(result)
    console.log(user)
    setValidName(result)
  }, [user])

  // Validate password
  useEffect(() => {
    const result = PASS_REGEX.test(pwd)
    console.log(result)
    console.log(pwd)
    setValidPwd(result)
    const match = pwd === matchPwd
    setvalidMatch(match)
  }, [pwd, matchPwd])

  // Validate email
  useEffect(() => {
    const result = MAIL_REGEX.test(email)
    console.log(result)
    console.log(email)
    setValidEmail(result)
  }, [email])

  // Validate gender
  useEffect(() => {
    const result = gender
    console.log(result)
    console.log(gender)
    setValidEmail(result)
  }, [gender])

  // Validate dob
  useEffect(() => {
    const result = dob
    console.log(result)
    console.log(dob)
    setValidDob(result)
  }, [dob])

  // Error message
  useEffect(() => {
    setErrMsg('')
  }, [user, pwd, matchPwd])

  // This variable determines whether password is shown or not
  const [isShown, setIsSHown] = useState(false)

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown)
  }

  function getData() {
    console.log(localStorage.getItem('username'))
    console.log(localStorage.getItem('password'))
  }

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault()
    const v1 = USER_REGEX.test(user)
    const v2 = PASS_REGEX.test(pwd)
    const v3 = MAIL_REGEX.test(email)
    localStorage.setItem('username', user)
    localStorage.setItem('password', pwd)
    if (!v1 || !v2 || !v3) {
      setErrMsg('Invalid Entry')
      return
    }
    setSuccess(true)
  }

  return (
    <>
      {success ? (
        <section className='signins-section'>
          <h1
            className='text-center'
            style={{ fontSize: '20px', marginTop: '5em' }}>
            Welcome <span className='user-name text-capitalize'>{user}</span>,
            <span className='user-success d-block'>
              Your have successfully registered
            </span>
          </h1>
          <Login />
        </section>
      ) : (
        <section className='login-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-12 col-sm-12'></div>
              <div className='col-lg-4 col-md-12 col-sm-12 border-class'>
                <p
                  ref={errRef}
                  className={errMsg ? 'errmsg' : 'offscreen'}
                  aria-live='assertive'>
                  {errMsg}
                </p>
                <h1>Register</h1>
                <form className='register-form' onSubmit={handleSubmit}>
                  <label
                    className='sr-only mb-2 fullname my-label'
                    htmlFor='username'>
                    Full Name
                    <span className={validName ? 'valid checked' : 'hide'}>
                      <AiOutlineCheck />
                    </span>
                    <span
                      className={
                        validName || !user ? 'hide' : 'unchecked invalid'
                      }>
                      <AiOutlineClose />
                    </span>
                  </label>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    id='username'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={validName ? 'false' : 'true'}
                    aria-describedby='uidnote'
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(true)}
                    placeholder='Your name'
                    aria-label='.form-control-lg example'
                    autoFocus
                  />
                  <p
                    id='uidnote'
                    className={
                      userFocus && user && !validName
                        ? 'instructions'
                        : 'offscreen'
                    }>
                    <span className='validatename mt-2'>
                      <AiFillWarning />
                      It must contain minimum 4 characters
                    </span>
                  </p>

                  <label
                    className='sr-only mb-2 mt-3 email my-label'
                    htmlFor='email'>
                    Email Id
                    <span className={validEmail ? 'valid checked' : 'hide'}>
                      <AiOutlineCheck />
                    </span>
                    <span
                      className={
                        validEmail || !email ? 'hide' : 'unchecked invalid'
                      }>
                      <AiOutlineClose />
                    </span>
                  </label>

                  <input
                    className='form-control form-control-lg'
                    type={isShown ? 'text' : 'email'}
                    id='email'
                    ref={userRef}
                    value={email}
                    autoComplete='off'
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

                  <label
                    className='sr-only mb-2 mt-3 gender my-label'
                    htmlFor='gender'>
                    Gender
                    <span className={gender ? 'valid checked' : 'hide'}>
                      <AiOutlineCheck />
                    </span>
                    <span className={!gender ? 'invalid unchecked' : 'hide'}>
                      <AiOutlineClose />
                    </span>
                  </label>

                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='gender'
                      aria-describedby='gendernote'
                      value='Male'
                      id='flexRadioDefault1'
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexRadioDefault1'>
                      Male
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='gender'
                      aria-describedby='gendernote'
                      value='Female'
                      id='flexRadioDefault2'
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexRadioDefault2'>
                      Female
                    </label>
                  </div>
                  <p
                    id='gendernote'
                    className={!gender ? 'instructions' : 'offscreen'}>
                    <span className='validatemail mt-2'>
                      <AiFillWarning />
                      This field is mandatory
                    </span>
                  </p>

                  <label
                    className='sr-only mb-2 mt-3 dob my-label'
                    htmlFor='dob'>
                    Date of birth
                    <span className={dob ? 'valid checked' : 'hide'}>
                      <AiOutlineCheck />
                    </span>
                    <span className={!dob ? 'invalid unchecked' : 'hide'}>
                      <AiOutlineClose />
                    </span>
                  </label>
                  <div className='form-check dateof'>
                    <input
                      type='date'
                      className='dateofbirth'
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>

                  <label
                    className='sr-only mb-2 mt-3 password my-label'
                    htmlFor='password'>
                    Password
                    <span className={validPwd ? 'valid checked' : 'hide'}>
                      <AiOutlineCheck />
                    </span>
                    <span
                      className={
                        validPwd || !pwd ? 'hide' : 'unchecked invalid'
                      }>
                      <AiOutlineClose />
                    </span>
                  </label>
                  <input
                    className='form-control form-control-lg'
                    type={isShown ? 'text' : 'password'}
                    id='password'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? 'false' : 'true'}
                    aria-describedby='pwdnote'
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(true)}
                    placeholder='Your password'
                    aria-label='.form-control-lg example'
                  />
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      checked={isShown}
                      onChange={togglePassword}
                      value='false'
                      id='flexCheckDefault'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexCheckDefault'>
                      Show password
                    </label>
                  </div>
                  <p
                    id='pwdnote'
                    className={
                      pwdFocus && !validPwd ? 'instructions' : 'offscreen'
                    }>
                    <AiFillWarning />
                    <span className='validatepwd mt-2'>
                      It must contain minimum 8 to maximum 24 characters <br />
                      Must include uppercase and lowercase letters with atleast
                      one number and special characters.
                      <br />
                      Allowed characters
                      <span aria-label='at symbol' className='imp-char'>
                        @
                      </span>
                      <span aria-label='exclamation mark' className='imp-char'>
                        !
                      </span>
                      <span aria-label='hashtag' className='imp-char'>
                        #
                      </span>
                      <span aria-label='dollar sign' className='imp-char'>
                        $
                      </span>
                      <span aria-label='percent' className='imp-char'>
                        %
                      </span>
                      <span aria-label='ambrasent' className='imp-char'>
                        &
                      </span>
                      <span aria-label='asterik' className='imp-char'>
                        *
                      </span>{' '}
                      etc.
                    </span>
                  </p>

                  <label
                    className='sr-only mb-2 mt-3 confirm my-label'
                    htmlFor='confirmpwd'>
                    Confirm Password
                    <span
                      className={
                        validMatch && matchPwd ? 'valid checked' : 'hide'
                      }>
                      <AiOutlineCheck />
                    </span>
                    <span
                      className={
                        validMatch || !matchPwd ? 'hide' : 'unchecked invalid'
                      }>
                      <AiOutlineClose />
                    </span>
                  </label>

                  <input
                    className='form-control form-control-lg'
                    type={isShown ? 'text' : 'password'}
                    id='confirmpwd'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setMatchPwd(e.target.value)}
                    required
                    aria-invalid={validMatch ? 'false' : 'true'}
                    aria-describedby='confirmpwdnote'
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(true)}
                    placeholder='Confirm password'
                    aria-label='.form-control-lg example'
                  />
                  <p
                    id='confirmpwdnote'
                    className={
                      matchFocus && !validMatch ? 'instructions' : 'offscreen'
                    }>
                    <AiFillWarning />{' '}
                    <span>Must match the previous password input</span>
                  </p>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      checked={isShown}
                      onChange={togglePassword}
                      value='false'
                      id='flexCheckDefaults'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexCheckDefault'>
                      Show password
                    </label>
                  </div>
                  <div className='submit-btn mt-4'>
                    <input
                      className='btn btn-primary mx-auto w-100'
                      type='submit'
                      value='Sign Up'
                      onClick={getData}
                      disabled={
                        !validName ||
                        !dob ||
                        !gender ||
                        !validEmail ||
                        !validPwd ||
                        !validMatch
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div className='success-err'>{errMsg}</div>
                  {/* <div className='signin mt-4 text-center'>
                    Already signed in ?
                    <span className='d-block'>
                      <p> Click here to sign in</p>
                    </span>
                  </div> */}
                </form>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12'></div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Register
