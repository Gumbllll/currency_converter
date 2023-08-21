import Block from '../componets/Block';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.AppMain}>
        <Block/>
        <Block/>
      </div> 
    </div>
  );
}

export default App;
