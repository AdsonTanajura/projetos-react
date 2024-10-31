import './styles.css';
import useCalculadora from '../../hooks/useCalculadora';
const numbersKeys = ['1', '2', '3', '5', '4', '6', '7', '8', '9', '0'];
const Calculadora = () => {
  const {
    atual,
    calculo,
    diminuir,
    divisao,
    handleClear,
    handleClick,
    isResult,
    multiplicacao,
    result,
    resultado,
    soma,
  } = useCalculadora();

  return (
    <div className="container">
      <div className="up-display">
        <span>{!isResult ? calculo : result}</span>
      </div>
      <div className="down-display">
        <span>{atual}</span>
      </div>
      <div className="btn-container">
        <button onClick={handleClear} className="btn">
          AC
        </button>
        {numbersKeys.map((num) => (
          <button key={num} onClick={() => handleClick(num)} className="btn">
            {num}
          </button>
        ))}
        <button
          onClick={() => {
            soma();
          }}
          className="btn"
        >
          +
        </button>
        <button onClick={diminuir} className="btn">
          -
        </button>
        <button onClick={multiplicacao} className="btn">
          *
        </button>
        <button onClick={divisao} className="btn">
          /
        </button>
        <button onClick={resultado} className="btn">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculadora;
