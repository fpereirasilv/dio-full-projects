import Item from './components/Item';
import Card from './components/Card'

const App = () => {
  return(
    <>
      <h1>Minha Primeira Aplicação com React</h1>
      <ul>        
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Card />
      </ul>
    </>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Word</h1>
//     </div>
//   );
// }

export default App;
