import logo from './logo.svg';
import './App.css';
import Header from './components/header';
//import F from './pages/firstPage';
import FirstPage from './pages/firstPage';
import { StrictMode } from 'react';

function App() {
  return (
    <div>
      <StrictMode>
      <FirstPage/>
      </StrictMode>
      </div>
 
    //     <BrowserRouter>
    //   <Routes>
    //     <Route path="/header" element={<Header />}>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  
  );
}

export default App;
