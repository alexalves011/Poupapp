import { Container } from "./components/Container";
import { Aside } from "./components/Aside";
import { SearchInput } from "./components/SearchInput";
import { Main } from "./components/Main/Index";
import {Typography} from "./components/Typography/index"

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput/>
        <div>
        <Typography variant="h1">
          Olá, Alex
        </Typography>
        <Typography variant="body">
          Veja como estão suas finanças hoje.
        </Typography>
        </div>
      </Main>
    </Container>
    
  );
}

export default App;
