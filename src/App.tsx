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
import { FaArrowRight } from 'react-icons/fa'
import './App.css'

function App() {
  const components = [
    {
      name: 'CurvedLoop',
      description: 'A curved loop marquee with interactive tilt',
      icon: <FaArrowRight />,
      component: (
        <CurvedLoop
          marqueeText="Hello, world!"
          speed={2}
          className="curved-loop"
          curveAmount={400}
          direction="left"
          interactive={true}
        />
      )
    },
    {
      name: 'TargetCursor',
      description: 'Magnetic target cursor with spin',
      icon: <FaArrowRight />,
      component: (
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
          targetSelector=".cursor-target"
        />
      )
    },
    {
      name: 'ElectricBorder',
      description: 'Animated electric border wrapper',
      icon: <FaArrowRight />,
      component: (
        <ElectricBorder
          color="#1DFF85"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
          className="electric-border-wrapper"
        >
          <div>
            <p>A glowing, animated border wrapper.</p>
          </div>
        </ElectricBorder>
      )
    },
    {
      name: 'GradientText',
      description: 'Animated gradient text',
      icon: <FaArrowRight />,
      component: (
        <GradientText
          colors="#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa"
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          Add a splash of color!
        </GradientText>
      )
    },
    {
      name: 'TextType',
      description: 'Typing effect text',
      icon: <FaArrowRight />,
      component: (
        <TextType
          text="experiences,examples,tutorials, Happy coding!"
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      )
    },
    {
      name: 'CircularText',
      description: 'Circular spinning text',
      icon: <FaArrowRight />,
      component: (
        <CircularText
          text="REACT*BITS*COMPONENTS*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      )
    },
    {
      name: 'DecryptedText',
      description: 'Decryption hover text',
      icon: <FaArrowRight />,
      component: <DecryptedText text="Hover me!" />
    },
    {
      name: 'DecryptedTextCustomized',
      description: 'Customizable decryption text',
      icon: <FaArrowRight />,
      component: (
        <DecryptedText
          text="Customize me"
          speed={100}
          maxIterations={20}
          characters="ABCD1234!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
        />
      )
    },
    {
      name: 'DecryptedTextInView',
      description: 'Decrypt on view with center reveal',
      icon: <FaArrowRight />,
      component: (
        <DecryptedText
          text="This text animates when in view"
          animateOn="view"
          revealDirection="center"
        />
      )
    },
    {
      name: 'CircularGallery',
      description: 'Circular 3D gallery',
      icon: <FaArrowRight />,
      component: <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
    },
    {
      name: 'MagicBento',
      description: 'Interactive bento with effects',
      icon: <FaArrowRight />,
      component: (
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
      )
    },
    {
      name: 'Stack',
      description: 'Draggable stacked cards',
      icon: <FaArrowRight />,
      component: (
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ width: 200, height: 200 }}
          cardsData={[
            { id: 1, img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format' },
            { id: 2, img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format' },
            { id: 3, img: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format' },
            { id: 4, img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format' }
          ]}
        />
      )
    },
    {
      name: 'Masonry',
      description: 'Animated masonry grid',
      icon: <FaArrowRight />,
      component: (
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
      )
    },
    {
      name: 'TiltedCard',
      description: '3D tilt image card',
      icon: <FaArrowRight />,
      component: (
        <TiltedCard
          imageSrc="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"
          altText="Beautiful nature scene"
          captionText="Amazing Landscape"
          scaleOnHover={1.1}
          rotateAmplitude={14}
          showTooltip={true}
        />
      )
    },
    {
      name: 'ChromaGrid',
      description: 'Animated chroma grid',
      icon: <FaArrowRight />,
      component: <ChromaGrid />
    },
    {
      name: 'Folder',
      description: 'Folder UI with items',
      icon: <FaArrowRight />,
      component: (
        <Folder
          color="#5227FF"
          size={1}
          items={[
            <div key="1">Document 1</div>,
            <div key="2">Document 2</div>,
            <div key="3">Document 3</div>
          ]}
        />
      )
    },
    {
      name: 'Lanyard',
      description: '3D lanyard scene',
      icon: <FaArrowRight />,
      component: <Lanyard />
    },
    {
      name: 'ProfileCard',
      description: 'Interactive profile card',
      icon: <FaArrowRight />,
      component: (
        <ProfileCard
          avatarUrl="https://i.pravatar.cc/300?img=68"
          name="Alex Rivera"
          title="Full Stack Developer"
          handle="@alexrivera"
          enableTilt={true}
          showUserInfo={true}
        />
      )
    },
    {
      name: 'SpotlightCard',
      description: 'Mouse-follow spotlight effect card',
      icon: <FaArrowRight />,
      component: (
        <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.25)">
          <div style={{ padding: '2rem' }}>
            <h2>Interactive Spotlight</h2>
            <p>Hover over this card to see the spotlight effect</p>
          </div>
        </SpotlightCard>
      )
    },
    // Backgrounds
    { name: 'BalatroBg', description: 'Balatro background', icon: <FaArrowRight />, component: <BalatroBg spinRotation={-2} spinSpeed={7} contrast={3.5} lighting={0.4} pixelFilter={745} /> },
    { name: 'AuroraBg', description: 'Aurora background', icon: <FaArrowRight />, component: <AuroraBg colorStops={['#5227FF', '#7cff67', '#5227FF']} amplitude={1} blend={0.5} speed={1} /> },
    { name: 'BeamsBg', description: 'Beams background', icon: <FaArrowRight />, component: <BeamsBg beamNumber={12} speed={2} noiseIntensity={1.5} /> },
    { name: 'ColorBendsBg', description: 'Color bends background', icon: <FaArrowRight />, component: <ColorBendsBg rotation={45} speed={0.2} transparent={true} /> },
    { name: 'DitherBg', description: 'Dither background', icon: <FaArrowRight />, component: <DitherBg /> },
    { name: 'DotGridBg', description: 'Dot grid background', icon: <FaArrowRight />, component: <DotGridBg /> },
    { name: 'FaultyTerminalBg', description: 'Faulty terminal background', icon: <FaArrowRight />, component: <FaultyTerminalBg /> },
    { name: 'GalaxyBg', description: 'Galaxy background', icon: <FaArrowRight />, component: <GalaxyBg /> },
    { name: 'GradientBlindsBg', description: 'Gradient blinds background', icon: <FaArrowRight />, component: <GradientBlindsBg /> },
    { name: 'DarkVeilBg', description: 'Dark veil background', icon: <FaArrowRight />, component: <DarkVeilBg /> },
    { name: 'IridescenceBg', description: 'Iridescence background', icon: <FaArrowRight />, component: <IridescenceBg /> },
    {
      name: 'LetterGlitchBg',
      description: 'Letter glitch banner',
      icon: <FaArrowRight />,
      component: (
        <LetterGlitchBg
          glitchColors={'#2b4539,#61dca3,#61b3dc'}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
          characters={'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789'}
        />
      )
    },
    { name: 'LightRaysBg', description: 'Light rays background', icon: <FaArrowRight />, component: <LightRaysBg /> },
    { name: 'LightningBg', description: 'Lightning background', icon: <FaArrowRight />, component: <LightningBg /> },
    { name: 'LiquidChromeBg', description: 'Liquid chrome background', icon: <FaArrowRight />, component: <LiquidChromeBg /> },
    { name: 'LiquidEtherBg', description: 'Liquid ether background', icon: <FaArrowRight />, component: <LiquidEtherBg /> },
    { name: 'OrbBg', description: 'Orb background', icon: <FaArrowRight />, component: <OrbBg /> },
    { name: 'ParticlesBg', description: 'Particles background', icon: <FaArrowRight />, component: <ParticlesBg /> },
    { name: 'PixelBlastBg', description: 'Pixel blast background', icon: <FaArrowRight />, component: <PixelBlastBg /> },
    { name: 'PlasmaBg', description: 'Plasma background', icon: <FaArrowRight />, component: <PlasmaBg /> },
    { name: 'PrismBg', description: 'Prism background', icon: <FaArrowRight />, component: <PrismBg /> },
    { name: 'PrismaticBurstBg', description: 'Prismatic burst background', icon: <FaArrowRight />, component: <PrismaticBurstBg /> },
    { name: 'SilkBg', description: 'Silk background', icon: <FaArrowRight />, component: <SilkBg /> },
    { name: 'SquaresBg', description: 'Squares background', icon: <FaArrowRight />, component: <SquaresBg /> },
    { name: 'ThreadsBg', description: 'Threads background', icon: <FaArrowRight />, component: <ThreadsBg /> },
    { name: 'WavesBg', description: 'Waves background', icon: <FaArrowRight />, component: <WavesBg /> },
  ]

  return (
    <>
      <div className="components-wrapper">
        {(() => {
          const getTags = (name: string) => {
            if (name.endsWith('Bg')) return ['Background', 'Visual', 'Canvas']
            if (name.toLowerCase().includes('text')) return ['Text', 'UI']
            if (name.toLowerCase().includes('card')) return ['Card', 'UI']
            return ['Component', 'UI']
          }

          const gridStyle = {
            display: 'grid',
            width: '100%',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(5, 1fr)',
            gridColumnGap: 24,
            gridRowGap: 24
          } as const

          const cardStyle = {
            width: 342,
            height: 504,
            background: '#ffffff',
            borderRadius: 12,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          } as const

          const imageStyle = {
            height: 222,
            background: '#dedede',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          } as const

          const contentStyle = {
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            gap: 16,
            padding: 24,
          } as const

          const headerGroupStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 4
          } as const

          const dividerStyle = {
            height: 1,
            width: '100%',
            background: '#c4c4c4',
          } as const

          const tagsRowStyle = {
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap'
          } as const

          const tagStyle = {
            border: '1px solid #3C3C43',
            borderRadius: 100,
            padding: '1 8px',
            display: 'inline-flex',
            alignItems: 'center',
            color: '#3C3C43',
            fontSize: 12
          } as const

          const ctaStyle = {
            borderRadius: 12,
            height: 31,
            padding: '0 16px',
            display: 'inline-flex',
            alignItems: 'center',
            color: '#ffffff',
            background: '#3C3C43',
            width: 'fit-content'
          } as const

          return (
            <div style={gridStyle}>
              {components.map((item) => {
                const tags = getTags(item.name)
                return (
                  <div key={item.name} style={cardStyle}>
                    <div style={imageStyle}>
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {'https://picsum.photos/200/300'}
                      </div>
                    </div>
                    <div style={contentStyle}>
                      <div style={headerGroupStyle}>
                        <div style={{ fontSize: 18, fontWeight: 600, color: '#000000' }}>{item.name}</div>
                        <div style={{ fontSize: 14, color: '#181818' }}>{item.description}</div>
                      </div>

                      <div style={dividerStyle} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>

                        <div style={tagsRowStyle}>
                          {tags.map((t) => (
                            <span key={t} style={tagStyle}>{t}</span>
                          ))}
                        </div>
                      </div>
                      <div style={ctaStyle}>Explore</div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })()}

      </div>

    </>
  )
}

export default App
