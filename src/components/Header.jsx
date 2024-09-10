import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ROUSER</div>
      <nav className="nav">
        <a href="#" aria-label="Latest">
          LATEST
        </a>
        <a href="#" aria-label="Interventions">
          INTERVENTIONS
        </a>
        <a href="#" aria-label="About Rouser">
          ABOUT ROUSER
        </a>
      </nav>
    </header>
  );
};

export default Header;
