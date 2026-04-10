import { IconSavings } from "../icons";
import styles from "./savinggsstatus.module.css";

export const SavingStatus = ({ percent }) => {
  return (
    <div className={styles.container}>
      <IconSavings />
      <p>Economizar</p>
    </div>
  );
};
