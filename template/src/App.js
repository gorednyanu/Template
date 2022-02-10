import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Template/Main';

function App() {
  return (
    <div>
      <Main></Main>
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Main></Main>} />
    //   </Routes>
    // </BrowserRouter>
    
  );
}

export default App;
