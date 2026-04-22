import styles from "./AccoutItem.module.css";

export const AccoutItem = ({ item }) => {
  return (
    <div className={styles.accoutItem}>
      <div className={styles.bank}>
        <p>{item.bank}</p>
      </div>

      <div className={styles.saldo}>
        <p>{item.balance}</p>
      </div>
    </div>
  );
};
