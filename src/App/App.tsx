import { useEffect, useState } from 'react';
import Block from '../componets/Block';
import styles from './App.module.scss';
import axios from 'axios';

interface IRates {
  [key: string]: number;
}

function App() {

  const [ fromCurrency, setFromCurrency ] = useState('RUB');
  const [ toCurrency, setToCurrency ] = useState('USD');
  const [ fromValue, setFromValue ] = useState(0);
  const [ toValue, setToValue ] = useState(0); 
  const [rates, setRates] = useState<IRates>({});

  console.log(fromValue);

  useEffect(() => {
    (async function() {
      const response = await axios.get('http://localhost:3001/rates');
      setRates(response.data);
    })();
  }, []);

  console.log(rates[fromCurrency]);

  const onChangeFromRates = (value: number) => {
    const price = (value / rates[fromCurrency]) * rates[toCurrency];
    setFromValue(value);
    setToValue(+price.toFixed(6)); 
  }

  const onChangeToRates = (value: number) => {
    const price = (rates[fromCurrency] / rates[toCurrency] * value);
    setFromValue(+price.toFixed(6));
    setToValue(value);
  }

  // useEffect(() => {
  //   onChangeFromRates(fromValue);
  // }, [toCurrency, toValue]);

  // useEffect(() => {
  //   onChangeToRates(toValue);
  // }, [fromCurrency, fromValue])

  return (
    <div className={styles.App}>
      <div className={styles.AppMain}>
        <Block currency={fromCurrency} setCurrency={setFromCurrency} valueR={fromValue} setValue={onChangeFromRates} />
        <Block currency={toCurrency} setCurrency={setToCurrency} valueR={toValue} setValue={onChangeToRates}/>
      </div> 
    </div>
  );
}

export default App;
