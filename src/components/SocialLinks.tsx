import { Instagram, Linkedin } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex gap-4 items-center">
      <a
        href="https://instagram.com/royshubham305"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a
        href="https://linkedin.com/in/royshubham305"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  );
}