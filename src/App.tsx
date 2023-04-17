import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
const handleSelecItem = (item: string) => {
  console.log(item);
};
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelecItem}
      ></ListGroup>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
