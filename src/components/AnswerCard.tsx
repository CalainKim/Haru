/**
 * AnswerCard - 답변 표시 컴포넌트
 * 
 * 기능:
 * - 가족 구성원의 답변을 카드 형태로 표시
 * - 답변 작성자 정보 (이름, 역할) 표시
 * - 답변 내용과 작성 시간 표시
 * 
 * 로직:
 * - props로 전달받은 답변과 멤버 정보를 화면에 표시
 * - 멤버의 이름과 역할을 상단에 표시
 * - 답변 내용을 카드 형태로 표시
 * - 작성 시간을 하단에 표시
 * 
 * Props:
 * - answer: Answer - 표시할 답변 객체
 * - member: FamilyMember - 답변 작성자 정보
 */

// React Native 기본 라이브러리
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 프로젝트 내부 모듈
import { colors } from '../constants/colors'; // 색상 테마
import { Answer, FamilyMember } from '../types'; // 답변 및 가족 구성원 타입 정의

// 컴포넌트 Props 인터페이스 정의
interface AnswerCardProps {
  answer: Answer; // 표시할 답변 데이터
  member: FamilyMember; // 답변을 작성한 가족 구성원 정보
}

export const AnswerCard: React.FC<AnswerCardProps> = ({ answer, member }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.memberName}>{member.name}</Text>
        <Text style={styles.role}>{member.role === 'parent' ? '부모님' : '자녀'}</Text>
      </View>
      <Text style={styles.content}>{answer.content}</Text>
      <Text style={styles.timestamp}>
        {new Date(answer.createdAt).toLocaleString('ko-KR', {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 6,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  role: {
    fontSize: 12,
    color: colors.primary,
    backgroundColor: colors.secondaryLight,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  content: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 11,
    color: colors.textSecondary,
    textAlign: 'right',
  },
}); 