export interface ResourceItemProps {
  /**
   * Title of the resource item
   */
  title: string;

  /**
   * Description of the resource item
   */
  description?: string;

  /**
   * Icon name to use for the avatar.
   */
  avatarIcon?: string;

  /**
   * Text to place in the avatar
   */
  avatarText?: string;

  /**
   * Image URL to use for the avatar
   */
  avatarImage?: string;

  /**
   * When set to `true`, the item is selectable
   */
  selectable?: boolean;

  /**
   * if `true`, the item is selected
   */
  selected?: boolean;

  /**
   * Emitted when user click on it, only if `selectable` equals `true`
   */
  onSelect?: (event: React.MouseEvent) => void;
}
