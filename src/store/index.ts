import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PopupState {
  hasSubmitted: boolean
  setHasSubmitted: (value: boolean) => void
}

export const usePopupStore = create<PopupState>()(
  persist(
    (set) => ({
      hasSubmitted: false,
      setHasSubmitted: (value) => set({ hasSubmitted: value }),
    }),
    {
      name: 'popup-storage',
    }
  )
)