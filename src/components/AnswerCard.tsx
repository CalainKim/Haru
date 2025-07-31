import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { Answer, FamilyMember } from '../types';

interface AnswerCardProps {
  answer: Answer;
  member: FamilyMember;
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