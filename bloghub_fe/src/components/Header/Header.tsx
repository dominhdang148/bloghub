import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav
                className="navbar navbar-expand-lg bg-dark"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    {/* Logo */}
                    <Link href={'/'} className="navbar-brand">
                        NovelHub
                    </Link>
                    {/* Menu Item */}
                    <div className="nav">
                    </div>
                    {/* Loginbutton */}
                </div>
            </nav>
        </header>
    );
};

export default Header;
