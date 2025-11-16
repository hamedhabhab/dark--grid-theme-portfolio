export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Pixelforge Studio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-[#0a0a0a]"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px] animate-pulse delay-700"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="text-sm text-gray-300">🚀 Crafting Digital Excellence Since 2018</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Design Meets
              </span>
              <br />
              <span className="text-white">Innovation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              We are a cutting-edge advertising agency specializing in breathtaking design 
              and powerful application development. Transform your brand with solutions 
              that captivate and convert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all">
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-2">500+</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text mb-2">98%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text mb-2">200+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="text-sm text-gray-300">💼 What We Offer</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Our Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From concept to execution, we deliver comprehensive solutions that drive results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service 1 */}
            <div className="group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2">
              <div className="text-5xl mb-6">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Brand Identity Design</h3>
              <p className="text-gray-400 mb-6">
                Create unforgettable brand experiences with stunning logos, color palettes, 
                and comprehensive brand guidelines that make you stand out in any market.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Logo Design & Branding</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Visual Identity Systems</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Brand Style Guides</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Marketing Collateral</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2">
              <div className="text-5xl mb-6">💻</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Web Development</h3>
              <p className="text-gray-400 mb-6">
                Build lightning-fast, responsive websites and web applications using cutting-edge 
                technologies. We create digital experiences that convert visitors into customers.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><span className="text-purple-500 mr-2">✓</span> React & Next.js Development</li>
                <li className="flex items-center"><span className="text-purple-500 mr-2">✓</span> E-commerce Solutions</li>
                <li className="flex items-center"><span className="text-purple-500 mr-2">✓</span> Custom Web Applications</li>
                <li className="flex items-center"><span className="text-purple-500 mr-2">✓</span> CMS Integration</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all hover:shadow-xl hover:shadow-pink-500/20 hover:-translate-y-2">
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Mobile App Development</h3>
              <p className="text-gray-400 mb-6">
                Native and cross-platform mobile applications that deliver seamless experiences 
                on iOS and Android. Your app idea, perfectly executed.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><span className="text-pink-500 mr-2">✓</span> iOS & Android Apps</li>
                <li className="flex items-center"><span className="text-pink-500 mr-2">✓</span> React Native Development</li>
                <li className="flex items-center"><span className="text-pink-500 mr-2">✓</span> App Store Optimization</li>
                <li className="flex items-center"><span className="text-pink-500 mr-2">✓</span> Maintenance & Support</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              <div className="text-5xl mb-6">🎬</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Digital Marketing</h3>
              <p className="text-gray-400 mb-6">
                Strategic campaigns that amplify your message and drive real business results. 
                From social media to SEO, we've got you covered.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><span className="text-cyan-500 mr-2">✓</span> Social Media Management</li>
                <li className="flex items-center"><span className="text-cyan-500 mr-2">✓</span> SEO & Content Strategy</li>
                <li className="flex items-center"><span className="text-cyan-500 mr-2">✓</span> Paid Advertising Campaigns</li>
                <li className="flex items-center"><span className="text-cyan-500 mr-2">✓</span> Analytics & Reporting</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-green-500/50 transition-all hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-white">UI/UX Design</h3>
              <p className="text-gray-400 mb-6">
                User-centered design that delights and converts. We create intuitive interfaces 
                backed by research and refined through testing.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> User Research & Testing</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Wireframing & Prototyping</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Interface Design</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Design Systems</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-2">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Performance Optimization</h3>
              <p className="text-gray-400 mb-6">
                Speed matters. We optimize every aspect of your digital presence for maximum 
                performance, better SEO rankings, and improved user experience.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Website Speed Optimization</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Code Refactoring</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Database Optimization</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> CDN Integration</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-block p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Project?</h3>
              <p className="text-gray-400 mb-6 max-w-2xl">
                Let's discuss how we can bring your vision to life with our expert team
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="text-sm text-gray-300">🎨 Our Work</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of our recent work that helped brands achieve their digital ambitions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Portfolio Item 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all">
              <div className="aspect-video bg-gradient-to-br from-blue-600/40 to-purple-600/40 p-12 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Web App</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">SaaS</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">TechFlow Dashboard</h3>
                <p className="text-gray-400 mb-4">
                  A comprehensive analytics dashboard for a fintech startup. Built with React, 
                  Node.js, and MongoDB, handling 100K+ daily active users with real-time data visualization.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Client: TechFlow Inc.</div>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold">View Case Study →</button>
                </div>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all">
              <div className="aspect-video bg-gradient-to-br from-purple-600/40 to-pink-600/40 p-12 flex items-center justify-center">
                <div className="text-6xl">🛍️</div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">E-commerce</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">Mobile</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">LuxeShop Mobile App</h3>
                <p className="text-gray-400 mb-4">
                  A luxury fashion marketplace mobile app with AR try-on features. Developed for 
                  iOS and Android using React Native, achieving 4.8★ rating with 500K+ downloads.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Client: LuxeShop Ltd.</div>
                  <button className="text-purple-400 hover:text-purple-300 font-semibold">View Case Study →</button>
                </div>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-pink-500/50 transition-all">
              <div className="aspect-video bg-gradient-to-br from-pink-600/40 to-red-600/40 p-12 flex items-center justify-center">
                <div className="text-6xl">🎵</div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">Website</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Brand Design</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">BeatWave Music Platform</h3>
                <p className="text-gray-400 mb-4">
                  Complete rebranding and website redesign for an indie music streaming platform. 
                  Increased user engagement by 250% and reduced bounce rate by 40%.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Client: BeatWave Studios</div>
                  <button className="text-pink-400 hover:text-pink-300 font-semibold">View Case Study →</button>
                </div>
              </div>
            </div>

            {/* Portfolio Item 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-green-500/50 transition-all">
              <div className="aspect-video bg-gradient-to-br from-green-600/40 to-emerald-600/40 p-12 flex items-center justify-center">
                <div className="text-6xl">🏥</div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Healthcare</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">Web App</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">MediConnect Portal</h3>
                <p className="text-gray-400 mb-4">
                  HIPAA-compliant telemedicine platform connecting patients with healthcare providers. 
                  Secure video consultations, prescription management, and medical records in one place.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Client: MediConnect Health</div>
                  <button className="text-green-400 hover:text-green-300 font-semibold">View Case Study →</button>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">What Our Clients Say</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-2xl">★★★★★</div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Pixelforge transformed our outdated website into a modern masterpiece. 
                  The team's attention to detail and creative vision exceeded our expectations. 
                  Our conversion rate increased by 180%!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah Mitchell</div>
                    <div className="text-sm text-gray-400">CEO, TechFlow Inc.</div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-2xl">★★★★★</div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Working with Pixelforge was an absolute pleasure. They delivered our mobile 
                  app ahead of schedule and under budget. The quality is exceptional, and our 
                  users love it!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JC
                  </div>
                  <div>
                    <div className="font-semibold text-white">James Chen</div>
                    <div className="text-sm text-gray-400">Founder, LuxeShop</div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-2xl">★★★★★</div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "The rebranding project was flawless from start to finish. Pixelforge's 
                  strategic approach and stunning designs helped us stand out in a crowded 
                  market. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    ER
                  </div>
                  <div>
                    <div className="font-semibold text-white">Emily Rodriguez</div>
                    <div className="text-sm text-gray-400">CMO, BeatWave Studios</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="inline-block p-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl border border-white/10">
              <h3 className="text-4xl font-bold mb-4 text-white">Let's Create Something Amazing</h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                Ready to elevate your brand? Get in touch with our team of experts and let's 
                transform your vision into reality. Free consultation available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105">
                  Get Free Consultation
                </button>
                <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all">
                  hello@pixelforge.agency
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                Pixelforge Studio
              </div>
              <p className="text-gray-400 text-sm">
                Crafting digital excellence through innovative design and powerful development solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Brand Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>© 2024 Pixelforge Studio. All rights reserved. Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
