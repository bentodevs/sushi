import { Button, Flex, HStack, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <Flex
                w="100%"
                px="6"
                py="5"
                align="center"
                justify="space-between"
            >
                <Image src={"/bento_no_background.png"} h="50px" alt="Bento's Logo" />
                <HStack as="nav" spacing="8">
                    <Link href="/" passHref>
                        <Button variant="nav">Home</Button>
                    </Link>
                    <Link href="/support" passHref>
                        <Button variant="nav">Support</Button>
                    </Link>
                    <Link href="/docs" passHref>
                        <Button variant="nav">Docs</Button>
                    </Link>
                </HStack>
            </Flex>
        </>
    )
}
