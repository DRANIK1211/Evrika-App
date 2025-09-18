import styles from "@/app/styles/styles";
import { Link } from "expo-router";

export default function BtnComponents( props:{href: string, name: string} ) {
    return (
      
        <Link href={`/?${props.href}`} style={styles.btn}>{props.name}</Link>
      
    );
  }