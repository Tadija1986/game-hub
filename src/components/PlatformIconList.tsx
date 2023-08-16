import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib/esm/iconBase";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa"; // Font Awesome
import { MdPhoneIphone } from "react-icons/md"; // Material Design
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs"; // Bootstrap
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
  // index signature syntax
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    pc: FaWindows,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
