import { useState } from "react";

export default function Button({ className="", onQuantityChange, ...props }) {
    const [isAdded, setIsAdded] = useState(false);
    const [quantity, setQuantity] = useState(1);

    function handleAddToCart() {
        setIsAdded(true);
        if(onQuantityChange) {
            onQuantityChange(1)
        }
    };

    function handleIncrement() {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        if(onQuantityChange) {
            onQuantityChange(newQuantity)
        }
    };

    function handleDecrement() {
        const newQuantity = quantity - 1;

        if(newQuantity === 0) {
            setIsAdded(false);
            setQuantity(1);
            if(onQuantityChange) {
                onQuantityChange(0)
            }
        } else {
            setQuantity(newQuantity);
            if(onQuantityChange) {
                onQuantityChange(newQuantity)
            }
        }
    };

    return(
        <div className="flex flex-col items-center cursor-pointer">
            {!isAdded ? (
                <button 
                    className={`rounded-3xl border-2 border-rose-400 flex gap-[0.5rem] bg-white py-2 px-4 ${className}`}
                    {...props}
                    onClick={handleAddToCart}
                >
                    <img src="/images/icon-add-to-cart.svg" alt="add to cart" />
                    <p>Add to Cart</p>
                </button>
            ):(
                <button className={`bg-red rounded-3xl flex flex-row gap-[2rem] py-2 px-4 ${className}`}>
                    <img 
                        src="/public/images/icon-decrement-quantity.svg" 
                        alt="decrement icon"
                        className="rounded-2xl border-2 border-white p-2" 
                        onClick={handleDecrement}
                    />

                    <span className="text-white">{quantity}</span>

                    <img 
                        src="/public/images/icon-increment-quantity.svg" 
                        alt="increment icon"
                        className="rounded-2xl border-2 border-white p-2" 
                        onClick={handleIncrement}
                    />
                </button>
            )}
       </div>
    )
}