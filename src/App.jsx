import ProductGrid from './components/ProductGrid';


function App() {
  return (
    <div className='p-[2rem]'>
      <section>
        <h1 className='text-4xl font-bold text-rose-900 py-[1rem]'>Desserts</h1>
        
        <section className='flex flex-col items-center justify-center'>
          <ProductGrid />
        </section>

      </section>
    </div>
  )
}

export default App
