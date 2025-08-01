/**
 * CreateFamilyScreen - 가족 생성 화면
 * 
 * 기능:
 * - 새로운 가족 그룹을 생성하는 화면
 * - 가족 이름, 사용자 이름, 질문 도착 시간, 역할 선택
 * - 고유한 초대 코드 생성 및 표시
 * 
 * 로직:
 * - 사용자가 가족 이름과 자신의 정보를 입력
 * - 질문 도착 시간과 역할을 드롭다운으로 선택
 * - 모든 필수 필드 입력 후 가족 생성 버튼 클릭
 * - 서버에서 고유한 초대 코드를 생성하고 표시
 * - 생성 완료 후 MainScreen으로 이동
 * 
 * 백엔드 연동 필요:
 * - 가족 생성 API (/families/create)
 * - 고유한 초대 코드 생성 로직
 * - 가족 정보 및 멤버 정보 데이터베이스 저장
 * - 중복 가족명 검증
 */

// React Native 기본 라이브러리
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

// 프로젝트 내부 모듈
import { colors } from '../constants/colors'; // 색상 테마
import { StackNavigationProp } from '@react-navigation/stack'; // 네비게이션 타입
import { RootStackParamList } from '../types'; // 네비게이션 스택 타입 정의
import { Dropdown } from '../components/Dropdown'; // 드롭다운 컴포넌트

// 네비게이션 타입 정의 (CreateFamily 화면에서 사용할 네비게이션 함수들의 타입)
type CreateFamilyScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateFamily'>;

// 컴포넌트 Props 인터페이스 정의
interface CreateFamilyScreenProps {
  navigation: CreateFamilyScreenNavigationProp; // 네비게이션 객체
}

export const CreateFamilyScreen: React.FC<CreateFamilyScreenProps> = ({ navigation }) => {
  const [familyName, setFamilyName] = useState('');
  const [memberName, setMemberName] = useState('');
  const [questionTime, setQuestionTime] = useState('12:34');
  const [familyRole, setFamilyRole] = useState('');
  const [isFamilyCreated, setIsFamilyCreated] = useState(false);
  const [inviteCode, setInviteCode] = useState('');

  // 질문 도착 시간 옵션
  const timeOptions = [
    { label: '매일 7:00AM', value: '07:00' },
    { label: '매일 8:00AM', value: '08:00' },
    { label: '매일 9:00AM', value: '09:00' },
    { label: '매일 10:00AM', value: '10:00' },
    { label: '매일 11:00AM', value: '11:00' },
    { label: '매일 12:00PM', value: '12:00' },
    { label: '매일 12:30PM', value: '12:30' },
    { label: '매일 1:00PM', value: '13:00' },
    { label: '매일 2:00PM', value: '14:00' },
    { label: '매일 3:00PM', value: '15:00' },
    { label: '매일 4:00PM', value: '16:00' },
    { label: '매일 5:00PM', value: '17:00' },
    { label: '매일 6:00PM', value: '18:00' },
    { label: '매일 7:00PM', value: '19:00' },
    { label: '매일 8:00PM', value: '20:00' },
    { label: '매일 9:00PM', value: '21:00' },
    { label: '매일 10:00PM', value: '22:00' },
  ];

  // 역할 옵션
  const roleOptions = [
    { label: '아버지', value: 'father' },
    { label: '어머니', value: 'mother' },
    { label: '딸', value: 'daughter' },
    { label: '아들', value: 'son' },
    { label: '기타', value: 'other' },
  ];

  const generateInviteCode = () => {
    // ===== 백엔드 개발자 작업 필요 =====
    // 서버에서 고유한 초대 코드 생성 로직
    // return Math.random().toString(36).substring(2, 8).toUpperCase();
    // =================================
    
    // 임시 초대 코드 (백엔드 연동 후 제거)
    return 'ABC123';
  };

  const handleCreateFamily = () => {
    if (!familyName.trim() || !memberName.trim() || !familyRole) {
      Alert.alert('알림', '모든 필드를 입력해주세요.');
      return;
    }

    // ===== 백엔드 작업 필요 =====
    // 1. 가족 생성 API 호출 (/families/create)
    // 2. 서버에서 고유한 초대 코드 생성
    // 3. 가족 정보와 멤버 정보를 데이터베이스에 저장
    // 4. 생성된 초대 코드를 응답으로 받아서 표시
    // 5. 에러 처리 (중복된 가족명, 네트워크 오류 등)
    // 6. 성공 시 초대 코드 표시, 실패 시 에러 메시지
    // =================================

    // 임시 성공 처리 (백엔드 연동 후 제거)
    const code = generateInviteCode();
    setInviteCode(code);
    setIsFamilyCreated(true);
  };

  const handleContinueToMain = () => {
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← 뒤로</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>가족 만들기</Text>
        <View style={{ width: 50 }} />
      </View>

      <View style={styles.content}>
        {!isFamilyCreated ? (
          // 가족 생성 폼
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>가족 이름</Text>
              <TextInput
                style={styles.input}
                placeholder="가족 이름을 입력하세요"
                value={familyName}
                onChangeText={setFamilyName}
                placeholderTextColor={colors.textSecondary}
              />
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>나의 정보(닉네임)</Text>
              <TextInput
                style={styles.input}
                placeholder="내 이름을 입력하세요"
                value={memberName}
                onChangeText={setMemberName}
                placeholderTextColor={colors.textSecondary}
              />
            </View>

            <View style={styles.section}>
              <Dropdown
                label="질문이 도착할 시간"
                placeholder="매일 12:34PM▼"
                options={timeOptions}
                value={questionTime}
                onValueChange={setQuestionTime}
              />
            </View>

            <View style={styles.section}>
              <Dropdown
                label={`${memberName || '○○'}님은 부모님이신가요?`}
                placeholder="선택▼"
                options={roleOptions}
                value={familyRole}
                onValueChange={setFamilyRole}
              />
            </View>

            <TouchableOpacity style={styles.createButton} onPress={handleCreateFamily}>
              <Text style={styles.createButtonText}>가족 만들기</Text>
            </TouchableOpacity>
          </>
        ) : (
          // 가족 생성 완료 후 초대 코드 표시
          <>
            <View style={styles.successSection}>
              <View style={styles.successIcon}>
                <Text style={styles.successIconText}>🎉</Text>
              </View>
              <Text style={styles.successTitle}>가족 생성 완료!</Text>
              <Text style={styles.successSubtitle}>
                이제 가족 구성원들을 초대해보세요
              </Text>
            </View>

            <View style={styles.inviteCodeSection}>
              <Text style={styles.inviteCodeLabel}>초대 코드</Text>
              <View style={styles.inviteCodeContainer}>
                <Text style={styles.inviteCodeText}>{inviteCode}</Text>
                <TouchableOpacity style={styles.copyButton}>
                  <Text style={styles.copyButtonText}>복사</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.inviteCodeHint}>
                이 코드를 가족 구성원들에게 공유해주세요
              </Text>
            </View>

            <TouchableOpacity style={styles.continueButton} onPress={handleContinueToMain}>
              <Text style={styles.continueButtonText}>메인으로 이동</Text>
            </TouchableOpacity>
          </>
        )}
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
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.card,
  },
  createButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    color: colors.textDark,
    fontSize: 16,
    fontWeight: '600',
  },
  // 성공 화면 스타일
  successSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  successIconText: {
    fontSize: 40,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  successSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  inviteCodeSection: {
    marginBottom: 30,
  },
  inviteCodeLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  inviteCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  inviteCodeText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    letterSpacing: 2,
  },
  copyButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 12,
  },
  copyButtonText: {
    color: colors.textDark,
    fontSize: 14,
    fontWeight: '600',
  },
  inviteCodeHint: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  continueButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    color: colors.textDark,
    fontSize: 16,
    fontWeight: '600',
  },
}); 