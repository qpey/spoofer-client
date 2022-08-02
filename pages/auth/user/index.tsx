import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { HiPencilAlt } from "react-icons/hi";
import { CardContent } from "./CardContent";
import { CardWithAvatar } from "./CardWithAvatar";
import { UserInfo } from "./UserInfo";
import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps } from "next";

const User: NextPage = (data) => {
  console.log(data)
  return (
    <div>
      <Head>
        <title>User-profile|spoofy</title>
        <meta name="description" content="View your user info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="section" pt="20" pb="12" position="relative">
        <Box position="absolute" inset="0" height="32" bg="blue.600" />
        <CardWithAvatar
          maxW="xl"
          avatarProps={{
            src: "/images/ian2.jpg",
            name: "Ian Balijawa",
          }}
          action={
            <Button size="sm" leftIcon={<HiPencilAlt />}>
              Edit
            </Button>
          }
        >
          <CardContent>
            <Heading size="lg" fontWeight="extrabold" letterSpacing="tight">
              Ian Balijawa
            </Heading>
            <Text color={useColorModeValue("gray.600", "gray.400")}>
              Frontend Developer &amp; UI Designer
            </Text>
            <UserInfo
              location="kampala, USA"
              website="qpey.vercel.app"
              memberSince="Joined Sept. 2019"
            />
          </CardContent>
        </CardWithAvatar>
      </Box>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: { name: "Ian", email: "ianbalijawa@gmail.com" },
    },
  };
};

export default User;
