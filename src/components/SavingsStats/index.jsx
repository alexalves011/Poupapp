import { IconSavings } from "../icons";
import { ProgressBar } from "../ProgressBar";
import styles from "./savinggsstatus.module.css";

export const SavingStatus = ({ percent }) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <IconSavings />
        <span>Economizar</span>
      </div>
      <ProgressBar percent={percent} />
    </div>
  );
};
