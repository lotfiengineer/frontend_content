import { useState } from "react";
import GoodFormExample from "./components/GoodFormExample";
import UserList from "./components/UserList";
import { User } from "./types/User";
// import BadFormExample from "./components/BadFormExample";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <div className="app">
      <GoodFormExample users={users} setUsers={setUsers} />
      {/* <BadFormExample users={users} setUsers={setUsers} /> */}
      <UserList users={users} />
    </div>
  );
}

export default App;
