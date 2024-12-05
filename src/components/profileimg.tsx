import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
}
export function ProfileImg({ className }: Props) {
  return (
    <Avatar>
      <AvatarImage
        className={cn("", className)}
        src="https://github.com/shadcn.png"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
