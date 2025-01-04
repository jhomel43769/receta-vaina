'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 border-t border-gray-300">
      <div className="container mx-auto flex justify-between px-4">
        <div className="w-1/2">
          <p className="text-sm text-gray-700">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
          <p className="text-sm text-gray-600 mt-2">
            Las recetas y perfiles son subidos por los usuarios y son propiedad de ellos.
            Al publicar contenido, otorgas una licencia no exclusiva para compartir en este sitio.
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-end">
          <p className="text-sm text-gray-700">Encuentra a nuestros creadores en redes sociales:</p>
          <div className="flex flex-col mt-2 space-y-2">
            <Link href="https://www.facebook.com/ejemplo" target="_blank" className="text-blue-500 text-sm hover:underline">
              Facebook
            </Link>
            <Link href="https://www.instagram.com/ejemplo" target="_blank" className="text-blue-500 text-sm hover:underline">
              Instagram
            </Link>
            <Link href="https://www.twitter.com/ejemplo" target="_blank" className="text-blue-500 text-sm hover:underline">
              Twitter
            </Link>
            <Link href="https://www.pinterest.com/ejemplo" target="_blank" className="text-blue-500 text-sm hover:underline">
              Pinterest
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
