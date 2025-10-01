import CartPage from './components/CartPage';
import ProductGrid from './components/ProductGrid';


function App() {
  return (
    <div className='p-[2rem] bg-rose-100'>
      <section>
        <h1 className='text-4xl font-bold text-rose-900 py-[1rem]'>Desserts</h1>
        
        <section className='flex flex-col md:flex-row'>
          <ProductGrid />
          <CartPage />
        </section>

      </section>
    </div>
  )
}

export default App
