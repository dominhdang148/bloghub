import BootstrapLoader from '@/components/BootstrapLoader/BootstrapLoader';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

config.autoAddCss = false;
const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({
    children,
}) => {
    return (
        <html lang="en">
            <body className="d-flex flex-column vh-100">
                <BootstrapLoader />
                <Header />
                <div className="container-fluid flex-grow-1">{children}</div>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
