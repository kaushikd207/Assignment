import { useState } from "react"

export default function FormBox({title}){

    const [data,setData]=useState({
        postHeading:'',
        duration:'',
        btnTarget:'',
        postContent:''
    })
    
    const {postHeading,duration,btnTarget,postContent}=data
    
    const handleChange=(e)=>{
        const {name,value}=e.target
        setData(prev=>({
            ...prev,
            [name]:value
        }))
    }

    return <div className="formCard">
    <div className="title">{title}  </div>
<div>
  <form className="communication">
      <div className="form-group">
          <label>Sticky Post Heading</label>
          <input onChange={handleChange} name='postHeading' value={postHeading} type="text" placeholder='Enter sticky post heading'/>
      </div>
      <div className="form-group">
          <label>Duration Of Post</label>
          <select onChange={handleChange} value={duration} name='duration'>
              <option value="2">2 hour</option>
              <option value="4">4 hour</option>
              <option value="6">6 hour</option>
          </select>
      </div>
      <div className="form-group">
          <label>Button Target</label>
          <select onChange={handleChange} name='btnTarget' value={btnTarget}>
              <option value="none">None</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
          </select>
      </div>
      <div className="form-group">
          <label>Sticky Post Content</label>
          <textarea onChange={handleChange} name='postContent' value={postContent} rows="4" placeholder='Enter Sticky Post Content'/>
      </div>
      <button type='submit'>SAVE</button>
  </form>

</div>
    </div>
}