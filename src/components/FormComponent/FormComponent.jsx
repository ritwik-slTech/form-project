import './FormComponent.css'

import React from 'react'

const FormComponent = () => {
  return (
<form className="landing-form" >
      <div className='form-div'>
        <section><label htmlFor="name-input">Name: </label>
          <input id="name-input" type="text" />
        </section>

        <section><label htmlFor="famili-name">Family name: </label>
          <input id="family-name" type="text" />
        </section>

        <section><label htmlFor="country-code">Country Code: </label>
          <input id="country-code" type="number" />
        </section>


        <section><label htmlFor="phone-number">Phone Number: </label>
          <input id="phone-number" type="number" />
        </section>

        <section><label htmlFor="code">Code: </label>
          <input id="code" type="number" />
        </section>
      </div>
    </form>
  )
}

export default FormComponent