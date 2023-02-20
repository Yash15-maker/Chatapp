import React from 'react'
import { auth } from '../Firebase'

function SignOut() {
  return (
    <div>
        <button style={{display: 'flex',justifyContent: 'center'}} onClick={()=>{
            auth.signOut()
        }}>Sign Out</button>
    </div>
  )
}

export default SignOut