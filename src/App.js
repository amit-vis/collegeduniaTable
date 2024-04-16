
import './App.css';
import { TableSection } from './Component/TableComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TableProvider } from './context/TableContext';

function App() {
  return (
    <div className="App">
      <TableProvider>
      <TableSection/>
      </TableProvider>
    </div>
  );
}

export default App;
