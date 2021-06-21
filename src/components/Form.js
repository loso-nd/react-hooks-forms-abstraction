import React, { useState } from "react";

function Form() {

  const [formData, setformData] = useState({
    firstName: "Flatiron",
    lastName: "Software Engineering",
    admin: false,
    submitted: [{firstName: "Are you", lastName: "There"}],
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

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData.firstName)
    if(formData.firstName.length > 0){
      debugger;
      const newFormData = {
        firstName: formData.firstName, 
        lastName: formData.lastName, 
        admin: formData.admin,
        submitted: formData.submitted,
        errors: formData.errors};
      setformData(newFormData) // or setformData({...newFormData})
      console.log("Who are you: ",formData)
    } 
    else {
      setformData({...formData, errors: [...formData.errors, "Check yo self"]})
    }
  }

  const listOfSubmissions = formData.submitted.map((data, index) => {
    console.log(data.firstName)
    return (
      <ul key={index}>
        <li>{data.lastName}, {data.firstName}</li>
      </ul>  
    )
  })


  return (
    <div>
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
      {formData.errors.length > 0
        ? formData.errors.map((error, index) => (
        <p key={index} style={{ color: "red" }}>
          {error}
        </p>
        ))
        : null}
      <h3>List of Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;