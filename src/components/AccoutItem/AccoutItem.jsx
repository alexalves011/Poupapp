import styles from "./AccoutItem.module.css";
import {IconBank} from "../icons/index"


export const AccoutItem = ({ item }) => {
  return (
    <div className={styles.accoutItem}>
      <div className={styles.bank}>
        <p> <IconBank/> {item.bank}</p>
      </div>

      <div className={styles.saldo}>
        <p>Saldo</p>
        <p>{item.balance}</p>
      </div>
    </div>
  );
};
