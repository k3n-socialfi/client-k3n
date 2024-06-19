import { useState } from "react";
import { motion } from "framer-motion";
import svgs from "@/assets/svgs";
import Image from "next/image";
import IconArrowDown from "@/assets/icons/IconArrowDownChange";
import IconArrowUp from "@/assets/icons/IconArrowUpChange";
import { IconSend, IconShare, IconSharePost } from "@/assets/icons";

export default function Accordion({
  question,
  answer,
}: {
  question?: string;
  answer?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={transition}
      className="w-full l px-2 lg:px-10 bg-[#FFFFFF11] rounded-lg overflow-hidden"
 
    >
      <motion.div
        className="flex items-center justify-between p-[30px] px-3 gap-12 "
        layout="position"
        transition={transition}
      >
        <motion.div className="flex flex-col gap-2">
          <p className="text-xl font-medium">hahahah</p>
          {isOpen && (
            <div className="flex flex-col gap-4">
              <motion.div
                className="bg-[#191D24]  rounded-xl px-4 py-3"
                layout
                transition={transition}
              >
                <p className="text-lg  ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ducimus quae fugiat minima saepe, accusantium velit
                  consequatur totam, unde aliquam suscipit, molestias soluta
                  tenetur? Esse unde consequuntur veritatis sunt officiis magni!{" "}
                </p>
              </motion.div>

              <motion.div
                className="bg-[#191D24]  rounded-xl px-4 py-3"
                layout
                transition={transition}
              >
                <p className="text-lg  ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ducimus quae fugiat minima saepe, accusantium velit
                  consequatur totam, unde aliquam suscipit, molestias soluta
                  tenetur? Esse unde consequuntur veritatis sunt officiis magni!{" "}
                </p>
              </motion.div>


              {/* <div>
                <input
                  placeholder="Bình luận"
                  className="w-full h-14 pl-4 bg-[#4f4f4f] text-white rounded-[40px] border-none outline-none ring-0 focus:ring-0 focus:border-[#f23581] placeholder:text-white"
                />
              </div> */}
              <div className="flex">
                <input
                type="text"
                
                  className="w-full h-14 pl-4 bg-[#4f4f4f] text-white rounded-s-[40px] border-none outline-none ring-0 focus:ring-0 focus:border-[#f23581] placeholder:text-white "
                  placeholder="..."
                />

                <span className="inline-flex gap-2 items-center px-3 rounded-e-[40px]  bg-[#4f4f4f] ">
                  
                  
                   <IconSend/>
                  
                </span>
              </div>
            </div>
          )}
        </motion.div>

        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex-shrink-0"
          layout
          transition={transition}
          style={{
            boxShadow: "0px 12px 44px 0px rgba(21, 38, 92, 0.12)",
          }}
        >
          
          <p>{isOpen ? "Short view" : "View all"} </p>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

const transition = {
  duration: 0.5,
};
