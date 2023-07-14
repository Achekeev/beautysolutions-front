import React from 'react';
import About from '../../components/about1/about1';
import Layout from '../../components/Layout/Layout';
import { useTranslation } from 'react-i18next';

const index = () => {
    const {t} = useTranslation()

    return <Layout title={t('whoAreWe')}>
        <About/>
    </Layout>;
};

export default index;
