import Button from "./Button";
import { useState, useEffect } from 'react';

export default function ProductGrid({ onQuantityChange, cart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetching data from data.json file in the public folder
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error: ", error))
    }, [])
    return(
        <div>
            <h1 className='text-4xl font-bold text-rose-900 py-[1rem]'>Desserts</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
                {products.map((product, index) => {
                    const cartItem = cart.find(item => item.name === product.name);
                    const currentQuantity = cartItem ? cartItem.quantity : 0;

                    return(
                        <div key={index} className="md:flex md:flex-col md:relative">
                            <section className="relative">
                                <div className="h-[200px] md:h-[100px] md:w-[250px] rounded-lg relative z-0">
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
                        
                                <Button 
                                    className="absolute z-30 -bottom-4 md:-left-[20px] md:top-[110px] md:relative" 
                                    onQuantityChange={(qty) => onQuantityChange(product, qty)}
                                    currentQuantity={currentQuantity}
                                />
                            </section>

                            <section className="py-[3rem] relative md:z-20 md:py-[8rem]">
                                <p className="text-rose-300">{product.category}</p>
                                <p className="text-xl font-semibold text-rose-900 md:text-2xl">{product.name}</p>
                                <p className="font-semibold text-red md:text-xl">${product.price.toFixed(2)}</p>
                            </section>
                        </div>
                    );
                })}
            </section>
        </div>
    )
}