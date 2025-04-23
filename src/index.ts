import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.create({
    data: {
      title: "Hello World",
      content: "This is my first post",
      published: true,
      authorName: "Alice",
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
