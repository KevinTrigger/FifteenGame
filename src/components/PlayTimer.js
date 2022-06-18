import React, { useEffect, useState } from "react";

function PlayTimer({ timeSeconds, setTimeSeconds }) {
  useEffect(() => {
    setTimeout(() => setTimeSeconds(timeSeconds + 1), 1000);
  }, [timeSeconds]);

  return (
    <div className="text-white text-base font-medium tracking-wider">
      Game time: {timeSeconds}s
    </div>
  );
}

export default PlayTimer;
