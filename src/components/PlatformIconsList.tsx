import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import Platform from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    androd: FaAndroid,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={2}>
        {platforms.map((platform) => (
          <Icon
            as={iconMap[platform.slug]}
            key={platform.id}
            color="gray.500"
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconsList;
