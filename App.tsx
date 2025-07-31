/**
 * 하루한번 - 가족을 잇는 감성 커뮤니케이션 앱
 * 
 * 앱의 메인 진입점으로, 네비게이션 구조와 전체 앱 설정을 담당합니다.
 * 
 * ===== 백엔드 개발자를 위한 가이드 =====
 * 
 * 1. 인증 시스템
 *    - JWT 토큰 기반 인증
 *    - 소셜 로그인 (페이스북, 카카오톡)
 *    - 이메일/비밀번호 로그인
 * 
 * 2. 주요 API 엔드포인트
 *    - POST /auth/login (이메일 로그인)
 *    - POST /auth/facebook (페이스북 로그인)
 *    - POST /auth/kakao (카카오 로그인)
 *    - POST /families/create (가족 생성)
 *    - POST /families/join (가족 참여)
 *    - GET /families/members (가족 멤버 목록)
 *    - POST /answers/create (답변 저장)
 *    - GET /answers/list (답변 목록 조회)
 * 
 * 3. 데이터베이스 스키마
 *    - users (사용자 정보)
 *    - families (가족 정보)
 *    - family_members (가족 구성원)
 *    - answers (답변 데이터)
 *    - questions (질문 데이터)
 * 
 * 4. 실시간 기능
 *    - 웹소켓 또는 주기적 API 호출로 실시간 답변 업데이트
 *    - 푸시 알림 (Firebase Cloud Messaging)
 * 
 * 5. 보안 고려사항
 *    - JWT 토큰 검증
 *    - 가족 멤버 권한 확인
 *    - 입력 데이터 검증
 * 
 * ======================================
 * 
 * @format 
 */

// React Native 기본 라이브러리
import React from 'react'; // 리액트 코어
import { StatusBar, StyleSheet, useColorScheme } from 'react-native'; // 상태바, 스타일, 색상 스키마

// 네비게이션 라이브러리
import { NavigationContainer } from '@react-navigation/native'; // 네비게이션 컨테이너 (전체 네비게이션 래퍼)
import { createStackNavigator } from '@react-navigation/stack'; // 스택 네비게이션 생성 함수

// 프로젝트 내부 모듈
import { colors } from './src/constants/colors'; // 색상 테마 상수

// 화면 컴포넌트들
import { Welcome1Screen } from './src/screens/Welcome1Screen'; // 웰컴1 스크린 (로그인 화면)
import { Welcome2Screen } from './src/screens/Welcome2Screen'; // 웰컴2 스크린 (가족 선택 화면)
import { MainScreen } from './src/screens/MainScreen'; // 메인 스크린 (홈 화면)
import { CreateFamilyScreen } from './src/screens/CreateFamilyScreen'; // 가족 생성 스크린
import { JoinFamilyScreen } from './src/screens/JoinFamilyScreen'; // 가족 참여 스크린
import { AnswerScreen } from './src/screens/AnswerScreen'; // 답변 작성 스크린

// 스택 네비게이션 인스턴스 생성 (화면 간 이동을 관리)
const Stack = createStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark'; // 다크 모드 확인

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> // 깃허브
      <Stack.Navigator 
        initialRouteName="Welcome1"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Welcome1" component={Welcome1Screen} />
        <Stack.Screen name="Welcome2" component={Welcome2Screen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="CreateFamily" component={CreateFamilyScreen} />
        <Stack.Screen name="JoinFamily" component={JoinFamilyScreen} />
        <Stack.Screen name="Answer" component={AnswerScreen} />
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
