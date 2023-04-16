import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
const handleSelecItem = (item: string) => {
  console.log(item);
};
function App() {
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelecItem}
      ></ListGroup>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
