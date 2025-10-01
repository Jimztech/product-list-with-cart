export default function Button({ className="", ...props }) {
    return(
        <div className="flex flex-col items-center">
            <button 
                className={`rounded-3xl border-2 border-rose-400 flex gap-[0.5rem] bg-white py-2 px-4 ${className}`}
                {...props}
            >
                <img src="/images/icon-add-to-cart.svg" alt="add to cart" />
                <p>Add to Cart</p>
            </button>
       </div>
    )
}