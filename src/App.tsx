import ElectricBorder from './components/border-effect/electric-border'
import TargetCursor from './components/target-cursor/target-cursor'
import CurvedLoop from './components/curved-loop/curved-loop'
import GradientText from './components/gradient-text/gradient-text'
import TextType from './components/text-type/text-type'
import CircularText from './components/circular-text/circular-text'
import DecryptedText from './components/decrypted-text/decrypted-text'
import CircularGallery from './components/circular-gallery/circular-gallery'
import MagicBento from './components/magic-bento/magic-bento'
import Stack from './components/stack/stack'
import Masonry from './components/masonry/masonry'
import TiltedCard from './components/tilted-card/tilted-card'
import ChromaGrid from './components/chroma-grid/chroma-grid'
import Folder from './components/folder/folder'
import Lanyard from './components/lanyard/lanyard'
import ProfileCard from './components/profile-card/profile-card'
import SpotlightCard from './components/spotlight-card/spotlight-card'
import BalatroBg from './background/balatro/balatro'
import AuroraBg from './background/aurora/aurora'
import BeamsBg from './background/beams/beams'
import ColorBendsBg from './background/color-bends/color-bends'
import DitherBg from './background/dither/dither'
import DotGridBg from './background/dot-grid/dot-grid'
import FaultyTerminalBg from './background/faulty-terminal/faulty-terminal'
import GalaxyBg from './background/galaxy/galaxy'
import GradientBlindsBg from './background/gradient-blinds/gradient-blinds'
import DarkVeilBg from './background/dark-veil/dark-veil'
import IridescenceBg from './background/iridescence/iridescence'
import LetterGlitchBg from './background/letter-glitch/letter-glitch'
import LightRaysBg from './background/light-rays/light-rays'
import LightningBg from './background/lightning/lightning'
import LiquidChromeBg from './background/liquid-chrome/liquid-chrome'
import LiquidEtherBg from './background/liquid-ether/liquid-ether'
import OrbBg from './background/orb/orb'
import ParticlesBg from './background/particles/particles'
import PixelBlastBg from './background/pixel-blast/pixel-blast'
import PlasmaBg from './background/plasma/plasma'
import PrismBg from './background/prism/prism'
import PrismaticBurstBg from './background/prismatic-burst/prismatic-burst'
import SilkBg from './background/silk/silk'
import SquaresBg from './background/squares/squares'
import ThreadsBg from './background/threads/threads'
import WavesBg from './background/waves/waves'

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

        <div style={{ marginTop: '4rem' }}>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>

        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 200, height: 200 }}
            cardsData={[
              { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
              { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
              { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
              { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
            ]}
          />
        </div>

        <div style={{ marginTop: '4rem', height: '800px' }}>
          <Masonry
            items={[
              { id: '1', img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format', url: '#', height: 400 },
              { id: '2', img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format', url: '#', height: 300 },
              { id: '3', img: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format', url: '#', height: 500 },
              { id: '4', img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format', url: '#', height: 350 },
              { id: '5', img: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=500&auto=format', url: '#', height: 450 },
              { id: '6', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&auto=format', url: '#', height: 380 }
            ]}
            animateFrom="bottom"
            scaleOnHover={true}
            blurToFocus={true}
          />
        </div>

        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', height: '400px' }}>
          <TiltedCard
            imageSrc="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"
            altText="Beautiful nature scene"
            captionText="Amazing Landscape"
            scaleOnHover={1.1}
            rotateAmplitude={14}
            showTooltip={true}
          />
        </div>

        <div style={{ marginTop: '4rem' }}>
          <ChromaGrid />
        </div>

        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
          <Folder
            color="#5227FF"
            size={1}
            items={[
              <div key="1">Document 1</div>,
              <div key="2">Document 2</div>,
              <div key="3">Document 3</div>
            ]}
          />
        </div>

        <div style={{ marginTop: '4rem', height: '500px' }}>
          <Lanyard />
        </div>

        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <ProfileCard
            avatarUrl="https://i.pravatar.cc/300?img=68"
            name="Alex Rivera"
            title="Full Stack Developer"
            handle="@alexrivera"
            enableTilt={true}
            showUserInfo={true}
          />
          <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.25)">
            <div style={{ padding: '2rem' }}>
              <h2>Interactive Spotlight</h2>
              <p>Hover over this card to see the spotlight effect</p>
            </div>
          </SpotlightCard>
        </div>



        <div style={{ marginTop: '4rem', height: '600px', width: '100%', position: 'relative' }}>
          <BalatroBg spinRotation={-2} spinSpeed={7} contrast={3.5} lighting={0.4} pixelFilter={745} />
        </div>

        <div style={{ marginTop: '4rem', height: '600px', width: '100%', position: 'relative' }}>
          <AuroraBg colorStops={['#5227FF', '#7cff67', '#5227FF']} amplitude={1} blend={0.5} speed={1} />
        </div>

        <div style={{ marginTop: '4rem', height: '600px', width: '100%', position: 'relative' }}>
          <BeamsBg beamNumber={12} speed={2} noiseIntensity={1.5} />
        </div>

        <div style={{ marginTop: '4rem', height: '600px', width: '100%', position: 'relative' }}>
          <ColorBendsBg rotation={45} speed={0.2} transparent={true} />
        </div>

        <div style={{ marginTop: '4rem', height: '600px', width: '100%', position: 'relative' }}>
          <DitherBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <DotGridBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <FaultyTerminalBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <GalaxyBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <GradientBlindsBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <DarkVeilBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <IridescenceBg />
        </div>

        <div style={{ marginTop: '2rem', height: '150px', width: '100%', position: 'relative' }}>
          <LetterGlitchBg
            glitchColors={'#2b4539,#61dca3,#61b3dc'}
            glitchSpeed={50}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
            characters={'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789'}
          />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <LightRaysBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <LightningBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <LiquidChromeBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <LiquidEtherBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <OrbBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <ParticlesBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <PixelBlastBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <PlasmaBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <PrismBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <PrismaticBurstBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <SilkBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <SquaresBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <ThreadsBg />
        </div>

        <div style={{ marginTop: '2rem', height: '600px', width: '100%', position: 'relative' }}>
          <WavesBg />
        </div>

      </div>

    </>
  )
}

export default App
