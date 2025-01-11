const Header = () => {
  return (
    <header className="main-header">
      <div className="left-section">
        <div className="logo">TECHYON</div>
        <div className="search-bar">
          <input type="search" placeholder="Search..." />
        </div>
      </div>
      <div className="right-section">
        <button className="notification-btn">
          <span className="notification-count">2</span>
        </button>
        <div className="user-profile">
          <img src="/avatar-placeholder.png" alt="User" />
        </div>
      </div>
    </header>
  );
};

export default Header;
