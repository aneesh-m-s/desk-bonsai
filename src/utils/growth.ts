import type { GrowthStage } from "../types/plant";

export function getGrowthStage(xp: number): GrowthStage {
  if (xp >= 500) {
    return "bloom";
  }

  if (xp >= 300) {
    return "mature";
  }

  if (xp >= 150) {
    return "young";
  }

  if (xp >= 50) {
    return "sapling";
  }

  return "sprout";
}