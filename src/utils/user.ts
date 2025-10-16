// 사용자 ID 관리 유틸리티
const USER_ID_KEY = 'fall-sports-user-id';

export const getCurrentUserId = (): string => {
  let userId = localStorage.getItem(USER_ID_KEY);
  
  if (!userId) {
    // 새로운 사용자 ID 생성 (랜덤 + 타임스탬프)
    userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem(USER_ID_KEY, userId);
  }
  
  return userId;
};

export const resetUserId = (): string => {
  const newUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  localStorage.setItem(USER_ID_KEY, newUserId);
  return newUserId;
};
