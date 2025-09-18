import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import styles from "./styles/styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>

      <Link href="/chatai" style={styles.btn}>Chat Ai Screen</Link>
    </View>
  );
}


