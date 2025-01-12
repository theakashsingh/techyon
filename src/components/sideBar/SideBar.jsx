// import { Menu, Home, Folder, Globe, Grid, Moon } from 'lucide-react';
import './index.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <div className="sidebar__icons">
          {/* <Menu className="sidebar__icon" /> */}
          <div className="sidebar__divider" />
          
          {/* <Home className="sidebar__icon" />
          <Folder className="sidebar__icon" />
          <Globe className="sidebar__icon" />
          <Grid className="sidebar__icon" /> */}
          <div className="sidebar__divider" />
          
          {/* <Moon className="sidebar__icon" /> */}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;