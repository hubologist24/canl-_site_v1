
import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { WalletConnect } from "../WalletConnect/WalletConnect"
import {
    createStyles,
    Menu,
    Center,
    Header,
    Container,
    Group,
    Button,
    Burger,
   // rem,
  } from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import { HeaderActionProps } from "../NftCard/types";
//import { MantineLogo } from '@mantine/ds';

//import { MantineLogo } from '@mantine/ds';




const NavBarX = ({ links }: HeaderActionProps) => {


/*   <Link className={cx(classes.link, { [classes.linkActive]: true active === "/" })}
  onClick={(event) => {
      setActive("/");
  }}
  to="/">NFT Market </Link> */

    const HEADER_HEIGHT = "46";

    const [active, setActive] = useState("/");

    const useStyles = createStyles((theme) => ({
        inner: {
          height: 50,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      
        links: {
          [theme.fn.smallerThan('sm')]: {
            display: 'none',
          },
        },

        header: {
        
          backgroundColor: "#F5F5F5",
         
          marginBottom: "20px",
          
        },
        
      
        burger: {
          [theme.fn.largerThan('sm')]: {
            display: 'none',
          },
        },
      
        link: {
          display: 'block',
          lineHeight: 1,
          padding: `${ "12px"} ${ "12px"}`,
          borderRadius: theme.radius.sm,
          textDecoration: 'none',
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
          fontSize: theme.fontSizes.sm,
          fontWeight: 500,
      
          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        },
      
        linkLabel: {
          marginRight: "12px",
        },

        linkActive: {
          '&, &:hover': {
              backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
              color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
          },}

      }));
      
   
      const { classes,cx } = useStyles();
      const [opened, { toggle }] = useDisclosure(false);
      const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
          <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

 
        return (
          <NavLink
            key={link.label}
            to={link.link}
            /* className={classes.link}
            activeClassName={classes.linkActive } */
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={() => setActive(link.link)}
          >
            {link.label}
          </NavLink>
        );
      });
    
        
    
    /*     return (
            <a
              key={link.label}
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              {link.label}
            </a>
          );
        }); */

    /*     <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        <div></div> 
        <Container className={classes.inner} fluid>
        <Header height={56} mb={20} mt={20}>*/
      
        return (
          <Header height={50} px="md" mb={20}  className={cx(classes.header)}>
            <Container fluid>
              <div className={classes.inner} >
              <Group>
              
              </Group>
              <Group spacing={5} className={classes.links}>
                {items}
              </Group>
              <WalletConnect />
              </div>
            </Container>
            
          </Header>
        );


}
export { NavBarX }