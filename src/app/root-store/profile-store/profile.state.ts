import { Profile } from '../../models/profile';

export interface ProfileState {
  current: Profile | null;
  isLoading: boolean;
  error: string;
}

export const initialState: ProfileState = {
  current: null,
  isLoading: false,
  error: null
};
