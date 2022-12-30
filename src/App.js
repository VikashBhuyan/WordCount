import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
function App() {
  return (
    <>
    <Navbar nameNav="Online Word Counter"/>
    <div className="container">
    <TextForms heading="Enter Text Here"/>  
    </div>
</>
  );
}

export default App;
