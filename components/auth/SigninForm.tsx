import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const SigninForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const router = useRouter();

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
        if (!localStorage.getItem("user")) {
          localStorage.setItem("user", JSON.stringify(data));
        }
        router.push("/auth/user");
      })
      .catch((error) => {
        console.error(error.response);
        setError(error.message);
      });
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
