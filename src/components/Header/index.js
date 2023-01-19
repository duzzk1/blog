import logosvg from "../../svg/logo.svg";

const Header = () => {
  const descLogo = "Essa é a logo do site.";

  return (
    <>
      <header className="flex-space-between">
        <div className="">
          <img src={logosvg} alt={descLogo} className="logo" />
        </div>
        <div className="search">
          <input
            type="text"
            name="search"
            className="input-search"
            placeholder="Pesquisar"
          />
        </div>
        <div className="menu">
          <li>
            <a href="#" className="nav-link">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </div>
      </header>
    </>
  );
};

export default Header;
