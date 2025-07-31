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
  Welcome: undefined;
  CreateFamily: undefined;
  JoinFamily: undefined;
  Main: undefined;
}; 