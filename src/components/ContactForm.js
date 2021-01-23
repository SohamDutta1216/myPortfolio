import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import MovingComponent from 'react-moving-text'
import './Styles.css'
import emailjs from 'emailjs-com';
import Bounce from 'react-reveal/Bounce';


function CreateState() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [complete, setComplete] = useState(false)
  return { name, setName, email, setEmail, subject, setSubject, message, setMessage, complete, setComplete }
}

export default function ContactForm() {
  const { name, setName, email, setEmail, subject, setSubject, message, setMessage, complete, setComplete } = CreateState()

  const resetForm = () => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    setComplete(true)
  }

  const emailValidation = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      return true
    }
    else {
      return false
    }
  }

  const contentValidation = () => {
    if (name.length > 0 && subject.length > 0 && message.length > 0) {
      return true
    } else {
      return false
    }
  }

  const click = (e) => {
    e.preventDefault()
    let templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message
    }
    emailjs.send('service_soham', 'template_soham', templateParams, 'user_HC18YiCW28WYlD9ry87FB')
    resetForm()
    setTimeout(() => { setComplete(false) }, 4000)
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="ui container">
        <Fade left>
          <div>
            <div className='tags'>
              <p>&lt; div &gt;</p>
              <br />
              <p>&lt; h1 &gt;</p>
              <br />
            </div>

            <div className='typeText'>
              <br />
              <MovingComponent type="typewriter"
                dataText={[
                  'Contact Me'
                ]} />
              <br />
            </div>

            <div className='tags'>
              <br />
              <p>&lt; /h1 &gt;</p>
              <br />
            </div>

            <div className='tags'>
              <p>&lt; input &gt;</p>
              <br />
            </div>
            <Bounce right cascade>
              {complete === true ?
                <div>
                  <div className="ui orange message">
                    <div className='header'>Message Sent</div>
                  </div>
                </div>
                :
                <div>

                </div>
              }
              <div className='ui inverted compact segment'>
                <form className='ui form attached fluid form'>
                  <div className='two fields'>
                    <div className='field'>
                      <input type='text' placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className='divider' />
                    <div className='field'>
                      <input type='email' placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                  </div>
                  <div className='divider' />
                  <div className='field'>
                    <input type='text' placeholder='subject' value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                  </div>
                  <div>
                    <div className='field'>
                      <textarea placeholder='message' rows='10' value={message} onChange={(e) => { setMessage(e.target.value) }} ></textarea>
                    </div>
                  </div>
                  <br />
                  {emailValidation(email) === true && contentValidation() === true ?
                    <div>
                      <button className='ui right floated orange button' onClick={click}>
                        SEND
                </button>
                    </div>
                    :
                    <div>
                      <button className='ui disabled right floated inverted button'>SEND</button>
                    </div>
                  }

                </form>
              </div>
            </Bounce>


            <div className='tags'>
              <br />
              <p>&lt; /input &gt;</p>
              <br />
            </div>

            <div className='tags'>
              <br />
              <p>&lt; div &gt;</p>
              <br />
              <br />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}