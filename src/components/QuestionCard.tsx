/**
 * QuestionCard - 질문 표시 컴포넌트
 * 
 * 기능:
 * - 오늘의 질문을 카드 형태로 표시
 * - 답변 작성 버튼 제공
 * - 질문 클릭 시 답변 작성 화면으로 이동
 * 
 * 로직:
 * - props로 전달받은 질문 텍스트를 화면에 표시
 * - 답변 작성 버튼 클릭 시 onPress 콜백 함수 실행
 * - 카드 형태의 UI로 질문을 시각적으로 구분
 * 
 * Props:
 * - question: string - 표시할 질문 텍스트
 * - onPress: () => void - 답변 작성 버튼 클릭 시 실행할 함수
 */

// React Native 기본 라이브러리
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// 프로젝트 내부 모듈
import { colors } from '../constants/colors'; // 색상 테마

// 컴포넌트 Props 인터페이스 정의
interface QuestionCardProps {
  question: string; // 표시할 질문 텍스트
  onPress?: () => void; // 카드 클릭 시 실행할 함수 (선택적)
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.content}>
        <Text style={styles.label}>오늘의 질문</Text>
        <Text style={styles.question}>{question}</Text>
        <View style={styles.footer}>
          <Text style={styles.hint}>답변을 작성해보세요</Text>
          <TouchableOpacity style={styles.answerButton} onPress={onPress}>
            <Text style={styles.answerButtonText}>답변 작성하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 8,
  },
  question: {
    fontSize: 18,
    color: colors.text,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 16,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 12,
    width: '100%',
  },
  hint: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 12,
  },
  answerButton: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'center',
  },
  answerButtonText: {
    color: colors.textDark,
    fontSize: 14,
    fontWeight: '600',
  },
}); 