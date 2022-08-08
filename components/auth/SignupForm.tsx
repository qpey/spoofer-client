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
import axios from "axios";
import { useRouter } from "next/router";
import * as React from "react";

export const SignupForm = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://spoofy-server.herokuapp.com/api/auth/signup",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      const data = response.data;
      console.log(data);

      if (!localStorage.getItem("user")) {
        localStorage.setItem("user", data.user);
      }

      router.push("/auth/user");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing="4">
        <FormControl id="firstName">
          <FormLabel mb={1}>Firstname</FormLabel>
          <Input
            autoComplete="firstName"
            onChange={({ target }) => setFirstName(target.value)}
          />
        </FormControl>
        <FormControl id="lastName">
          <FormLabel mb={1}>Lastname</FormLabel>
          <Input
            autoComplete="lastName"
            onChange={({ target }) => setLastName(target.value)}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel mb={1}>Email</FormLabel>
          <Input
            type="email"
            autoComplete="email"
            onChange={({ target }) => setEmail(target.value)}
          />
        </FormControl>
        <FormControl>
          <Flex align="baseline" justify="space-between">
            <FormLabel mb={1}>Password</FormLabel>
          </Flex>
          <Input
            type="password"
            autoComplete="current-password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Create my account
        </Button>
      </Stack>
    </form>
  );
};
