export default function OrderConfirmed({ cart, onStartNewOrder }) {
    const orderTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return(
        <div className="p-4 fixed inset-0 bg-transparent backdrop-blur-md flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
                <section className="flex flex-col">
                    <img 
                        src="/images/icon-order-confirmed.svg" 
                        alt="order confirmed" 
                        className="block w-18 h-18 py-[0.5rem]"
                    />
                    <p className="text-3xl md:text-4xl font-bold text-rose-900 py-[0.5rem]">Order Confirmed</p>
                    <p className="text-rose-500 text-xl py-[0.5rem]">We hope you enjoy your food!</p>
                </section>

                <section className="py-[2rem] bg-rose-100 rounded-lg p-4 mb-6">
                    {cart.map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-4 border-b border-rose-500 last:border-b-0">
                            <section className="flex flex-row gap-4">
                                <img 
                                    src={item.image.thumbnail} 
                                    alt={item.name} 
                                    className="w-12 h-12 rounded-lg"    
                                />
                                <section className="flex flex-col">
                                    <p className="text-rose-900 text-bold">{item.name}</p>

                                    <div className="flex flex-row gap-2">
                                        <p className="text-red font-semibold">{item.quantity}x</p>
                                        <p className="text-rose-500">@ ${item.price.toFixed(2)}</p>
                                    </div>
                                </section>
                            </section>

                            <section>
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                            </section>
                        </div>
                    ))}
                    <div className="flex flex-row items-center justify-between py-[1rem]">
                        <p className="text-rose-900">Order Total</p>
                        <p className="text-2xl md:text-3xl font-bold text-rose-900">${orderTotal}</p>
                    </div>
                </section>

                <div className="flex items-center justify-center"> 
                    <button 
                        className="bg-red text-white py-[0.5rem] px-[5rem] lg:px-[8rem] rounded-3xl"
                        onClick={onStartNewOrder}
                    >
                        Start New Order
                    </button>
                </div>
            </div>
        </div>
    )
}