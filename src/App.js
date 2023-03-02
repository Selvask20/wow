// import './App.css';
import{Routes,Route, BrowserRouter} from 'react-router-dom'
import Form from './componned/Form';
import Update from './componned/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form></Form>} ></Route>
        <Route path="/update" element={<Update></Update>} />

      </Routes>
      </BrowserRouter>
       
       

    </div>
  );
}

export default App;
