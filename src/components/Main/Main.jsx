import styles from './Main.module.css'
import image from '../../assets/img/bg.jpg'

function Main () {
    return (
        <div className={styles.main}>
            <div className={styles['main-container']}>
            <h1 className={styles.head}>Search for books</h1>
        </div>
        </div>
    )
}
export default Main;