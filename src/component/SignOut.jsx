import React from 'react'
import { auth } from '../Firebase'
// import { auth } from 'firebase/auth'
function SignOut() {
 const {photoURL,displayName}=auth.currentUser;
  return (
    <div style={{display: "flex",justifyContent: "center"}}>
      <div style={{display: "flex",flexDirection: "row",justifyContent: "space-around",backgroundColor: "lightgreen",width: "100%",zIndex: "1"}}>
      <button style={{display: 'flex',marginTop: "20px",justifyContent: 'center',width: "20vh",textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue",boxShadow: "",height: "40px",alignItems: "center",fontSize: "20px"}} onClick={()=>{
            auth.signOut()
        }}>Sign Out</button>
      <img alt=".." src="google.png" style={{marginTop: "15px"}}/>
      <div style={{display: "flex",flexDirection: "row"}}>
        <img  alt=".." src={photoURL} style={{marginTop: "15px"}}/>
        <p style={{marginTop: "15px"}}>{displayName}</p>
        </div>
        </div>
    </div>
  )
}

export default SignOut
