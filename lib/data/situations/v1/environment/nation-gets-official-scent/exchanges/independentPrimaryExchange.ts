import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const independentPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.IndependentPrimary,
  content: {
    rootQuestion: {
      id: "q1",
      text: "With State rolling out an Official Scent in parks and transit, how will you balance ambience promises with lawsuits, allergies, crop risks, and who pays to de‑scent sheds",
      answers: [
        {
          id: "a1",
          text: "If critics want clarity, I’ll meet them at dawn for a blind sniff‑off—winner sets the rulebook. We’ll govern by tested noses, not loudest sneezes, and the public will smell the results.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "A bold duel projects confidence and seizes the narrative."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This stunt risks inflaming suits and complicating coordination."
              }
            }
          }
        },
        {
          id: "a2",
          text: "Our role is coordination, not cologne enforcement. We’re convening an aroma diplomacy roundtable with cities, growers, and riders to refine the blend while courts bottle their drama.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Sounds evasive while people sneeze; it weakens accountability."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Strategic deflection buys diplomatic time and lowers heat."
              }
            }
          }
        },
        {
          id: "a3",
          text: "No one will be trapped in a perfume tunnel; pilots start small, with opt‑out zones and allergen caps. If a whiff bothers communities or crops, valves close first and budgets follow.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Empathy shown; readiness to adjust earns cautious credit."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Promises limit leverage with cities and plaintiffs right now."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a4",
          text: "Funding is slated as a mix of federal grants, local choice, and private sponsors, with a de‑scent reserve. Environmental and health reviews precede any piping, and public comment is required.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Budget talk without emotion may read technocratic and aloof."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clarity on funding improves intergovernmental cooperation."
              }
            }
          },
          followUpId: "q3"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "Perfumer lawsuits aside, what are the consent and opt‑out rules for open‑air venues, and how will you stop scent creep into private shops and homes?",
        answers: [
          {
            id: "a5",
            text: "Open‑air consent uses posted scent beacons, real‑time apps, and visible flags at vents. Opt‑out zones buffer doors and residences, and complaints trigger auto‑throttle on nearby emitters.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear rules and tools show proactive governance."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Tech beacons raise privacy and jurisdiction headaches."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "a6",
            text: "We don’t deputize noses; we standardize boundaries. Local managers handle enforcement like they do noise and leaf blowers, because no one wants a badge sniffing their stoop.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Deflection reads as ducking responsibility amid worry."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "This stance aligns with our remit and deescalates conflict."
                }
              }
            }
          },
          {
          id: "a7",
          text: "Residences and medical facilities are hard‑exclusion areas. If the plume drifts where it shouldn't, the system geofences the leak and notifies operators before anyone needs to say 'eau‑no'.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Strong protections reassure sensitive communities."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Hard exclusions complicate cross-border venue policies."
                }
              }
            }
          },
          {
          id: "a8",
          text: "There's no plan to let the scent seep into private property uninvited. Hardware is directional and low‑drift; if it trespasses, it's a violation, not a feature, and it gets shut down.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Flat denial invites backlash if seepage occurs."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm line deters overreach and simplifies enforcement."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "Farmers report bees and beans confused, commuters sneeze, and towns fear cleanup bills; what tests back the program, and who funds de‑scenting a million shelters?",
        answers: [
          {
            id: "a9",
            text: "Baseline studies on pollinators, crops, and air chemistry run before any nozzle turns on, with public data dashboards. Funding uses a ladder: federal match, then voluntary local shares.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Dense evidence without comfort can feel cold."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Data roadmap helps agencies and partners coordinate."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "a10",
            text: "The blend avoids known bee cues and common allergens, and pilots include live monitors near fields and bus stops. If sneezes spike or bees wobble, the mix changes or pauses immediately.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Specifics on allergens and bees show mastery."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Assurances still invite targeted lawsuits and scrutiny."
                }
              }
            }
          },
          {
          id: "a11",
          text: "Early tests did show one floral note bugged vine beans, so it's out. That's the point of trials: fix the recipe before it meets a single rush hour.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Candor builds credibility despite short-term hits."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Admission will be cited in court and bargaining."
                }
              }
            }
          },
          {
          id: "a12",
          text: "Let's not confuse a scent program with a crop dusting campaign. Farmers sit on the advisory board, and the goal is calmer commutes, not citrus tyranny over tomatoes.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Minimizing farm worries sounds dismissive."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Distancing the program reduces direct liability."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q4",
        text: "On consent, will there be a no‑smell lane, quiet hours for noses, penalties for rogue spritzers, and a simple opt‑out without a so‑called scent passport?",
        answers: [
          {
            id: "a13",
            text: "Opt‑out is physical and digital: wristbands or cards flag sensors to dim vents, and kiosks let visitors mute a zone for events. No‑smell lanes map along paths like quiet cars on trains.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Process talk feels bureaucratic and slow."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear procedures aid predictable implementation."
                }
              }
            }
          },
          {
            id: "a14",
            text: "You won’t need a PhD or a phone to say 'no thanks.' Clear signage, human attendants at peak hours, and paper permits make opting out as easy as waving, not downloading yet another app.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Accessible opt-outs show respect for consent."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Complexity of dual systems strains coordination."
                }
              }
            }
          },
          {
          id: "a15",
          text: "There's no tolerance for rogue spritzers. Unauthorized devices face fines and confiscation, and venues that ignore boundaries lose access to the program until they fix it.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Zero tolerance may seem heavy-handed and litigious."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm penalties bolster deterrence and order."
                }
              }
            }
          },
          {
          id: "a16",
          text: "If a venue insists the breeze makes consent impossible, we'll bring wind maps and a fog machine. Show us where control fails, or make space for a no‑smell corridor like everyone else.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Bold stance energizes supporters but courts risk."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Confrontation escalates disputes we must calm."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "Budget specifics: install, maintenance, allergy mitigation, and de‑scent costs, and can localities refuse charges or opt into a dedicated scent tax district?",
        answers: [
          {
            id: "a17",
            text: "The five‑year budget caps installs per site, with maintenance funded by usage fees and sponsor labels, and a de‑scent reserve sized for full removal of underperforming corridors.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Specific caps signal fiscal discipline and control."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Caps may box us in during negotiations and crises."
                }
              }
            }
          },
          {
            id: "a18",
            text: "No town is conscripted into fragrance duty. Participation is opt‑in by ordinance, and any city can sunset the program after a year if costs or complaints outweigh the perks.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Voluntarism can read as abdication on public health."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Local choice reduces blowback and preserves diplomacy."
                }
              }
            }
          },
          {
          id: "a19",
          text: "Yes, de‑scenting costs real money—filters, labor, scent‑scrub. That's why every contract includes a removal clause and escrow, so taxpayers aren't left spray‑canning a fiscal crater.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Honesty helps trust but invites sticker-shock headlines."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Cost candor arms plaintiffs and procurement critics."
                }
              }
            }
          },
          {
          id: "a20",
          text: "If a locality wants artisanal air, great; if not, their buses can keep smelling like last Tuesday's fries. The budget debate shouldn't pretend there's one national nose.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Flippant tone risks appearing dismissive of concerns."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Deflection protects our lane and reduces exposure."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
