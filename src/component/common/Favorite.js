import React, { useState } from 'react';

const Product = ({ product, onAddToFavorites }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => onAddToFavorites(product)}>Add to Favorites</button>
    </div>
  );
};

const SearchAndFavorites = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h2>Search Results</h2>
      {filteredProducts.map(product => (
        <Product key={product.id} product={product} onAddToFavorites={handleAddToFavorites} />
      ))}
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite.name}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  // Sample data
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3' }
  ];

  return (
    <div>
      <h1>Search and Favorites</h1>
      <SearchAndFavorites products={products} />
    </div>
  );
};

export default App;
