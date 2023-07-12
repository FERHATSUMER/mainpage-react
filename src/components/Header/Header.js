import './header.css';
import { IoIosLogOut, IoIosNotifications } from 'react-icons/io';
import { AiOutlineBars } from 'react-icons/ai';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-title'>
        <h2>Yönetici Adı</h2>
        <h5>Yönetici</h5>
      </div>
      <div className='header-icons'>
        <AiOutlineBars />
        <IoIosNotifications />
        <IoIosLogOut />
      </div>
    </div>
  );
}

export default Header;
