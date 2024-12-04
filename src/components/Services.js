import React from 'react';

const Services = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          WHAT WE DO ?
          <div className="relative w-[200px] mt-3 mx-auto">
            <div className="absolute inset-0 bg-purple-600 h-1.5"></div>

            <div className="absolute left-1/2 top-1/2 w-14 h-2.5 mt-[2px] bg-purple-800 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Creativity Section */}
          <div className="text-center">
            <div className="w-24 h-24   rounded-full mx-auto mb-6 flex items-center justify-center">
              <img
                className="animate-move"
                src="https://www.taskpulse.in/images/service1.png"
                alt="Creativity"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">CREATIVITY</h3>
            <p className="text-gray-600 leading-relaxed">
              Creativity drives our approach to developing unique and effective solutions. We harness
              imaginative thinking to deliver innovative strategies and breakthrough results.
            </p>
          </div>

          {/* Superiority Section */}
          <div className="text-center">
            <div className="w-24 h-24   rounded-full mx-auto mb-6 flex items-center justify-center">
              <img
                className="animate-move"
                src="https://www.taskpulse.in/images/service2.png"
                alt="Superiority"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">SUPERIORITY</h3>
            <p className="text-gray-600 leading-relaxed">
              Superiority reflects our commitment to delivering exceptional standards and outstanding
              results. We ensure that every solution and service we provide stands out in quality and
              effectiveness.
            </p>
          </div>

          {/* Coordination Section */}
          <div className="text-center">
            <div className="w-24 h-24   rounded-full mx-auto mb-6 flex items-center justify-center">
              <img
                className="animate-move"
                src="https://www.taskpulse.in/images/service3.png"
                alt="Coordination"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">COORDINATION</h3>
            <p className="text-gray-600 leading-relaxed">
              Coordination underscores our focus on seamless teamwork and effective integration. We
              work closely with our clients to ensure that every project achieves optimal results through
              well-orchestrated efforts.
            </p>
          </div>

          {/* Adaptable Partnerships Section */}
          <div className="text-center">
            <div className="w-24 h-24   rounded-full mx-auto mb-6 flex items-center justify-center">
              <img
                className="animate-move"
                src="https://www.taskpulse.in/images/service1.png"
                alt="Adaptable Partnerships"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">ADAPTABLE PARTNERSHIPS</h3>
            <p className="text-gray-600 leading-relaxed">
              Adaptable Partnerships emphasize our commitment to tailoring our services to meet
              diverse client needs. We adjust our approach to ensure flexibility and responsiveness in
              every engagement.
            </p>
          </div>
        </div>

        <div className="text-center flex justify-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 text-white px-8 py-3 rounded-full hover:from-purple-800 hover:via-purple-700 hover:to-purple-600 transition-colors ">
            All Services
          </button>

        </div>
      </div>
    </div>
  );
};

export default Services;
