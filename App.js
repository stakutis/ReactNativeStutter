/**
 * Sample/simple ReactNative app implementing the Malone melodict therapy technque
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Button,
  Vibration,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Slider from '@react-native-community/slider';

const App: () => React$Node = () => {
  let [pauseDuration, setPauseDuration] = useState(400);
  let [vibrationDuration, setVibrationDuration] = useState(300);
  let [isRunning, setIsRunning] = useState(false);

  const restartVibration = optionalIsTrue => {
    if (isRunning || optionalIsTrue === true) {
      Vibration.cancel();
      Vibration.vibrate([pauseDuration, vibrationDuration], true);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Image
            style={{width: '100%', height: '25%'}}
            source={require('./images/cell.jpg')}
          />
          <Text style={styles.sectionTitle}>Stutter Assistant</Text>
          <Text style={styles.sectionDescription}>
            Welcome to <Text style={styles.highlight}>Stutter-Assist</Text>
          </Text>
          <Text> </Text>
          <Text>Pause setting: {pauseDuration}</Text>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={1000}
            value={pauseDuration}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            onSlidingComplete={val => {
              pauseDuration = Math.floor(val);
              setPauseDuration(Math.floor(val));
              restartVibration();
            }}
          />
          <Text>Vibration settings: {vibrationDuration}</Text>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={1000}
            value={vibrationDuration}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            onSlidingComplete={val => {
              vibrationDuration = Math.floor(val);
              setVibrationDuration(Math.floor(val));
              restartVibration();
            }}
          />
          <Text />
          <Button
            style={styles.separate}
            onPress={() => {
              setIsRunning(true);
              restartVibration(true);
            }}
            title="Start Assistant"
            disabled={isRunning}
          />
          <Text />
          <Button
            style={styles.separate}
            onPress={() => {
              setIsRunning(false);
              Vibration.cancel();
            }}
            disabled={!isRunning}
            title="Stop Assistant"
          />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>
            Copyright 2019 Concord Software v1.1
          </Text>
          <Text style={styles.bottomText}>cmaloney2007@gmail.com</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  separate: {
    padding: 22,
    marginTop: 20,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bottomText: {
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginLeft: 20,
    justifyContent: 'flex-end',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  sectionContainer: {
    marginTop: 20,
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
