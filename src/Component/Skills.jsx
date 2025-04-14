import { motion } from "framer-motion";
import { useEffect } from "react";
const Skills = () => {
    const skills =[
      {name:"HTML",img:"/skills4.png"},
      {name:"CSS",img:"/skills7.png"},
      {name:"JavaScript",img:"/skills6.png"},
      {name:"React.js",img:"/skills8.png"},
      {name:"Tailwind",img:"/skills3.png"},
      {name:"Node.js",img:"/skill1.png"},
      {name:"Next.js",img:"/skills5.png"},
      {name:"c/c++",img:"/skills2.png"},
      {name:"Mongodb",img:"/skills9.png"},
    ]
  
  return (
    <div className="w-full   my-8 text-center">
        <h1 className="text-white my-8 text-4xl font-bold">Skills</h1>
        <div className="w-full h-full rounded-2xl bg-[#2a2b2d] p-8">
        <div className="grid md:grid-cols-2 grid-cols-1 ">
{skills.map((item,index)=>(
  

    
  <motion.div key={index} className="flex my-4 items-center gap-2 text-lg md:text-2xl font-semibold border-1 mx-2 rounded-full p-2   justify-center "
  initial={{
    opacity:0,
    scale:0.75
  }}
  whileInView={{
    opacity:1,
    scale:1,
    transition:{
      duration:1
    }
  }}
  >

 <img src={item.img} alt="Skill" className="h-20 w-20 object-contain " />
 <p className="text-white hidden md:block">{item.name}</p>


    </motion.div>
 
  

))}
</div>
        </div>
    </div>
  )
}

export default Skills