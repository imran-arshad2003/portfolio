import Navbar from './components/Navbarold'
import SplashCursor from './components/SplashCursor'
import GradientBlinds from './components/GradiantBlinds';
import Particles from './components/Particles';
import TiltedCard from './components/TiltedCard';
import TextType from './components/TextType';
import LogoLoop from './components/LogoLoop';
import { SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiGithub, SiVercel } from 'react-icons/si';
import { useState } from 'react';
import LightRays from './components/LightRays';
import Projects from './components/Projects';
import Reviews from './components/Reviews';


const arr = [
  {
    "Project Name": "Weather App",
    "Live URL": "https://weatherapp-pied-nine.vercel.app/",
    "Github URL": "https://github.com/imran-arshad2003/weatherapp",
    "image": "./images/weather.png"
  },
  {
    "Project Name": "Expense Tracker",
    "Live URL": "https://expensetracker-9tqi9gkfd-imran-arshad2003s-projects.vercel.app/dashboard",
    "Github URL": "https://github.com/imran-arshad2003/expensetracker",
    "image": "./images/expensetracker.png"
  }
]

const techLogos = [
  { node: <SiHtml5 style={{ color: 'white' }} />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiJavascript style={{ color: 'white' }} />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiReact style={{ color: 'white' }} />, title: "React", href: "https://react.dev" },
  { node: <SiTailwindcss style={{ color: 'white' }} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiGithub style={{ color: 'white' }} />, title: "GitHub", href: "https://github.com" },
  { node: <SiVercel style={{ color: 'white' }} />, title: "Vercel", href: "https://vercel.com" },
];

const App = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "7f947d5e-d014-409d-a38d-4f41f27eeaf3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
     if (data.success) {
    setResult("Success!");
    event.target.reset();  // ← clears all form fields
  } else {
    setResult("Error");
  }
  }

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />

      {/* Hero Section */}
      <div id="home" className="relative flex text-9xl text-left h-screen">

        <div className="absolute inset-0 h-full z-0 pointer-events-auto">

          <SplashCursor />

          <GradientBlinds
            gradientColors={['#FF9FFC', '#5227FF']}
            angle={0}
            noise={0.3}
            blindCount={12}
            blindMinWidth={50}
            spotlightRadius={0.5}
            spotlightSoftness={1}
            spotlightOpacity={1}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="normal"
          />
        </div>

        {/* Hero content — stacks vertically on mobile, row on md+ */}
        <div className="relative z-10 flex flex-col md:flex-row w-full items-center justify-center md:justify-start pointer-events-none text-[#ef4141] gap-4 md:gap-0 px-4 md:px-0">

          {/* Typing text */}
          <div className="w-full md:w-64 flex justify-center md:justify-start">
            <TextType
              text={["I'M IMRAN"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              texts={["I'm Imran"]}
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </div>

          {/* Hero image — hidden on small phones, shown from sm up */}
          <img
            className="w-2/3 sm:w-1/3 mt-10 ml-15 sm:rounded-none rounded-2xl shadow-2xl"
            style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.6)' }}
            src="./images/bgmain.png"
            alt=""
          />

          {/* Headline */}
          <h1 className="text-[#ef4141] font-bold text-4xl sm:text-6xl md:text-8xl text-center">
            &lt;Frontend&gt; <br />Developer
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className='bg-[#141717ff] relative min-h-screen w-full flex flex-col px-4 sm:px-8 md:px-16 overflow-x-hidden'>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        {/* About card row — stacks on mobile */}
        <div className='flex flex-col md:flex-row gap-6 md:gap-10 py-10 px-2 sm:px-6 md:px-10'>

          {/* TiltedCard — centred on mobile, fixed size on desktop */}
          <div className="flex justify-center md:block flex-shrink-0">
            <TiltedCard
              imageSrc="./images/bg2.png"
              altText="Tilting Card Image"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={30}
              scaleOnHover={1}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
            />
          </div>

          {/* Bio card */}
          <div className='rounded-md'
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className='flex flex-col gap-5 px-6 py-6 text-white'>

              <h1 className='text-[#ff0808] font-bold text-sm sm:text-xl uppercase '>About Me</h1>

              {/* Tagline */}
              <h1 className='text-[#ff0808] font-bold text-lg sm:text-xl uppercase tracking-widest'>
                Aspiring Full Stack Developer - Vibe Coder
              </h1>

              {/* Short punchy intro */}
              <p className='text-base sm:text-lg font-light leading-relaxed text-zinc-200'>
                I turn ideas into real-world digital experiences — combining clean design
                with efficient, scalable code.
              </p>

              {/* Divider */}
              <div className='w-12 h-[2px] bg-[#ef4141] rounded-full' />

              {/* Three focused points */}
              <div className='flex flex-col gap-3'>
                <div className='flex items-start gap-3'>
                  <span className='text-[#ef4141] mt-1'>▹</span>
                  <p className='text-sm sm:text-base text-zinc-300 leading-relaxed'>
                    Specialized in <span className='text-white font-semibold'>HTML, CSS, JavaScript, Tailwind CSS & React.js</span> — building responsive, high-performance interfaces.
                  </p>
                </div>
                <div className='flex items-start gap-3'>
                  <span className='text-[#ef4141] mt-1'>▹</span>
                  <p className='text-sm sm:text-base text-zinc-300 leading-relaxed'>
                    Passionate about <span className='text-white font-semibold'>UI/UX principles</span> — every project I build is intuitive, engaging, and visually polished.
                  </p>
                </div>
                <div className='flex items-start gap-3'>
                  <span className='text-[#ef4141] mt-1'>▹</span>
                  <p className='text-sm sm:text-base text-zinc-300 leading-relaxed'>
                    Currently expanding into <span className='text-white font-semibold'>backend development</span> — driven by growth, consistency, and impactful solutions.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <h1 className='text-[#ff1717] font-black text-4xl sm:text-5xl md:text-7xl py-6'>My Tech Stack</h1>

        <div className='overflow-hidden w-full' style={{ height: '100px' }}>
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#141717"
          />
        </div>

      </div>

      {/* Contact Section */}
      <div id="contact" className='bg-[#141717ff] min-h-screen relative flex items-center justify-center'>

        {/* LightRays as absolute background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>

        {/* Contact form */}
        <div className='relative z-10 w-full max-w-lg px-4 sm:px-6 py-10'>
          <h1 className="text-[#ff1717] font-bold text-3xl sm:text-4xl tracking-tight mb-10">Contact Me</h1>
          <form onSubmit={onSubmit} className='space-y-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="name" className='text-xs uppercase tracking-widest text-zinc-500'>Name:</label>
              <input
                type="text"
                name="name"
                placeholder='Enter Your Name'
                required
                className='bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 rounded-xl px-5 py-4 text-sm outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40 hover:border-zinc-600 transition-all duration-300'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="email" className='text-xs uppercase tracking-widest text-zinc-500'>Email:</label>
              <input
                type="email"
                name="email"
                placeholder='Enter Your Email'
                required
                className='bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 rounded-xl px-5 py-4 text-sm outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40 hover:border-zinc-600 transition-all duration-300'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="message" className='text-xs uppercase tracking-widest text-zinc-500'>Message:</label>
              <textarea
                name="message"
                placeholder='Enter Your Message'
                required
                className='bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 rounded-xl px-5 py-4 text-sm outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40 hover:border-zinc-600 transition-all duration-300 resize-none h-36'
              />
            </div>
            <button type='submit' className='bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300'>
              Send Message
            </button>
            {result && <p className='text-white mt-2'>{result}</p>}
          </form>
        </div>

      </div>

      {/* Projects Section */}
      <div id="projects"  className='bg-[#141717ff] min-h-screen flex flex-col px-4 sm:px-8 md:px-12  '>
        <div className='rounded-full  text-center w-1/9 px-6 py-2 '
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h1 className='text-[#ef4141] text-xl sm:text-3xl font-bold'>Projects</h1>
        </div>

        {/* Projects grid — 1 col on mobile, 2 on sm, 3 on lg */}
        <div className='mt-7  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {arr.map((item, index) => {
            return (

              <Projects
                key={index}
                name={item['Project Name']}
                liveurl={item['Live URL']}
                Githuburl={item['Github URL']}
                image={item['image']}
              />
            )
          })}
        </div>
      </div>

      <div id="reviews" className='bg-[#141717ff] min-h-screen flex flex-col px-4 sm:px-8 md:px-12  '>
         <div className='rounded-full  text-center w-1/9 px-6 py-2 '
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h1 className='text-[#ef4141] text-xl sm:text-3xl font-bold'>Reviews</h1>
          
        </div>
        <Reviews />

      </div>

    </div>
  )
}

export default App