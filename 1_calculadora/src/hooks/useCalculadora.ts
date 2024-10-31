import { useState } from 'react';

const useCalculadora = () => {
  const [calculo, setCalculo] = useState<string>('');
  const [atual, setAtual] = useState<string>('0');
  const [isResult, setIsResult] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');

  const handleClick = (valor: string) => {
    if (atual === '0') {
      setCalculo((antigo) => antigo + valor);
      return setAtual(valor);
    }
    setIsResult(false);
    setAtual((antigo) => antigo + valor);
    setCalculo((antigo) => antigo + valor);
  };

  const handleClear = () => {
    setIsResult(false);
    setAtual('');
    setCalculo('');
  };

  const soma = () => {
    setIsResult(false);
    setCalculo((antigo) => antigo + ' + ');
    setAtual('');
  };

  const divisao = () => {
    setIsResult(false);
    setCalculo((antigo) => antigo + ' / ');
    setAtual('');
  };

  const multiplicacao = () => {
    setIsResult(false);
    setCalculo((antigo) => antigo + ' * ');
    setAtual('');
  };

  const diminuir = () => {
    setIsResult(false);
    setCalculo((antigo) => antigo + ' - ');
    setAtual('');
  };

  const resultado = () => {
    setIsResult(true);
    const resultado = eval(calculo);
    setResult(calculo + ' = ' + resultado);
    setCalculo(resultado);
    setAtual(resultado);
  };

  return {
    calculo,
    atual,
    isResult,
    result,
    handleClick,
    handleClear,
    soma,
    divisao,
    multiplicacao,
    diminuir,
    resultado,
  };
};

export default useCalculadora;
