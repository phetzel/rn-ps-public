import { SituationType, SituationData } from "~/types";
import { internetCurfewProposalPreferences } from "./internetCurfewProposalPreferences";
import { internetCurfewProposalOutcomes } from "./internetCurfewProposalOutcomes";
import { internetCurfewProposalExchanges } from "./internetCurfewProposalExchanges";

export const internetCurfewProposal: SituationData = {
  trigger: {
    staticKey: "internet_curfew_proposal",
    type: SituationType.DomesticPolicy,
    requirements: {}, // any time
  },
  type: SituationType.DomesticPolicy,
  title: "Internet Curfew Proposal",
  description:
    "President floats nightly 10 p.m. internet shutdown to ‘boost sleep,’ prompting privacy fury and late-night meme rebellions.",
  content: {
    preferences: internetCurfewProposalPreferences,
    outcomes: internetCurfewProposalOutcomes,
  },
  exchanges: internetCurfewProposalExchanges,
};
