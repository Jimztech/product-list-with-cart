export default function CartPage() {
    return(
        <div className="bg-white md:h-[300px] md:w-[350px] rounded-lg p-4">
            <p>Your cart (<span>0</span>)</p>
            <img src="/public/images/illustration-empty-cart.svg" alt="empty cart" />
            <p>Your added items will appear here</p>
        </div>
    )
}