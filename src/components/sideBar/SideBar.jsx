import { Menu, Home, Folder, Globe, Grid, Moon } from 'lucide-react';
import './index.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <div className="sidebar__icons">
          <Menu className="sidebar__icon" size={20} strokeWidth={1.5}/>
          <div className="sidebar__divider" />
          
          <Home className="sidebar__icon" size={20} strokeWidth={1.5}/>
          <Folder className="sidebar__icon" size={20} strokeWidth={1.5}/>
          <Globe className="sidebar__icon" size={20} strokeWidth={1.5}/>
          <Grid className="sidebar__icon" size={20} strokeWidth={1.5}/>
          <div className="sidebar__divider" size={20} strokeWidth={1.5}/>
          
          <Moon className="sidebar__icon" size={20} strokeWidth={1.5}/>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;