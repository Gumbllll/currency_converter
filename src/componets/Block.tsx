import styles from './Block.module.scss'

interface ICurrency {
    currency: string,
    setCurrency: (item: string) => void,
    valueR: number,
    setValue: (value: number) => void,
}

const Block: React.FC<ICurrency> = ({ currency, setCurrency, valueR, setValue }) => {

    const currencyList = ['RUB', 'USD', 'EUR', 'JPY'];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const total = +e.target.value;
        if (isFinite(total)) {
            setValue(total);
        }
    }
   
    return (
        <main className={styles.main}>
            <div className={styles.mainCurrency}>
                {currencyList.map((item) => <div key={item} onClick={() => setCurrency(item)} className={ item === currency ? styles.mainCurrencyItemActive : styles.mainCurrencyItem}>{item}</div>)}
            </div>
            <input onChange={handleChange} value={valueR} className={styles.mainInput}/>
        </main>
    )
}



export default Block;