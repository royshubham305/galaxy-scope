import { SocialLinks } from '../SocialLinks';

export function Footer() {
  return (
    <footer className="absolute bottom-8 w-full text-center space-y-4">
      <SocialLinks />
      <p className="text-sm text-gray-500">
        Navigate with mouse wheel or touch controls • Explore at your own pace
      </p>
    </footer>
  );
}