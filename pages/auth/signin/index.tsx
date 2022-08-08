import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { SigninForm } from "../../../components/auth/SigninForm";
import { Testimonial } from "../../../components/auth/Testimonial";
import Head from "next/head";
import { GetStaticProps } from "next";

export default function Signin(data: any) {
  return (
    <div>
      <Head>
        <title>signin|spoofy</title>
        <meta
          name="description"
          content="Already have an account, Signin to continue"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box minH="100vh" bg={{ md: mode("gray.100", "inherit") }}>
        <Box
          maxW="6xl"
          mx="auto"
          py={{ base: "10", md: "20" }}
          px={{ base: "4", md: "10" }}
        >
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="14">
            <Box w="full" maxW="xl" mx="auto">
              <Box
                bg={{ md: mode("white", "gray.700") }}
                rounded={{ md: "2xl" }}
                p={{ base: "4", md: "12" }}
                borderWidth={{ md: "1px" }}
                borderColor={mode("gray.200", "transparent")}
                shadow={{ md: "lg" }}
              >
                <Box mb="8" textAlign={{ base: "center", md: "start" }}>
                  <Heading
                    size="lg"
                    mb="2"
                    fontWeight="extrabold"
                    // @ts-ignore
                    align="center"
                  >
                    Welcome Back to spoofy
                  </Heading>
                  <Text
                    fontSize="lg"
                    color={mode("gray.600", "gray.400")}
                    fontWeight="medium"
                    align="center"
                  >
                    Signin to Continue
                  </Text>
                </Box>
                <SigninForm />
              </Box>

              <Text mt="8" align="center" fontWeight="medium">
                Already have an account?{" "}
                <Box
                  as="a"
                  href="#"
                  color={mode("blue.600", "blue.200")}
                  display={{ base: "block", md: "inline-block" }}
                >
                  Log in to spoofy
                </Box>
              </Text>
            </Box>

            <Flex
              direction="column"
              py="18"
              display={{ base: "none", lg: "flex" }}
            >
              <Testimonial />
            </Flex>
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
}
