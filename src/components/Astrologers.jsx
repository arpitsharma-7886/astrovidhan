import { Star, MessageCircle, Phone, Video, Award } from 'lucide-react';

const Astrologers = () => {
  const astrologers = [
    {
      id: 1,
      name: "Pandit Raj Kumar",
      specialization: "Vedic Astrology, Love & Marriage",
      experience: "15+ Years",
      rating: 4.9,
      reviews: 2847,
      languages: ["Hindi", "English"],
      price: "₹25/min",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      isOnline: true,
      expertise: ["Love Problems", "Career Guidance", "Marriage Matching"]
    },
    {
      id: 2,
      name: "Astrologer Priya Sharma",
      specialization: "Tarot Reading, Numerology",
      experience: "12+ Years",
      rating: 4.8,
      reviews: 1923,
      languages: ["Hindi", "English", "Punjabi"],
      price: "₹30/min",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      isOnline: true,
      expertise: ["Tarot Reading", "Future Prediction", "Health Issues"]
    },
    {
      id: 3,
      name: "Guru Vikash Joshi",
      specialization: "KP Astrology, Remedies",
      experience: "20+ Years",
      rating: 4.9,
      reviews: 3156,
      languages: ["Hindi", "English", "Sanskrit"],
      price: "₹35/min",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      isOnline: false,
      expertise: ["Business Problems", "Property Issues", "Spiritual Guidance"]
    },
    {
      id: 4,
      name: "Dr. Meera Agarwal",
      specialization: "Medical Astrology, Gemstones",
      experience: "18+ Years",
      rating: 4.7,
      reviews: 2234,
      languages: ["Hindi", "English", "Bengali"],
      price: "₹28/min",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      isOnline: true,
      expertise: ["Health Astrology", "Gemstone Consultation", "Family Issues"]
    },
    {
      id: 5,
      name: "Pandit Suresh Gupta",
      specialization: "Horary Astrology, Muhurat",
      experience: "25+ Years",
      rating: 4.9,
      reviews: 4521,
      languages: ["Hindi", "English", "Gujarati"],
      price: "₹40/min",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      isOnline: true,
      expertise: ["Muhurat Selection", "Horary Questions", "Vedic Remedies"]
    },
    {
      id: 6,
      name: "Astrologer Kavita Singh",
      specialization: "Palmistry, Face Reading",
      experience: "10+ Years",
      rating: 4.6,
      reviews: 1567,
      languages: ["Hindi", "English"],
      price: "₹22/min",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      isOnline: true,
      expertise: ["Palm Reading", "Face Reading", "Personality Analysis"]
    }
  ];

  return (
    <section id="astrologers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Talk to Our Expert Astrologers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from thousands of verified astrologers and get instant guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {astrologers.map((astrologer) => (
            <div 
              key={astrologer.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img 
                      src={astrologer.image} 
                      alt={astrologer.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                      astrologer.isOnline ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{astrologer.name}</h3>
                    <p className="text-sm text-gray-600">{astrologer.specialization}</p>
                    <div className="flex items-center mt-1">
                      <Award className="h-4 w-4 text-orange-500 mr-1" />
                      <span className="text-sm text-gray-600">{astrologer.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-semibold">{astrologer.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({astrologer.reviews})</span>
                  </div>
                  <div className="text-lg font-bold text-orange-500">{astrologer.price}</div>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {astrologer.expertise.slice(0, 2).map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-orange-50 text-orange-600 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {astrologer.expertise.length > 2 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{astrologer.expertise.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Languages */}
              <div className="px-6 pb-4">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Languages: </span>
                  {astrologer.languages.join(", ")}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-3 gap-2">
                  <button className="flex items-center justify-center px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Chat
                  </button>
                  <button className="flex items-center justify-center px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </button>
                  <button className="flex items-center justify-center px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm font-medium transition-colors">
                    <Video className="h-4 w-4 mr-1" />
                    Video
                  </button>
                </div>
              </div>

              {/* Online Status */}
              {astrologer.isOnline && (
                <div className="bg-green-50 px-6 py-2 border-t">
                  <div className="flex items-center text-green-700 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Available Now
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
            View All Astrologers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Astrologers;