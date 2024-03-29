import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number"; //3rd party plugins
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";


const VideoCard = ({video}) => {

    

  return (
  <Link to = {`/video/${video?.videoId}`}>
    <div className="flex flex-col mb-8">
      <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden'>

        <img 

          className="h-full w-full object-cover" 
          src={video?.thumbnails?.[0]?.url}
          />
          
          {video?.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds} />
        )}
           

      </div>
    </div>
  </Link>
  
  );
};

export default VideoCard
