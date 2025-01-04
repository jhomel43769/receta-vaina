import React from "react";

const reviews = [
  {
    title: "Restaurante La Boquería",
    content:
      "Una experiencia gastronómica inolvidable. Los sabores eran increíbles y el servicio impecable.",
    rating: 5,
    author: "María García",
    date: "15 de marzo, 2025",
  },
  {
    title: "Café del Arte",
    content:
      "Buen ambiente y café decente, pero los precios son un poco elevados para lo que ofrecen.",
    rating: 3.5,
    author: "Juan Pérez",
    date: "10 de marzo, 2025",
  },
];

const ReviewCard: React.FC<{
  title: string;
  content: string;
  rating: number;
  author: string;
  date: string;
}> = ({ title, content, rating, author, date }) => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-white to-yellow-50 shadow-lg rounded-xl p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-yellow-800">{title}</h2>
      <p className="text-gray-700 mt-3">{content}</p>
      <div className="flex items-center mt-4">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                rating > index ? "text-yellow-500" : "text-gray-300"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927a.5.5 0 01.902 0l1.797 3.643 4.017.584a.5.5 0 01.277.854l-2.906 2.832.686 4.002a.5.5 0 01-.726.526L10 13.187l-3.595 1.891a.5.5 0 01-.726-.526l.686-4.002-2.906-2.832a.5.5 0 01.277-.854l4.017-.584L9.049 2.927z" />
            </svg>
          ))}
        </div>
        <span className="ml-2 text-gray-600 text-sm font-medium">{rating}/5</span>
      </div>
      <div className="text-gray-500 text-sm mt-2 italic">
        {author} • {date}
      </div>
    </div>
  );
};

const ReviewsSection: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-yellow-800 mb-6 text-center">Últimas Reseñas</h1>
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewsSection;
