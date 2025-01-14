import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Talk } from '../types';

interface Store {
  favoriteTalks: string[];
  addFavoriteTalk: (talkId: string) => void;
  removeFavoriteTalk: (talkId: string) => void;
  notifications: boolean;
  toggleNotifications: () => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      favoriteTalks: [],
      addFavoriteTalk: (talkId) =>
        set((state) => ({
          favoriteTalks: [...state.favoriteTalks, talkId],
        })),
      removeFavoriteTalk: (talkId) =>
        set((state) => ({
          favoriteTalks: state.favoriteTalks.filter((id) => id !== talkId),
        })),
      notifications: true,
      toggleNotifications: () =>
        set((state) => ({ notifications: !state.notifications })),
    }),
    {
      name: 'qed-conference-storage',
    }
  )
);