
import React, { useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { createStyles } from '@mantine/core';
import { Link } from "react-router-dom"
import { WalletConnect } from "../WalletConnect/WalletConnect"




const NavBarX = () => {



    //window.location.pathname
    const [active, setActive] = useState("/");

    /*console.log('URL:' + window.location.href);
    console.log('Path:' + window.location.pathname);
    console.log('Host:' + window.location.host);
    console.log('Hostname:' + window.location.hostname);
    console.log('Origin:' + window.location.origin);
    console.log('Port:' + window.location.port);
    console.log('Search String:' + window.location.search);
    console.log(window.location.href.toString().split(window.location.host)[1].split(window.location.pathname)[1])

    console.log(active)
    console.log(findUrl())

    function findUrl() {

        return ("/" + window.location.href.toString().split(window.location.host)[1].split(window.location.pathname)[1])
    }*/

    const useStyles = createStyles((theme) => ({


        container: {
            flexDirection: 'row',
        },


        links: {
            [theme.fn.smallerThan('sm')]: {
                display: 'none',
            },
        },


        link: {
            flexDirection: 'row',
            display: 'block',
            lineHeight: 1,
            padding: '8px 12px',
            borderRadius: theme.radius.sm,
            textDecoration: 'none',
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
            fontSize: theme.fontSizes.sm,
            fontWeight: 500,

            '&:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            },

            [theme.fn.smallerThan('sm')]: {
                borderRadius: 0,
                padding: theme.spacing.md,
            },
        },

        linkActive: {
            '&, &:hover': {
                backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
                color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
            },
        },
    }));


    const { classes, cx } = useStyles();



    return (
        <Navbar className="bg-light shadow-sm mb-3">
            <Container>
                <Nav className={classes.container}  >

                    <Link className={cx(classes.link, { [classes.linkActive]: active === "/" })}
                        onClick={(event) => {
                            setActive("/");
                        }}

                        to="/">NFT Market </Link>

                    {"   "}


                    <Link className={cx(classes.link, { [classes.linkActive]: active === "/nftCreate" })}
                        onClick={(event) => {
                            setActive("/nftCreate");
                        }}

                        to="/nftCreate">Create NFT</Link>

                    {"   "}

             

                    <Link className={cx(classes.link, { [classes.linkActive]: active === "/about" })}
                        onClick={(event) => {
                            setActive("/about");
                        }} to="/about">About</Link>
                    {"  "}
                    <Link className={cx(classes.link, { [classes.linkActive]: active === "/donate" })}
                        onClick={(event) => {
                            setActive("/donate");
                        }} to="/donate">Donate</Link>
                </Nav>
                <WalletConnect />
            </Container>

        </Navbar>
    )

}

export { NavBarX }