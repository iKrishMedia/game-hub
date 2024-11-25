import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";
import { Image } from "@chakra-ui/react";

interface Props {
  rating_top: number;
}

const emojiMap: { [key: number]: { src: string; alt: string; boxSize: string } } = {
  3: { src: meh, alt: "meh", boxSize: "25px" },
  4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  5: { src: bullsEye, alt: "exceptional", boxSize: "30px" },
};

function Emoji({ rating_top }: Props) {
  if (rating_top < 3) return null;

  return <Image {...emojiMap[rating_top]} marginTop={1} />;
}

export default Emoji;
