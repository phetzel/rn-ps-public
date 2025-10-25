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
      text: "What will a mandatory backyard moat cost per home, and who eats the dirt when property rights and Defense budgeting both get swamped?",
      answers: [
        {
          id: "q_root_a1",
          text: "The President will out-paddle panic with pageantry: he’ll host a cul-de-sac canoe sprint to show calm, cost caps, and common sense. Critics may wave pool noodles, but not runaway invoices.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Public bravado calms nerves and frames the plan as leadership."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Cheery specs look flimsy when budgets and rights collide."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This showboating implies blame on Defense for the chaos."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A harmless push, but it complicates pending rule reviews."
              }
            }
          },
          followUpId: "q2_cost"
        },
        {
          id: "q_root_a2",
          text: "Homeland’s plan is a patriotic puddle, not a shark trench: three-geese wide, two-raccoons deep, with strict cost caps and opt-ins for seniors. We’ll publish cheery specs and keep wallets dry.",
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
              reaction: "Voters hear minimization while bills and mud pile up."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear, folksy standards lower neighborhood anxiety."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Downplays our concerns about mission creep and costs."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft framing ignores injunction risks now brewing."
              }
            }
          },
          followUpId: "q3_rights"
        },
        {
          id: "q_root_a3",
          text: "Defense did not request crocodile reserves or backyard fleets. Our submarines are not HOA-compliant, and we won’t bill for floaties; keep amphibious chaos off our ledger.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Denial shifts heat back to the White House to explain costs."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This stance undercuts unified security messaging."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Firm denial protects our budget and mission clarity."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It offers no path through the tangle of local laws."
              }
            }
          }
        },
        {
          id: "q_root_a4",
          text: "Justice is inventorying every statute a ditch might trip-from turtle tenancy to mailbox egress-and will issue guidance on takings, permits, and pauses while the ink dries.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Legalese without relief sounds aloof amid yard outrage."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk won’t soothe homeowners staring at trenches."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Unclear timelines keep our teams on edge and reactive."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Due-process mapping reassures courts and cools conflict."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2_cost",
        text: "Where does the ‘moat tax’ land-on lawns or wallets-and will seniors get exemptions, refunds for mud mishaps, or at least a government-issued bucket?",
        answers: [
          {
            id: "q2_cost_a1",
            text: "Let’s not carve tax policy in wet clay. Budgeteers are wringing out the numbers so citizens aren’t squeezed like sponges, and we’ll mop up any leaks before bills go out.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Deflection buys time while we crunch costs in public."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Households want clarity, not cheerful vagueness now."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Budget evasions risk pinning costs on our accounts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Signals caution as we assess refund and liability law."
                }
              }
            }
          },
          {
            id: "q2_cost_a2",
            text: "A draft fee is tiered by lot size and income, with hardship waivers and a senior safety carve-out. Claims for injuries or damage would route through a fast-track portal and ombuds.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Specifics before consensus can backfire on the message."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tier talk invites backlash from HOA and rural owners."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "At least it narrows Defense exposure a bit."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity on fees aligns with fair notice obligations."
                }
              }
            },
            followUpId: "q4_seniors"
          },
          {
            id: "q2_cost_a3",
            text: "No one’s grandparents are getting surprise shovel bills. Expect credits for accessibility upgrades, loaner pumps, and neighbor-help programs before anyone pays a penny.",
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
                reaction: "Reassurance without figures feels slippery to taxpayers."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Promising protections steadies seniors and caregivers."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Soothing lines risk shifting costs toward Defense later."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No clear remedy for accidental damages is offered."
                }
              }
            }
          },
          {
            id: "q2_cost_a4",
            text: "There is no hidden ‘bucket surcharge’ or backdoor levy for hose lengths. If a vendor tries to pad the tab with mud math, they’ll be booted from the program.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denials sound brittle if a fee appears later."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissing concerns can inflame local resistance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "A hard line shields us from surprise procurement."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It leaves ambiguity on consumer and tax statutes."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3_rights",
        text: "If a homeowner refuses to trench their tulips, what happens-permits pulled, fines piled, or does Justice call timeout while unions wave soggy picket signs?",
        answers: [
          {
            id: "q3_rights_a1",
            text: "Justice is mapping due-process guardrails first. Expect notices, appeals, and a pause option while labor issues settle; no penalties before the definition of ‘yard moat’ survives daylight.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process first reads as delay while tempers rise."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft tone here looks like dodging enforcement realities."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vagueness keeps our units under speculative pressure."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Due-process guardrails protect rights and reduce suits."
                }
              }
            },
            followUpId: "q5_unions"
          },
          {
            id: "q3_rights_a2",
            text: "Homeland starts with pamphlets and sandless coffee, not citations. We’ll mediate neighbors’ concerns and offer design alternatives so yards keep rights and roses.",
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
                reaction: "Pamphlets won’t placate homeowners facing fines."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "De-escalation and outreach reduce immediate conflicts."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Kind words do not resolve resource strain for us."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This bypasses urgent injunction and strike issues."
                }
              }
            }
          },
          {
            id: "q3_rights_a3",
            text: "Defense is not dispatching drill sergeants to your birdbath. We won’t enforce, inspect, or rate your moatmanship; that’s outside our lane and far from our budget.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Noninvolvement pushes the crisis back to the West Wing."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public hears mixed signals about federal resolve."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "We avoid mission creep and hold clear boundaries."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Still no guidance for local courts and unions."
                }
              }
            }
          },
          {
            id: "q3_rights_a4",
            text: "Let’s not litigate hypothetical hydrology at the podium. The Moat FAQ is in final edit, with pictures, fewer acronyms, and zero crocodile clip art.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "A light touch can cool tempers and buy room to plan."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Leaning back leaves us carrying communication risk."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Ambiguity risks equipment rumors and readiness hits."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Pragmatic pause helps triage real legal bottlenecks."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q4_seniors",
        text: "On senior safety: who carries liability for slips, turtles, or rogue garden gators, and will the program pause until accessibility ramps beat the shovels?",
        answers: [
          {
            id: "q4_seniors_a1",
            text: "Safety wins the starting whistle: covered crossings, handrails by default, and free anti-slip kits. Seniors can opt for dry-lot alternatives while neighbors or city crews handle any digging.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances without audits may ring hollow to families."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Safety-first framing reduces panic and liability fears."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Promises could imply Defense support we cannot give."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We still lack definitions that courts can enforce."
                }
              }
            }
          },
          {
            id: "q4_seniors_a2",
            text: "Interim rules define ‘moat’ versus ‘decorative ditch,’ set required barrier distances, and assign liability to contractors, not homeowners, when specs are met. A pause triggers if injuries spike.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rule talk without dates frustrates vulnerable groups."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Technicalities won’t calm fearful neighborhoods."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "At least scoping helps contain our exposure."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear terms on hazards and ramps bolster compliance."
                }
              }
            }
          },
          {
            id: "q4_seniors_a3",
            text: "Defense will not bankroll liability pools or procure gators, inflatable or otherwise. Our lanes are ships and skies, not garden fauna or slip-and-fall adjudication.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Defense refusal escalates pressure on the President’s plan."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cuts against the program’s promise of safe execution."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Draws a firm line against unfunded mandates."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Liability gaps will trigger rapid challenges."
                }
              }
            }
          },
          {
            id: "q4_seniors_a4",
            text: "If fear is flooding the debate, the President’s ready to pilot a ‘Silver Paddlers’ demo with medics and ramps, proving safety can lap panic without taxing common sense.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Visible empathy and action can steady senior voters."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Theatrics may complicate our safety messaging."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Spectacle risks implying Defense endorsement."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Public focus can aid swift, senior-friendly rulings."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5_unions",
        text: "With diggers walking out and unions chanting ‘No trench without sense,’ who actually digs, and does Defense supply floaties or does the plan spring a leak?",
        answers: [
          {
            id: "q5_unions_a1",
            text: "Defense won’t supply floaties, pontoon rakes, or morale dinghies. Labor logistics belong elsewhere, and we’re not redeploying engineers to backyard duty.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard refusals push labor anger toward the White House."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This deepens skepticism about program logistics."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "We keep scope clear and budgets intact."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No plan for disputes invites injunctions."
                }
              }
            }
          },
          {
            id: "q5_unions_a2",
            text: "Justice is clarifying essential-service rules and strike boundaries so no one compels labor unlawfully. Interim memoranda outline minimum safety staffing during disputes.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Legal sorting reads as stalling while work halts."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Communities hear process, not solutions for digging."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clarification helps a little on deployment limits."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear definitions will reduce unlawful strike risks."
                }
              }
            }
          },
          {
            id: "q5_unions_a3",
            text: "Procurement jokes aside, we’d like to hire fewer contractors who sell mud at champagne prices. Until labor rows resume, pilot sites will slow rather than spray money.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Humor and restraint lower heat while options form."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Quips won’t recruit crews or fix schedules."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Jokes fuel procurement rumors we must swat."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It dodges real labor law conflicts we face."
                }
              }
            }
          },
          {
            id: "q5_unions_a4",
            text: "Homeland has standby contractors, weekend volunteer corps, and a pause button. If a crew walks, the yard doesn’t become a moat crater; the schedule flexes before wallets do.",
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
                reaction: "Cheerleading without contracts falls flat with unions."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "A concrete roster calms fears and restores momentum."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Contractors near our lanes risk confusion and costs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Documentation helps ensure lawful staffing practices."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
