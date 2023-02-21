import React from "react";
import { auth, db } from "../Firebase";
import firebase from "firebase/compat/app";
export default function SendMessage({ scroll }) {
  const [msg, setMsg] = React.useState("");
  const enabled = msg.length > 0;
  async function submitForm(e) {
    e.preventDefault();
    const { uid, photoURL,displayName } = auth.currentUser;
    await db.collection("chats").add({
      text: msg,
      uid,
      photoURL,
      name: displayName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <div className="sendMsg">
        <form onSubmit={submitForm}>
          <div style={{width: "100%",display: "flex",flexDirection: "row",justifyContent:"space-between",position: "relative",left: "100vh",margin: "auto" }}>
          <input
            style={{
              width: "50vh",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "3px",
              borderRadius: "100px"
            }}
            placeholder="Message..."
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
          <button
            style={{
              fontSize: "15px",
              fontWeight: "550",
              margin: "4px 5% 5px 5%",
              maxWidth: "200px",
            }}
            type="submit"
            disabled={!enabled}
          >
            Send
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
