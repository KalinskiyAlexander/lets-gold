export interface IIconsProps {
  type: typeIcons;
  classes: {
    width: number;
    height: number;
  };
  color?: string;
}

export type typeIcons =
  | 'logo'
  | 'user'
  | string;

export interface IIconProps {
  width: number;
  height: number;
  color?: string;
}
