import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '@/lib/auth';
import { LandingPageJsx } from './landing-page';
import { PetServicesHero } from './pet-services-hero';
import TestimonialCarousel from './TestimonialCarousel';
import { HowItWorks } from './how-it-works';
import { FetchBanner } from './fetch-banner';
import { FooterComponent } from './footer';

export default function Home({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            onLogout(); 
            navigate('/'); 
        } catch (error) {
            console.error('Error al intentar cerrar sesión:', error);
        }
    };

    return (
        <>
            <LandingPageJsx onLogout={handleLogout} />
            <PetServicesHero />
            <TestimonialCarousel/>
            <HowItWorks/>
            <FetchBanner/>
            <FooterComponent/>
        </>
    );
}
