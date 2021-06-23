import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headbar from './components/Headbar';
import ProfilePhoto from './components/ProfilePhoto';
import FullName from './components/FullName';
import Address from './components/Address';
import Footer from './components/Footer';

function App() {
  return (
    <div className="Container">
      <Headbar />
      <div className="row">
        <div className="col-4">
          <ProfilePhoto />
        </div>
        <div className="col-4">
          <FullName />
        </div>
        <div className="col-4">
          <Address />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
