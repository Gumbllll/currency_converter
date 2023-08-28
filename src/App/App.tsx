import { useState } from 'react';
import Block from '../componets/Block';
import styles from './App.module.scss';

function App() {

  const [ fromCurrency, setFromCurrency ] = useState('RUB');
  const [ toCurrency, setToCurrency ] = useState('USD');
  const [ fromValue, setFromValue ] = useState('0');
  const [ toValue, setToValue ] = useState('0'); 


  return (
    <div className={styles.App}>
      <div className={styles.AppMain}>
        <Block currency={fromCurrency} setCurrency={setFromCurrency} value={fromValue} setValue={setFromValue} />
        <Block currency={toCurrency} setCurrency={setToCurrency} value={toValue} setValue={setToValue}/>
      </div> 
    </div>
  );
}

export default App;
