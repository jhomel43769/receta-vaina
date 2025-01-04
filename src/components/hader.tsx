'use client';
import React from 'react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
    return (
        <>
            <nav className="bg-gradient-to-r from-orange-400 to-yellow-300 p-4 shadow-md">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-white">Delicias Caseras</h1>
                    <ul className="flex space-x-6">
                        <li><Link href="#inicio" className="text-white hover:text-gray-800 transition-colors duration-200">Inicio</Link></li>
                        <li><Link href="#reseña" className="text-white hover:text-gray-800 transition-colors duration-200">Reseña</Link></li>
                        <li><Link href="#recetas" className="text-white hover:text-gray-800 transition-colors duration-200">Recetas</Link></li>
                    </ul>
                </div>
            </nav>

        </>
    );
};
