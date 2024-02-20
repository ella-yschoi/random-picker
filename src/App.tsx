import { ThemeProvider } from '../src/contexts/ThemeProvider';
import RouteProvider from './Router';

function App() {
  return (
    <ThemeProvider>
      <RouteProvider/>
    </ThemeProvider>
  );
}

export default App;
