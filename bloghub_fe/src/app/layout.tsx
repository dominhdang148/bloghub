import BootstrapLoader from '@/components/BootstrapLoader/BootstrapLoader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({
    children,
}) => {
    return (
        <html lang="en">
            <body>
                <BootstrapLoader />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
