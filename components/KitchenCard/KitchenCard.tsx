import Image from "next/image";
import styles from "../../styles/Home.module.css";

interface KitchenCardProps {
  path: string;
  img: string;
  altText: string;
  height: number;
  width: number;
}

const KitchenCard: React.FC<KitchenCardProps> = ({
  path,
  img,
  altText,
  height,
  width,
}) => {
  return (
    <a href={path} className={styles.card}>
      <Image src={img} alt={altText} height={height} width={width} />
    </a>
  );
};

export default KitchenCard;
