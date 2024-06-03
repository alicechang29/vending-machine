import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <Link to="/">Home</Link>
      <Link to="/potatochips">Potato Chips</Link>
      <Link to="/cheetos">Cheetos</Link>
      <Link to="/apple">Apple</Link>
    </nav>
  );
}
// end

export default Nav;
