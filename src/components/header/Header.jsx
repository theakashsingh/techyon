import './index.scss';
import { Search, Bell, Grid, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <span className="header__logo">TECHYON</span>
      </div>
      
      <div className="header__right">
        <Search className="header__icon" size={20} strokeWidth={1.5}/>
        <Grid className="header__icon" size={20} strokeWidth={1.5}/>
        <div className="header__notification" size={20} strokeWidth={1.5}>
          <Bell className="header__icon" size={20} strokeWidth={1.5}/>
          <span className="header__badge">2</span>
        </div>
        <User className="header__icon" size={20} strokeWidth={1.5}/>
      </div>
    </header>
  );
};

export default Header;
