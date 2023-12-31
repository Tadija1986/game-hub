import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({
  game: { background_image, name, parent_platforms, metacritic, rating_top },
}: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIcons platforms={parent_platforms.map((p) => p.platform)} />
          <CriticScore score={metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {name} <Emoji rating={rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
