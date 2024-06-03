import { useNavigate } from 'react-router-dom';

function PotatoChips() {
  const navigate = useNavigate();

  function handleClick(evt) {
    evt.preventDefault();
    navigate("/");
  }
  return (
    <div className="PotatoChips">
      <h1>Potato Chips rock.</h1>
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
}

export default PotatoChips;
