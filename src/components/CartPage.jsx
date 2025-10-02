import { useState } from "react";

export default function CartPage() {
    return(
        <div className="bg-white md:h-[300px] lg:w-[350px] rounded-lg p-4">    
            <p className="text-red text-3xl font-bold">Your Cart (<span>0</span>)</p>

            <section className="flex flex-col items-center">
                <img 
                    src="/public/images/illustration-empty-cart.svg" 
                    alt="empty cart" 
                    className="md:py-[1rem]"
                />
                <p className="md:py-[1rem]">Your added items will appear here</p>
            </section>

            <section className="hidden">
                <div className="">
                    <p>The Orders</p>
                </div>

                <div className="flex flex-row justify-between items-center">
                    <p>Order Total</p>
                    <span>{}</span>
                </div>

                <div>
                    <p>This is a <span className="font-bold">carbon-neutral</span> delivery</p>
                </div>
                
                <div>
                    <button className="bg-red text-white">
                        Confirm Order
                    </button>
                </div>
            </section>
            
        </div>
    )
}