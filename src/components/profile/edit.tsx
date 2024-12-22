import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

interface Props {
  className?: string;
}

export function Edit({ className }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild className={cn("", className)}>
        <Button className="bg-black h-8 text-xs rounded-full">
          Edit details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader className="flex flex-col">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Button type="submit" className="rounded-full h-8">
          Save changes
        </Button>
      </DialogContent>
    </Dialog>
  );
}
