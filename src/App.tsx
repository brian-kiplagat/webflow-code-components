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
import { useState, type JSX } from 'react'
import './App.css'
import CardSwap, { Card } from './components/card-swap/card-swap'

function App() {
  const [activeItem, setActiveItem] = useState<null | {
    name: string,
    description: string,
    icon: JSX.Element,
    component: JSX.Element,
  }>(null);

  type tag = 'Background' | 'Visual' | 'Canvas' | 'Text' | 'UI' | 'Component' | 'Interactive';

  type Component = {
    name: string,
    description: string,
    icon: JSX.Element,
    component: JSX.Element,
    tags?: tag[],
  };



  const components: Component[] = [
    {
      name: 'CurvedLoop',
      description: 'A curved loop marquee with interactive tilt',
      icon: <FaArrowRight />,
      tags: ['UI', 'Interactive', 'Component'],
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
      tags: ['UI', 'Interactive', 'Component'],
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
      tags: ['UI', 'Component'],
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
      tags: ['Text', 'UI', 'Component'],
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
      tags: ['Text', 'UI', 'Component'],
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
      tags: ['Text', 'UI', 'Component'],
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
      tags: ['Text', 'UI', 'Interactive'],
      component: <DecryptedText text="Hover me!" />
    },
    {
      name: 'DecryptedTextCustomized',
      description: 'Customizable decryption text',
      icon: <FaArrowRight />,
      tags: ['Text', 'UI', 'Interactive'],
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
      tags: ['Text', 'UI', 'Interactive'],
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
      tags: ['UI', 'Visual', 'Interactive'],
      component: <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
    },
    {
      name: 'MagicBento',
      description: 'Interactive bento with effects',
      icon: <FaArrowRight />,
      tags: ['UI', 'Interactive', 'Visual'],
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
      tags: ['UI', 'Interactive', 'Component'],
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
      tags: ['UI', 'Visual', 'Component'],
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
      tags: ['UI', 'Interactive', 'Component'],
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
      tags: ['UI', 'Visual', 'Component'],
      component: <ChromaGrid />
    },
    {
      name: 'Folder',
      description: 'Folder UI with items',
      icon: <FaArrowRight />,
      tags: ['UI', 'Component'],
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
      name: 'ProfileCard',
      description: 'Interactive profile card',
      icon: <FaArrowRight />,
      tags: ['UI', 'Interactive', 'Component'],
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
      tags: ['UI', 'Interactive', 'Component'],
      component: (
        <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.25)">
          <div style={{ padding: '2rem' }}>
            <h2>Interactive Spotlight</h2>
            <p>Hover over this card to see the spotlight effect</p>
          </div>
        </SpotlightCard>
      )
    },
    {
      name: 'CardSwap',
      description: 'Interactive card swap component',
      icon: <FaArrowRight />,
      tags: ['UI', 'Interactive', 'Component'],
      component: (
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card
            customClass="custom-class"
          >
            <h3>Card 1</h3>
            <p>Your content here</p>
          </Card>
          <Card
            customClass="custom-class"
          >
            <h3>Card 2</h3>
            <p>Your content here</p>
          </Card>
          <Card
            customClass="custom-class"
          >
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      )
    },
    // Backgrounds
    { name: 'BalatroBg', description: 'Balatro background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <BalatroBg spinRotation={-2} spinSpeed={7} contrast={3.5} lighting={0.4} pixelFilter={745} /> },
    { name: 'AuroraBg', description: 'Aurora background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <AuroraBg colorStops={['#5227FF', '#7cff67', '#5227FF']} amplitude={1} blend={0.5} speed={1} /> },
    { name: 'BeamsBg', description: 'Beams background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <BeamsBg beamNumber={12} speed={2} noiseIntensity={1.5} /> },
    { name: 'ColorBendsBg', description: 'Color bends background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <ColorBendsBg rotation={180} speed={0.2} transparent={true} colors="#ff0000,#00ff00,#0000ff" frequency={1} warpStrength={1} mouseInfluence={1} parallax={0.5} noise={0.1} /> },
    { name: 'DitherBg', description: 'Dither background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <DitherBg /> },
    { name: 'DotGridBg', description: 'Dot grid background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <DotGridBg /> },
    { name: 'FaultyTerminalBg', description: 'Faulty terminal background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <FaultyTerminalBg /> },
    { name: 'GalaxyBg', description: 'Galaxy background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <GalaxyBg /> },
    { name: 'GradientBlindsBg', description: 'Gradient blinds background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <GradientBlindsBg /> },
    { name: 'DarkVeilBg', description: 'Dark veil background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <DarkVeilBg /> },
    { name: 'IridescenceBg', description: 'Iridescence background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <IridescenceBg /> },
    {
      name: 'LetterGlitchBg',
      description: 'Letter glitch banner',
      icon: <FaArrowRight />,
      tags: ['Background', 'Visual', 'Canvas'],
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
    { name: 'LightRaysBg', description: 'Light rays background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <LightRaysBg /> },
    { name: 'LightningBg', description: 'Lightning background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <LightningBg /> },
    { name: 'LiquidChromeBg', description: 'Liquid chrome background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <LiquidChromeBg /> },
    { name: 'LiquidEtherBg', description: 'Liquid ether background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <LiquidEtherBg /> },
    { name: 'OrbBg', description: 'Orb background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <OrbBg /> },
    { name: 'ParticlesBg', description: 'Particles background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <ParticlesBg /> },
    { name: 'PixelBlastBg', description: 'Pixel blast background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <PixelBlastBg /> },
    { name: 'PlasmaBg', description: 'Plasma background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <PlasmaBg /> },
    { name: 'PrismBg', description: 'Prism background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <PrismBg /> },
    { name: 'PrismaticBurstBg', description: 'Prismatic burst background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <PrismaticBurstBg /> },
    { name: 'SilkBg', description: 'Silk background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <SilkBg /> },
    { name: 'SquaresBg', description: 'Squares background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <SquaresBg /> },
    { name: 'ThreadsBg', description: 'Threads background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <ThreadsBg /> },
    { name: 'WavesBg', description: 'Waves background', icon: <FaArrowRight />, tags: ['Background', 'Visual', 'Canvas'], component: <WavesBg /> },
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
            padding: '0 8px',
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
                const tags = item.tags ?? getTags(item.name)
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
                      <button
                        style={{
                          ...ctaStyle,
                          border: 'none',
                          cursor: 'pointer'
                        }}
                        onClick={() => setActiveItem(item)}
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })()}
        {activeItem && (
          <div
            role="dialog"
            aria-modal="true"
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000
            }}
            onClick={() => setActiveItem(null)}
          >
            <div
              style={{
                background: '#0b0b0b',
                borderRadius: 12,
                width: 'min(1200px, 92vw)',
                height: 'min(800px, 86vh)',
                padding: 16,
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: 18, fontWeight: 600, color: '#ffffff' }}>{activeItem.name}</div>
                  <div style={{ fontSize: 14, color: '#b0b0b0' }}>{activeItem.description}</div>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  style={{
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 8,
                    background: 'transparent',
                    color: '#ffffff',
                    height: 36,
                    padding: '0 12px',
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
              </div>
              <div style={{ flex: 1, background: '#111', borderRadius: 8, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {activeItem.component}
              </div>
            </div>
          </div>
        )}

      </div>

    </>
  )
}

export default App
