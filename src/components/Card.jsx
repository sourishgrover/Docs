import React from "react";
import { CiFileOn } from "react-icons/ci";
import { MdDownloadForOffline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({ data , reference }) => {
  return (
    <div>
      <motion.div drag dragConstraints={reference} whileDrag={{scale : 1.1}} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className="relative flex-shrink-0 w-60 h-60 bg-zinc-600/60 rounded-[40px] text-white px-8 py-5 overflow-hidden">
        <CiFileOn />

        <p className=" text-sm mt-5 leading-tight font-semibold">{data.desc}</p>

        <div className="footer absolute bottom-0 left-0 w-full ">
          <div className="flex items-center justify-between mb-5 px-8  ">
            <h5>{data.fileSize}</h5>

            <span>
              {data.close ? (
                <IoMdCloseCircleOutline />
              ) : (
                <MdDownloadForOffline />
              )}
            </span>
          </div>

          {data.tag.isOpen && (
          
             <div className={`tag w-full py-3 ${data.tag.tagcolor === "blue" ? ("bg-blue-600") : ("bg-green-600")} flex items-center justify-center `}>
             <h5 className=" font-semibold">
               {data.tag.tagTitle}
             </h5>
           </div>
          )}

         
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
