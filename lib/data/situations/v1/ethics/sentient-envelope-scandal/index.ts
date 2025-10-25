import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { sentientEnvelopeScandalOutcomes } from "./sentientEnvelopeScandalOutcomes";
import { sentientEnvelopeScandalPreferences } from "./sentientEnvelopeScandalPreferences";
import { sentientEnvelopeScandalExchanges } from "./exchanges";

export const sentientEnvelopeScandal: SituationDataType = {
  trigger: {
    staticKey: "sentient-envelope-scandal",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Sentient Envelope Scandal",
  description: "A sentient thank-you envelope filed an ethics complaint after gifting Cabinet members, prompting leaks and legal fights over whether stationery can testify.",
  content: {
    outcomes: sentientEnvelopeScandalOutcomes,
    preferences: sentientEnvelopeScandalPreferences,
  },
  exchanges: sentientEnvelopeScandalExchanges,
};
