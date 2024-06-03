import { useNavigate } from 'react-router-dom';

function Apple() {
  const navigate = useNavigate();

  function handleClick(evt) {
    evt.preventDefault();
    navigate("/");
  }

  return (
    <div className="PotatoChips">
      <h1>An apple a day keeps the doctor away.</h1>
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
}

export default Apple;
