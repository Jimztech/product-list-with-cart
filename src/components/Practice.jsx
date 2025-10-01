import { useState, useEffect } from 'react';
import Button from "./button";

export default function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data from public folder
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error loading data:', error));
    }, []);

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
                <section key={index} className="relative">
                    <section className="relative">
                        <div className="w-[315px] h-[200px] bg-yellow-300 rounded-lg relative z-0">
                            <img 
                                src={product.image.desktop} 
                                alt={product.name} 
                                className="rounded-lg w-full h-full object-cover"
                            />
                        </div>
                    
                        <Button className="absolute z-10 -bottom-4 left-1/2 transform -translate-x-1/2" />
                    </section>

                    <section className="py-[2rem] md:my-[5rem]">
                        <p className="text-sm text-gray-600">{product.category}</p>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-rose-600 font-bold">${product.price.toFixed(2)}</p>
                    </section>
                </section>
            ))}
        </div>
    )
}