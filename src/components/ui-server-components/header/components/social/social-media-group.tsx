import { Button } from '@/components/ui/button';
import { FaXTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import Link from 'next/link';

export default function SocialMedia() {
  return (
    <div className="flex gap-1 h-20 items-center  justify-end ">
      {' '}
      <Button variant="outline" className="border-0 w-7 h-7">
        <Link target="_blank" href="https://twitter.com/alpererdogandev">
          <FaXTwitter className="text-lg" />
        </Link>
      </Button>
      <Button variant="outline" className="border-0 w-7 h-7">
        <Link target="_blank" href="https://github.com/alpererdogan8">
          <FaGithub className="text-lg" />
        </Link>
      </Button>
      <Button variant="outline" className="border-0 w-7 h-7">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/alper-erdogan-13a009148/"
        >
          <FaLinkedin className="text-lg" />
        </Link>
      </Button>
      <Button variant="outline" className="border-0 w-7 h-7">
        <Link target="_blank" href="mailto:me@alpererdogan.dev">
          <FaEnvelope className="text-lg" />
        </Link>
      </Button>
    </div>
  );
}
