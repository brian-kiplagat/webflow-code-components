
import ElectricBorder from './components/border-effect/electric-border'
import TargetCursor from './components/target-cursor/target-cursor'

function App() {


  return (
    <>
      <div className="components-wrapper">
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
          targetSelector=".cursor-target"
        />
        <ElectricBorder
          color="#1DFF85"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
          className="electric-border-wrapper"
          children={<div> <p>A glowing, animated border wrapper.</p> </div>}
        />
        <h1>Hover over the elements below</h1>
        <button className="cursor-target">Click me!</button>
        <div className="cursor-target">Hover target</div>
      </div>

    </>
  )
}

export default App
