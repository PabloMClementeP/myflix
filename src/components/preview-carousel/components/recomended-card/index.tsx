import { CardImage, CardWrapper } from "./recomended-card.styles";

type RecomendedCardProps = {
  movie: {
    id: number;
    title: string;
    backdrop_path: string;
  };
};

const RecomendedCard = ({
  movie: { backdrop_path, title },
}: RecomendedCardProps) => {
  return (
    <CardWrapper>
      <CardImage
        src={import.meta.env.VITE_IMAGE_BASE_URL + backdrop_path}
        alt={title}
      />
    </CardWrapper>
  );
};

export default RecomendedCard;
