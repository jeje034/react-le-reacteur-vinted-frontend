import Logo from "../assets/logo.3dcf8b02.png";

const Header = () => {
    return (
        <>
            <div className="header-main">
                <img src={Logo} alt="Vinted" className="header-logo" />
                <div className="header-button-group">
                    <button className="header-sign-up-login">S'inscrire</button>
                    <button className="header-sign-up-login">
                        Se connecter
                    </button>
                    <button className="header-sell-your-products">
                        Vends tes produits
                    </button>
                </div>
            </div>
            <div className="header-horizontal-line"></div>
        </>
    );
};

export default Header;