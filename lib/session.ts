'use client';

import { v4 as uuidv4 } from 'uuid';

const SESSION_KEY = 'research_rag_user_id';

/**
 * Gets or creates a unique session identifier for the current user.
 * This is stored in localStorage to persist across refreshes.
 */
export function getOrCreateUserId(): string {
  if (typeof window === 'undefined') return '';
  
  let userId = localStorage.getItem(SESSION_KEY);
  
  if (!userId) {
    userId = `user_${uuidv4()}`;
    localStorage.setItem(SESSION_KEY, userId);
  }
  
  return userId;
}

/**
 * Returns the headers needed for API requests to support multi-tenancy.
 */
export function getAuthHeaders() {
  const userId = getOrCreateUserId();
  return {
    'X-User-Id': userId,
    'Content-Type': 'application/json',
  };
}
