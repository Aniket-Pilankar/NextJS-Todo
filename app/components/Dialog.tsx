import React, { ReactNode } from "react";
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

interface IDialogComp {
  clickComponent: ReactNode;
  title: string;
  children?: ReactNode;
  footer: ReactNode;
}

const DialogComp = ({
  clickComponent,
  title,
  children,
  footer,
}: IDialogComp) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{clickComponent}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose asChild>{footer}</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComp;
