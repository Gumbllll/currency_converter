import styles from './Block.module.scss'

interface ICurrency {
    currency: string,
    setCurrency: (item: string) => void,
    value: string,
    setValue: (value: string) => void,
}

const Block: React.FC<ICurrency> = ({ currency, setCurrency, value, setValue }) => {

    const currencyList = ['RUB', 'USD', 'EUR', 'JPY'];
    
    return (
        <main className={styles.main}>
            <div className={styles.mainCurrency}>
                {currencyList.map((item) => <div onClick={() => setCurrency(item)} className={ item === currency ? styles.mainCurrencyItemActive : styles.mainCurrencyItem}>{item}</div>)}
            </div>
            <input onChange={(e) => setValue(e.target.value)} value={value} className={styles.mainInput}/>
        </main>
    )
}



export default Block;