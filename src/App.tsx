
import './App.css'
import ElectricBorder from './components/plasma/electric-border'

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
      >
        <div>
          <div style={{ width: '200px', height: '200px', padding: '20px', backgroundColor: 'red' }}>

          </div>
        </div>
      </ElectricBorder>

    </>
  )
}

export default App
