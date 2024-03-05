import React, { ReactNode } from "react";
import {
  Dialog,
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
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComp;
