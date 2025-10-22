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
      text: "Mandate or mirage: how will invisible helmets hit wallets, strain supply lines, and supposedly ‘protect jobs’ without just subsidizing empty air?",
      answers: [
        {
          id: "a_r1",
          text: "I greenlit the idea thinking “invisible helmet” was a hopeful metaphor; that’s on me. We’ll fix the rollout: clear pricing, transparent contracts, and no one gets charged for air twice.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Owning the confusion may calm tempers despite the gaffe."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Mandate optics suffer, fueling claims of security theater."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admits muddle, weakening deterrence claims and resolve."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "The helmets are invisible because the danger is rude and opportunistic; they block unauthorized breezes and gossip lasers without mussing hair. Safety first, with the lightest daily footprint.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Sounds glib and evasive, hurting fiscal credibility."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear reassurance steadies rollout and public compliance."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft tone reads as weak on testing rigor and threats."
              }
            }
          },
          followUpId: "q_sec_2"
        },
        {
          id: "a_r3",
          text: "If you can see the helmet, it’s defective or classified; we stress‑tested them against loud geese and polite drones in a windy barn. Meet the data before you mock the dome you can’t.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Combative stance alienates moderates and budget hawks."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Brashness spooks locals managing shortages and queues."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Strong defense frame rallies security‑minded supporters."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "We project a net cost near a fancy‑coffee a month, offset by refundable credits. Contracts are staged with penalties, and a six‑week ramp should end shortages before fines even exist.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technocratic spin feels detached from household costs."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Emphasis on models ignores neighborhood frictions."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Data nods to validation, modestly bolstering case."
              }
            }
          },
          followUpId: "q_sec_1"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_1",
        text: "Shortages are comic and costly: what’s the per-citizen tax bite, who’s getting the helmet contracts, and why do supply lines look like a mime in a box?",
        answers: [
          {
            id: "a_s1_1",
            text: "Preliminary scoring puts the average monthly burden under a novelty streaming subscription. We tri‑sourced contracts to avoid bottlenecks, with liquidated damages and public delivery dashboards.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Plain numbers highlight costs and stoke tax anxiety."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admits strain, prompting calls for softer enforcement."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency aligns with test metrics and diligence."
                }
              }
            },
            followUpId: "q_ter_1"
          },
          {
            id: "a_s1_2",
            text: "Final numbers come from the Office of Plausible Math on Friday; I won’t negotiate invoices at the podium. Let the auditors work before we all start sketching on napkins.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection signals weak stewardship of public funds."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Redirect can calm fears if paired with updates."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Looks like dodging test gaps; invites ridicule."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "There are no sweetheart deals with cousin‑owned shell firms named AirHat or DomeGnome. Competitive bids, blind reviews, and conflict checks block that brand of invisible favoritism.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Blanket denial risks backfire if documents emerge."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissiveness erodes local coordination and patience."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm line projects confidence in vetting and specs."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Shortages are a launch wobble; we’ve added a price cap, loaner kiosks, and a grace period. No one will be fined while shelves are haunted by nothingness.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Constructive fix narrative shows grip on logistics."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reassurance with incentives boosts compliance odds."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Concedes hiccups; hints trials overstated readiness."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_2",
        text: "Protesters say it’s see‑through overreach: how will enforcement work, what happens if people ‘forget’ the gear, and how is privacy protected?",
        answers: [
          {
            id: "a_s2_1",
            text: "No stop‑and‑feel checkpoints. Verification is opt‑in and cryptographic, with zero biometrics and automatic deletion. Early enforcement emphasizes reminders, not penalties, while supply stabilizes.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Rights-forward tone reassures centrists and courts."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Gentle enforcement message builds voluntary buy‑in."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft edges may dull deterrence and invite testing."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "If claims of surveillance theater are serious, bring receipts; our code is open for audit. Defense tests show efficacy beyond vibes, and we’ll walk critics through the barn data.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Confrontational posture risks inflaming protests."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive framing stresses local partners and crews."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assertiveness signals resolve against disruptive actors."
                }
              }
            },
            followUpId: "q_ter_2"
          },
          {
            id: "a_s2_3",
            text: "Local safety boards set the gentle details; we’re not piloting this from a national joystick. Expect community meetings instead of sudden helmet‑snatch squads.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Process answer buys time but feels bureaucratic."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pass‑through stance frustrates local coordinators."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vagueness undercuts safety credibility of trials."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "We muddled the early messaging, which amplified protests, and that’s on us. We’ll hold town halls and delay any fines until helmets are plainly—well, invisibly—available.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning faults helps, but invites blame for overreach."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admission validates critics of mandate scope."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Course correction suggests learning and adaptability."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_1",
        text: "Will you publish contract terms, delay penalties, and a real sunset if the helmets flop, or are we stapling a blank check to a gust of wind?",
        answers: [
          {
            id: "a_t1_1",
            text: "Yes: contracts will be posted with redactions limited to trade secrets and actual invisible ink. Penalty ladders, milestones, and a performance‑based sunset clause will be public.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Strong transparency pledge rebuilds trust and control."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public docs expose gaps that strain field teams."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reveals test details that critics can weaponize."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Vendors who miss milestones can explain to taxpayers why their bonus evaporated faster than their product. We won’t subsidize dawdling just because we can’t see it.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Threatening vendors reads punitive, not strategic."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tough talk can chill small suppliers’ cooperation."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Accountability stance strengthens contracting leverage."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We can’t haggle live on air without tanking leverage. Let procurement finish, then we’ll show receipts, not sausage, because the sausage is also invisible.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Evasive tone undermines claims of prudent oversight."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Stonewalling sours coordination and street patience."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Protects negotiation position for performance gains."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "External watchdogs from the Institute of Practical Magic will audit the deals. This isn’t a blank check; it’s a checklist with teeth and extremely loud paper.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Outsourcing credibility suggests weak internal grip."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "External monitors reassure communities on fairness."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signals hesitance to own results of defense tests."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_2",
        text: "Are ‘helmet jobs’ real manufacturing or creative accounting, and how does Defense testing translate to civilian value instead of barnyard theatrics?",
        answers: [
          {
            id: "a_t2_1",
            text: "Call them phantom if you want, but payrolls are paid in non‑invisible currency; we’ll release audited job codes. If the numbers don’t match, I’ll happily eat the press packet.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Defensive spin on jobs looks like number padding."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Economic bravado jars with street‑level shortages."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Frames trials as value backbone for industry work."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Defense trials measured debris deflection, noise dampening, and false alerts against drones and weather. Those metrics map to transit, schools, and construction without barn theatrics.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Specific metrics lend competence despite controversy."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tech jargon misses concerns about daily compliance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Civilian link feels weak compared with test beds."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "There’s no slush labeled Mist Hat in the budget. Line items tie to deliverables, and the accountants break out costs so nothing hides under a transparent umbrella.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Sweeping denial risks credibility if audits surface."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissal agitates unions and local watchdogs."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm budget line rejects slush; steadies partners."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If milestones fizzle, funding ratchets down and workers shift to visible safety gear. The goal is useful protection, not a forever program in a trench coat.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Conditional funding shows pragmatism and restraint."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reassurance with triggers builds public confidence."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Implied cutbacks could slow readiness claims later."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
