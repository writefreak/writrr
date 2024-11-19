import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileImg() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
