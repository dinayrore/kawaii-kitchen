import Image from "next/image";
import styles from "../KitchenCard/KitchenCard.module.css";

interface RecipeCardProps {
  img: string;
  height: number;
  width: number;
  title: string;
  tags: string[];
  time: number;
  rating: number;
  description: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  img,
  height,
  width,
  title,
  tags,
  time,
  rating,
  description,
}) => {
  return (
    <div className={styles.card}>
      <Image src={img} alt={title} height={height} width={width} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default RecipeCard;
