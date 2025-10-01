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
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2">
            {products.map((product, index) => (
                <div key={index} className="md:flex md:flex-col md:relative">
                    <section className="relative">
                        <div className="w-[315px] h-[200px] md:h-[100px] md:w-[250px] rounded-lg relative z-0">
                           <picture>
                            <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
                            <source media="(min-width: 768px)" srcSet={product.image.tablet} />

                            <img 
                                src={product.image.mobile} 
                                alt={product.name} 
                                className="rounded-lg md:relative"
                            />
                           </picture>
                        </div>
                
                        <Button className="absolute z-10 -bottom-4 md:right-1/2" />
                    </section>

                    <section className="py-[2rem] relative md:z-20 md:py-[10rem]">
                        <p className="">{product.category}</p>
                        <p className="text-xl font-semibold text-rose-900 md:text-3xl">{product.name}</p>
                        <p className="font-semibold text-rose-600 md:text-2xl">${product.price.toFixed(2)}</p>
                    </section>
                </div>
            ))}
        </section>
    )
}