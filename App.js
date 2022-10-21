import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <WebView style={styles.container}
      source={{ html: '<iframe  width=100% height=90% margin-top=30% margin=0 padding= 0 src="https://televisionlibre.net/es/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}

    />
    // <WebView
    //   source={{ html: '<iframe   src="https://televisionlibre.net/es/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
    //   style={{ marginTop: 20 }}
    // />
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0
  }
});