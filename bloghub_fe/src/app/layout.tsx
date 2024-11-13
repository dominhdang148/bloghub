import BootstrapLoader from '@/components/BootstrapLoader/BootstrapLoader';
import Header from '@/components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({
    children,
}) => {
    return (
        <html lang="en">
            <body>
                <BootstrapLoader />
                <Header />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
