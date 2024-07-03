import { ThemeButton } from '@/components/ui-client-components/theme-button';
import Profile from './components/profile/profile';
import SocialMedia from './components/social/social-media-group';

export default function Header() {
  return (
    <header className="w-full h-full flex items-center justify-between ">
      <Profile />
      <section className="flex gap-1 items-center justify-between">
        <SocialMedia />
        <ThemeButton />
      </section>
    </header>
  );
}
