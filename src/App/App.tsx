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

  useEffect(() => {
    (async function() {
      const response = await axios.get('http://localhost:3001/rates');
      setRates(response.data);
    })();
  }, []);

  const onChangeFromRates = (value: number) => {
    const price = (value / rates[fromCurrency]) * rates[toCurrency];
    const totalPrice = price.toFixed(6)
    setFromValue(value);
    setToValue(+totalPrice); 
  }

  const onChangeToRates = (value: number) => {
    const price = (rates[fromCurrency] / rates[toCurrency] * value);
    const totalPrice = price.toFixed(6);
    setToValue(value);
    setFromValue(+totalPrice);
  }

  useEffect(() => {
    if(fromValue <= 0) {
      return;
    } else (onChangeFromRates(fromValue)) 
  }, [toCurrency]);

  useEffect(() => {
    if(toValue <= 0) {
      return;
    } else (onChangeToRates(toValue))
  }, [fromCurrency]);

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
