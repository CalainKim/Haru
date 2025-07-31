// React Native 기본 라이브러리
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Alert, ScrollView } from 'react-native';

// 프로젝트 내부 모듈
import { colors } from '../constants/colors'; // 색상 테마
import { StackNavigationProp } from '@react-navigation/stack'; // 네비게이션 타입
import { RouteProp } from '@react-navigation/native'; // 라우트 파라미터 타입
import { RootStackParamList, Answer } from '../types'; // 네비게이션 스택 타입 정의 및 답변 타입

// 네비게이션 타입 정의 (Answer 화면에서 사용할 네비게이션 함수들의 타입)
type AnswerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Answer'>;
// 라우트 파라미터 타입 정의 (Answer 화면으로 전달되는 파라미터들의 타입)
type AnswerScreenRouteProp = RouteProp<RootStackParamList, 'Answer'>;

// 컴포넌트 Props 인터페이스 정의
interface AnswerScreenProps {
  navigation: AnswerScreenNavigationProp; // 네비게이션 객체
  route: AnswerScreenRouteProp; // 라우트 파라미터 객체
}

export const AnswerScreen: React.FC<AnswerScreenProps> = ({ navigation, route }) => {
  const { question } = route.params;
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (!answer.trim()) {
      Alert.alert('알림', '답변을 입력해주세요.');
      return;
    }

    // ===== 백엔드 개발자 작업 필요 =====
    // 1. 답변 저장 API 호출 (/answers/create)
    // 2. 서버에서 답변 데이터베이스에 저장
    // 3. 사용자 인증 확인 (JWT 토큰 검증)
    // 4. 가족 멤버 권한 확인 (해당 가족에 속한 사용자인지)
    // 5. 중복 답변 방지 (같은 질문에 이미 답변했는지)
    // 6. 에러 처리 (네트워크 오류, 권한 없음, 저장 실패 등)
    // 7. 성공 시 Main 화면으로 이동, 실패 시 에러 메시지
    // =================================

    // 임시 성공 처리 (백엔드 연동 후 제거)
    Alert.alert(
      '답변 완료!',
      '답변이 성공적으로 저장되었습니다. (백엔드 연동 후 실제 저장됩니다)',
      [
        {
          text: '확인',
          onPress: () => navigation.navigate('Main')
        }
      ]
    );
  };

  const handleBack = () => {
    if (answer.trim()) {
      Alert.alert(
        '작성 중인 답변이 있습니다',
        '정말로 나가시겠습니까?',
        [
          { text: '취소', style: 'cancel' },
          { text: '나가기', onPress: () => navigation.goBack() }
        ]
      );
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.backButton}>← 뒤로</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>답변 작성</Text>
        <View style={{ width: 50 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.questionSection}>
          <Text style={styles.questionLabel}>오늘의 질문</Text>
          <View style={styles.questionCard}>
            <Text style={styles.questionText}>{question}</Text>
          </View>
        </View>

        <View style={styles.answerSection}>
          <Text style={styles.answerLabel}>나의 답변</Text>
          <TextInput
            style={styles.answerInput}
            placeholder="답변을 입력해주세요..."
            value={answer}
            onChangeText={setAnswer}
            multiline
            textAlignVertical="top"
            placeholderTextColor={colors.textSecondary}
            maxLength={500}
          />
          <Text style={styles.characterCount}>
            {answer.length}/500
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.submitButton, !answer.trim() && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={!answer.trim()}
        >
          <Text style={[styles.submitButtonText, !answer.trim() && styles.submitButtonTextDisabled]}>
            답변 제출하기
          </Text>
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
  backButton: {
    fontSize: 16,
    color: colors.primary,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  questionSection: {
    marginBottom: 30,
  },
  questionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  questionCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  questionText: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    textAlign: 'center',
  },
  answerSection: {
    flex: 1,
  },
  answerLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  answerInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.card,
    minHeight: 200,
    textAlignVertical: 'top',
  },
  characterCount: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'right',
    marginTop: 8,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: colors.border,
  },
  submitButtonText: {
    color: colors.textDark,
    fontSize: 16,
    fontWeight: '600',
  },
  submitButtonTextDisabled: {
    color: colors.textSecondary,
  },
}); 