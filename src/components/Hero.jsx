import { Star, Phone, MessageCircle, Video } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-orange-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Talk to India's
              <span className="text-orange-500 block">Best Astrologers</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get instant solutions to your life problems. Chat or call with verified astrologers 
              and get personalized predictions and remedies.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">10M+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">5000+</div>
                <div className="text-sm text-gray-600">Verified Astrologers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">4.8★</div>
                <div className="text-sm text-gray-600">App Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                Start Free Chat
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center justify-center">
                <Video className="h-5 w-5 mr-2" />
                Video Call
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-purple-600 rounded-3xl p-8 text-white">
              <div className="text-center">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Star className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Get Your First Consultation</h3>
                <p className="text-lg opacity-90 mb-6">FREE for 5 minutes</p>
                <div className="bg-white/20 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span>Accuracy Rate</span>
                    <span className="font-bold">98%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-semibold">Live Chat</div>
                  <div className="text-xs text-gray-500">24/7 Available</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-semibold">4.9 Rating</div>
                  <div className="text-xs text-gray-500">Trusted by millions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;