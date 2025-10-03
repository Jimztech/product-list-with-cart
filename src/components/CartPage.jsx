export default function CartPage({ cart, removeFromCart }) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const orderTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    
    return(
        <div className="bg-white md:min-h-[100px] lg:w-[350px] rounded-lg p-4">    
            <p className="text-red text-3xl font-bold">Your Cart ({totalItems})</p>

            {cart.length === 0 ? (
                // For an empty cart return this first section
                <section className="flex flex-col items-center">
                    <img 
                        src="/public/images/illustration-empty-cart.svg" 
                        alt="empty cart" 
                        className="md:py-[1rem]"
                    />
                    <p className="md:py-[1rem]">Your added items will appear here</p>
                </section>
            ) : (
                // For a cart that is not empty return this...
                <section className="">
                    {cart.map((item, index) => (
                        <div key={index} className="py-4 border-b">
                            <p className="font-bold">{item.name}</p>

                            <section className="flex flex-row justify-between items-center">
                                <div className="flex flex-row gap-4">
                                    <p className="text-red font-bold">{item.quantity}x</p>
                                    <p>@ ${item.price.toFixed(2)}</p>
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                </div>

                                <button 
                                    onClick={() => removeFromCart(item.name)}
                                    className="rounded-2xl p-2 border-2 border-rose-300"
                                >
                                    <img src="/images/icon-remove-item.svg" alt="remove item icon" />
                                </button>
                            </section>
                        </div>
                    ))}

                    <div className="flex flex-row justify-between items-center">
                        <p>Order Total</p>
                        <span>${orderTotal.toFixed(2)}</span>
                    </div>

                    <div>
                        <p>This is a <span className="font-bold">carbon-neutral</span> delivery</p>
                    </div>
                    
                    <div>
                        <button className="bg-red text-white rounded-3xl">
                            Confirm Order
                        </button>
                    </div>
                </section>
            )}           
        </div>
    )
}