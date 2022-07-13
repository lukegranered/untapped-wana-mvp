import './App.css';
import '@progress/kendo-theme-default/dist/all.css'
import { IntakeDropdown } from './components/IntakeDropdown';
import { NewSession } from './components/NewSession';

function App() {
  return (
    <div className='App'>
      <NewSession />
    </div>
  );
}

export default App;
