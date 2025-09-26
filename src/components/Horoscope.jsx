import { Calendar, TrendingUp, Heart, Briefcase, Star } from 'lucide-react';

const Horoscope = () => {
  const zodiacSigns = [
    { name: "Aries", symbol: "♈", date: "Mar 21 - Apr 19", prediction: "Great opportunities await you today. Focus on career growth.", lucky: "Red", number: 7 },
    { name: "Taurus", symbol: "♉", date: "Apr 20 - May 20", prediction: "Financial stability is on the horizon. Trust your instincts.", lucky: "Green", number: 3 },
    { name: "Gemini", symbol: "♊", date: "May 21 - Jun 20", prediction: "Communication will be key today. Express yourself clearly.", lucky: "Yellow", number: 9 },
    { name: "Cancer", symbol: "♋", date: "Jun 21 - Jul 22", prediction: "Family relationships need attention. Show more care and love.", lucky: "Silver", number: 2 },
    { name: "Leo", symbol: "♌", date: "Jul 23 - Aug 22", prediction: "Your leadership qualities will shine. Take charge of situations.", lucky: "Gold", number: 1 },
    { name: "Virgo", symbol: "♍", date: "Aug 23 - Sep 22", prediction: "Attention to detail will bring success. Stay organized.", lucky: "Navy Blue", number: 6 },
    { name: "Libra", symbol: "♎", date: "Sep 23 - Oct 22", prediction: "Balance is needed in all aspects of life. Seek harmony.", lucky: "Pink", number: 4 },
    { name: "Scorpio", symbol: "♏", date: "Oct 23 - Nov 21", prediction: "Transformation is coming. Embrace change with confidence.", lucky: "Maroon", number: 8 },
    { name: "Sagittarius", symbol: "♐", date: "Nov 22 - Dec 21", prediction: "Adventure calls you. Explore new opportunities fearlessly.", lucky: "Purple", number: 5 },
    { name: "Capricorn", symbol: "♑", date: "Dec 22 - Jan 19", prediction: "Hard work will pay off. Stay committed to your goals.", lucky: "Brown", number: 10 },
    { name: "Aquarius", symbol: "♒", date: "Jan 20 - Feb 18", prediction: "Innovation and creativity will lead to breakthrough moments.", lucky: "Turquoise", number: 11 },
    { name: "Pisces", symbol: "♓", date: "Feb 19 - Mar 20", prediction: "Intuition is your guide. Trust your inner voice today.", lucky: "Sea Green", number: 12 }
  ];

  const todayHighlights = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Jupiter's position favors professional advancement",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Heart,
      title: "Love & Romance",
      description: "Venus brings harmony in relationships",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Briefcase,
      title: "Financial Gains",
      description: "Mercury supports business and investments",
      color: "text-green-500",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section id="horoscope" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Daily Horoscope
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your personalized daily predictions based on your zodiac sign
          </p>
        </div>

        {/* Today's Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Today's Cosmic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {todayHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className={`${highlight.bgColor} rounded-2xl p-6 text-center`}>
                  <div className="flex justify-center mb-4">
                    <IconComponent className={`h-12 w-12 ${highlight.color}`} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h4>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Zodiac Signs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {zodiacSigns.map((sign, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-orange-200"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {sign.symbol}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{sign.name}</h3>
                <p className="text-sm text-gray-500">{sign.date}</p>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {sign.prediction}
                </p>
                
                <div className="flex justify-between text-xs">
                  <div>
                    <span className="text-gray-500">Lucky Color:</span>
                    <span className="ml-1 font-medium text-gray-700">{sign.lucky}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Lucky No:</span>
                    <span className="ml-1 font-medium text-gray-700">{sign.number}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-orange-50 hover:bg-orange-100 text-orange-600 py-2 rounded-lg text-sm font-medium transition-colors">
                Read Full Horoscope
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl p-12 text-white">
            <Star className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">
              Want Personalized Predictions?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get detailed birth chart analysis and personalized predictions from our expert astrologers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Get Birth Chart
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Talk to Astrologer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Horoscope;