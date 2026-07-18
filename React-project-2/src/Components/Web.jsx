import React from 'react'
import { useState } from 'react'

function Web() {
 
  const [formData, setFormData] = useState({});
  
  console.log(formData)



   const handle = (e)=>{
    let {name , value} = e.target
    setFormData({...formData , [name]:value})
    
    }

  return (
    <div className="flex flex-col gap-2 ">
      <input name = "name" onChange={handle} type="text"placeholder='Name' className ="border-2 w-70 bg-teal-600 text-black-50 p-3 rounded-md" />
      <input name = "email" onChange={handle} type="text"placeholder='Email' className ="border-2 w-70 bg-teal-600 text-black-50 p-3 rounded-md" />
      <input name = "password" onChange={handle} type="text"placeholder='Password' className ="border-2 w-70 bg-teal-600 text-black-50 p-3 rounded-md" />
        
          <button className="bg-red-600 w-70 text-white-50 p-3 rounded-md hover:bg-red-700">Submit</button>

             <h1>This is - {formData.name}</h1>
          <h1>This is - {formData.email}</h1>
          <h1>This is - {formData.password}</h1>


    </div>
  )
}

export default Web