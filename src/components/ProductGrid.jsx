import Button from "./button";
import { useState, useEffect } from 'react';

export default function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetching data from data.json file in the public folder
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error: ", error))
    }, [])
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-20 md:items-center md:justify-center">
            {products.map((product, index) => (
                <div key={index} className="md:flex md:flex-col">
                    <section className="relative">
                        <div className="w-[315px] h-[200px] md:h-[50px] md:w-[250px] rounded-lg relative z-0">
                           <picture>
                            <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
                            <source media="(min-width: 768px)" srcSet={product.image.tablet} />

                            <img 
                                src={product.image.mobile} 
                                alt={product.name} 
                                className="rounded-lg"
                            />
                           </picture>
                        </div>
                
                        <Button className="absolute z-10 -bottom-4 md:right-1/2 md:relative" />
                    </section>

                    <section className="py-[2rem] relative">
                        <p className="">{product.category}</p>
                        <p className="text-xl font-semibold text-rose-900">{product.name}</p>
                        <p className="font-semibold text-rose-600">${product.price.toFixed(2)}</p>
                    </section>
                </div>
            ))}
        </section>
    )
}