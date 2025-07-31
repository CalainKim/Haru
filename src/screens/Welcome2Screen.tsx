/**
 * Welcome2Screen - 가족 설정 화면
 * 
 * 기능:
 * - 사용자가 가족을 생성하거나 기존 가족에 참여할 수 있는 선택 화면
 * - 가족 생성과 참여 중 선택할 수 있는 두 개의 버튼 제공
 * 
 * 로직:
 * - "가족 만들기" 버튼 클릭 시 CreateFamilyScreen으로 이동
 * - "가족 참여하기" 버튼 클릭 시 JoinFamilyScreen으로 이동
 * - 각 화면에서 가족 생성/참여 완료 후 MainScreen으로 이동
 * 
 * 백엔드 연동 필요:
 * - 가족 생성 API (/families/create)
 * - 가족 참여 API (/families/join)
 * - 초대 코드 생성 및 검증 시스템
 */

// React Native 기본 라이브러리
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

// 프로젝트 내부 모듈
import { colors } from '../constants/colors'; // 색상 테마
import { StackNavigationProp } from '@react-navigation/stack'; // 네비게이션 타입
import { RootStackParamList } from '../types'; // 네비게이션 스택 타입 정의

// 네비게이션 타입 정의 (Welcome2 화면에서 사용할 네비게이션 함수들의 타입)
type Welcome2ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome2'>;

// 컴포넌트 Props 인터페이스 정의
interface Welcome2ScreenProps {
  navigation: Welcome2ScreenNavigationProp; // 네비게이션 객체
}

export const Welcome2Screen: React.FC<Welcome2ScreenProps> = ({ navigation }) => {
  const handleCreateFamily = () => {
    navigation.navigate('CreateFamily');
  };

  const handleJoinFamily = () => {
    navigation.navigate('JoinFamily');
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
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={handleCreateFamily}
          >
            <Text style={styles.primaryButtonText}>가족 만들기</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={handleJoinFamily}
          >
            <Text style={styles.secondaryButtonText}>가족 참여하기</Text>
          </TouchableOpacity>
        </View>
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
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
}); 