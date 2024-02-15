import React, { useContext, useEffect, useState } from "react";
import { idContext } from "../store/idContext";
import PostList from "./PostList";

const PostButton = () => {
  const { id } = useContext(idContext);
  const [userData, setUserData] = useState([]);
  const [userPostData, setUserPostData] = useState([]);

  return (
    <>
      <div className="m-1 p-2 flex justify-center items-center">
        {userPostData.length ? (
          <button
            className="bg-green-500 m-1 px-2 py-2 rounded"
            onClick={() => handleDownloadClick(id)}
          >
            Download in Excel
          </button>
        ) : (
          <button
            className="bg-red-500 m-1 px-2 py-2 rounded border-1"
            onClick={handleBulkClick}
          >
            Bulk Add
          </button>
        )}
      </div>
      {userData.length && <PostList userData={userData} />}
    </>
  );
};

export default PostButton;
