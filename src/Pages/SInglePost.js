import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const SInglePost = () => {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  const [singlepost, setsinglepost] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current=="${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,url
        }

      },
      body,
      "name":author->name,
      "authorImage":author->image
    }`
      )
      .then((data) => setsinglepost(data[0]))
      .catch(console.error);
  }, [slug]);
  console.log(singlepost)
  if (!singlepost) return <div>Loding...</div>;
  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-green-100 rounded large">
        <header className="relativ">
          <div className="absolute h-full w-full flex items-center justify-center p-8 ">
            <div className="bg-white bg-opacity-75 rounded  p-12">
              <h1 className="cursive text-3xl lg:text-6xl mb-4">
                {singlepost.title}
                <div className="flex justify-center text-gray-800">
                  <img
                    src={urlFor(singlepost.authorImage).url()}
                    alt={singlepost.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="cursive flex items-center pl-2 text-2xl">
                    {singlepost.name}
                  </p>
                </div>
              </h1>
            </div>
          </div>
          <img src={singlepost.mainImage.asset.url}></img>
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:porse-xl max-w-full">
          <BlockContent
            blocks={singlepost.body}
            projectId="esuu6zjm"
            dataset="production"
          ></BlockContent>
        </div>
      </article>
    </main>
  );
};

export default SInglePost;
