/**
 * types/index.ts - 앱 전체에서 사용하는 TypeScript 타입 정의
 * 
 * 기능:
 * - 모든 컴포넌트와 화면에서 사용하는 타입들을 중앙 집중식으로 관리
 * - 네비게이션 스택의 타입 정의
 * - 데이터 모델의 인터페이스 정의
 * 
 * 주요 타입들:
 * - Family: 가족 정보 (가족 ID, 이름, 초대 코드, 멤버 목록, 생성일)
 * - FamilyMember: 가족 구성원 정보 (ID, 이름, 역할, 가족 역할, 참여일)
 * - DailyQuestion: 일일 질문 정보 (ID, 질문 내용, 날짜, 타입)
 * - Answer: 답변 정보 (ID, 질문 ID, 멤버 ID, 내용, 생성일)
 * - FamilyGallery: 가족 갤러리 정보 (가족 ID, 이미지 목록)
 * - GalleryImage: 갤러리 이미지 정보 (ID, URL, 멤버 ID, 생성일, 설명)
 * - RootStackParamList: 네비게이션 스택의 화면별 파라미터 타입 정의
 * 
 * 백엔드 연동 시 고려사항:
 * - 데이터베이스 스키마와 일치하도록 타입 수정 필요
 * - API 응답 형태에 맞게 타입 조정 필요
 * - 실시간 데이터 업데이트를 위한 타입 확장 고려
 */

export interface Family {
  id: string;
  name: string;
  inviteCode: string;
  members: FamilyMember[];
  createdAt: Date;
}

export interface FamilyMember {
  id: string;
  name: string;
  role: 'parent' | 'child';
  familyRole: 'mother' | 'father' | 'daughter' | 'son';
  joinedAt: Date;
}

export interface DailyQuestion {
  id: string;
  question: string;
  date: string;
  type: 'text' | 'image';
}

export interface Answer {
  id: string;
  questionId: string;
  memberId: string;
  content: string;
  createdAt: Date;
}

export interface FamilyGallery {
  id: string;
  familyId: string;
  images: GalleryImage[];
}

export interface GalleryImage {
  id: string;
  url: string;
  memberId: string;
  createdAt: Date;
  description?: string;
}

export type RootStackParamList = {
  Welcome1: undefined;
  Welcome2: undefined;
  CreateFamily: undefined;
  JoinFamily: undefined;
  Main: undefined;
  Answer: {
    question: string;
  };
}; 