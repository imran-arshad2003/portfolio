const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Startup Founder",
    rating: 5,
    review: "Imran built our landing page from scratch and it looked absolutely stunning. Clean animations, pixel-perfect design, and delivered ahead of schedule. Highly recommend!"
  },
  {
    name: "James Thornton",
    role: "Product Manager",
    rating: 5,
    review: "Working with Imran was a pleasure. His React.js skills are top notch the component architecture he built was clean, reusable, and well-documented."
  },
  {
    name: "Ayesha Raza",
    role: "E-commerce Owner",
    rating: 5,
    review: "My online store's landing page got a complete makeover. The UI is modern, responsive, and our conversion rate improved noticeably. Amazing work!"
  },
  {
    name: "Daniel Carter",
    role: "Tech Lead",
    rating: 4.5,
    review: "Imran has a great eye for design and solid React fundamentals. He tackled complex state management without any issues. Will definitely collaborate again."
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director",
    rating: 5,
    review: "The landing page Imran created for our campaign was beyond our expectations. Beautiful animations and fully mobile responsive. Our clients loved it!"
  },
  {
    name: "Omar Farooq",
    role: "SaaS Founder",
    rating: 4.5,
    review: "Great developer with a strong understanding of Tailwind CSS and React. The dashboard he built was fast, clean, and exactly what we envisioned."
  },
  {
    name: "Emily Clarke",
    role: "UI/UX Designer",
    rating: 5,
    review: "As a designer, I'm very particular about implementation. Imran translated my Figma designs to React with incredible accuracy. A true frontend gem!"
  },
  {
    name: "Bilal Hassan",
    role: "Agency Owner",
    rating: 5,
    review: "We've worked with many developers but Imran stands out. His attention to detail, responsiveness, and code quality are exceptional. A go-to developer for us."
  },
  {
    name: "Rachel Kim",
    role: "Freelance Consultant",
    rating: 4.5,
    review: "Imran quickly understood our requirements and delivered a polished React app. His problem-solving approach and communication were both excellent."
  },
  {
    name: "Noah Williams",
    role: "Creative Director",
    rating: 5,
    review: "The portfolio site Imran built for us was visually breathtaking. Smooth animations, fast load times, and a design that truly represents our brand."
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className='flex items-center gap-[2px]'>
      {[1, 2, 3, 4, 5].map((star) => {
        const full = rating >= star;
        const half = !full && rating >= star - 0.5;
        return (
          <span key={star} className='relative text-lg'>
            <span className='text-zinc-700'>★</span>
            {(full || half) && (
              <span
                className='absolute left-0 top-0 overflow-hidden text-yellow-400'
                style={{ width: full ? '100%' : '50%' }}
              >
                ★
              </span>
            )}
          </span>
        );
      })}
      <span className='text-zinc-400 text-xs ml-1'>{rating.toFixed(1)}</span>
    </div>
  );
};

const ReviewCard = ({ name, role, rating, review }) => (
  <div
    className='rounded-2xl p-5 flex flex-col gap-3 h-full'
    style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
    }}
  >
    <div className='flex items-center gap-3'>
      <div
        className='w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0'
        style={{ background: 'rgba(239, 65, 65, 0.3)', border: '1px solid rgba(239,65,65,0.5)' }}
      >
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <p className='text-white font-semibold text-sm'>{name}</p>
        <p className='text-zinc-500 text-xs'>{role}</p>
      </div>
    </div>

    <StarRating rating={rating} />

    <p className='text-zinc-300 text-sm leading-relaxed'>"{review}"</p>
  </div>
);

const Reviews = () => {
  return (
    <div className='bg-[#141717ff] min-h-screen flex flex-col px-4 sm:px-8 md:px-12 py-14'>
      
      <h1 className='text-white text-4xl sm:text-5xl font-bold mb-10'>What Clients Say</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {reviews.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;