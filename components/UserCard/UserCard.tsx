import Link from "next/link";
import styles from "./UserCard.module.css";
import Image from "next/image";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <Image
          src={image ?? "/mememan.webp"}
          alt={`${name}'s profile`}
          fill={true}
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
