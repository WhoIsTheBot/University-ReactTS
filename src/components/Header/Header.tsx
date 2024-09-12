interface HeaderProps {
  onClickCart: () => void;
  onClickModal: () => void;
}



function Header({onClickCart, onClickModal}: HeaderProps) {
  return (
    <header>
      <ul className="none">
        <li className="btn-nav">SHOP</li>
        <li onClick={onClickModal} className="btn-nav">ABOUT</li>
      </ul>
      <h1 className="main-title">THE SIGMA STORY</h1>
      <ul>
        <li onClick={onClickModal} className="btn-nav none-min">ACCOUNT</li>
        <li onClick={onClickCart} className="btn-nav">CART</li>
      </ul>
    </header>
  );
}

export default Header;
