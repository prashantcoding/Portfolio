import React, { useEffect, useState } from 'react'
import sanityClient from "../client.js"

const MyProject = () => {
  const [projectData, setprojectData] = useState(null)
  useEffect(() => {
    sanityClient.fetch(`*[_type=="project"]{
      title,
      Date,
      place,
      description,
      projectType,
      link,
      tags
      
  }`).then((data) => setprojectData(data)).catch(console.error);
  }, [])
  {console.log("HII",projectData)}
  return (
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto '>
        <h1 className='text-5xl flex justify-center cursive '>My projects</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to My project Page!

        </h2>
        <section className='grid grid-cols-2 gap-8'>
          {
           projectData&& projectData.map((project,index)=>{
            
                return(
                  <article className='relative rounded-lg shadow-xl bg-white p-16'>
            <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
              <a href={project.link} alt={project.title} target="" rel="noopener norefferer">{project.title}</a>
            </h3>
              <div className='text-gray-500 text-xs space-x-4 '>
                <span>
                  <strong className="font-bold">Finished on</strong>:{""}
                  {
                    new Date(project.Date).toLocaleDateString()
                  }
                </span>
                <span>
                  <strong className='font-bold'>Company</strong>:{" "}
                  {project.place}
                </span>
                <span>
                    <strong className='font-bold '>Type</strong>:{" "}
                    {project.projectType}
                </span>
                <p className='my-6 text-lg text-gray-700 leading-relaxd'>
                    {project.description}
                 
                  
                </p>
                <a href={project.link} rel="noopener noreferrer" target="_blank" className='text-red-500 font-bold  hover::text-red-400 cursor-pointer'>
                    {" "}View the project {" "}
                    <span role="img" aria-label="right pointer">👉</span>
                  </a>
              </div>
            
          </article>
                )
            })
          }
          
        </section>
      </section>
    </main>
  )
}

export default MyProject