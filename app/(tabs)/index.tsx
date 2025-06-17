import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '../../components/ui/ThemeProvider';

export default function HomeScreen() {
  const { isDark } = useTheme();

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: isDark ? '#000' : '#fff' }
      ]}
    >
      <View style={styles.header}>
        <Text
          style={[
            styles.title,
            { color: isDark ? '#fff' : '#000' }
          ]}
        >
          Welcome to FestApp
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: isDark ? '#ccc' : '#666' }
          ]}
        >
          Discover amazing spaces for your events
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
}); 