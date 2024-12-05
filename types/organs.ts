export const ORGAN_IDS = ['brain', 'heart', 'lungs', 'liver', 'kidneys', 'stomach'] as const;
export type OrganId = typeof ORGAN_IDS[number];

export interface OrganInfo {
  title: string;
  description: string;
  functions: string[];
}

export interface OrganData {
  id: OrganId;
  src: string;
  alt: string;
  position: string;
  width: string;
}
