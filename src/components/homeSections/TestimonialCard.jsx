import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function TestimonialCard({ name, role, image, comment, rating }) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    if (hasHalfStar) stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    for (let i = 0; i < emptyStars; i++) stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);

    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-gray-800 max-w-md border border-primary-grey/20">
      <div className="flex items-center space-x-1 mb-3">{renderStars()}</div>
      <p className="text-md mb-4">"{comment}"</p>
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
