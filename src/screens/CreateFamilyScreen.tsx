import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { colors } from '../constants/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type CreateFamilyScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateFamily'>;

interface CreateFamilyScreenProps {
  navigation: CreateFamilyScreenNavigationProp;
}

export const CreateFamilyScreen: React.FC<CreateFamilyScreenProps> = ({ navigation }) => {
  const [familyName, setFamilyName] = useState('');
  const [memberName, setMemberName] = useState('');
  const [role, setRole] = useState<'parent' | 'child'>('parent');

  const generateInviteCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleCreateFamily = () => {
    if (!familyName.trim() || !memberName.trim()) {
      Alert.alert('알림', '모든 필드를 입력해주세요.');
      return;
    }

    const inviteCode = generateInviteCode();
    Alert.alert(
      '가족 생성 완료!',
      `초대 코드: ${inviteCode}\n\n이 코드를 가족 구성원들에게 공유해주세요.`,
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
                onPress={() => setRole('parent')}
              >
                <Text style={[styles.roleButtonText, role === 'parent' && styles.roleButtonTextActive]}>
                  부모님
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.roleButton, role === 'child' && styles.roleButtonActive]}
                onPress={() => setRole('child')}
              >
                <Text style={[styles.roleButtonText, role === 'child' && styles.roleButtonTextActive]}>
                  자녀
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
}); 