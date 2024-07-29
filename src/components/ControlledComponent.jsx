import React,{useState} from 'react'

const ControlledComponent = () => {
    const [val, setval] = useState({name: "" ,email: ""})
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(val);
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input onChange={(event)=>setval({...val, name: event.target.value})} type="text"  placeholder='name' />
            <input onChange={(event)=>setval({...val, email:event.target.value})} type="email" name="email" id="" placeholder='email' />
            <input type="submit" value="submit" />
        </form>
      
    </div>
  )
}

export default ControlledComponent
