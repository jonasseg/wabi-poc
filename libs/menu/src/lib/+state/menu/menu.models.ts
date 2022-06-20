/**
 * Interface for the 'Menu' data
 */
export interface MenuEntity {
  id: number;
  name: string;
  parentId: number | null;
  child: MenuEntity[];
}
