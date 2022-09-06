import { Flex, Link, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink } from "react-router-dom";
import logo from "../../../resources/art_feel_logo.png";
export const NavBar = () => {
  const links: { name: string; path: string }[] = [
    { name: "Kolleksjon", path: "collection" },
    { name: "Om kunstner", path: "about" },
  ];
  return (
    <Flex
      bg="whiteAlpha.100"
      alignItems="center"
      shadow={"md"}
      position="fixed"
      width="100%"
      zIndex={100}
      height={"80px"}
    >
      <Image src={logo} height={20} />
      <Spacer></Spacer>
      <Flex gap={8} alignItems="center" marginRight={10}>
        {links.map((link) => (
          <Link
            as={ReactLink}
            to={link.path}
            fontFamily="monospace"
            color="black"
            fontSize="xl"
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};
