import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null on server-side rendering
  }

  if (resolvedTheme === 'dark') {
    return (
      <div className="absolute inset-0 z-0">
      <div className="relative flex flex-col h-screen w-full" id="about-me">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute  xl:top-[-267px] md:top-[-225px] sm:top-[-223px] min-[250px]:top-[-223px] h-full w-full left-0 object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </div>
    </div>
    );
  } else {
    return null; // Return null if theme is not dark
  }
};

export default Hero;
