
import React from "react"

import { Container, Text, Button, createStyles } from '@mantine/core';





const About = () => {

    const useStyles = createStyles((theme) => ({


        Fonts: {
            fontFamily: "monospace,sans-serif"
        }
    }
    ))

    const { classes, cx } = useStyles();

    const sendMail = () => {
        const mailto: string =
            "mailto:dogu77@gmail.com?subject=Naber subject&body=Body content";
        window.location.href = mailto;
    }

    return (
        <Container p="sm" className={cx(classes.Fonts)}>


            <li> Blockchain enthusiastic.</li>
            <li> Not a front end developer. </li>
            <li> Front end powered by ChatGPT.</li>
            <li> I use solidity and typescript.</li>
            <li>
                <Text variant="link" component="a" href="https://github.com/hubologist24/canli_site_v1">
                    Site Codes Github
                </Text>
            </li>
            <div>Contact: dogu77@gmail.com</div>
            <Button onClick={sendMail}> Mail </Button>

        </Container>
    )

}

export { About }