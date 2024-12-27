import { Compass, Maximize2, ZoomIn } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'Interactive Navigation',
    description: 'Seamlessly navigate through space with intuitive controls and smooth transitions.'
  },
  {
    icon: ZoomIn,
    title: 'Detailed Exploration',
    description: 'Zoom in to discover intricate details of planets, their atmospheres, and unique features.'
  },
  {
    icon: Maximize2,
    title: 'Dynamic Perspective',
    description: 'Experience our solar system from different angles and distances.'
  }
];

export function Features() {
  return (
    <div id="features" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Discover The Universe
        </span>
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div 
            key={feature.title}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 
                       hover:bg-white/10 transition-colors
                       border border-white/10"
          >
            <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}