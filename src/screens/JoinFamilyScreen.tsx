/**
 * JoinFamilyScreen - 가족 참여 화면
 * 
 * 기능:
 * - 기존 가족 그룹에 초대 코드를 통해 참여하는 화면
 * - 초대 코드, 사용자 이름, 질문 도착 시간, 역할 선택
 * - 초대 코드 유효성 검증
 * 
 * 로직:
 * - 사용자가 초대 코드와 자신의 정보를 입력
 * - 질문 도착 시간과 역할을 드롭다운으로 선택
 * - 모든 필수 필드 입력 후 가족 참여 버튼 클릭
 * - 서버에서 초대 코드 유효성을 검증하고 가족에 추가
 * - 참여 완료 후 MainScreen으로 이동
 * 
 * 백엔드 연동 필요:
 * - 가족 참여 API (/families/join)
 * - 초대 코드 유효성 검증
 * - 중복 참여 방지 (이미 해당 가족에 속한 사용자)
 * - 가족 멤버 정보 데이터베이스 저장
 */

// React Native 기본 라이브러리
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

// 프로젝트 내부 모듈
import { colors } from '../constants/colors'; // 색상 테마
import { StackNavigationProp } from '@react-navigation/stack'; // 네비게이션 타입
import { RootStackParamList } from '../types'; // 네비게이션 스택 타입 정의
import { Dropdown } from '../components/Dropdown'; // 드롭다운 컴포넌트

// 네비게이션 타입 정의 (JoinFamily 화면에서 사용할 네비게이션 함수들의 타입)
type JoinFamilyScreenNavigationProp = StackNavigationProp<RootStackParamList, 'JoinFamily'>;

// 컴포넌트 Props 인터페이스 정의
interface JoinFamilyScreenProps {
  navigation: JoinFamilyScreenNavigationProp; // 네비게이션 객체
}

export const JoinFamilyScreen: React.FC<JoinFamilyScreenProps> = ({ navigation }) => {
  const [inviteCode, setInviteCode] = useState('');
  const [memberName, setMemberName] = useState('');
  const [questionTime, setQuestionTime] = useState('12:34');
  const [familyRole, setFamilyRole] = useState('');

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

  const handleJoinFamily = () => {
    if (!inviteCode.trim() || !memberName.trim() || !familyRole) {
      Alert.alert('알림', '모든 필드를 입력해주세요.');
      return;
    }

    // ===== 백엔드 개발자 작업 필요 =====
    // 1. 초대 코드 검증 API 호출 (/families/join)
    // 2. 서버에서 초대 코드 유효성 검사
    // 3. 가족 정보 조회 및 멤버 추가
    // 4. 중복 참여 방지 (이미 해당 가족에 속한 사용자)
    // 5. 에러 처리 (잘못된 초대 코드, 만료된 코드, 네트워크 오류 등)
    // 6. 성공 시 Main 화면으로 이동, 실패 시 에러 메시지
    // =================================

    // 임시 성공 처리 (백엔드 연동 후 제거)
    Alert.alert(
      '가족 참여 완료!',
      '가족 그룹에 성공적으로 참여했습니다. (백엔드 연동 후 실제 검증이 이루어집니다)',
      [
        {
          text: '확인',
          onPress: () => navigation.navigate('Main')
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← 뒤로</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>가족 참여하기</Text>
        <View style={{ width: 50 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>초대코드</Text>
          <TextInput
            style={styles.input}
            placeholder="초대 코드를 입력하세요"
            value={inviteCode}
            onChangeText={setInviteCode}
            placeholderTextColor={colors.textSecondary}
            autoCapitalize="characters"
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

        <TouchableOpacity style={styles.joinButton} onPress={handleJoinFamily}>
          <Text style={styles.joinButtonText}>가족 참여하기</Text>
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
  joinButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  joinButtonText: {
    color: colors.textDark,
    fontSize: 16,
    fontWeight: '600',
  },
}); 