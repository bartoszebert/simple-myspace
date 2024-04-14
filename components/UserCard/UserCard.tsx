import Link from "next/link";
import styles from "./UserCard.module.css";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

import Image from "next/image"; // Import the Image component from next/image

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
      <h3>
        <Link href={`/users/${id}`}>{name}</Link>
      </h3>
      <p>Age: {age}</p>
    </div>
  );
}
