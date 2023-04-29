import { Button } from "@/components/Button";
import { CalendarDatePicker } from "@/components/DatePicker";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import React from "react";

const Page = () => {
  

  return (
    <div className="flex flex-col items-center">
      <div className="prose mt-5 text-center">
        <h1>I found an item</h1>
        <p>We use 3xW strategy, What, When, Where</p>
      </div>
      <form className="mx-4 mt-4 flex flex-col gap-6 rounded-md border p-8 shadow-md">
        <div>
          <Label htmlFor="name">
            <b className="font-black">What</b> have you found?
          </Label>
          <Input name="name" placeholder="Black Sony Headphones" />
          <p className="text-sm text-muted-foreground">
            Short name of the item
          </p>
        </div>
        <div>
          <Label htmlFor="name">
            <b className="font-black">When</b> did you find it?
          </Label>
          <div className="flex">
            <CalendarDatePicker className="w-full" />
            <Button variant="secondary">Now</Button>
          </div>
          <p className="text-sm text-muted-foreground">
            The date you found the item
          </p>
        </div>
        <div>
          <Label htmlFor="name">
            <b className="font-black">Where</b> did you find it?
          </Label>
          <Input name="name" placeholder="In 312a classroom in D1 building" />
          <p className="text-sm text-muted-foreground">
            Description of the place
          </p>
        </div>
        <Button className="mt-3" type="submit">
          Next
        </Button>
        <p className="text-sm text-muted-foreground">
          In the next steps you can provide additional informations, like image,
          description, etc.
        </p>
      </form>
    </div>
  );
};

export default Page;
