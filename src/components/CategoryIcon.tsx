import {
  PenLine,
  Palette,
  Code,
  Clapperboard,
  Headset,
  Search,
  Music,
  Zap,
  GraduationCap,
  Megaphone,
  type LucideProps,
} from "lucide-react";

const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  PenLine,
  Palette,
  Code,
  Clapperboard,
  Headset,
  Search,
  Music,
  Zap,
  GraduationCap,
  Megaphone,
};

interface CategoryIconProps extends LucideProps {
  name: string;
}

export default function CategoryIcon({ name, ...props }: CategoryIconProps) {
  const IconComponent = ICONS[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
