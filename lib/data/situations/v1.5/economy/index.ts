import { SituationData } from "~/types";
import { bridgeToNowhere } from "~/lib/data/situations/v1.5/economy/bridge-to-nowhere";
import { robotTaxDebate } from "~/lib/data/situations/v1.5/economy/robot-tax-debate";
import { nationalNapProductivityAct } from "~/lib/data/situations/v1.5/economy/national-nap-productivity-act";
import { strategicCoffeeReserve } from "~/lib/data/situations/v1.5/economy/strategic-coffee-reserve";
import { memeStockFederalReserve } from "~/lib/data/situations/v1.5/economy/meme-stock-federal-reserve";
import { studentLoanLottery } from "~/lib/data/situations/v1.5/economy/student-loan-lottery";
import { freedomcoinCurrencyPlan } from "~/lib/data/situations/v1.5/economy/freedomcoin-currency-plan";

export const economySituationsData: SituationData[] = [
  bridgeToNowhere,
  robotTaxDebate,
  nationalNapProductivityAct,
  strategicCoffeeReserve,
  memeStockFederalReserve,
  studentLoanLottery,
  freedomcoinCurrencyPlan,
];
