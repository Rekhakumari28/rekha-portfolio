import React from 'react'
import { HashLink } from 'react-router-hash-link'

function BottumButton() {
  return (
    <div className='position-fixed bottom-0 end-0 p-3 '>
      <HashLink to="#hero" className='btn btn-success rounded-circle p-3' style={{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
</svg>
      </HashLink>
    </div>
  )
}

export default BottumButton
