/**
 * 하루한번 - 가족을 잇는 감성 커뮤니케이션 앱
 * https://github.com/facebook/react-native
 *
 * @format 
 */

import React from 'react'; // 리액트
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // 네비게이션 컨테이너
import { createStackNavigator } from '@react-navigation/stack'; // 스택 네비게이션
import { colors } from './src/constants/colors'; // 색상 상수
import { WelcomeScreen } from './src/screens/WelcomeScreen'; // 웰컴 스크린
import { MainScreen } from './src/screens/MainScreen'; // 메인 스크린
import { CreateFamilyScreen } from './src/screens/CreateFamilyScreen'; // 가족 생성 스크린
import { JoinFamilyScreen } from './src/screens/JoinFamilyScreen'; // 가족 참여 스크린

const Stack = createStackNavigator(); // 스택 네비게이션 생성

function App() {
  const isDarkMode = useColorScheme() === 'dark'; // 다크 모드 확인

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> // 깃허브 테스트
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="CreateFamily" component={CreateFamilyScreen} />
        <Stack.Screen name="JoinFamily" component={JoinFamilyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
