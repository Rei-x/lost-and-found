import { prisma } from "@/server/db";

const seed = async () => {
  await prisma.item.deleteMany();

  for (let i = 0; i < 10; i++) {
    await prisma.item.create({
      data: {
        name: `Item ${i}`,
        lostDate: new Date(),
        lostLocation: `Location ${i}`,
        prefferedContactMethod: "Email",
        Tags: {
          create: {
            name: `Tag ${i}`,
          },
        },
        Image: {
          create: {
            url: `https://picsum.photos/seed/${i}/200/300`,
          },
        },
        description: `This is the description for item ${i}`,
      },
    });
  }

  await prisma.$disconnect();
};

void seed();
