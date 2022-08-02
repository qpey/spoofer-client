import {
  Box,
  Flex,
  Heading,
  Img,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { BsArrowRight, BsClockFill } from "react-icons/bs";

interface BlogProps {
  category: string;
  title: string;
  media: string;
  description: string;
  authorName: string;
  authorHref: string;
}

const Blog = (props: BlogProps) => {
  const { title, description, media, authorName, authorHref, category } = props;
  return (
    <LinkBox
      as="article"
      bg={{ sm: mode("white", "gray.700") }}
      shadow={{ sm: "base" }}
      rounded={{ sm: "md" }}
      overflow="hidden"
      transition="all 0.2s"
      _hover={{ shadow: { sm: "lg" } }}
    >
      <Flex direction="column">
        <Img
          objectFit="cover"
          alt={title}
          src={media}
          style={{ height: "28rem" }}
        />
        <Flex direction="column" px={{ sm: "6" }} py="5">
          <Text
            casing="uppercase"
            letterSpacing="wider"
            fontSize="xs"
            fontWeight="semibold"
            mb="2"
            color="gray.500"
          >
            {category}
          </Text>
          <Heading as="h3" size="sm" mb="2" lineHeight="base">
            <LinkOverlay href={authorHref}>{title}</LinkOverlay>
          </Heading>
          <Text noOfLines={2} mb="8" color={mode("gray.600", "gray.400")}>
            {description}
          </Text>
          <Flex
            align="baseline"
            justify="space-between"
            fontSize="sm"
            color={mode("gray.600", "gray.400")}
          >
            <Text>
              By{" "}
              <Box as="a" textDecor="underline" href={authorHref}>
                {authorName}
                {authorHref}
              </Box>
            </Text>
            <Link href="#">
              <Box
                as={BsClockFill}
                display="inline-block"
                me="2"
                opacity={0.4}
              />
              3 min read
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </LinkBox>
  );
};

export const BlogContainer = () => {
  const [blogData, setBlogData] = React.useState([
    {
      category: "Fashion",
      media: "/images/ian2.jpg",
      title:
        "7 Steps to Get Professional Productivity Tips while working from Home",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      href: "#",
      author: "Ian Balijawa",
    },
    {
      category: "Valentine",
      media: "/images/ian3.jpg",
      title: "The Best Excuses To Spend A Cozy Valentine’s Day In",
      description:
        "As much as I love an over-the-top, romantic Valentine’s date, part of me is looking",
      href: "#",
      author: "Kabanda Sharif",
    },
    {
      category: "My Style",
      media: "/images/ian4.jpg",
      title: "Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020",
      description:
        "HAAAAPPY 2021! It’s the first Monday of the year and I have never been so ready for",
      authorHref: "#",
      authorName: "Ian Balijawa",
    },
  ]);

  const handleViewAllArticles = () => {};
  return (
    <Box
      as="section"
      bg={mode("gray.50", "gray.800")}
      py={{ base: "10", sm: "24" }}
    >
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Heading size="xl" mb="8" fontWeight="extrabold">
          Featured Articles
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="12" mb="10">
          {blogData.map((blog, index) => (
            <Blog
              key={index}
              category={blog.category}
              media={blog.media}
              title={blog.title}
              description={blog.description}
              authorHref={blog.authorHref!}
              authorName={blog.authorName!}
            />
          ))}
        </SimpleGrid>
        <Link
          fontSize="xl"
          fontWeight="bold"
          color={mode("blue.600", "blue.400")}
        >
          <span onClick={handleViewAllArticles}>View all articles</span>
          <Box as={BsArrowRight} display="inline-block" ms="2" />
        </Link>
      </Box>
    </Box>
  );
};
