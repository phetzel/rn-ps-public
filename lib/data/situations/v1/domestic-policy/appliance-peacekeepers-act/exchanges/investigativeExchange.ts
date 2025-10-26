import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const investigativeExchange: ExchangeData = {
  publication: PublicationStaticId.Investigative,
  content: {
    rootQuestion: {
      id: "q_root",
      text: "Appliance Peacekeepers will referee toaster and lawn quarrels; who profits from training contracts, and what living-room data do mediators collect and store?",
      answers: [
        {
          id: "a_root_1",
          text: "If I can turn a toaster standoff into a handshake, that is not small - it is practice for bigger, messier things. We are building muscle memory for civility, one extension cord at a time.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Framing spats as leadership plays boosts my presence."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Overreach optics creep into suburban diplomacy."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This angle risks blurring vets with enforcement."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Funding comes through the Household Harmony pilot, competitively bid with public scoring. Trainers are accredited by the Boundary Bureau, and the curriculum, including leaf-blower etiquette, is posted for audit.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Detail focus mutes the spectacle I thrive on."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear facts let us legitimize household truces."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Specifics may drag us into gear debates."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "No one is cashing secret checks off your sprinklers, and we are not hoovering living-room audio. Data is minimal and consent-based; the only thing we harvest is eye-rolls and whether the toast got burnt.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Flat denial weakens my performance narrative."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dismissal undercuts our mapping credibility."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "This safeguards our referees from militarization."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "We are not launching Shock and Hedge on your begonias. Let us judge the program by fewer 9 p.m. mower meltdowns, not by the number of acronyms in the binder.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Deflection shrinks the stage I prefer."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Evasion erodes trust in neighborhood treaties."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Light tone keeps vets out of combat framing."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Procurement files show bundles labeled 'Leaf Blower Rules of Engagement.' Who wrote the curriculum, and did donors' firms land teaching slots?",
        answers: [
          {
            id: "a_sec1_1",
            text: "The curriculum was drafted by the Civic Mediation Institute with input from the Department of Neighborly Affairs, not donors. Scoring excluded bidders tied to contributions, and reviewers were disclosed.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk dulls the conflict spotlight I use."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Transparency strengthens our neighborhood doctrine."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It hints at us micromanaging leaf blowers."
                }
              }
            }
          },
          {
            id: "a_sec1_2",
            text: "The fixation on donor bingo misses the headline: the rules teach 'ask before blast' and 'mower curfew.' If a firm meets standards and keeps the peace, we will not apologize for competence.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A sharp pivot lets me own the controversy."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Confrontation muddies our neutral educator role."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Aggressive tone risks implying coercion."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "From defense: we did not write leaf-blower ROEs, and we do not pick vendors. Our role is training de-escalation, not procurement theater. For scope and guardrails, we will brief further.",
            type: AnswerType.Authorized,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Handing the mic over dims my central role."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It sidelines us from the curriculum narrative."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Authorized clarity distances us from ROEs."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Defense,
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_4",
            text: "It says 'rules' because 'friendly suggestions that work' did not fit the spreadsheet cell. The only thing tactical here is how to avoid passive-aggressive lawn stripes.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes reduce the drama I can command."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Levity weakens serious standards we set."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor lowers fears of militarized lingo."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Mediators file digital 'incident logs'; what details get logged, who can access them, and will neighbors be ranked like cable boxes?",
        answers: [
          {
            id: "a_sec2_1",
            text: "No household is getting a social credit score for hedge symmetry. Logs capture the dispute type, what steps were offered, and whether both parties consented - no appliance serial numbers, no snooping.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Denial blunts any grand stagecraft I could use."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pure denial sidesteps needed data protocols."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Firmly decouples vets from surveillance roles."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "Yes, there is metadata - time, place, anonymized issue tags - to spot hotspots like the 7 a.m. blower crowd. That visibility lets us target outreach, and we purge personal notes after resolution.",
            type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting details constrains my showmanship."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Candor builds credibility for guardrails."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It risks implying we hoard household data."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "Access is tiered: mediators see case notes; oversight sees aggregates; and residents can request their file. Protocols mirror neighborhood accords, not spy playbooks, and we are codifying them next.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clarity lets me claim orderly oversight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Technical gating can read as bureaucratic."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Tiered access still looks programmatic."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_4",
            text: "If your living room feels like a fishbowl, that is a fail. We built the system to default to less: fewer fields, shorter retention, more transparency, and a human to fix mistakes fast.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comforting tones sap my dramatic arc."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance without specs dilutes authority."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calm framing keeps vets out of blame."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter1",
        text: "Veterans lead many teams; are they peace refs or covert appliance cops, and how will the program prevent a mission creep from toasters to power grids?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Veterans are not appliance cops; they are coaches for calm. No weapons, no arrests, and no authority beyond what neighbors invite. Mission creep is blocked by scope rules and public dashboards.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial reduces my crisis canvas."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It minimizes our diplomatic framing of roles."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Affirms referee status over policing optics."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We are pairing lived experience with mediation ethics, so the vibe is whistle, not siren. If a toaster tiff smells like something bigger, the right agency gets a call, not a power grab.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soothing notes dull my headline moment."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Warmth without policy can read as fluff."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strongly separates vets from enforcement."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "The charter limits activity to civil noise, clutter, and shared-space disputes, reviewed quarterly by an independent board. Any expansion requires public notice and a fresh vote.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Rules language spotlights disciplined leadership."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rigid limits can box in neighborhood diplomacy."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hard lines invite questions on mission creep."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "If we cannot trust vets to call a timeout on a leaf-blower blitz, who can we trust? They have seen worse than lawn drama and know the difference between firm and force.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "A challenge posture lets me dramatize success."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rhetoric may eclipse our careful doctrine."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Bold tone risks tactical misconceptions."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "State-led diplomacy now includes lawn borders; what treaties govern fence lines, and will foreign-style protocols be absurdly applied to cul-de-sacs?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Fence-line etiquette borrows from pocket compacts: agree on boundaries, define quiet hours, and write an exit ramp. No one is air-dropping translators to the cul-de-sac without consent.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Policy nuance trims my chance to perform."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Applied compacts legitimize our lane."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Precision could be read as rigid rules."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "We tried to stamp 'Summit' on the driveway, but the podium sank into the mulch. Reality check: it is two neighbors, two chairs, and a laminated map of the hedge.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection cedes the spotlight I seek."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It weakens our seriousness on norms."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lightness softens fears of overreach."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "Protocols exist to lower the temperature, not to cosplay geopolitics. If a checklist makes it easier to apologize for the wandering rake, that is the only treaty you will notice.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurance drains narrative tension I use."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort talk without terms blurs doctrine."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Gentle tone avoids enforcement framing."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "Sure, some language sounds grand - 'memorandum of mowing' made us laugh too - but the effect is simple: fewer fights, clearer norms, and faster exits when people want out.",
            type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting excess undercuts my authority image."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning flaws helps refine neighborhood practice."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It hints we once blurred lines on roles."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
