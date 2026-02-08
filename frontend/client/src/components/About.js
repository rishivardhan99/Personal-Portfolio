import React, {useEffect, useState} from "react";
import API from "../api";
import { motion } from "framer-motion";

export default function About(){
  const [about, setAbout] = useState(null);

  useEffect(()=>{
    API.get("about/").then(res=>{
      if(res.data && res.data.length) setAbout(res.data[0]);
    }).catch(console.error);
  },[]);

  return (
    <section id="about" className="py-10">
      <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} className="text-2xl font-semibold mb-6">About</motion.h2>

      <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} transition={{delay:0.06}} className="section-card">
        {about ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1">
              {about.avatar_url ? (
                <img src={about.avatar_url} alt="avatar" className="w-full rounded-lg object-cover h-48"/>
              ) : (
                <div className="w-full h-48 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">No image</div>
              )}
            </div>

            <div className="md:col-span-2">
              <h3 className="text-xl font-bold">{about.name}</h3>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">{about.title}</div>
              <p className="text-gray-700 dark:text-gray-200 whitespace-pre-line">{about.bio}</p>

              {about.resume_url && (
                <div className="mt-4">
                  <a href={about.resume_url} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-primary-600 text-white rounded">Download resume</a>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p>Loading…</p>
        )}
      </motion.div>
    </section>
  )
}
