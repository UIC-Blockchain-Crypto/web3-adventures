import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import {Anchor, AppShell, Burger, Checkbox, Container, Group, MantineProvider} from '@mantine/core';
import { theme } from '../theme';
import classes from '@/components/Header/Header.module.css';
import EthereumSignInButton from "@/components/Button/EthereumSignInButton";
import {useDisclosure} from "@mantine/hooks";
import {useRouter} from "next/router";
import {challenges} from "@/lib/challenges";

export default function App({ Component, pageProps }: AppProps) {
    const [opened, { toggle }] = useDisclosure();
    const router = useRouter();
    return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <AppShell
          header={{ height: 80 }}
          navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
          padding="md"
      >
          <AppShell.Header>
              <header>
                  <Container size="xl" className={classes.inner}>
                      <Group className={classes.leftGroup}>
                          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                          <Group align="center" className={classes.leftGroup}>
                              <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5q20Z2FoXbhUyY0RkXDwyYdJRbVxKME7Hg&s"
                                  height={80}
                                  width={80}
                                  onClick={() => router.push('/')}
                              /> Crypto & Blockchain
                          </Group>
                      </Group>
                      <Group align="center" className={classes.rightGroup}>
                          <EthereumSignInButton />
                      </Group>
                  </Container>
              </header>
          </AppShell.Header>

          <AppShell.Navbar p="md">
              {challenges.map((challenge) => (
                  <Group key={challenge.id} mb="sm">
                      <Checkbox label={<Anchor href={`/challenges/${challenge.id}`}>{challenge.title}</Anchor>}/>
                  </Group>
              ))}
          </AppShell.Navbar>

          <AppShell.Main>
            <Component {...pageProps} />
          </AppShell.Main>
            <AppShell.Footer>
                <Container fluid px="xl">
                    Footer
                </Container>
            </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
