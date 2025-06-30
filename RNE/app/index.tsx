import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Say hello to your new app</Text>

      <Link href="/login" asChild>
        <Pressable style={styles.login}>
          <Text style={{ color: '#ffffff' }}>Login</Text>

        </Pressable>
      </Link>

      <Link href="/signup" asChild>
        <Pressable style={styles.link}>
          <Text>Sign Up</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  link: {
    height: 48,
    borderColor: '#253342',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 16,
    paddingHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    height: 48,
    color: '#ffffff',
    backgroundColor: '#253342',
    borderColor: '#253342',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 16,
    paddingHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
