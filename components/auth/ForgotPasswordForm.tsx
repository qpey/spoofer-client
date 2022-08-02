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

export const ForgotPasswordForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // your submit logic here
      }}
    >
      <Stack spacing="4">
        <FormControl>
          <Input
            type="password"
            autoComplete="off"
            autoFocus
            placeholder="Enter new password"
            mb="5"
          />
        </FormControl>
        <FormControl>
          <Input
            type="password"
            autoComplete="off"
            placeholder="Confirm new password"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Submit
        </Button>
      </Stack>
    </form>
  );
};
