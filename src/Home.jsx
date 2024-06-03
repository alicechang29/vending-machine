import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1>Vending Machine.</h1>
      <div className="Home-snacks">
        <ul>
          <li><Link to="/potatochips">Potato Chips</Link></li>
          <li><Link to="/cheetos">Cheetos</Link></li>
          <li><Link to="/apple">Apple</Link></li>
        </ul>
      </div>
      <div className="Home-img">
        <img src="src/vendingMachine.jpeg"></img>
      </div>
    </div>
  );
}

export default Home;
