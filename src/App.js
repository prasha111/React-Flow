import logo from './logo.svg';
import './App.css';
import Header from './components/header';
//import F from './pages/firstPage';
import FirstPage from './pages/firstPage';
import { StrictMode } from 'react';
import { MessageProvider } from './components/messageProvider';

function App() {
  return (
    <div>
      <StrictMode>
        <MessageProvider>
        <FirstPage/>
        </MessageProvider>
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
