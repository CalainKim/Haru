/**
 * Welcome1Screen - 앱 초기 로그인 화면
 * 
 * 기능:
 * - 앱의 첫 진입점으로 사용자 인증 방법을 제공
 * - 구글, 카카오톡, 이메일 로그인 옵션 제공
 * - 건너뛰기 기능으로 로그인 없이 앱 사용 가능(**팀원들이랑 회의 필요**)
 * 
 * 로직:
 * - 각 로그인 버튼 클릭 시 해당 소셜 로그인 SDK 연동 (현재는 임시로 Welcome2로 이동)
 * - 로그인 성공 시 JWT 토큰을 로컬에 저장하고 Welcome2로 이동
 * - 로그인 실패 시 에러 메시지 표시
 * - 건너뛰기 시 바로 Welcome2로 이동(**팀원들이랑 회의 필요**)
 * 
 * 백엔드 연동 필요:
 * - 소셜 로그인 SDK 연동 (구글, 카카오톡)
 * - JWT 토큰 기반 인증 시스템
 * - 사용자 정보 저장 및 조회
 */

// React Native 기본 라이브러리
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';

// 프로젝트 내부 모듈
import { colors } from '../constants/colors'; // 색상 테마
import { StackNavigationProp } from '@react-navigation/stack'; // 네비게이션 타입
import { RootStackParamList } from '../types'; // 네비게이션 스택 타입 정의

// 네비게이션 타입 정의 (Welcome1 화면에서 사용할 네비게이션 함수들의 타입)
type Welcome1ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome1'>;

// 컴포넌트 Props 인터페이스 정의
interface Welcome1ScreenProps {
  navigation: Welcome1ScreenNavigationProp; // 네비게이션 객체
}

export const Welcome1Screen: React.FC<Welcome1ScreenProps> = ({ navigation }) => {
  const handleGoogleLogin = () => {
    // ===== 백엔드 개발자 작업 필요 =====
    // 1. 구글 SDK 연동 (@react-native-google-signin/google-signin)
    // 2. 구글 로그인 API 호출
    // 3. 서버에서 구글 토큰 검증
    // 4. 사용자 정보 조회 또는 신규 사용자 등록
    // 5. JWT 토큰 발급 및 로컬 저장
    // 6. 로그인 성공 시 Welcome2로 이동, 실패 시 에러 메시지
    // =================================
    
    // 임시로 Welcome2로 이동 (백엔드 연동 후 제거)
    navigation.navigate('Welcome2');
  };

  const handleKakaoLogin = () => {
    // ===== 백엔드 개발자 작업 필요 =====
    // 1. 카카오 SDK 연동 (@react-native-seoul/kakao-login)
    // 2. 카카오 로그인 API 호출
    // 3. 서버에서 카카오 토큰 검증
    // 4. 사용자 정보 조회 또는 신규 사용자 등록
    // 5. JWT 토큰 발급 및 로컬 저장
    // 6. 로그인 성공 시 Welcome2로 이동, 실패 시 에러 메시지
    // =================================
    
    // 임시로 Welcome2로 이동 (백엔드 연동 후 제거)
    navigation.navigate('Welcome2');
  };

  const handleEmailLogin = () => {
    // ===== 백엔드 개발자 작업 필요 =====
    // 1. 이메일/비밀번호 입력 화면으로 이동 (새로운 화면 필요)
    // 2. 이메일 로그인 API 호출 (/auth/login)
    // 3. 서버에서 이메일/비밀번호 검증
    // 4. JWT 토큰 발급 및 로컬 저장 (로컬 저장 방법 논의 필요)
    // 5. 로그인 성공 시 Welcome2로 이동, 실패 시 에러 메시지
    // 6. 비밀번호 찾기 기능도 함께 구현 필요
    // =================================
    
    // 임시로 Welcome2로 이동 (백엔드 연동 후 제거)
    navigation.navigate('Welcome2');
  };

  const handleSkip = () => {
    navigation.navigate('Welcome2');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>하루한번</Text>
          <Text style={styles.subtitle}>가족을 잇는 감성 커뮤니케이션</Text>
        </View>
        
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            매일 하나의 질문으로{'\n'}
            가족과의 따뜻한 대화를{'\n'}
            시작해보세요
          </Text>
        </View>
        
        <View style={styles.loginContainer}>
          <TouchableOpacity 
            style={styles.googleButton}
            onPress={handleGoogleLogin}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.googleIcon}>G</Text>
              <Text style={styles.googleButtonText}>구글로 로그인</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.kakaoButton}
            onPress={handleKakaoLogin}
          >
            <View style={styles.buttonContent}>
                             <Text style={styles.kakaoIcon}>K</Text>
              <Text style={styles.kakaoButtonText}>카카오톡으로 로그인</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.emailButton}
            onPress={handleEmailLogin}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.emailIcon}>📧</Text>
              <Text style={styles.emailButtonText}>이메일로 로그인</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={handleSkip}
        >
          <Text style={styles.skipButtonText}>건너뛰기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  description: {
    marginBottom: 60,
  },
  descriptionText: {
    fontSize: 18,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 28,
  },
  loginContainer: {
    width: '100%',
    gap: 16,
    marginBottom: 30,
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
  },
  emailButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  kakaoIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  emailIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  googleButtonText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '600',
  },
  kakaoButtonText: {
    color: '#3C1E1E',
    fontSize: 16,
    fontWeight: '600',
  },
  emailButtonText: {
    color: colors.textDark,
    fontSize: 16,
    fontWeight: '600',
  },
  skipButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  skipButtonText: {
    color: colors.textSecondary,
    fontSize: 14,
  },
}); 