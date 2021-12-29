import Image from "next/image";
import styles from "./KitchenCard.module.css";

interface KitchenCardProps {
  label: string;
  path: string;
  img: string;
  altText: string;
  height: number;
  width: number;
}

const KitchenCard: React.FC<KitchenCardProps> = ({
  label,
  path,
  img,
  altText,
  height,
  width,
}) => {
  return (
    <fieldset className={styles.card}>
      <legend>{label}</legend>
      <a href={path}>
        <Image src={img} alt={altText} height={height} width={width} />
      </a>
    </fieldset>
  );
};

export default KitchenCard;
