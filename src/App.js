import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headbar from './components/Headbar';
import ProfilePhoto from './components/ProfilePhoto';
import FullName from './components/FullName';
import Address from './components/Address';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Headbar />
      <ProfilePhoto />
      <FullName />
      <Address />
      <Footer />
    </div>
  );
}

export default App;
