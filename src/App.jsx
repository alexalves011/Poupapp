import { Container } from "./components/Container";
import { Aside } from "./components/Aside";
import { SearchInput } from "./components/SearchInput";
import { Main } from "./components/Main/Index";
import { Typography } from "./components/Typography/index";
import Card from "./components/Card/index.jsx";
import { DailyBudget } from "./components/DailyBudget/index.jsx";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <div>
          <Typography variant="h1">Olá, Alex</Typography>
          <Typography variant="body">
            Veja como estão suas finanças hoje.
          </Typography>
        </div>
        <section>
          <Card>
            <Card.Header>Orçamento diário disponivel:</Card.Header>
            <Card.Body> <DailyBudget value={250}/>  </Card.Body>
          </Card>
          <Card>
            <Card.Header>Orçamento diário disponivel:</Card.Header>
            <Card.Body>R$ 200</Card.Body>
          </Card>
          <Card>
            <Card.Header>Orçamento diário disponivel:</Card.Header>
            <Card.Body>R$ 200</Card.Body>
          </Card>
        </section>
      </Main>
    </Container>
  );
}

export default App;
