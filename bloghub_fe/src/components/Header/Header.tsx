import {
    faBookJournalWhills,
    faFlagCheckered,
    faList,
    faSearch,
    faTags,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    <Link
                        href={'/'}
                        className="navbar-brand d-flex align-items-center gap-3"
                    >
                        <FontAwesomeIcon
                            icon={faBookJournalWhills}
                            className="border border-1 rounded-4 p-3 border-light"
                        />
                        <strong>NovelHub</strong>
                    </Link>
                    <button
                        className="navbar-toggler"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#menu-item"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Menu Item */}

                    <div
                        className="offcanvas offcanvas-end container-fluid"
                        tabIndex={-1}
                        id="menu-item"
                    >
                        <div className="offcanvas-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link d-flex gap-1 align-items-center"
                                        href={'#'}
                                    >
                                        <FontAwesomeIcon icon={faSearch} />
                                        <span>Search</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link d-flex gap-1 align-items-center"
                                        href={'#'}
                                    >
                                        <FontAwesomeIcon icon={faList} />
                                        <span>Categorys</span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link
                                        className="nav-link d-flex gap-1 align-items-center"
                                        href={'#'}
                                    >
                                        <FontAwesomeIcon icon={faTags} />
                                        <span>Tags</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link d-flex gap-1 align-items-center"
                                        href={'#'}
                                    >
                                        <FontAwesomeIcon
                                            icon={faFlagCheckered}
                                        />
                                        <span>Updates</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Loginbutton */}
                </div>
            </nav>
        </header>
    );
};

export default Header;
