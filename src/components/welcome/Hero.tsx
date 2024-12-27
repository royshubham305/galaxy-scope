import { RocketIcon, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="max-w-2xl text-center space-y-6 px-4">
      <h1 className="space-y-2">
        <span className="text-4xl sm:text-5xl md:text-6xl font-bold block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Space Explorer
        </span>
        <span className="text-xl sm:text-2xl block text-gray-400 font-light">
          Journey Through The Cosmos
        </span>
      </h1>
      
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
        Embark on an interactive journey through our cosmic neighborhood. 
        Explore the Milky Way and discover the mysteries of our Solar System.
      </p>

      <div className="space-y-6 pt-4">
        <Link 
          to="/explore" 
          className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 
                     text-base sm:text-lg font-semibold bg-gradient-to-r 
                     from-purple-500 to-pink-500 rounded-full
                     hover:from-purple-600 hover:to-pink-600 transition-all
                     transform hover:scale-105 shadow-lg hover:shadow-purple-500/25
                     active:scale-95"
        >
          <RocketIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
          Begin Journey
        </Link>

        <div className="flex justify-center gap-6">
          <SocialLink
            href="https://instagram.com/royshubham305"
            icon={Instagram}
            label="Instagram"
          />
          <SocialLink
            href="https://linkedin.com/in/royshubham305"
            icon={Linkedin}
            label="LinkedIn"
          />
        </div>

        <p className="text-xs sm:text-sm text-gray-500 pt-4">
          Swipe and pinch to explore • Best experienced in landscape mode
        </p>
      </div>
    </div>
  );
}

function SocialLink({ href, icon: Icon, label }: {
  href: string;
  icon: any;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/80 hover:text-white transition-colors 
                 hover:scale-110 transform active:scale-95"
      aria-label={label}
    >
      <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
    </a>
  );
}