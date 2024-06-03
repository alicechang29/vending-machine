import Nav from "./Nav.jsx";
import RoutesList from "./RoutesList.jsx";
import { BrowserRouter } from 'react-router-dom';


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
};

export default App;
