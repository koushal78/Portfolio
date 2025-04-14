
import img1 from '/img5.png'
import img2 from '/img4.png'
import img3 from '/img3.webp'
const Projects = () => {
    const Projects = [
        {name:"RealTime Chat-App" , Description:"Seamless real-time messaging with a sleek, modern interface—chat anytime, anywhere!", img:img1, url:"https://chat-app-eg97.onrender.com/Login" },
        {name:"Pokémon Finder" , Description:"Find and explore Pokémon effortlessly with real-time API search", img:img2, url:"https://pokemon-fineder.netlify.app/" },
        {name:"News-App" , Description:"Stay updated with the latest news in real-time, anytime, anywhere", img:img3, url:"http://localhost:5173/Home" },
      ]
  return (
    <div>
        <div className='my-8'>
        <h2 className="text-white my-8  text-4xl font-bold text-center"> Projects</h2>
        <div className="flex gap-4 flex-wrap justify-center w-full max-w-[95vw] px-2">




        {
          Projects.map((item,index)=>(
            <div key={index} className="flex flex-col w-full max-w-[310px] object-fill hover:scale-105 duration-300 bg-[#2a2b2d] rounded-2xl pb-4 pt-2">


              <a href={item.url} target='_blank'>
                
                
              <img src={item.img} alt="Project" className='h-[250px] w-full max-w-[300px] mx-auto aspect-[1/3] rounded-md ' />

                
              <p className=' text-white font-semibold text-xl text-center mx-auto mt-8 px-4 hover:text-purple-800'>{item.Description.slice(0,40)}..</p>
                </a>
            </div>
          )) 
          
        }
        </div>

        </div>
    </div>
  )
}

export default Projects