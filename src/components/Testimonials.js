import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Agelina",
      image: "https://www.taskpulse.in/images/user1.jpg",
      quote: "TaskPulse streamlined our task management and client communication—simple, efficient, and highly effective!"
    },
    {
      name: "John Dow",
      image: "https://www.taskpulse.in/images/user2.jpg",
      quote: "TaskPulse transformed our task tracking and client updates—smooth, reliable, and incredibly efficient!"
    }
  ]
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
          WHAT CLIENTS SAY ?
          <div className="relative w-[200px] mt-3 mx-auto">
            <div className="absolute inset-0 bg-purple-600 h-1.5"></div>

            <div className="absolute left-1/2 top-1/2 w-14 h-2.5 mt-[2px] bg-purple-800 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>



        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative border-l-4 border-purple-600 pl-6"
          >
            <blockquote className="text-lg mb-4">
              {testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative rounded-full overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile picture`}
                  fill
                  className="object-cover"
                />
              </div>
              <cite className="not-italic font-medium">
                {testimonial.name}
              </cite>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
