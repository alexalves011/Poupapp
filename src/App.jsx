import logo from "./assets/LogoPoupApp.svg";
import { Container } from "./components/Container";

function App() {
  return (
    <Container>
      <aside>
        <img src={logo} alt="" />
      </aside>
    </Container>
  );
}

export default App;
