// import logo from './logo.svg';
import './App.css';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import BackgroundImagePage from './Component/Profile/BackgroundImagePage';





function App() {
  return (
    <div className="App">
      <BackgroundImagePage />
      <FullName />
      
      <ProfilePhoto />
      <Address />
     
    </div>
  );
}

export default App;
