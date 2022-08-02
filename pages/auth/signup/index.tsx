import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { SigupForm } from './SigupForm';
import { Testimonial } from './Testimonial';

const Signup: React.FC = () => {
  return (
    <Box minH='100vh' bg={{ md: mode('gray.100', 'inherit') }}>
      <Box
        maxW='6xl'
        mx='auto'
        py={{ base: '10', md: '20' }}
        px={{ base: '4', md: '10' }}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing='14'>
          <Box w='full' maxW='xl' mx='auto'>
            <Box
              bg={{ md: mode('white', 'gray.700') }}
              rounded={{ md: '2xl' }}
              p={{ base: '4', md: '12' }}
              borderWidth={{ md: '1px' }}
              borderColor={mode('gray.200', 'transparent')}
              shadow={{ md: 'lg' }}
            >
              <Box mb='8' textAlign={{ base: 'center', md: 'start' }}>
                <Heading size='lg' mb='2' fontWeight='extrabold' align='center'>
                welcome to spoofy
                </Heading>
                <Text
                  fontSize='lg'
                  color={mode('gray.600', 'gray.400')}
                  fontWeight='medium'
                  align='center'
                >
                  Signup to get started
                </Text>
              </Box>
              <SigupForm />
            </Box>

            <Text mt='8' align='center' fontWeight='medium'>
              Already have an account?{' '}
              <Box
                as='a'
                href='/auth/signin'
                color={mode('blue.600', 'blue.200')}
                display={{ base: 'block', md: 'inline-block' }}
              >
                Log in to spoofy
              </Box>
            </Text>
          </Box>

          <Flex
            direction='column'
            py='24'
            display={{ base: 'none', lg: 'flex' }}
          >
            <Testimonial />
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Signup;
