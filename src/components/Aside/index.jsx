import logo from "../../assets/LogoPoupApp.svg";
import style from "./aside.module.css";

export const Aside = () => {
  return (
    <aside className={style.aside}>
      <img src={logo} alt="" />
      <footer className={style.footer}>
        Desenvolvido por Alura. Projeto Ficttício sem fins comerciais.
      </footer>
    </aside>
  );
};
