import React from "react";
import LeftCard from "./card";
import RightCards from "./rightCards";
import MiddleCard from "./middleCard";


export default function MustRead() {
  const articles = [
    {
      image: {one:"/images/john.avif",
            two:"/images/net.png"
      },
      category: "War",
      time: "8 minutes ago",
      title: "Ukraine's silence along southern front fuels counteroffensive...",
      
      link: "#",
    },
    {
      image: {one:"/images/john.avif",
            two:"/images/net.png"
      },
      category: "War",
      time: "8 minutes ago",
      title: "Ukraine's silence along southern front fuels counteroffensive...",
      link: "#",
    },
   [
    {
        image: {one:"/images/john.avif",
              two:"/images/net.png"
        },
        category: "War",
        time: "8 minutes ago",
        title: "Ukraine's silence along southern front fuels counteroffensive...",
        link: "#",
      },
      {
        image: {one:"/images/john.avif",
              two:"/images/net.png"
        },
        category: "War",
        time: "8 minutes ago",
        title: "Ukraine's silence along southern front fuels counteroffensive...",
        link: "#",
      },
   ]
  ];

  return (
    
   <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:mt-10 md:mt-10 mt-4">
     
    {
        <LeftCard articalLeft={articles[0]}/>
    }
    {
        <MiddleCard articalMiddle={articles[1]}/>
    }
    {
       <RightCards articalRight={articles[2]}/>
    }
   
  
   </div>
  );
}
