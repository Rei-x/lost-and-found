import { Button } from "@/components/Button";
import { CalendarDatePicker } from "@/components/DatePicker";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { prisma } from "@/server/db";
import { Item, type Image } from "@prisma/client";
import NextImage from "next/image";
import React from "react";

const ItemComponent = (
  item: Item & {
    Image: Image[];
  }
) => {
  const doesHavePhoto = item.Image.length > 0;

  return (
    <div className="flex h-40 w-full gap-3 rounded-md border p-3 shadow-md">
      <div>
        {doesHavePhoto ? (
          <NextImage
            src={item.Image.at(0)?.url as string}
            alt={item.name + " image"}
            width="140"
            height="140"
            className="h-[140px]  w-[140px] rounded-md object-cover"
          />
        ) : (
          <div className="flex h-[140px] w-[140px] items-center justify-center bg-slate-500">
            No Image
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <p className="font-semibold">{item.name}</p>
        <p className="mt-1">{item.description}</p>
        <Button className="mr-auto mt-auto">View</Button>
      </div>
    </div>
  );
};

const Page = async () => {
  const items = await prisma.item.findMany({
    include: {
      Image: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex flex-col items-center px-8">
      <div className="prose mt-5 text-center">
        <h1>I lost an item</h1>
      </div>
      <div className="mt-6 w-full">
        <Label htmlFor="search" className="w-full">
          Search
        </Label>
        <Input name="search" />
        <p className="text-sm text-muted-foreground">
          Search for your lost item
        </p>
      </div>
      <div className="mx-8 mt-6 w-full ">
        <div className="prose mb-4">
          <h2>Recently found items</h2>
        </div>
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <ItemComponent key={item.id} {...item} />
          ))}
        </div>
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
