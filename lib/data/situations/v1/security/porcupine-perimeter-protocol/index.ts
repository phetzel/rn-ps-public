import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { porcupinePerimeterProtocolOutcomes } from "./porcupinePerimeterProtocolOutcomes";
import { porcupinePerimeterProtocolPreferences } from "./porcupinePerimeterProtocolPreferences";
import { porcupinePerimeterProtocolExchanges } from "./exchanges";

export const porcupinePerimeterProtocol: SituationDataType = {
  trigger: {
    staticKey: "porcupine-perimeter-protocol",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Porcupine Perimeter Protocol",
  description: "White House unveils 'Porcupine Perimeter Protocol'—armored, GPS-tracked porcupines to guard bridges and data centers amid a spat over tiny helmets and funding.",
  content: {
    outcomes: porcupinePerimeterProtocolOutcomes,
    preferences: porcupinePerimeterProtocolPreferences,
  },
  exchanges: porcupinePerimeterProtocolExchanges,
};
