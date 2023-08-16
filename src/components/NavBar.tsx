import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="8px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" cursor="pointer" />
      </Link>

      <SearchInput />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
