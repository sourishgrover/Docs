import React, { useRef } from 'react'
import Card from './Card'

const Forground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: " this is a demo description u have to add backend as well",
      fileSize:".9mb",
      close: true,
      tag:{
        isOpen:true, tagTitle: " Download Now" , tagColor: " green"
      }
    },
    {
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime",
      fileSize:".9mb",
      close: true,
      tag:{
        isOpen:true, tagTitle: " Download Now" , tagColor: " blue "
      }
    },
    {
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime",
      fileSize:".9mb",
      close: true,
      tag:{
        isOpen:true, tagTitle: " Download Now" , tagColor: " green"
      }
    },
  ]
  return (
    <div>
     <div ref={ref} className=" fixed top-0 left-0 w-full h-screen z-[3] flex gap-10 flex-wrap p-4">
        {data.map((item, index)=>(
          <Card data={item} reference = {ref} />
        ))}
         
      
    </div>
    
    </div>
  )
}

export default Forground