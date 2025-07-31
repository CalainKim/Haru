/**
 * MainScreen - 앱의 메인 화면
 * 
 * 기능:
 * - 오늘의 질문 표시 및 답변 작성 버튼 제공
 * - 가족 구성원들의 답변 목록 표시
 * - 하단 네비게이션 (홈, 대화, 갤러리) 제공
 * - 프로필 버튼 (미구현)
 * 
 * 로직:
 * - 앱 시작 시 오늘의 질문을 자동으로 로드
 * - 가족 구성원들의 답변을 실시간으로 표시
 * - 답변 작성 버튼 클릭 시 AnswerScreen으로 이동
 * - 하단 네비게이션으로 다른 화면으로 이동 (대화, 갤러리는 미구현)
 * - 새로운 답변이 추가되면 실시간으로 목록에 반영
 * 
 * 백엔드 연동 필요:
 * - 오늘의 질문 조회 API
 * - 가족 구성원들의 답변 목록 조회 API (/answers/list)
 * - 가족 멤버 목록 조회 API (/families/members)
 * - 실시간 업데이트 (웹소켓 또는 주기적 API 호출)
 * - 사용자 인증 및 권한 확인
 */

// React Native 기본 라이브러리
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

// 프로젝트 내부 모듈
import { colors } from '../constants/colors'; // 색상 테마
import { QuestionCard } from '../components/QuestionCard'; // 질문 카드 컴포넌트
import { AnswerCard } from '../components/AnswerCard'; // 답변 카드 컴포넌트
import { getTodayQuestion } from '../data/questions'; // 오늘의 질문 가져오기 함수
import { Answer, FamilyMember } from '../types'; // 타입 정의
import { StackNavigationProp } from '@react-navigation/stack'; // 네비게이션 타입
import { RootStackParamList } from '../types'; // 네비게이션 스택 타입 정의

// 네비게이션 타입 정의 (Main 화면에서 사용할 네비게이션 함수들의 타입)
type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

// 컴포넌트 Props 인터페이스 정의
interface MainScreenProps {
  navigation: MainScreenNavigationProp; // 네비게이션 객체
}

export const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const [todayQuestion] = useState(getTodayQuestion());
  // ===== 백엔드 개발자 작업 필요 =====
  // 임시 데이터 (백엔드 연동 후 실제 API 호출로 교체)
  const [answers, setAnswers] = useState<Answer[]>([
    {
      id: '1',
      questionId: '1',
      memberId: '1',
      content: '오늘 딸이 학교에서 좋은 성적을 받았다고 연락해줘서 가장 감사했어요. 우리 딸이 열심히 노력하는 모습이 자랑스러워요.',
      createdAt: new Date(),
    },
    {
      id: '2',
      questionId: '1',
      memberId: '2',
      content: '가족이 모두 건강하고 행복하게 지내고 있어서 감사해요. 특히 오늘 아침에 함께 식사할 수 있어서 좋았습니다.',
      createdAt: new Date(),
    },
    {
      id: '3',
      questionId: '1',
      memberId: '3',
      content: '부모님이 항상 저를 믿고 응원해주셔서 감사해요. 오늘도 따뜻한 마음으로 하루를 보낼 수 있었습니다.',
      createdAt: new Date(),
    },
  ]);

  // 새로운 답변이 있으면 추가 (백엔드 연동 전까지 주석 처리)
  // useEffect(() => {
  //   if (route.params?.newAnswer) {
  //     setAnswers(prev => [...prev, route.params.newAnswer!]);
  //     // 파라미터 초기화
  //     navigation.setParams({ newAnswer: undefined });
  //   }
  // }, [route.params?.newAnswer, navigation]);
  
  // ===== 백엔드 개발자 작업 필요 =====
  // 1. 답변 목록 조회 API 호출 (/answers/list?familyId=xxx&date=xxx)
  // 2. 가족 멤버 목록 조회 API 호출 (/families/members?familyId=xxx)
  // 3. 실시간 업데이트 (웹소켓 또는 주기적 API 호출)
  // 4. 사용자 인증 확인 (JWT 토큰 검증)
  // 5. 에러 처리 (네트워크 오류, 권한 없음 등)
  // 6. 로딩 상태 관리
  // =================================
  
  // 임시 데이터 (백엔드 연동 후 제거)
  const mockMembers: FamilyMember[] = [
    { id: '1', name: '엄마', role: 'parent', familyRole: 'mother', joinedAt: new Date() },
    { id: '2', name: '아빠', role: 'parent', familyRole: 'father', joinedAt: new Date() },
    { id: '3', name: '딸', role: 'child', familyRole: 'daughter', joinedAt: new Date() },
  ];

  const handleQuestionPress = () => {
    navigation.navigate('Answer', { question: todayQuestion });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>하루한번</Text>
        {/* 프로필 버튼 (백엔드 연동 전까지 기능 미구현) */}
        <TouchableOpacity>
          <Text style={styles.profileButton}>프로필</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <QuestionCard question={todayQuestion} onPress={handleQuestionPress} />
        
        <View style={styles.answersSection}>
          <Text style={styles.sectionTitle}>가족들의 답변</Text>
          {answers.map((answer) => {
            const member = mockMembers.find(m => m.id === answer.memberId);
            if (!member) return null;
            
            return (
              <AnswerCard key={answer.id} answer={answer} member={member} />
            );
          })}
        </View>
      </ScrollView>
      
      {/* 하단 네비게이션 (백엔드 연동 전까지 기능 미구현) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.navButtonText}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>대화</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>갤러리</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  profileButton: {
    fontSize: 14,
    color: colors.primary,
  },
  content: {
    flex: 1,
  },
  answersSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: 8,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navButtonText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
}); 