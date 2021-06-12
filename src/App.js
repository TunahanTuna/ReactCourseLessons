import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import Navi from './layouts/Navi';

// npx create-react-app hrms-frontend // React projesi oluşturur
function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>

    </div>
  );
}

export default App;
