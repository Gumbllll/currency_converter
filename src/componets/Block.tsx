import styles from './Block.module.scss'

const Block = () => {

    const currency = ['RUB', 'USD', 'EUR', 'JPY'];

    return (
        <main className={styles.main}>
            <div className={styles.mainCurrency}>
                {currency.map(item => <div className={styles.mainCurrencyItem}>{item}</div>)}
            </div>
            <input className={styles.mainInput} type="text" />
        </main>
    )
}

export default Block;