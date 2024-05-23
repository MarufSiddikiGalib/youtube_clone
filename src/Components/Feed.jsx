import React, {useContext, useEffect} from 'react'
import { Context } from '../context/contextApi'
import LeftNav from './LeftNav'
import VideoCard from './VideoCard';




const Feed = () => {

    const {loading, searchResults} = useContext(Context);

    useEffect(()=>{
         document.getElementById("root").classList.remove("custom-h");
    },[]);

    useEffect(() => {
        // Console log to check searchResults
        console.log("searchResults:", searchResults);
    }, [searchResults]);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
    <LeftNav />
    
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
            
            {!loading &&
               searchResults && searchResults.map((item) => {
                    if (item.type !== "video") return false;


                    if (!item?.video) return null;

                    return (
                        <VideoCard
                            key={item?.video?.videoId}
                            video={item?.video}
                        />
                    );
                })} 
        </div>
    </div>
</div>
  );
  
};

export default Feed
