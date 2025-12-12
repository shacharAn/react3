  import { useState } from "react";
  import UserSearch from "./UserSearch";
  import Timer from "./Timer";
  
  export default function App() {
    const [showTimer, setShowTimer] = useState(true);
  
    return (
  <div>
  <UserSearch />
  
        <hr />
  
        <button onClick={() => setShowTimer((prev) => !prev)}>
          Toggle Timer
  </button>
  
        {showTimer && <Timer />}
  </div>
    );
  }