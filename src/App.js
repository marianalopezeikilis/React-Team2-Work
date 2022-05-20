import './App.css';
import {Link} from "react-router-dom";

function App() {

  return (
    <div >
      
      <nav>
      <Link to ="/mamiferos" >Mamiferos</Link>|{" "}
      <Link to ="/aves">Aves</Link>|{" "}
      <Link to ="/anfibios">Anfibios</Link>|{" "}
      <Link to ="/peces">Peces</Link>|{" "}
      <Link to ="/reptiles">Reptiles</Link>
      </nav>
    </div>
  );
}

export default App;
