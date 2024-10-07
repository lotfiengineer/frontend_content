import { useState } from "react";
import SampleForm from "./components/GoodFormExample";
import UserList from "./components/UserList";
import { User } from "./types/User";
// import BadFormExample from "./components/BadFormExample";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <div className="app">
      <SampleForm users={users} setUsers={setUsers} />
      {/* <BadFormExample users={users} setUsers={setUsers} /> */}
      <UserList users={users} />
    </div>
  );
}

export default App;
