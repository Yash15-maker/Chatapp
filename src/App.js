
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './Firebase.js'
import Login from './component/Login';
import Chat from './component/Chat';

function App() {
  const [user]= useAuthState(auth);
  return (
    <div className="App">
      {user?<Chat/>:<Login/>}
    </div>
  );
}

export default App;
