import styles from './searchinput.module.css'
import {IconSearch} from '../icons'

export const SearchInput = (props) => {

    return(
        <div className={styles.container}>
            <IconSearch />
            <input 
                type="text"
                placeholder="Pesquisar"
                className={styles.input}
                {...props}
            />
        </div>
    )

}