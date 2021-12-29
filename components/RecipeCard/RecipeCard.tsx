import Image from "next/image";
import styles from "../../styles/Kitchen.module.css";

interface RecipeCardProps {
  img: string;
  altText: string;
  height: number;
  width: number;
  title: string;
  tags: string;
  time: number;
  rating: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  img,
  altText,
  height,
  width,
}) => {
  return (
    <div className={styles.grid}>
      <Image src={img} alt={altText} height={height} width={width} />
    </div>
  );
};

export default RecipeCard;

// function Card(props) {
//   return (
//     <div className="card">
//       <div className="card__body">
//         <img src={props.img} class="card__image" />
//         <h2 className="card__title">{props.title}</h2>
//         <p className="card__description">{props.description}</p>
//       </div>
//       <button className="card__btn">View Recipe</button>
//     </div>
//   );
// }
