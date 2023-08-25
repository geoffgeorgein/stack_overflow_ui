import axios from "axios";
import React, { useEffect, useState } from "react";

const Questions = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.stackexchange.com/2.3/articles?order=desc&sort=activity&site=stackoverflow"
      );
      console.log("reqs", request);
      setPosts(request.data.items.slice(0,7));

      return request;
    }
    fetchData();
  }, []);

  console.log("posts", posts);
  return (
    <div className="px-16">
      {/* Top Section */}
      <div className="mb-2">
        <h2 className="text-slate-400 font-semibold px-4 py-5 ">Questions</h2>
        <ul className="flex flex-row px-2 text-slate-500 cursor-pointer">
          <li className="px-2 p-1 bg-orange-500 text-white rounded-2xl ">
            {" "}
            Interesting
          </li>
          <li className="px-2 p-1"> featured</li>
          <li className="px-2 p-1"> hot</li>
          <li className="px-2 p-1"> week</li>
          <li className="px-2 p-1"> month</li>
        </ul>
      </div>

      {posts.map((post) => {
        console.log("post", post);
        return (
          <li key={post.article_id} className="flex px-3 py-5 justify-between">
            <div className="left ">
              <h3 className="text-cyan-600 font-semibold">{post.title}</h3>
              <ul className="flex">
                {post.tags.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="p-[2] border-solid border-1 border-gray-500 mr-2 text-slate-500"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>

              <li className="flex">
                <h4></h4>
                <h4 className="text-slate-600 font-semibold">
                  {post.owner.display_name}
                </h4>
              </li>
            </div>

            <div className="flex">
              <div className="px-2 text-gray-600">
                <h4 className="px-2">{post.score}</h4>
                <h3>Votes</h3>
              </div>

              <div className="px-2 text-gray-600">
                <h4 className="px-2">{post.view_count}</h4>
                <h3>Views</h3>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default Questions;
