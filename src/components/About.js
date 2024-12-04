import { useEffect, useState } from "react"
const About = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const animateFloat = () => {
      const time = Date.now() * 0.001  
      setOffset(Math.sin(time) * 10)  
    }

    const intervalId = setInterval(animateFloat, 1 / 60 * 1000)  

    return () => clearInterval(intervalId)
  }, [])
  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">WHY CHOOSE US ?</h2>
          <div className="relative w-[200px] mt-3 mx-auto">
            <div className="absolute inset-0 bg-purple-600 h-1.5"></div>

            <div className="absolute left-1/2 top-1/2 w-14 h-2.5 mt-[2px] bg-purple-800 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold mb-8">Why we are different</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                <p>Our company stands apart by integrating innovation with sustainability, ensuring every product is crafted with the future in mind.</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                <p>We value transparency, openly sharing our processes, progress, and setbacks with our community.</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                <p>Unlike others, we prioritize human connection in every interaction, creating authentic relationships with both clients and employees.</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                <p>We set ourselves apart by blending cutting-edge technology with a human-centered approach, delivering results that matter.</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                <p>We are driven by purpose, committed to making a meaningful impact beyond just profits.</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                <p>What makes us unique is our commitment to continuous learning, allowing us to constantly improve and innovate in our field.</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                <p>Our company differs by focusing on collaboration over competition, fostering a culture where everyone thrives together.</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                <p>We redefine excellence by consistently exceeding expectations, delivering high-quality services that inspire trust.</p>
              </li>
            </ul>
          </div>

          <div
            className="lg:w-1/2 transition-transform duration-00 ease-in-out"
            style={{ transform: `translateY(${offset}px)` }}
          >
            <img
              src="https://www.taskpulse.in/images/network.png"
              alt="Technology Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
