import './header.css';
import { IoIosLogOut, IoIosNotifications } from 'react-icons/io';
import { AiOutlineBars, AiFillMail } from 'react-icons/ai';
import { SiDash } from 'react-icons/si';
import { MdPhoneInTalk } from 'react-icons/md';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-title'>
        <SiDash />
        <h2>Yönetici Adı</h2>
        <div className='header-communication'>
          <a href='tel:555555555555' className='header-phone'>
            <MdPhoneInTalk />
          </a>
          <a href='mailto:' className='header-mail' >
            <AiFillMail />
          </a>
        </div>
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
