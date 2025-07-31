/**
 * colors.ts - 앱 전체 색상 테마 정의
 * 
 * 기능:
 * - 앱 전체에서 일관된 색상을 사용하기 위한 중앙 집중식 색상 관리
 * - 다크/라이트 모드 대응을 위한 색상 체계
 * - 브랜드 아이덴티티를 반영한 색상 팔레트
 * 
 * 색상 구성:
 * - primary: 메인 브랜드 색상 (따뜻한 오렌지)
 * - secondary: 보조 브랜드 색상 (골드 노랑)
 * - background: 앱 배경색 (흰색)
 * - card: 카드 배경색 (흰색)
 * - text: 기본 텍스트 색상 (진한 회색)
 * - textSecondary: 보조 텍스트 색상 (회색)
 * - textDark: 어두운 배경의 텍스트 색상 (흰색)
 * - border: 테두리 색상 (연한 회색)
 * - success: 성공 상태 색상 (초록색)
 * - error: 에러 상태 색상 (빨간색)
 * - warning: 경고 상태 색상 (주황색)
 * 
 * 사용법:
 * - 모든 컴포넌트에서 이 색상 객체를 import하여 사용
 * - 새로운 색상 추가 시 이 파일에 정의
 * - 브랜드 색상 변경 시 이 파일만 수정하면 전체 앱에 반영
 */

export const colors = {
  // Primary colors - 따뜻한 오렌지/노랑 톤
  primary: '#FF8C42', // 따뜻한 오렌지
  primaryLight: '#FFB366', // 밝은 오렌지
  primaryDark: '#E67E22', // 진한 오렌지
  
  // Secondary colors
  secondary: '#FFD700', // 골드 노랑
  secondaryLight: '#FFF2CC', // 밝은 노랑
  
  // Background colors
  background: '#FFFFFF',
  backgroundDark: '#1A1A1A',
  
  // Text colors
  text: '#333333',
  textDark: '#FFFFFF',
  textSecondary: '#666666',
  textSecondaryDark: '#CCCCCC',
  
  // Status colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  
  // Border colors
  border: '#E0E0E0',
  borderDark: '#404040',
  
  // Card colors
  card: '#FFFFFF',
  cardDark: '#2A2A2A',
  
  // Shadow colors
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowDark: 'rgba(0, 0, 0, 0.3)',
};

export const gradients = {
  primary: ['#FF8C42', '#FFB366'],
  secondary: ['#FFD700', '#FFF2CC'],
  warm: ['#FF8C42', '#FFD700'],
}; 