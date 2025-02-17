import React from 'react';
import Products from './components/Products';

function App() {
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Products List</h1>
            <Products />
        </div>
    );
}

export default App;
