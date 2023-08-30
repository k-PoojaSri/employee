import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Registration } from './component/register/reg';
import { Emp } from './component/employe_detail/empdata';

function App() {
  return (
   <>
    <BrowserRouter>
   <Routes>
   <Route path='/' element={[<Registration/>]}/>
   <Route path='/empdata' element={[<Emp/>]}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
