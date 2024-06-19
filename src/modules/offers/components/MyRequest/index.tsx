import React, { useState } from "react";

import useMyRequest from "./useMyRequest";

import { LayoutGroup } from "framer-motion";
import RequestMessage from "./components/RequestMessage";

const MyRequest = () => {
  const { allRequestCollab, allOrderRequest, handlePutMessage } = useMyRequest();
  const [showAllOrder, setShowAllOrder] = useState(false);
  const [showAllCollab, setShowAllCollab] = useState(false);

  const displayAllOrderRequest = showAllOrder
    ? allOrderRequest
    : allOrderRequest?.slice(0, 5);
  const displayAllRequestCollab = showAllCollab
    ? allRequestCollab
    : allRequestCollab?.slice(0, 5);

  return (
    <div className="flex flex-col gap-6 min-h-[100vh] px-[14px] py-6">
      <div>
        <p className="text-[32px] font-bold">My Request</p>
      </div>
      <LayoutGroup>
        <div className="px-7">
          <div>
            <p className="text-[28px] font-bold">Order Request</p>
          </div>
          <div className="flex flex-col gap-2">
            {displayAllOrderRequest?.map((item: any, index: any) => {
              return <RequestMessage key={index} data={item} type="order" handlePutMessage={handlePutMessage} />;
            })}
            <>
              {allOrderRequest?.length === 0 && (
                <p className="text-success-300">{`You haven't order request`}</p>
              )}
              {allOrderRequest?.length <= 5 ? null : !showAllOrder ? ( // Show button only when not showing all
                <button
                  className="bg-darkblack-400 w-full hover:bg-darkblack-200 text-white font-bold py-2 px-8 rounded mt-4"
                  onClick={() => setShowAllOrder(true)}
                >
                  Show All
                </button>
              ) : (
                <button
                  className="bg-darkblack-400 w-full hover:bg-darkblack-200 text-white font-bold py-2 px-8 rounded mt-4"
                  onClick={() => setShowAllOrder(false)}
                >
                  Show Less
                </button>
              )}
            </>
          </div>
        </div>
      </LayoutGroup>

      <LayoutGroup>
        <div className="px-7">
          <div>
            <p className="text-[28px] font-bold">Request Collaboration</p>
          </div>
          <div className="flex flex-col gap-2">
            {displayAllRequestCollab?.map((item: any, index: any) => {
              return <RequestMessage key={index} data={item} type="collab" handlePutMessage={handlePutMessage} />;
            })}

            <>
              {allRequestCollab?.length === 0 && (
                <p className="text-success-300">{`You haven't received any request collaboration`}</p>
              )}

              {allRequestCollab?.length <= 5 ? null : !showAllOrder ? ( // Show button only when not showing all
                <button
                  className="bg-darkblack-400 w-full hover:bg-darkblack-200 text-white font-bold py-2 px-8 rounded mt-4"
                  onClick={() => setShowAllCollab(true)}
                >
                  Show All
                </button>
              ) : (
                <button
                  className="bg-darkblack-400 w-full hover:bg-darkblack-200 text-white font-bold py-2 px-8 rounded mt-4"
                  onClick={() => setShowAllCollab(false)}
                >
                  Show Less
                </button>
              )}
            </>
          </div>
        </div>
      </LayoutGroup>
    </div>
  );
};

export default MyRequest;
