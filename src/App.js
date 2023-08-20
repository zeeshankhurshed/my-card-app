import Home from "./Components/Home";
import {products} from './db/db'


function App() {
  return (
   <>
   <Home products={products}/>
   </>
  );
}

export default App;
