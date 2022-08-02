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

export const SigupForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // your submit logic here
      }}
    >
      <Stack spacing="4">
        <FormControl id="firstName">
          <FormLabel mb={1}>Firstname</FormLabel>
          <Input autoComplete="firstName" />
        </FormControl>
        <FormControl id="lastName">
          <FormLabel mb={1}>Lastname</FormLabel>
          <Input autoComplete="lastName" />
        </FormControl>
        <FormControl id="email">
          <FormLabel mb={1}>Email</FormLabel>
          <Input type="email" autoComplete="email" />
        </FormControl>
        <FormControl>
          <Flex align="baseline" justify="space-between">
            <FormLabel mb={1}>Password</FormLabel>
          </Flex>
          <Input type="password" autoComplete="current-password" />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Create my account
        </Button>
      </Stack>
    </form>
  );
};
