import logo from './../../assets/images/logo.png';

function Header() {
    return (
        <header className="header" >
            <div className="logo">
                <img src={logo} alt="The gallery logo"  data-testid="logo"/>
            </div>
        </header>

    );
}

export default Header;
