import React, {useState} from 'react'
// import PropTypes from 'prop-types'


export default function TextForm(props) {
  const [text , setText] = useState('Enter Text Here')

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleUpText = () => {
    let newt = text.toUpperCase()
    setText(newt)
    props.showAlert("Converted to UpperCase!","success")
  }
  const handleloText = () => {
    let newt = text.toLowerCase()
    setText(newt)
    props.showAlert("Convert to LowerCase","success")
  }
  const handlecopy = () => {
    let text = document.getElementById('mybox')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied the Clipboard","success")
  }
  const handleExtraSpaces = () => {
    let textremove = text.split(/[ ]+/);
    setText(textremove.join(" "))
    props.showAlert("Removed Extra Space","success")
  }

  const handleClearClick = () =>{
    setText('')
    props.showAlert("Cleared Text","success")
  }

  // const handleCapitalize = () =>{
  //   let textcapitalize = text.charAt(0).toUpperCase() + text.slice(1)
  //   setText(textcapitalize)
  // }
  
  
  return (
    <>
    
    <div className='container'> 
        <h3 style={{color : props.mode==='dark'?'white':'black'}}>{props.heading}</h3>
        <div className="mb-3" >
         <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} style={{backgroundColor:
        props.mode==='dark'?'#03182c':'white', color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpText}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleloText}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handlecopy}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
        {/* <button className='btn btn-primary mx-1' onClick={handleCapitalize}>Capitalize</button> */}
    </div>
    <div className='constainer my-2' style={{color : props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the TextBox above to Preview it here"}</p>
    </div>

    </>
  )
}


