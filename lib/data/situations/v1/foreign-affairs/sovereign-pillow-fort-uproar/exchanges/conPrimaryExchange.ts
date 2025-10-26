import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const conPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.ConPrimary,
  content: {
    rootQuestion: {
      id: "q_root",
      text: "With an envoy planting a 'sovereign' pillow‑fort on the disputed Toylet Isles, are you ordering escorts, a blockade, or a very public fort‑off?",
      answers: [
        {
          id: "a1",
          text: "We’re not surrendering one beanbag of sea room. I’m inviting their fort to a public, rules‑based fort‑off while our escorts keep lanes open and the swagger tasteful.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "He projects resolve with a public show of strength."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They fear stretched escorts and accidental escalation."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They worry this undercuts treaty‑based objections."
              }
            }
          }
        },
        {
          id: "a2",
          text: "Our navy will keep plush navigation free with a lullaby‑level presence and strict discipline. Beanbag convoys get escorts, but nobody’s tossing couch cushions across bows today.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He resists rigid promises that reduce flexibility."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "They gain time and presence to manage the corridor safely."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They fear recognition creep and legal contradictions."
              }
            }
          }
        },
        {
          id: "a3",
          text: "Under the Soft Accords, sovereignty needs a duvet referendum and three fluff stamps; this fort has none. Recognition isn’t on the table, and proportionate plush penalties are.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He dislikes telegraphing moves before allies align."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They warn it complicates deconfliction at sea."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "They can leverage treaty language to shape outcomes."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a4",
          text: "Authorized from Defense: Task Puffin fields layered escorts at first light, foam cutters forward and a lint‑sweeper overwatch. Rendezvous grids are weather‑flexible but firm.",
          type: AnswerType.Authorized,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He worries this overcommits without clear legal cover."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "They dislike public gambits that box in commanders."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "They favor lawful steps that build a coalition."
              }
            }
          },
          authorizedCabinetMemberId: CabinetStaticId.Defense,
          followUpId: "q_sec1"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "What’s the defense posture in the Beanbag Belt: continuous escort for plush freighters, pre‑positioned foam, or just stern looks from the pier?",
        answers: [
          {
            id: "a5",
            text: "Escort cadence stays steady‑but‑soft: two puffs on, one puff off; no ramming, boarding, or bravado. The message is calm capability, not couch wars, and lanes stay open.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He prefers restraint over performative theater."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They welcome clear rules and limited objectives."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They see diplomatic costs and fractured messaging."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a6",
            text: "If they play blockade games, we’ll steam through on camera and challenge them to a neutral‑sand fort‑off. Show strength, not splinters, and keep the puns nautical.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He signals readiness to push back against provocations."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They see logistics strain and unclear end states."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They warn rhetoric could alienate key partners."
                }
              }
            }
          },
          {
            id: "a7",
            text: "I won’t choreograph maneuvers from a podium; last time we crowdsourced tactics, we trended and then grounded on a pool noodle. Let captains captain, please.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He avoids entanglement in unwinnable spectacle."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear stretched escorts and accidental escalation."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They welcome process that preserves recognition leverage."
                }
              }
            }
          },
          {
            id: "a8",
            text: "Rules of plush engagement bar the first toss. Escorts will hail, log, and deconflict lanes, with foam drones mapping drift and squeak‑buoys tracing safe corridors.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He resists rigid promises that reduce flexibility."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They warn it complicates deconfliction at sea."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They can leverage treaty language to shape outcomes."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "State says plush treaties require a duvet referendum and three fluff stamps; will you deny recognition now or convene the Velvet Council first?",
        answers: [
          {
            id: "a9",
            text: "Recognition requires a pillow census, duvet referendum, and tri‑stamped fluff. We’ve notified all sides the fort is decorative, not diplomatic, and we’re moving accordingly.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes telegraphing moves before allies align."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They warn it complicates deconfliction at sea."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They welcome process that preserves recognition leverage."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a10",
            text: "We’re not legitimizing a unilateral fort with a velvet invite. No dais, no glitter pens, and no certificates for cosplay sovereignty this week.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He prefers restraint over performative theater."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They support firm deterrence with controlled risk."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear recognition creep and legal contradictions."
                }
              }
            }
          },
          {
            id: "a11",
            text: "Labels are free; consequences aren’t. We’ll use the label that keeps beanbags moving and tempers at simmer rather than boil, and we’ll change it if facts change.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He avoids entanglement in unwinnable spectacle."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They see logistics strain and unclear end states."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They favor lawful steps that build a coalition."
                }
              }
            }
          },
          {
            id: "a12",
            text: "If they want status, meet the people on the sand and win the turnout. Until then, it’s a pillow pile, not a polity, and we’re not pretending otherwise.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He projects resolve with a public show of strength."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear stretched escorts and accidental escalation."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They see diplomatic costs and fractured messaging."
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
        text: "If the fort declares a quilted no‑sail zone, do you risk a mattress skirmish, and are admirals ready despite goose‑down allergies?",
        answers: [
          {
            id: "a13",
            text: "Our crews drill for quilted theatrics. Filters for feathers, meds for dander, and clear rules keep tempers cooler than the mini‑fridge while we pass lawfully and visibly.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He resists rigid promises that reduce flexibility."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "They support firm deterrence with controlled risk."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry this undercuts treaty‑based objections."
                }
              }
            }
          },
          {
            id: "a14",
            text: "Yes, goose‑down makes some brass sniffle. That’s why we bought hypoallergenic covers, reassigned sneeze‑prone admirals to maps, and stocked ships with extra tissues.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes telegraphing moves before allies align."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They welcome clear rules and limited objectives."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They see diplomatic costs and fractured messaging."
                }
              }
            }
          },
          {
            id: "a15",
            text: "I won’t armchair‑admiral from here. The ocean’s bumpy, the fort’s lumpy, and the only sure thing is the email avalanche if I say one nautical verb too many.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He avoids entanglement in unwinnable spectacle."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They warn it complicates deconfliction at sea."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They can leverage treaty language to shape outcomes."
                }
              }
            }
          },
          {
            id: "a16",
            text: "There is no skirmish plan because we’re not planning a skirmish. We’re planning lawful passage, thorough documentation, and a very boring day at sea.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He worries this overcommits without clear legal cover."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They see logistics strain and unclear end states."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They favor lawful steps that build a coalition."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On sanctions, are we talking plush tariffs, stuffed‑animal freezes, and a cushion coalition, or symbolic scolding with decorative tassels?",
        answers: [
          {
            id: "a17",
            text: "Plush tariffs on boutique cushion imports and a freeze on novelty stuffed‑animal swaps are teed up. Partners in the Cozy Bloc are aligning fluff codes and timing.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He prefers restraint over performative theater."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They warn it complicates deconfliction at sea."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "They can leverage treaty language to shape outcomes."
                }
              }
            }
          },
          {
            id: "a18",
            text: "Any measures will hit the fort’s purse, not living rooms. We’ll keep the pressure firm, the beanbags moving, and the lullabies uninterrupted.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He resists rigid promises that reduce flexibility."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They gain time and presence to manage the corridor safely."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They see diplomatic costs and fractured messaging."
                }
              }
            }
          },
          {
            id: "a19",
            text: "We don’t preview embargo playlists. The last time we did, smugglers hid contraband in hollow ottomans with inspirational quotes and a pop‑up cupholder.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He avoids entanglement in unwinnable spectacle."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear stretched escorts and accidental escalation."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They welcome process that preserves recognition leverage."
                }
              }
            }
          },
          {
            id: "a20",
            text: "No, we’re not assembling a grand crusade of Cushionistan. Coalitions are useful; costumes are not, and we won’t cosplay our way into a crisis.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes telegraphing moves before allies align."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They welcome clear rules and limited objectives."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear recognition creep and legal contradictions."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
