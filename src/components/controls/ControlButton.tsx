import { LucideIcon } from 'lucide-react';

interface ControlButtonProps {
  icon: LucideIcon;
  onClick: () => void;
  label: string;
}

export function ControlButton({ icon: Icon, onClick, label }: ControlButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
      aria-label={label}
    >
      <Icon className="w-6 h-6 text-white" />
    </button>
  );
}