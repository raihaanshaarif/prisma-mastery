import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Enable debug logs
});

const main = async () => {
  console.log('Testing Prisma Client...');
// const createUser = await prisma.user.create({
//   data: {
//     username: 'User2',
//     email: 'test2@demo.com',
//     age: 25,
      
//   }

// const createProfile = await prisma.profile.create({
//   data: {
//     bio: 'This is a test bio',
//     userId: 2

//   }
// })

//  const createCategory = await prisma.category.create({
//         data: {
//             name: "Prisma",
//         }
//     })

  const createPost = await prisma.post.create({
        data: {
            title: "this is title 1",
            content: "this is content of the post. 1",
            authorId: 1,
            postCategory: {
                create: [
                    {
                        categoryId: 3
                    },
                    {
                        categoryId: 4
                    }
                ]
            }
        },
        include: {
            postCategory: true
        }
    })

console.log(createPost);
};


main()
  .catch((e) => {
    console.error('Error:', e);
  })
  .finally(() => prisma.$disconnect());