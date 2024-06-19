import { useState } from "react";
import { motion } from "framer-motion";;
import { IconSend} from "@/assets/icons";
import { formatDistanceToNow } from "date-fns";


export default function RequestMessage({ data, type = "order", handlePutMessage }: {data:any,type: string, handlePutMessage:(reply: string,messageId:string ) => void}) {
  const [isOpen, setIsOpen] = useState(false);
  const [reply, setReply] = useState<string>('');
 

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
        <motion.div className="flex flex-col gap-2 w-full">
          <p className="text-xl font-medium">From: {data?.from}</p>
          <p className="text-xs">
            {formatDistanceToNow(new Date(data?.createdAt * 1000), {
              addSuffix: true,
            })}
          </p>
          {isOpen && (
            <div className="flex flex-col gap-4">
              <motion.div
                className="bg-[#191D24]  rounded-xl px-4 py-3"
                layout
                transition={transition}
              >
                <p className="text-lg  ">{data?.message}</p>
              </motion.div>

              {
                data?.reply && (
                  <div>
                   <p className="text-sm text-success-100">Me</p>
                  <motion.div
                  className="bg-[#191D24]  rounded-xl px-4 py-3"
                  layout
                  transition={transition}
                >
                  <p className="text-lg  ">{data?.reply}</p>
                </motion.div>  
                  </div>
                 
                )
              }

              {type === "collab" && (
                <div className="flex">
                  <input
                  onChange={(e) => setReply(e.target.value)}
                  onKeyDown={(e) => { 
                    if (e.key === "Enter") 
                      handlePutMessage(reply,data?.messageId)
                    }} 
                    type="text"
                    className="w-full  py-4 px-4 bg-[#4f4f4f] text-white rounded-s-[40px] border-none outline-none ring-0 focus:ring-0 focus:border-[#f23581] placeholder:text-white "
                    placeholder="Reply..."
                  />

                  <div className="inline-flex gap-2 items-center px-6 rounded-e-[40px]  bg-[#4f4f4f] ">
                    <motion.button
                    onClick={() => handlePutMessage(reply,data?.messageId)}
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      <IconSend width={20} height={20}/>
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          )}
          <div>
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
              <p className="text-sm">{isOpen ? "Short view" : "View all"} </p>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const transition = {
  duration: 0.5,
};
