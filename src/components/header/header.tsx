import {Link} from 'react-router-dom';

function Header ():JSX.Element {
  return (
    <header className="header-content padding-container">
      <Link aria-current="page" to={'#'}>
        <img src="/images/alfa-logo.svg" width="227" height="80" alt="Логотип Альфа-банка."/>
      </Link>
    </header>
  );
}

export default Header;
