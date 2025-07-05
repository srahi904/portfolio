/** @format */

// components/TestimonialsSection.jsx

import React from "react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, Acme Corp",
    image: "https://picsum.photos/id/1012/200/200",
    quote:
      "Working with Rahi was a pleasure. The project was delivered on time and exceeded expectations.",
  },
  {
    name: "John Smith",
    role: "CTO, Tech Solutions",
    image: "https://picsum.photos/id/1025/200/200",
    quote:
      "Rahi's expertise in frontend development is top-notch. Highly recommended!",
  },
  {
    name: "Alice Johnson",
    role: "Product Manager, InnovateX",
    image: "https://source.unsplash.com/random/200x200/?person",
    quote:
      "The UI/UX design provided by Rahi significantly improved our user engagement.",
  },
  {
    name: "Bob Williams",
    role: "Founder, StartupHub",
    image: "https://picsum.photos/id/177/200/200",
    quote:
      "Exceptional problem-solving skills and attention to detail in every project.",
  },
  {
    name: "will Williams",
    role: "Co-Founder, StartupHub",
    image: "https://picsum.photos/id/177/200/200",
    quote:
      "Exceptional problem-solving skills and attention to detail in every project.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-600 mb-12">
          Hear what my clients have to say about my work.
        </p>

        <Marquee pauseOnHover={true} gradient={false} speed={50}>
          <div className="flex gap-8 sm:gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-80 sm:w-64 flex-shrink-0 mx-1 sm:mx-2"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialsSection;
