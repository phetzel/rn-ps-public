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
      id: "q_root",
      text: "By declaring every cloud federal property, you’ve launched permits and registries. What will households actually owe, who enforces this at the curb, and why the rush?",
      answers: [
        {
          id: "a_root_1",
          text: "Bring me a notarized thunderhead deed and we’ll talk; until then, we steward shared fluff so rain clocks in on time. It’s governance, not a sky heist.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Direct challenge signals leadership and invites accountable debate."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Mixed signals could slow fee compliance and dent early revenues."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Aggressive tone risks energizing protests and complicating crowd control."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Confrontation may unsettle seniors and heat-risk communities."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Permits convert surprise downpours into scheduled services, with fees scaled by cloud size. Revenue funds gutters, culverts, and resilience cushions-not a gold-plated umbrella stand.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Pragmatic framing shows order without conceding too much ground."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear scheduling boosts revenue predictability and bond confidence."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Permit rhetoric might be misread as expanded enforcement posture."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fees could be viewed as barriers to routine hydration needs."
              }
            }
          },
          followUpId: "q_sec_costs"
        },
        {
          id: "a_root_3",
          text: "No, we’re not sending net squads into the sky. Compliance teams are ground-based, think clipboards and kites, and protests stay on sidewalks. We prefer calm breezes to sirens.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Flat denial may read as evasive and reduce credibility if footage emerges."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Downplaying operations can undercut perceived value of paying permits."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Assurance of restraint supports de-escalation and civil liberties."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Minimizing oversight may worry those needing special accommodations."
              }
            }
          },
          followUpId: "q_sec_enforcement"
        },
        {
          id: "a_root_4",
          text: "Hydration stays a public good. Backyard mists remain yours to enjoy, seniors get priority spritzing during heat waves, and medical exemptions waive any drizzle delays.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Soft focus risks appearing unserious about legal and fiscal stakes."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurances alone do not sustain compliance or collections."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Leniency tone could invite larger, less managed demonstrations."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Safety emphasis protects vulnerable groups and builds public trust."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_costs",
        text: "Walk us through the permit math: registration fees, a shade surtax, and the curbside bureaucracy when your porch cumulus allegedly dims the neighbor’s tomatoes.",
        answers: [
          {
            id: "a_s1_1",
            text: "Base registration is modest, indexed to cloud footprint and forecasted output; the shade surtax only applies to commercial sun-blocking schemes. Paperwork is one page, not a trilogy.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clarity on costs frames the policy as manageable and fair."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Detailed indexing supports stable revenue and equity across payers."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cost focus alone may not address on-the-street tensions."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fees risk burdening low-income families needing cooling options."
                }
              }
            },
            followUpId: "q_ter_revenue"
          },
          {
            id: "a_s1_2",
            text: "Let’s not pretend the current system is free; flood cleanups are a stealth tax with mold. Permits are the receipt, not the shakedown, and they cut the mess in the first place.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection erodes confidence and invites harsher scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dodging numbers weakens fiscal projections and compliance."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lower temperature rhetoric can ease enforcement pressure."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Avoiding details gives patients little assurance on affordability."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "We built this fast and some lines will be wobbly on day one. We’ll publish a plain-language calculator this week and forgive honest mistakes while the kinks un-knot.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning imperfections helps, but highlights rollout missteps."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting wobbly lines threatens near-term collections."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledged glitches may spur more calls and protests."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency enables targeted relief for sensitive groups."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If a permit ever costs more than a monthly water bill, we’ll adjust. Low-income households get automatic fee waivers, and community clouds for gardens register free.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Cap pledge helps optics yet may constrain future choices."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Price caps can dampen revenues and complicate budgets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Concessions may embolden groups to test enforcement."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Affordability signals directly protect heat-vulnerable people."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_enforcement",
        text: "On enforcement, are we talking drones over fences, cloud-snatching vans, and protest corrals-or something less cinematic and more like a scheduled meter read?",
        answers: [
          {
            id: "a_s2_1",
            text: "No aerial snooping. Inspectors schedule visits like utility checks, use handheld barometers, and bring courtesy whistles instead of sirens. Protests stay public and peaceful.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Measured approach projects control without spectacle."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Slower cadence may delay early permit payments."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Scheduled visits lower conflict and protect civil space."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delays could slow responses for at-risk households."
                }
              }
            },
            followUpId: "q_ter_health"
          },
          {
            id: "a_s2_2",
            text: "With respect, the chase scenes are in movies. Our goal is compliance through clarity, not citations, and we’d rather hand out laminated FAQs than tickets.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissive tone can look glib and invite fact-checking."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing scope may suppress expected revenue signals."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection provides little guidance to field units."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calmer framing may reduce anxiety among patients."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "No one loses backyard access; mists, grills, and garden parties go on. We’ll publish a civil liberties guide so the rules read like tips, not a raid script.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comfort language helps, but can sound vague without details."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance alone does not fund drainage upgrades."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Too soft a stance may weaken deterrence against tampering."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Strong protections bolster health resilience in heat spikes."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Pilot rollouts taught us loud gear spooks folks. We retired the buzzing gizmos and now rely on posted schedules and human beings who introduce themselves before testing.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting missteps aids trust yet highlights competence gaps."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Quieter gear can cut complaints and speed compliance."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Changes signal uncertainty and could confuse protocols."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Past noise may have already heightened stress for seniors."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_revenue",
        text: "Where does the rain money go, and do drought months trigger refunds, credits, or just ceremonial umbrellas at ribbon cuttings?",
        answers: [
          {
            id: "a_t1_1",
            text: "Every drop-dollar is earmarked for resilient drainage, aquifer recharge, and local flood insurance pools. Drought credits accrue automatically and roll forward to the next wet season.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Specific allocations demonstrate stewardship and intent."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Earmarks and audits strengthen credibility and markets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Budget focus offers little reassurance on protest logistics."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Funds may not immediately ease heat-risk concerns."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "If someone thinks ribbon umbrellas are the problem, they can hold one in the first storm. We’re investing in pipes, not props, because basements can’t clap.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Confrontation risks backlash and legislative resistance."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Antagonistic tone can chill cooperative compliance."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm stance may deter disruptive demonstrations."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sharp rhetoric could alienate caregivers and clinics."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "No slush fund, and no novelty ponchos. Independent auditors will post quarterly ledgers so you can trace a culvert to the penny without decoding a fog bank of jargon.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Denial calms optics, but skeptics may see stonewalling."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rejecting slush fears still leaves revenue opacity questions."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defensiveness offers little direction for deployments."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assurances reduce fears of waste diverting health funds."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "The expensive thing is unplanned floods, not receipts with vowels. This program turns panic purchases into planned projects so towns stop passing the hat in hip waders.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection reframes risk but dodges core accountability."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comparisons blur cost signals needed for budgeting."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vagueness complicates planning with local partners."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Highlighting flood harms supports prevention messaging."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_health",
        text: "Health-wise, will rain rationing be a thing, and what protections cover privacy, seniors, and people who rely on backyard misters during heat spikes?",
        answers: [
          {
            id: "a_t2_1",
            text: "No rationing of hydration. Heat alerts trigger automatic permit holidays, seniors and medically flagged households get priority spritz windows, and usage data never leaves the block.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Proactive safeguards show care without conceding control."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Expanded benefits may increase program outlays."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Automatic triggers could draw larger public gatherings."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Strong protections directly reduce heat morbidity."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "We tie misting guidance to public health thresholds, not quotas. A privacy firewall keeps personal weather data hashed locally, with real penalties for any nosy clipboard.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Data-tied rules help, but can sound technocratic."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Predictable thresholds aid budgeting and grants."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Metrics alone offer little guidance for de-escalation."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Strict rules risk gaps for people outside thresholds."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We are not bagging personal clouds or logging your patio habits. The rules bar sky tracking and ban enforcement near clinics, schools, and neighborhood cooling centers.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard denial may be tested and erode credibility if errors appear."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances without detail may spook auditors."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear limits reinforce civil liberties and restraint."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Privacy talk is positive, but specifics seem thin."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If folks worry about privacy, that’s fair; we built opt-outs and dummy IDs so your geraniums don’t get doxxed. The mission is cooling people, not counting them.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Acknowledging concern builds trust yet flags weaknesses."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Privacy features can be costly to implement and audit."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Design complexity may slow training and readiness."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Iterating with advocates improves equity and adoption."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
