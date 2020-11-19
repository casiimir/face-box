import React from 'react';
import Tilt from 'react-tilt';

const SignIn = ({userName, onRouteChange}) => {
  return (
    <Tilt>
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
      <div className="pa4 black-80 center">
      <form className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0"><h1>FaceBox</h1></legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6">Name</label>
            <input onChange={userName} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
          </div>
        </fieldset>
        <div className="">
          <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
        </div>
      </form>
    </div>
    </article>
    </Tilt>
  )
}

export default SignIn;