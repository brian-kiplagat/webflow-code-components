
import ElectricBorder from './components/border-effect/electric-border'

function App() {


  return (
    <>
      <ElectricBorder
        color="#1DFF85"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}
        className="electric-border-wrapper"
        children={<div> <p>A glowing, animated border wrapper.</p> </div>}
      />

    </>
  )
}

export default App
