import React, { useState } from "react";

function Form() {

  const [formData, setformData] = useState({
    firstName: "Flatiron",
    lastName: "Software Engineering",
    admin: false,
    submitted: [],
    errors: []
  })

    // name is the KEY in of the formData object we're trying to update
  function handleChange(event) {
    console.log('First: ', formData.firstName)
    console.log('Last: ', formData.lastName)
    const name = event.target.name
    let value = event.target.value

    if (event.target.type === "checkbox"){
      console.log("Are you subscribed :", formData.admin)
      value = event.target.checked
      setformData(event.target.checked)
    }

    setformData({...formData, [name]: value});
  }

  function handleSubmit(e, formData) {
    e.preventDefault()
    console.log(formData)
    if(formData.firstName > 0){
      const newFormData = {
        firstName: formData.firstName, 
        lastName: formData.lastName, 
        admin: formData.admin};
      setformData([...formData.submitted, newFormData])
      setformData.firstName("")
      setformData.lastName("")
      setformData.errors([])
    } 
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newsletter">Subscribe to Newsletter?</label>
      <input 
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin} />       
        <hr/>
      <input 
        type="text" 
        name="firstName"
        onChange={handleChange} 
        value={formData.firstName} />
      <input 
        type="text" 
        name="lastName"
        onChange={handleChange} 
        value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
