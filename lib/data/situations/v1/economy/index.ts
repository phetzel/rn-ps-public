import type { SituationDataType } from "~/lib/schemas/situations";
import { nationalMonopolonBailout } from "./national-monopolon-bailout";
import { robotTaxDebate } from "./robot-tax-debate";
import { strategicCoffeeReserve } from "./strategic-coffee-reserve";
import { treasuryAuctionsImaginaryGdp } from "./treasury-auctions-imaginary-gdp";
import { treasuryLaunchesNostalgiaCoin } from "./treasury-launches-nostalgia-coin";
import { treasurySellsHappinessBonds } from "./treasury-sells-happiness-bonds";
import { treasuryTiesPricesToMood } from "./treasury-ties-prices-to-mood";

export const economySituationsData: SituationDataType[] = [
  nationalMonopolonBailout,
  robotTaxDebate,
  strategicCoffeeReserve,
  treasuryAuctionsImaginaryGdp,
  treasuryLaunchesNostalgiaCoin,
  treasurySellsHappinessBonds,
  treasuryTiesPricesToMood,
];
