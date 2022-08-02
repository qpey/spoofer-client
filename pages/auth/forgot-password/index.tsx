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
import { ForgotPasswordForm } from './ForgotPasswordForm';
import { Testimonial } from './Testimonial';

const ForgotPasswordPage: React.FC = () => {
  return (
    <Box minH='100vh' bg={{ md: mode('gray.100', 'inherit') }}>
      <Box
        maxW='6xl'
        mx='auto'
        py={{ base: '10', md: '20' }}
        px={{ base: '4', md: '10' }}
      >
        <Box w='full' maxW='xl' mx='auto'>
          <Box
            bg={{ md: mode('white', 'gray.700') }}
            rounded={{ md: '2xl' }}
            p={{ base: '4', md: '12' }}
            borderWidth={{ md: '1px' }}
            borderColor={mode('gray.200', 'transparent')}
            shadow={{ md: 'lg' }}
          >
            <Box mb='20' textAlign={{ base: 'center', md: 'start' }}>
              <Text
                fontSize='lg'
                fontWeight='medium'
                align='center'
              >
                Get New Password
              </Text>
            </Box>
            <ForgotPasswordForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPasswordPage;
