import SpotlightCard from './SpotlightCard';
import TiltedCard from './TiltedCard';

const Projects = (props) => {
  return (
    <div>
      <TiltedCard imageSrc={props.image}
      containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
      className="custom-tilted-card h-96 w-96  text-white">
        
      
      <SpotlightCard className="custom-spotlight-card h-96 w-96 mt-15 text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
 
  <img className='w-full h-full object-cover rounded-xl '
   src={props.image} alt="" />
  
</SpotlightCard>
</TiltedCard>
 <h1 className='text-2xl font-bold text-white mt-6'>{props.name}</h1>
<div className='flex gap-4 mt-8'>
 

  <button className='bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-3 rounded-xl transition-all duration-300 cursor-pointer'
  onClick={()=>{
    window.open(props.liveurl)
  }}>Live Demo</button>
  <button className='bg-gray-700 hover:bg-violet-600 text-white font-bold py-2 px-3 rounded-xl transition-all duration-300 cursor-pointer'
  onClick={()=>{
    window.open(props.Githuburl);
  }}>Github </button>
  </div>
    </div>
  )
}

export default Projects
