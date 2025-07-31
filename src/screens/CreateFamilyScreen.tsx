/**
 * CreateFamilyScreen - 가족 생성 화면
 * 
 * 기능:
 * - 새로운 가족 그룹을 생성하는 화면
 * - 가족 이름, 사용자 이름, 역할(부모/자녀), 세부 역할(엄마/아빠/딸/아들) 입력
 * - 고유한 초대 코드 생성 및 표시
 * 
 * 로직:
 * - 사용자가 가족 이름과 자신의 정보를 입력
 * - 역할 선택에 따라 세부 역할 옵션이 동적으로 변경
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

// 네비게이션 타입 정의 (CreateFamily 화면에서 사용할 네비게이션 함수들의 타입)
type CreateFamilyScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateFamily'>;

// 컴포넌트 Props 인터페이스 정의
interface CreateFamilyScreenProps {
  navigation: CreateFamilyScreenNavigationProp; // 네비게이션 객체
}

export const CreateFamilyScreen: React.FC<CreateFamilyScreenProps> = ({ navigation }) => {
  const [familyName, setFamilyName] = useState('');
  const [memberName, setMemberName] = useState('');
  const [role, setRole] = useState<'parent' | 'child'>('parent');
  const [familyRole, setFamilyRole] = useState<'mother' | 'father' | 'daughter' | 'son'>('mother');

  const generateInviteCode = () => {
    // ===== 백엔드 개발자 작업 필요 =====
    // 서버에서 고유한 초대 코드 생성 로직
    // return Math.random().toString(36).substring(2, 8).toUpperCase();
    // =================================
    
    // 임시 초대 코드 (백엔드 연동 후 제거)
    return 'ABC123';
  };

  const handleCreateFamily = () => {
    if (!familyName.trim() || !memberName.trim()) {
      Alert.alert('알림', '모든 필드를 입력해주세요.');
      return;
    }

    // ===== 백엔드 작업 필요 =====
    // 1. 가족 생성 API 호출 (/families/create)
    // 2. 서버에서 고유한 초대 코드 생성
    // 3. 가족 정보와 멤버 정보를 데이터베이스에 저장
    // 4. 생성된 초대 코드를 응답으로 받아서 표시
    // 5. 에러 처리 (중복된 가족명, 네트워크 오류 등)
    // 6. 성공 시 Main 화면으로 이동
    // =================================

    // 임시 성공 처리 (백엔드 연동 후 제거)
    Alert.alert(
      '가족 생성 완료!',
      '초대 코드: ABC123\n\n이 코드를 가족 구성원들에게 공유해주세요. (백엔드 연동 후 실제 코드가 생성됩니다)',
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
        <Text style={styles.headerTitle}>가족 만들기</Text>
        <View style={{ width: 50 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>가족 정보</Text>
          <TextInput
            style={styles.input}
            placeholder="가족 이름을 입력하세요"
            value={familyName}
            onChangeText={setFamilyName}
            placeholderTextColor={colors.textSecondary}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>내 정보</Text>
          <TextInput
            style={styles.input}
            placeholder="내 이름을 입력하세요"
            value={memberName}
            onChangeText={setMemberName}
            placeholderTextColor={colors.textSecondary}
          />
          
          <View style={styles.roleContainer}>
            <Text style={styles.roleLabel}>역할 선택:</Text>
            <View style={styles.roleButtons}>
              <TouchableOpacity
                style={[styles.roleButton, role === 'parent' && styles.roleButtonActive]}
                onPress={() => {
                  setRole('parent');
                  setFamilyRole('mother');
                }}
              >
                <Text style={[styles.roleButtonText, role === 'parent' && styles.roleButtonTextActive]}>
                  부모님
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.roleButton, role === 'child' && styles.roleButtonActive]}
                onPress={() => {
                  setRole('child');
                  setFamilyRole('daughter');
                }}
              >
                <Text style={[styles.roleButtonText, role === 'child' && styles.roleButtonTextActive]}>
                  자녀
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {role === 'parent' && (
            <View style={styles.familyRoleContainer}>
              <Text style={styles.familyRoleLabel}>구체적인 역할:</Text>
              <View style={styles.familyRoleButtons}>
                <TouchableOpacity
                  style={[styles.familyRoleButton, familyRole === 'mother' && styles.familyRoleButtonActive]}
                  onPress={() => setFamilyRole('mother')}
                >
                  <Text style={[styles.familyRoleButtonText, familyRole === 'mother' && styles.familyRoleButtonTextActive]}>
                    엄마
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.familyRoleButton, familyRole === 'father' && styles.familyRoleButtonActive]}
                  onPress={() => setFamilyRole('father')}
                >
                  <Text style={[styles.familyRoleButtonText, familyRole === 'father' && styles.familyRoleButtonTextActive]}>
                    아빠
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {role === 'child' && (
            <View style={styles.familyRoleContainer}>
              <Text style={styles.familyRoleLabel}>구체적인 역할:</Text>
              <View style={styles.familyRoleButtons}>
                <TouchableOpacity
                  style={[styles.familyRoleButton, familyRole === 'daughter' && styles.familyRoleButtonActive]}
                  onPress={() => setFamilyRole('daughter')}
                >
                  <Text style={[styles.familyRoleButtonText, familyRole === 'daughter' && styles.familyRoleButtonTextActive]}>
                    딸
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.familyRoleButton, familyRole === 'son' && styles.familyRoleButtonActive]}
                  onPress={() => setFamilyRole('son')}
                >
                  <Text style={[styles.familyRoleButtonText, familyRole === 'son' && styles.familyRoleButtonTextActive]}>
                    아들
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.createButton} onPress={handleCreateFamily}>
          <Text style={styles.createButtonText}>가족 만들기</Text>
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
  roleContainer: {
    marginTop: 16,
  },
  roleLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  roleButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  roleButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  roleButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  roleButtonText: {
    fontSize: 14,
    color: colors.text,
  },
  roleButtonTextActive: {
    color: colors.textDark,
    fontWeight: '600',
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
  familyRoleContainer: {
    marginTop: 16,
  },
  familyRoleLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  familyRoleButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  familyRoleButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  familyRoleButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  familyRoleButtonText: {
    fontSize: 14,
    color: colors.text,
  },
  familyRoleButtonTextActive: {
    color: colors.textDark,
    fontWeight: '600',
  },
}); 