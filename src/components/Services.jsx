import { Heart, Hop as Home, Briefcase, Star, Users, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Love & Relationships",
      description: "Get guidance on love, marriage, compatibility, and relationship issues",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Briefcase,
      title: "Career & Business",
      description: "Professional guidance for career growth, job changes, and business decisions",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Home,
      title: "Family & Health",
      description: "Solutions for family problems, health issues, and domestic harmony",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Star,
      title: "Horoscope Reading",
      description: "Daily, weekly, monthly horoscope predictions based on your zodiac sign",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "Marriage Matching",
      description: "Kundli matching, compatibility analysis for successful marriages",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Shield,
      title: "Remedies & Solutions",
      description: "Effective remedies, gemstone suggestions, and spiritual solutions",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Astrology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert guidance on all aspects of life from our experienced astrologers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 group cursor-pointer"
              >
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Get Your Life Guidance?
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Connect with our expert astrologers now and get instant solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Start Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                View All Astrologers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;