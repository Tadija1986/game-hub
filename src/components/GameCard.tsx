import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({
  game: { background_image, name, parent_platforms, metacritic },
}: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIcons platforms={parent_platforms.map((p) => p.platform)} />
          <CriticScore score={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
