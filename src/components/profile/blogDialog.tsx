import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import NewBlogContent from "./newBlogContent";

interface Props {
  className?: string;
}

export function BlogDialog({ className }: Props) {
  return (
    <form action="">
      <Dialog>
        <DialogTrigger asChild className={cn("", className)}>
          <Button
            variant={"outline"}
            className="w-[6rem] md:w-auto flex items-center bg-lime-600 text-white hover:bg-lime-600/90 hover:text-white gap-2 dark:border-white dark:hover:bg-white/30"
          >
            <Plus />
            <span className="text-xs md:text-base">New blog</span>
          </Button>
        </DialogTrigger>
        <DialogContent
          className={cn(
            "w-[95vw] max-w-[95vw] h-auto md:h-[90vh] md:max-w-[90vw] overflow-auto"
          )}
        >
          <DialogHeader>
            <div className="py-2">
              <DialogTitle className="text-3xl">New Blog</DialogTitle>
              <DialogDescription className="text-lg">
                Please fill in the following details
              </DialogDescription>
            </div>

            <div className="pt-3">
              <NewBlogContent />
              <div className="space-x-2 pt-7">
                <Button type="submit" className="w-40">
                  Publish
                </Button>
                <DialogClose asChild>
                  <Button
                    type="reset"
                    className="w-40 bg-transparent border text-black hover:bg-white  border-gray-200"
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </form>
  );
}
