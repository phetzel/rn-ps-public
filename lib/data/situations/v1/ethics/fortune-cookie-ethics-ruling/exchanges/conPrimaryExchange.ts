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
      text: "By allowing 'symbolic' gifts inside fortune cookies, did the ethics board create a takeout bribe tunnel, and what concrete steps will you take?",
      answers: [
        {
          id: "a_r1",
          text: "We’re challenging this snack loophole head-on. I’m filing rebuttals baked into biscotti and asking the board to un-crunch the rule so ethics clarify, not crumble.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive, // +6
            o2: OutcomeModifierWeight.Neutral, // 0
            o3: OutcomeModifierWeight.ModerateNegative // -6
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Direct action against loopholes strengthens public ethics."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Bypassing DOJ coordination could invite uneven enforcement claims."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Risk-based screening limits disruption while catching threats."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Minimizing risks could read as dismissive of real concerns."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r2",
          text: "Homeland has flagged cookie concealment as a covert channel. We’re expanding screening, deploying crumb‑mapping drones, and certifying K‑9s in pastry detection to deter gimmicks.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Mixed signals may erode confidence in your ethics posture."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deferral could slow urgent investigative coordination."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Sharing intel swiftly protects ports and mail streams."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health framing may distract from the central bribery issue."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Justice can’t comment on snack-based hypotheticals while the soy-ink dries. We’re preserving evidence, not fingerprints, and we won’t taste-test exhibits in public.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative, // -4
            o2: OutcomeModifierWeight.Neutral, // 0
            o3: OutcomeModifierWeight.SlightPositive // +4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "This could look reactive and invite charges of politicizing."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Sticking to process shields cases from claims of bias."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Insufficient clarity may scatter resources at busy hubs."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Minimizing risks could read as dismissive of real concerns."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "From a health standpoint, cookies are not tracking devices. We’ll issue guidance so seniors and coders know a fortune isn’t a waiver, and sodium stays optional.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral, // 0
            o2: OutcomeModifierWeight.SlightNegative, // -4
            o3: OutcomeModifierWeight.SlightPositive // +4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Overpromising could backfire and weaken accountability."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ambiguity risks emboldening actors to test the boundary."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Mixed messaging might fuel vendor workarounds at scale."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reassurance on safety calms consumers without downplaying risk."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "If cookies can smuggle cash, chips, or QR bribes, how will Homeland police imports and dessert carts without turning lunch into a circus?",
        answers: [
          {
            id: "a_s1_1",
            text: "On the record: Homeland is deploying crumb-trail analytics at ports, auditing packaging suppliers, and pairing pastry‑certified K‑9s with scanners. We’ll publish detection stats monthly.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This could look reactive and invite charges of politicizing."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deferral could slow urgent investigative coordination."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Focused detection improves border resilience without panic."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing risks could read as dismissive of real concerns."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Homeland,
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "We’re coordinating with customs, couriers, and bakeries to harden supply chains. Tamper‑evident wrappers and randomized inspections make dessert the least convenient place to hide anything.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear leadership here protects the integrity of the office."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity risks emboldening actors to test the boundary."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Risk-based screening limits disruption while catching threats."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health framing may distract from the central bribery issue."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "If you think a cookie beats counterintel, try chewing through our layered controls. We’ll challenge any vendor peddling edible workarounds and suspend their snack privileges.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Mixed signals may erode confidence in your ethics posture."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Methodical posture helps preserve admissible evidence."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overbreadth could spook commerce and confuse inspectors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much comfort risks dulling vigilance among seniors."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Your lunch won’t be frisked. We’ll target risk, not napkins, and keep screenings quick so citizens can eat in peace without a metal detector for sesame seeds.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.Neutral, // 0
              o3: OutcomeModifierWeight.SlightPositive // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overpromising could backfire and weaken accountability."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hedging here may seem timid about prosecuting corruption."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Insufficient clarity may scatter resources at busy hubs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear health guidance keeps focus on fraud, not food fears."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Will Justice prosecute fortune-cookie bribery, or will disappearing soy-ink memos let suspects plead snack amnesia while taxpayers pick up the tab?",
        answers: [
          {
            id: "a_s2_1",
            text: "We don’t pre-announce prosecutions, especially when evidence might flake. Our job is to investigate quietly, not season the headlines with half-baked charges.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Mixed signals may erode confidence in your ethics posture."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hedging here may seem timid about prosecuting corruption."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Focused detection improves border resilience without panic."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing risks could read as dismissive of real concerns."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "We’ve directed investigators to treat cookie concealment like any covert conduit. Charging decisions will follow facts, not frosting, and we’re coordinating with inspectors across agencies.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This could look reactive and invite charges of politicizing."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Targeted legal steps reinforce prosecutorial independence."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mixed messaging might fuel vendor workarounds at scale."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health framing may distract from the central bribery issue."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_3",
            text: "No, we’re not blessing bribes because they arrived with chopsticks. A loophole isn’t a hall pass, and anyone laundering favors via dessert should expect legal indigestion.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Overpromising could backfire and weaken accountability."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity risks emboldening actors to test the boundary."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Insufficient clarity may scatter resources at busy hubs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Public tips reduce anxiety while supporting enforcement."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "If the ethics rule invites abuse, we’ll test it in court and seek clarity. Corruption doesn’t get diplomatic immunity just because it’s fortune-sized.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Direct action against loopholes strengthens public ethics."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deferral could slow urgent investigative coordination."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Sharing intel swiftly protects ports and mail streams."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much comfort risks dulling vigilance among seniors."
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
        text: "Walk us through the gizmos: how do crumb analytics, pastry K‑9s, and scanner sweeps catch covert cookie cargo without flagging every sprinkles jar?",
        answers: [
          {
            id: "a_t1_1",
            text: "Crumb analytics link residue patterns with shipment metadata to spot anomalies. K‑9s are trained on inks and polymers, not vanilla, and scanners verify contents without unboxing every treat.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear leadership here protects the integrity of the office."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hedging here may seem timid about prosecuting corruption."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Risk-based screening limits disruption while catching threats."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health framing may distract from the central bribery issue."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "False alarms stay low by tuning sensors to chemicals, not flavors. If your cookie smuggles only wisdom, it passes; if it smuggles a microchip, it meets a very curious beagle.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overpromising could backfire and weaken accountability."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity risks emboldening actors to test the boundary."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Insufficient clarity may scatter resources at busy hubs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reassurance on safety calms consumers without downplaying risk."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We won’t publish our full recipe. Broadcasting thresholds teaches smugglers to season around them, and we prefer their surprises to be ours, not theirs.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This could look reactive and invite charges of politicizing."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Methodical posture helps preserve admissible evidence."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overbreadth could spook commerce and confuse inspectors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing risks could read as dismissive of real concerns."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "No, we’re not X‑raying lunchrooms at random. Screening focuses on supply nodes and flagged batches, not Aunt Mira’s bake sale.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Mixed signals may erode confidence in your ethics posture."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deferral could slow urgent investigative coordination."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Focused detection improves border resilience without panic."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much comfort risks dulling vigilance among seniors."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Timeline check: when will Justice decide whether to test the cookie carveout in court, and how will you keep cases from going stale?",
        answers: [
          {
            id: "a_t2_1",
            text: "Initial reviews are underway now, with declination or action memos targeted this quarter. Complex cases take time, but evidence is preserved before crumbs can wander.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This could look reactive and invite charges of politicizing."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hedging here may seem timid about prosecuting corruption."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Sharing intel swiftly protects ports and mail streams."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing risks could read as dismissive of real concerns."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "We use fast-track tools for perishable leads, so a stale cookie doesn’t mean a stale case. Victims—taxpayers included—get updates without spoiling investigations.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overpromising could backfire and weaken accountability."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity risks emboldening actors to test the boundary."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Insufficient clarity may scatter resources at busy hubs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear health guidance keeps focus on fraud, not food fears."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We won’t litigate our calendar in public. Deadlines exist, but so do defendants who read calendars, and we’re not handing out roadmaps.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Mixed signals may erode confidence in your ethics posture."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Targeted legal steps reinforce prosecutorial independence."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mixed messaging might fuel vendor workarounds at scale."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health framing may distract from the central bribery issue."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If the carveout muddies the law, we’ll invite a judge to clarify and treat the ruling like a dough we can knead into precedent, not a forever snack pass.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Direct action against loopholes strengthens public ethics."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deferral could slow urgent investigative coordination."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Risk-based screening limits disruption while catching threats."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much comfort risks dulling vigilance among seniors."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
