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
import { Plus, Trash } from "lucide-react";

interface Props {
  className?: string;
}

export function Delete({ className }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild className={cn("", className)}>
        <Button className="bg-red-600 h-8 text-xs rounded-full flex items-center">
          <Trash /> Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent className="md:w-[425px] w-[350px]">
        <DialogHeader>
          <DialogTitle>Delete profile</DialogTitle>
          <DialogDescription>
            Do you want to delete your account?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div>
        <DialogFooter>
          <Button className="bg-red-600 h-8 text-xs rounded-full flex items-center">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
