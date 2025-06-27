import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Github, 
  Twitter, 
  MessageCircle, 
  Coins, 
  Users, 
  Code, 
  Play,
  ExternalLink,
  Gamepad2,
  Zap,
  Shield,
  Star
} from 'lucide-react';

const RubaLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  // Hook for in-view animations
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [tokenRef, tokenInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [communityRef, communityInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [sourceRef, sourceInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/8728386/pexels-photo-8728386.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Hero Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-16 h-16 border-2 border-purple-400/30 rounded-full"
          />
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 right-20 w-12 h-12 border-2 border-blue-400/30 rounded-lg"
          />
          <motion.div
            animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-10 w-8 h-8 bg-purple-500/20 rounded-full"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="mb-8"
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-black mb-6 leading-none"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6, #06B6D4, #8B5CF6)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              RUBA
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={heroInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 mx-auto mb-8 max-w-md"
            />
          </motion.div>

          <motion.p
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-light mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            The Future of Competitive Mobile Gaming on <span className="text-purple-400 font-semibold">Solana</span>
          </motion.p>

          <motion.p
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto"
          >
            Enter the arena where skill meets blockchain technology. Two players, one winner, endless possibilities.
          </motion.p>

          <motion.div
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={scaleIn}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-xl font-semibold shadow-2xl border border-purple-400/30 backdrop-blur-sm flex items-center gap-3"
            >
              <Play className="w-6 h-6" />
              Coming Soon
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-400/50 rounded-full text-xl font-semibold backdrop-blur-sm hover:bg-purple-600/20 transition-all duration-300 flex items-center gap-3"
            >
              <Coins className="w-6 h-6" />
              Get RUBA Token
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="py-24 px-6 relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1637099536974-22c1d38eed51)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate={aboutInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              The Game Awaits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              RUBA is revolutionizing mobile gaming with blockchain technology, creating an unprecedented competitive experience where every move matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate={aboutInView ? "animate" : "initial"}
              variants={fadeInLeft}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/7562468/pexels-photo-7562468.jpeg" 
                  alt="Gaming Competition"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-purple-600/20 rounded-2xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              animate={aboutInView ? "animate" : "initial"}
              variants={fadeInRight}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600/20 rounded-lg backdrop-blur-sm">
                  <Gamepad2 className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Head-to-Head Combat</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Face off against opponents in intense 1v1 battles where strategy and skill determine the victor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/20 rounded-lg backdrop-blur-sm">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Lightning Fast</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Built for mobile-first gaming with optimized performance and seamless blockchain integration.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-600/20 rounded-lg backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Secure & Transparent</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Powered by Solana blockchain technology ensuring fair play and transparent transactions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Token Section */}
      <section 
        ref={tokenRef}
        className="py-24 px-6 relative bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate={tokenInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              RUBA Token
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Power your gameplay with RUBA tokens. Available now on the Solana blockchain.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate={tokenInView ? "animate" : "initial"}
              variants={fadeInLeft}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-purple-400/30">
                <Coins className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-white">In-Game Currency</h3>
                <p className="text-gray-300 leading-relaxed">
                  RUBA tokens serve as the primary currency for gameplay, tournaments, and rewards within the ecosystem.
                </p>
              </div>

              <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-blue-400/30">
                <Star className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-white">Early Access</h3>
                <p className="text-gray-300 leading-relaxed">
                  Token holders gain exclusive early access to beta releases, special events, and premium features.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              animate={tokenInView ? "animate" : "initial"}
              variants={fadeInRight}
              transition={{ delay: 0.4 }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg" 
                  alt="Cryptocurrency Trading"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl"></div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-lg font-semibold shadow-2xl backdrop-blur-sm border border-purple-400/30 flex items-center justify-center gap-3">
                    <ExternalLink className="w-5 h-5" />
                    Buy RUBA on Solana
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section 
        ref={communityRef}
        className="py-24 px-6 relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7776899/pexels-photo-7776899.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate={communityInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow players, stay updated on development, and be part of the RUBA revolution.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            animate={communityInView ? "animate" : "initial"}
            variants={scaleIn}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-purple-400/30 group transition-all duration-300"
            >
              <MessageCircle className="w-16 h-16 text-purple-400 mx-auto mb-6 group-hover:text-purple-300 transition-colors" />
              <h3 className="text-2xl font-bold mb-4 text-white">Discord</h3>
              <p className="text-gray-300">Join real-time discussions and community events</p>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-blue-400/30 group transition-all duration-300"
            >
              <Twitter className="w-16 h-16 text-blue-400 mx-auto mb-6 group-hover:text-blue-300 transition-colors" />
              <h3 className="text-2xl font-bold mb-4 text-white">Twitter</h3>
              <p className="text-gray-300">Follow for the latest updates and announcements</p>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-green-400/30 group transition-all duration-300"
            >
              <Users className="w-16 h-16 text-green-400 mx-auto mb-6 group-hover:text-green-300 transition-colors" />
              <h3 className="text-2xl font-bold mb-4 text-white">Reddit</h3>
              <p className="text-gray-300">Engage in deep discussions and community insights</p>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Open Source Section */}
      <section 
        ref={sourceRef}
        className="py-24 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate={sourceInView ? "animate" : "initial"}
              variants={fadeInLeft}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Open Source
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                RUBA believes in transparency and community-driven development. Our code is open source and available for the community to explore, contribute, and build upon.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <Code className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">Transparent development process</span>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">Community contributions welcome</span>
                </div>
                <div className="flex items-center gap-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">Auditable smart contracts</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-lg font-semibold shadow-2xl border border-purple-400/30 backdrop-blur-sm flex items-center gap-3"
              >
                <Github className="w-6 h-6" />
                View on GitHub
              </motion.button>
            </motion.div>

            <motion.div
              initial="initial"
              animate={sourceInView ? "animate" : "initial"}
              variants={fadeInRight}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="p-8 bg-gray-900/50 rounded-2xl backdrop-blur-sm border border-purple-400/30 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400">ruba-game/src</span>
                </div>
                <pre className="text-purple-300">
{`// RUBA Game Core
class RubaGame {
  constructor() {
    this.players = [];
    this.blockchain = new SolanaIntegration();
    this.gameState = 'waiting';
  }
  
  async startMatch(player1, player2) {
    // Game logic here...
    return this.initializeGameplay();
  }
}`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/50 border-t border-purple-400/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              RUBA
            </h3>
            <p className="text-gray-400 mb-6">
              The future of competitive mobile gaming on Solana blockchain
            </p>
            <div className="flex justify-center gap-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              © 2025 RUBA. Built on Solana blockchain.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default RubaLanding;