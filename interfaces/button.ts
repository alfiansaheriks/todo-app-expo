import { Ionicons } from "@expo/vector-icons";

export interface IconButtonProps {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  iconSize: number;
  className?: string;
}

export interface ActionButtonProps {
  action: string;
  onPress: () => void;
  isLoading?: boolean;
  className?: string;
}
