export type GrowthStage =
  | "sprout"
  | "sapling"
  | "young"
  | "mature"
  | "bloom";

export interface PlantState {
  xp: number;
  stage: GrowthStage;
  focusMinutes: number;
}