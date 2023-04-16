import ListGroup from "./components/ListGroup";
let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

function App() {
  return (
    <div>
      <ListGroup items={items} heading={"Cities"}></ListGroup>
    </div>
  );
}

export default App;
