'use client';

import { useEffect } from 'react';

const BootstrapLoader = () => {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.js');
    }, []);
    return null;
};

export default BootstrapLoader;
