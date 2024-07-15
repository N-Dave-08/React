import Header from "./Header";
import Products from "./Products";
import Card from "./Card";
import Button from "./Button/Button";
import Bool from "./Bool";
import List from "./List";

function App() {

  const things = [
    { id: 1, name: 'chair', price: 12 },
    { id: 2, name: 'table', price: 22 },
    { id: 3, name: 'plates', price: 33 },
    { id: 4, name: 'cloth', price: 23 },
    { id: 5, name: 'glass', price: 35 },
  ];

  const foods = [
    { id: 1, name: 'apple', price: 10 },
    { id: 2, name: 'banana', price: 11 },
    { id: 3, name: 'mango', price: 34 },
    { id: 4, name: 'cake', price: 55 },
    { id: 5, name: 'rice', price: 9 },
  ];

  return (
    <>
      <Header></Header>
      <Button></Button>
      <Products></Products>
      <List items={things} category="Things"></List>
      <List items={foods} category="Foods"></List>
      <List></List>
      <List></List>
      <Bool Show={false} message="Show"></Bool>
      <Card name="Ice Cream" desc="this ice cream is tasty"></Card>
      <Card name="Green Apple" desc="this green apple is nasty"></Card>
      <Card></Card>
    </>
  );
}

export default App