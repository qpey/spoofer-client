import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import Link from "next/link";

export const SigninForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // your submit logic here
      }}
    >
      <Stack spacing="4">
        <FormControl id="email">
          <FormLabel mb={1}>Email</FormLabel>
          <Input type="email" autoComplete="email" />
        </FormControl>
        <FormControl>
          <Flex align="baseline" justify="space-between">
            <FormLabel mb={1}>Password</FormLabel>

            <Box
              as="a"
              fontWeight="semibold"
              fontSize="sm"
              color={mode("blue.600", "blue.200")}
            >
              <Link href="/auth/forgot-password">Forgot Password?</Link>
            </Box>
          </Flex>
          <Input type="password" autoComplete="current-password" />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Signin
        </Button>
      </Stack>
    </form>
  );
};
