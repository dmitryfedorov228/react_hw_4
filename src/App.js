import Button from "./components/Button/Button";
import Buttons from "./components/changeButtons";
import Input from "./components/Input/Input";
import List from "./components/List/List";

const todos = [
  {
      title: 'Go to School!',
      isCompleted: false
  },
  {
      title: 'Buy milk!',
      isCompleted: true
  },
  {
      title: 'Drive a Car!',
      isCompleted: false
  },
]


function App() {
  return (
    <div className="App">
     <Button color={'red'} width={'200px'} fontSize={'15px'}/>
     <Input border={'5px solid green'} backgroundColor={'aqua'} color={'gray'} />
     <List data={todos}/>
     <Buttons />
     
    </div>
  );
}

export default App;
