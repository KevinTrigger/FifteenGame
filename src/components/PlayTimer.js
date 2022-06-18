import React, { useEffect, useState } from "react";

function PlayTimer() {

  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    setTimeout(() => setSeconds(seconds+1), 1000);
  }, [seconds])
 
  return (
    <div className="text-white text-base font-medium tracking-wider">
      Game time: {seconds}s
    </div>
  );
}

export default PlayTimer;
