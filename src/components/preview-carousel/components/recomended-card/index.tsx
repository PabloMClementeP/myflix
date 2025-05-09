import { CardDetails, CardImage, CardWrapper } from "./recomended-card.styles";

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
        <h3>{title}</h3>
        <p>ID: {id}</p>
      </CardDetails>
    </CardWrapper>
  );
};

export default RecomendedCard;
