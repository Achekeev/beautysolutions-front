import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useTranslation } from 'react-i18next';
import About from '../../components/about1/about1';

const AboutPage = () => {
    const {t} = useTranslation()

    return <Layout title={t('whoAreWe')}>
        <About/>
    </Layout>;
};

export default AboutPage;
