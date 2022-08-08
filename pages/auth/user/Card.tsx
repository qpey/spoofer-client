import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { HiPencilAlt } from "react-icons/hi";
import { CardContent } from "../../../components/CardContent";
import { CardWithAvatar } from "../../../components/CardWithAvatar";
import { UserInfo } from "../../../components/UserInfo";

export const Card = () => {
  return (
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
            John Doe
          </Heading>
          <Text color={useColorModeValue("gray.600", "gray.400")}>
            test@test.com
          </Text>
          <UserInfo
            location="kampala, Uganda"
            website="spoofy.vercel.app"
            memberSince="Joined august. 2022"
          />
        </CardContent>
      </CardWithAvatar>
    </Box>
  );
};
