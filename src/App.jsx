import { Container } from "./components/Container";
import { Aside } from "./components/Aside";
import { SearchInput } from "./components/SearchInput";
import { Main } from "./components/Main/Index";
import { Typography } from "./components/Typography/index";
import Card from "./components/Card/index.jsx";
import { DailyBudget } from "./components/DailyBudget/index.jsx";
import { SavingStatus } from "./components/SavingsStats/index.jsx";
import { Transactions } from "./components/Transactions/index.jsx";

import styles from "./App.module.css";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <div className={styles.Container}>
          <SearchInput />
          <div>
            <Typography variant="h1">Olá, Alex</Typography>
            <Typography variant="body">
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section className={styles.grid}>
            <Card>
              <Card.Header>Orçamento diário disponivel</Card.Header>
              <Card.Body>
                {" "}
                <DailyBudget value={250} />{" "}
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Progresso da meta financeira:</Card.Header>
              <Card.Body>
                <SavingStatus percent={90} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body>
                <Transactions />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Orçamento diário disponivel</Card.Header>
              <Card.Body>R$ 200</Card.Body>
            </Card>
          </section>
        </div>
      </Main>
    </Container>
  );
}

export default App;
