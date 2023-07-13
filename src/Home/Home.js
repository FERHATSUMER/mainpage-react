import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import UserPanel from '../components/UserPanel/UserPanel';
import './home.css';
function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className='home-container'>
     <UserPanel />
      </div>
    </div>
  );
}

export default Home;
