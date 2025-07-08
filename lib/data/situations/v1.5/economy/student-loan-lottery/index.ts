import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { studentLoanLotteryOutcomes } from "./studentLoanLotteryOutcomes";
import { studentLoanLotteryPreferences } from "./studentLoanLotteryPreferences";
import { studentLoanLotteryExchanges } from "./exchanges";

export const studentLoanLottery: SituationData = {
  trigger: {
    staticKey: "student_loan_lottery",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Student Loan Lottery",
  description:
    "Administration launches a debt-forgiveness lottery, sparking hope for winners and outrage over 'tuition bingo.'",
  content: {
    outcomes: studentLoanLotteryOutcomes,
    preferences: studentLoanLotteryPreferences,
  },
  exchanges: studentLoanLotteryExchanges,
};
