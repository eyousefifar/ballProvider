export interface backButtonProps {
  onPress?: () => void;
}
export interface fullHeaderProps {
  drawBehind: boolean;
  title: string;
  onPress?: () => void;
  backgroundColor?: 'white' | 'primary' | 'transparent';
}
export interface headerProps {
  title: string;
  mode: 'fullWidth' | 'backButton';
  drawBehind: boolean;
  backgroundColor?: 'white' | 'primary' | 'transparent';
  onPress?: () => void;
}
