import { useState } from "react";
import AddShore from "./components/AddShore/AddShore";
import ShoreList from "./components/ShoreList/ShoreList";

function App() {

  const [newShore, setNewShore] = useState("");

  const createShore = (thisShore) => {
    setNewShore(thisShore);
  }


  return (
    <div className="container">
      <h1>Shore List</h1>
      <AddShore ShoreShare={createShore} />
      <ShoreList shoresList={newShore} />
    </div>
  );
}

export default App;
