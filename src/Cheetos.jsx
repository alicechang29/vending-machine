import { useNavigate } from 'react-router-dom';

function Cheetos() {
  const navigate = useNavigate();

  function handleClick(evt) {
    evt.preventDefault();
    navigate("/");
  }
  return (
    <div className="Cheetos">
      <h1>Orange fingers.</h1>
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
}

export default Cheetos;
