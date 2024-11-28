import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],
});

const blogPosts = [
  {
    title: "The Future of Digital Solutions: Trends to Watch Out For",
    description:
      "Explore the most promising digital transformation trends set to reshape industries and how companies can leverage them to stay competitive.",
    category: "Tech Innovation",
  },
  {
    title: "How to Build a Strong Brand as a Tech Company",
    description:
      "A guide on creating a tech brand that resonates with consumers, with strategies to set your company apart in a saturated market.",
    category: "Business & Entrepreneurship",
  },
  {
    title: "Top 10 Essential Tools for Writers in 2024",
    description:
      "Discover must-have writing tools that help streamline your workflow, enhance creativity, and improve productivity.",
    category: "Writing & Content Creation",
  },
  {
    title: "Balancing Tech and Creativity: Finding the Sweet Spot",
    description:
      "Learn how to combine technical expertise with creative thinking to achieve better outcomes in digital projects.",
    category: "Professional Development",
  },
  {
    title: "Singing and Productivity: The Surprising Connection",
    description:
      "Understand how singing can boost your mood, enhance cognitive performance, and improve focus during creative tasks.",
    category: "Lifestyle & Wellness",
  },
  {
    title: "Understanding SEO: Simplified Tips for Content Writers",
    description:
      "A breakdown of SEO essentials and how content writers can implement them for better visibility and engagement.",
    category: "Content Marketing",
  },
  {
    title: "The Benefits of Tailwind CSS for Modern Web Development",
    description:
      "Learn why Tailwind CSS has become a favorite among developers and how it can simplify your development process.",
    category: "Web Development",
  },
  {
    title: "Top 5 Techniques for Overcoming Writer’s Block",
    description:
      "Explore practical techniques for overcoming writer’s block and keeping your creative projects on track.",
    category: "Writing Tips",
  },
  {
    title: "Navigating the World of Tech Startups: Lessons Learned",
    description:
      "Insights from real-life experiences of tech startup founders on what works, what doesn’t, and how to thrive.",
    category: "Entrepreneurship",
  },
  {
    title: "Exploring the Power of Digital Marketing for Tech Companies",
    description:
      "Tips on utilizing digital marketing to build brand awareness and expand reach, especially for tech-based businesses.",
    category: "Digital Marketing",
  },
  {
    title: "Why Storytelling Is Important for Tech Companies",
    description:
      "The role of storytelling in creating a compelling brand narrative and connecting with audiences.",
    category: "Branding & Marketing",
  },
  {
    title: "Science Fiction Influences on Modern Tech Innovations",
    description:
      "Examining how science fiction has inspired real-world technological advancements and what this means for future innovations.",
    category: "Tech & Culture",
  },
];

async function main() {
  await prisma.$connect();

  for (let blog of blogPosts) {
    const { title, description } = blog;

    //to check if a blog is already existing, so we dont create alike blogs
    const existing = await prisma.blogs.findFirst({
      where: {
        title,
      },
    });
    if (existing) return null;
    await prisma.blogs.create({
      data: {
        title,
        description,
        verified: false,
        category: {
          connectOrCreate: {
            where: {
              name: "Technology",
            },
            create: {
              name: "Technology",
              slug: "technology",
            },
          },
        },
        user: {
          connectOrCreate: {
            where: {
              email: "heritagendwell2020@gmail.com",
            },
            create: {
              firstName: "Heritage",
              lastName: "Endwell",
              email: "heritagendwell2020@gmail.com",
              phoneNumber: "070234567854",
            },
          },
        },
      },
    });
  }
}

async function upload() {
  try {
    await main();
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

await upload();
