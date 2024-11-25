import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  gameQuery: GameQuery;
}

const PlatformSelector = ({ onSelectPlatform, gameQuery }: Props) => {
  const { data: platforms } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {gameQuery.platform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
