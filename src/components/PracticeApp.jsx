import { useState, useEffect } from 'react';

export default function Button({ className = "", onQuantityChange, currentQuantity = 0, ...props }) {
    const [isAdded, setIsAdded] = useState(currentQuantity > 0);
    const [quantity, setQuantity] = useState(currentQuantity || 1);

    // Sync with external cart state
    useEffect(() => {
        if (currentQuantity === 0) {
            setIsAdded(false);
            setQuantity(1);
        }
    }, [currentQuantity]);

    // Rest of the component stays the same
    const handleAddToCart = () => {
        setIsAdded(true);
        if (onQuantityChange) {
            onQuantityChange(1);
        }
    };

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        if (onQuantityChange) {
            onQuantityChange(newQuantity);
        }
    };

    const handleDecrement = () => {
        const newQuantity = quantity - 1;
        if (newQuantity === 0) {
            setIsAdded(false);
            setQuantity(1);
            if (onQuantityChange) {
                onQuantityChange(0);
            }
        } else {
            setQuantity(newQuantity);
            if (onQuantityChange) {
                onQuantityChange(newQuantity);
            }
        }
    };

    return (
        <div className="flex flex-col items-center">
            {!isAdded ? (
                <button 
                    className={`rounded-3xl border-2 border-rose-400 flex gap-2 bg-white py-2 px-4 ${className}`}
                    onClick={handleAddToCart}
                    {...props}
                >
                    <img src="/images/icon-add-to-cart.svg" alt="add to cart" />
                    <p className="text-rose-900 font-semibold">Add to Cart</p>
                </button>
            ) : (
                <div className={`rounded-3xl border-2 border-rose-400 flex items-center justify-between bg-rose-400 py-2 px-4 ${className}`}>
                    <button 
                        onClick={handleDecrement}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-rose-400 transition-colors"
                    >
                        -
                    </button>
                    <span className="text-white font-semibold px-4">{quantity}</span>
                    <button 
                        onClick={handleIncrement}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-rose-400 transition-colors"
                    >
                        +
                    </button>
                </div>
            )}
        </div>
    );
}