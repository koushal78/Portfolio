

const Summary = () => {
     const stats = [
        { value: "+2", label: "YEARS OF EXPERIENCE" },
        { value: "+4", label: "PROJECTS COMPLETED" },
        // { value: "+20", label: "WORLDWIDE CLIENTS" },
      ];
  return (
    <div className="flex  flex-col items-center">
       <div className="w-full bg-yellow-100 text-yellow-800 text-center text-sm py-2 z-50">
  🚧 This portfolio is currently under development. Updates are coming soon!
</div>
          <p className="text-3xl sm:text-4xl max-w-[400px] lg:text-[60px] tracking-wide text-white font-bold mt-8 text-center mx-4">
          Transforming Your Ideas into 
          <span className="text-purple-800"> Reality</span>
        </p>
        <p className="text-gray-600 px-6 sm:px-10 md:px-14 max-w-[90%] sm:max-w-[500px] lg:max-w-[80%] py-6 sm:py-8 mx-10 text-center">
          I am a dedicated web developer proficient in modern technologies such as React.js, Tailwind CSS, and MongoDB, with a strong focus on building scalable and user-centric web applications. Committed to delivering clean, efficient, and innovative solutions to real-world challenges.
        </p>
        <div className="">
        <div className="flex justify-between gap-6">
       {
         stats.map((item,index)=>(
           <div key={index} className=" pl-4 mx-10 text-center">
            <p className="text-4xl font-bold text-white">{item.value}</p>
            <p className="text-gray-400 uppercase text-sm">{item.label}</p>
          </div>
        ))
      }
        </div>

        </div>
    </div>
  )
}

export default Summary