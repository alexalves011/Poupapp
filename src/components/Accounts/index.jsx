import { Button } from "../Button";
import { AccoutItem } from "../AccoutItem/AccoutItem.jsx";
import { IconWallet } from "../icons/index";
import styles from "./Accouts.module.css";

export const Accounts = () => {
  const MyAccounts = [
    {
      bank: "AnyBank",
      balance: "1200,00",
    },
    {
      bank: "ByteBank",
      balance: "800,00",
    },
    {
      bank: "nuBank",
      balance: "1800,00",
    },
  ];

  return (
    <>
      <ul className={styles.list}>
        {MyAccounts.map((item, index) => {
          return (
            <li key={index}>
              <AccoutItem item={item}></AccoutItem>
            </li>
          );
        })}
      </ul>

      <div className={styles.actions}>
        <Button>
          {" "}
          <IconWallet /> Adicionar Transação
        </Button>
      </div>
    </>
  );
};
