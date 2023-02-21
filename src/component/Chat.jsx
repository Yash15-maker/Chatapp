import React from "react";
import SignOut from "./SignOut";
import { db, auth } from "../Firebase";
import SendMessage from "./SendMessage";

export default function Chat() {
  const scroll = React.useRef();

  const [messages, setMessages] = React.useState([]);
  React.useEffect(() => {
    db.collection("chats")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, name, uid ,photoURL}) => (
          <div key={id}>
            <div
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img
                style={{ height: "40px", width: "40px"}}
                
                src={photoURL}
                alt="ProfileImage"
              /> 
              
              <i>{name}</i>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}
