import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <GameEngine
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>

      </GameEngine>
      <StatusBar style="auto" hidden />
    </View>
  );
}
