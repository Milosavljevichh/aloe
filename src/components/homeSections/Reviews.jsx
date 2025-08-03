import TestimonialCard from './TestimonialCard';

export default function Reviews() {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Managing Director, Google',
      image: '/aloe_product.png',
      comment: 'This is hella awesome! Very easy to use!',
      rating: 4.5,
    },
    {
      name: 'Jane Smith',
      role: 'CTO, Microsoft',
      image: '/placeholder1.jpg',
      comment: 'Revolutionized our workflow!',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      role: 'CTO, Microsoft',
      image: '/placeholder2.jpg',
      comment: 'Revolutionized our workflow!',
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-5 lg:px-0">
      <div className="max-w-6xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </div>
    </section>
  );
}
