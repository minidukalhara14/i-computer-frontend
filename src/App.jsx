
import './App.css'
import ProductCard from './components/productCard'

function App() {
  

  return (
    <>
      <div>
        <ProductCard name="MacBook Air" price="LKR 150,000" image="https://picsum.photos/id/1/200/300" />

        <ProductCard name="MacBook Pro" price="LKR 200,000" image="https://picsum.photos/id/2/200/300" />

        <ProductCard name="iMac" price="LKR 300,000" image="https://picsum.photos/id/3/200/300" />
      </div>
      
    </>
  )
}

export default App
