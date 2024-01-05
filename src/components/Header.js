import { useState } from "react"
import { Container, Group, Burger } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import classes from "./Header.module.css"

const links = [
    { link: "/", label: "Save Old Glossop" },
    { link: "/about", label: "Pricing" },
    { link: "/site1", label: "Site 1" },
    { link: "/site2", label: "Site 2" },
    { link: "/site3", label: "Site 3" }
]

export function Header() {
    const [opened, { toggle }] = useDisclosure(false)
    const [active, setActive] = useState(links[0].link)

    const items = links.map(link => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={event => {
                event.preventDefault()
                setActive(link.link)
            }}
        >
            {link.label}
        </a>
    ))

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    )
}

export default Header;
