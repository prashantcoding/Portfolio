import sanityClient from "../client.js"
import React, { useEffect, useState } from 'react'
import bg2 from './bg2.jpg'
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const About = () => {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
 const [author, setauthor] = useState(null);
 useEffect(()=>{
  sanityClient.fetch(`*[_type=="author"]{
     name,
     bio,
     "authorImage": image.asset->url
   }`).then((data)=>setauthor(data[0])).catch(console.error)
 })
 if(!author) return <div>Loading....</div>
  return (
    <main className="relative">
      <img src={bg2} alt="plumeria flower" className="absolute w-full"/>
      <div className="p-10 lg:pt-48 container mx-auto relative ">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:felx p-20">
          <img src={urlFor(author.authorImage).url()} className="rounded w-30 h-32 lg w-60 lg:h-64  mr-8" alt={author.name}/>
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey there,I'm {" "} 
              <span className="text-green-100">{author.name}</span>
              <div className="prose lg:prose-xl text-white">
                  <BlockContent blocks={author.bio} projectId="esuu6zjm"
            dataset="production"/>
              </div>
            </h1>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About