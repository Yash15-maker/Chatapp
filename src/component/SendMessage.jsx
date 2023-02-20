import React from "react";
import { auth, db } from "../Firebase";
import firebase from "firebase/compat/app";

export default function SendMessage({scroll}) {
  const [msg, setMsg] = React.useState("");
  async function submitForm(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await db.collection("chats").add({
      text: msg,
      uid,
      photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <div className="sendMsg">
        <form onSubmit={submitForm}>
          <input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="Message..."
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
          <button
            style={{
              width: "18%",
              fontSize: "15px",
              fontWeight: "550",
              margin: "4px 5% -13px 5%",
              maxWidth: "200px",
            }}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

