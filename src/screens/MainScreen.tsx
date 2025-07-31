import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { colors } from '../constants/colors';
import { QuestionCard } from '../components/QuestionCard';
import { AnswerCard } from '../components/AnswerCard';
import { getTodayQuestion } from '../data/questions';
import { Answer, FamilyMember } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

interface MainScreenProps {
  navigation: MainScreenNavigationProp;
}

export const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const [todayQuestion] = useState(getTodayQuestion());
  
  // 임시 데이터 (나중에 실제 데이터로 교체)
  const mockMembers: FamilyMember[] = [
    { id: '1', name: '엄마', role: 'parent', joinedAt: new Date() },
    { id: '2', name: '아빠', role: 'parent', joinedAt: new Date() },
    { id: '3', name: '딸', role: 'child', joinedAt: new Date() },
  ];
  
  const mockAnswers: Answer[] = [
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
  ];

  const handleQuestionPress = () => {
    // 나중에 답변 작성 화면으로 이동
    console.log('답변 작성 화면으로 이동');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>하루한번</Text>
        <TouchableOpacity>
          <Text style={styles.profileButton}>프로필</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <QuestionCard question={todayQuestion} onPress={handleQuestionPress} />
        
        <View style={styles.answersSection}>
          <Text style={styles.sectionTitle}>가족들의 답변</Text>
          {mockAnswers.map((answer) => {
            const member = mockMembers.find(m => m.id === answer.memberId);
            if (!member) return null;
            
            return (
              <AnswerCard key={answer.id} answer={answer} member={member} />
            );
          })}
        </View>
      </ScrollView>
      
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