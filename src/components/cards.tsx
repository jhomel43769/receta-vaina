'use client';
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex space-x-1 mt-2">
            {[...Array(5)].map((_, index) => (
                <FaStar key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'} />
            ))}
        </div>
    );
};

export const RecipeCards: React.FC = () => {
    const recipes = [
        {
            title: 'Tarta de Manzana',
            image: '/assets/tarta-manzana.jpg',
            description: 'Una deliciosa tarta con un toque dulce y crujiente.',
            rating: 5,
        },
        {
            title: 'Pasta Alfredo',
            image: '/assets/pasta-alfredo.jpg',
            description: 'Cremosa y deliciosa, perfecta para una cena especial.',
            rating: 4,
        },
        {
            title: 'Pan de Banana',
            image: '/assets/pan-banana.jpg',
            description: 'Suave y esponjoso, ideal para acompañar con café.',
            rating: 4,
        },
    ];

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-yellow-800 mb-6 text-center">Recetas Destacadas</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recipes.map((recipe, index) => (
                    <div key={index} className="bg-gradient-to-r from-yellow-100 via-white to-yellow-50 shadow-lg rounded-xl p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
                        <Image src={recipe.image} alt={recipe.title} width={500} height={300} className="w-full h-48 object-cover rounded-md" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-yellow-800 mb-2">{recipe.title}</h3>
                            <p className="text-gray-700 mb-4">{recipe.description}</p>
                            <StarRating rating={recipe.rating} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
