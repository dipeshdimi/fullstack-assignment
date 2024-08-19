import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-div">
          <img src="/logo.jpg" alt="Logo" className="logo-img" />
          <div>
            <b>Abstract</b>
            <span>&ensp;|&ensp;Help Center</span>
          </div>
        </div>
        <button className="submit-request-button">Submit a request</button>
      </div>
    </header>
  );
};

export default Header;
