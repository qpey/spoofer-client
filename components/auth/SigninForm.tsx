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
import axios from "axios";

export const SigninForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("https://spoofy-server.herokuapp.com/api/auth/signin", {
        email,
        password,
      })
      .then((res) => {
        const {
          data: { data },
        } = res;
        console.log(data);
      })
      .catch((error) => console.error(error.response));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing="4">
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

            <Box
              as="a"
              fontWeight="semibold"
              fontSize="sm"
              color={mode("blue.600", "blue.200")}
            >
              <Link href="/auth/forgot-password">Forgot Password?</Link>
            </Box>
          </Flex>
          <Input
            type="password"
            autoComplete="current-password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Signin
        </Button>
      </Stack>
    </form>
  );
};
