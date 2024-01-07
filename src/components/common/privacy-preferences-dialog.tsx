import { ArrowUpRight, Save } from "lucide-react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";

const PrivacyPreferencesDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <p className="flex gap-2 font-archivo text-lg font-normal items-center">
          Open Preferences <ArrowUpRight />
        </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cookie Preferences</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col w-full mt-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-2xl font-archivo">Essential cookies</h4>
              <p className="text-lg font-archivo text-black/60">
                Always active
              </p>
            </div>
            <h4 className="text-lg font-archivo text-black">
              This is necessary to enable the basic functions of the website
            </h4>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-2xl font-archivo">Analytics</h4>
              <Switch id="airplane-mode" />
            </div>
            <h4 className="text-lg font-archivo text-black">
              This is necessary to enable the basic functions of the website
            </h4>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-2xl font-archivo">Personalization</h4>
              <Switch id="airplane-mode" />
            </div>
            <h4 className="text-lg font-archivo text-black">
              This is necessary to enable the basic functions of the website
            </h4>
          </div>
          <Separator className="my-6" />
        </div>
        <DialogClose asChild>
          <div className="w-fit cursor-pointer">
            <div className="primary-light">
              <div className="primary-light-button font-archivo font-normal text-lg items-center gap-3 select-none">
                Save Preferences <Save />
              </div>
              <div className="primary-light-button-backdrop"></div>
            </div>
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPreferencesDialog;
