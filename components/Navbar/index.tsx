import { Box, Center, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { NavLink } from './NavLink';
import { UserProfile } from './UserProfile';

export const NavbarContainer = () => (
  <Box minH='2rem' bg={mode('gray.50', 'gray.700')}>
    <Navbar>
      <Navbar.Brand>
        <Center marginEnd='10'></Center>
      </Navbar.Brand>
      <Navbar.Links>
        <NavLink isActive href="/">Home</NavLink>
        <NavLink href="/auth/signin">Signin</NavLink>
        <NavLink href="/auth/signup">Signup</NavLink>
        <NavLink href="/blogs">Blogs</NavLink>
      </Navbar.Links>

      <Navbar.UserProfile>
        <NavLink href="/auth/user">
          <UserProfile
            name='Ian Balijawa'
            avatarUrl='/images/ian1.jpg'
            email='ianbalijawa16@gmail.com'
          />
        </NavLink>
      </Navbar.UserProfile>
    </Navbar>
  </Box>
);
