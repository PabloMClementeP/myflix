import {
  CardDetails,
  CardImage,
  CardWrapper,
  IconCircle,
  IconWrapper,
} from "./recomended-card.styles";
import { FaPlay } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { BsHandThumbsUp } from "react-icons/bs";

type RecomendedCardProps = {
  movie: {
    id: number;
    title: string;
    backdrop_path: string;
  };
};

const RecomendedCard = ({
  movie: { backdrop_path, title, id },
}: RecomendedCardProps) => {
  return (
    <CardWrapper>
      <CardImage
        src={import.meta.env.VITE_IMAGE_BASE_URL + backdrop_path}
        alt={title}
      />
      <CardDetails>
        <IconWrapper>
          <IconCircle>
            <FaPlay />
          </IconCircle>
          <IconCircle>
            <FiPlus />
          </IconCircle>
          <IconCircle>
            <BsHandThumbsUp />
          </IconCircle>
        </IconWrapper>
        <h3>{title}</h3>
        <p>ID: {id}</p>
      </CardDetails>
    </CardWrapper>
  );
};

export default RecomendedCard;
