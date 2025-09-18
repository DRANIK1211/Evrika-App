import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import styles from './styles/styles';

export default function ChatAiScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat Ai Screen</Text>

      <Link href="/" style={styles.btn}>Home Screen</Link>
    </View>
  );
}


