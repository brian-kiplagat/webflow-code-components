import ElectricBorder from './components/border-effect/electric-border'
import TargetCursor from './components/target-cursor/target-cursor'
import CurvedLoop from './components/curved-loop/curved-loop'
import GradientText from './components/gradient-text/gradient-text'
import TextType from './components/text-type/text-type'
import CircularText from './components/circular-text/circular-text'
import DecryptedText from './components/decrypted-text/decrypted-text'
import CircularGallery from './components/circular-gallery/circular-gallery'

function App() {


  return (
    <>
      <div className="components-wrapper">
        <CurvedLoop
          marqueeText="Hello, world!"
          speed={2}
          className="curved-loop"
          curveAmount={400}
          direction="left"
          interactive={true}
        />
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
        <GradientText
          colors="#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa"
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          Add a splash of color!
        </GradientText>

        <div style={{ marginTop: '2rem' }}>
          <TextType
            text="experiences,examples,tutorials, Happy coding!"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <CircularText
            text="REACT*BITS*COMPONENTS*"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <DecryptedText text="Hover me!" />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <DecryptedText
            text="Customize me"
            speed={100}
            maxIterations={20}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </div>

        <div style={{ marginTop: '4rem' }}>
          <DecryptedText
            text="This text animates when in view"
            animateOn="view"
            revealDirection="center"
          />
        </div>

        <div style={{ height: '600px', position: 'relative', marginTop: '4rem' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </div>

        <h1 style={{ marginTop: '2rem' }}>Hover over the elements below</h1>
        <button className="cursor-target">Click me!</button>
        <div className="cursor-target">Hover target</div>
      </div>

    </>
  )
}

export default App
