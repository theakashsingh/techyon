import './index.scss';
// import { Menu, Search, Bell, Grid, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        {/* <Menu className="header__icon" /> */}
        <span className="header__logo">TECHYON</span>
      </div>
      
      <div className="header__right">
        {/* <Search className="header__icon" />
        <Grid className="header__icon" /> */}
        <div className="header__notification">
          {/* <Bell className="header__icon" /> */}
          <span className="header__badge">2</span>
        </div>
        {/* <User className="header__icon" /> */}
      </div>
    </header>
  );
};

export default Header;
