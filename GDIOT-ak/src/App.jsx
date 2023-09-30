import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './pages/Dashboard';
import Beneficiaries from './pages/Beneficiaries';
import Centers from './pages/Centers';
import Interventions from './pages/Interventions';
import Help from './pages/Help';
import Sidebar from './components/Sidebar';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
        <BrowserRouter>
          <Sidebar>
            <Routes>
                  <Route path="/dashboard" element={<Dashboard/>}></Route>
                  <Route path="/beneficiaries" element={<Beneficiaries/>}></Route>
                  <Route path="/centers" element={<Centers/>}></Route>
                  <Route path="/interventions" element={<Interventions/>}></Route>
                  <Route path="/help&settings" element={<Help/>}></Route>
            </Routes>
          </Sidebar>
        </BrowserRouter>
       
      </div>
     

  );
}

export default App;
