import React from 'react';

// Es VITAL que diga "export const" para que App.jsx lo encuentre
export const Article = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Nuestros Artículos</h2>
      <p className="lead text-center">Aquí verás la lista detallada de productos.</p>
    </div>
  );
};