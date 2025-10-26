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
      text: "Kitchen Swap Week promises 'culinary empathy,' but readers report drawer raids, fines, and night audits. Has the unity push become kitchen policing?",
      answers: [
        {
          id: "a_root_1",
          text: "I challenge the doom-sayers: swap a skillet before you swap conspiracy theories. Empathy tastes better than panic, and yes, my stove just impeached my toaster.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "His challenge sounds confident and playful, boosting morale despite jitters."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Security spin falls flat amid fears of random checks at casserole lines."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A nod to due process helps, but uncertainty over drawer searches lingers."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Cheery hygiene talk clashes with anxieties about germs and shared sponges."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "This is a resilience drill: if strangers can find your can opener, we win. Expect casserole checkpoints and fondue no-fly zones to keep traffic calm and tantrums brief.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Deflection reads evasive as reports of late-night audits keep piling up."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Framing it as a drill wins some support for calm, routing panic productively."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Courts may bristle if drills blur into searches without clear limits."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Public hears rules but worries that guidance masks stricter enforcement."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_3",
          text: "Health guidance is boring on purpose: soap, gloves, labels, and consent. Triple-mitten jokes aside, polite coughing and lemon-scented wipes beat any rumor about rogue spatulas.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Downplaying drama helps little as fines and inspections take center stage."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Practical steps reassure families, slightly cooling sanitation backlash."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Safety teams still look like enforcers, not helpers, in nervous kitchens."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ambiguity around consent and scope keeps litigators on alert."
              }
            }
          }
        },
        {
          id: "a_root_4",
          text: "Household Justice is limiting authority to safety issues, not snooping. No drawer opens without consent or cause, appeals are fast, and fines start with warnings, not wallops.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Legalese sounds defensive and fuels narratives of creeping kitchen policing."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear limits and oversight briefings calm civil libertarians and moderates."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Constraint talk suggests fewer checkpoints, worrying some security planners."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health messaging gets sidelined as legal wrangling takes the spotlight."
              }
            }
          },
          followUpId: "q_sec1"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Walk us through Household Justice's cookbook: who sets fines, who knocks on cutlery drawers, and how do households appeal a spatula ticket without lawyering up?",
        answers: [
          {
            id: "a_sec1_1",
            text: "The fine schedule goes to public comment; first offenses draw warnings, not wallops. Appeals live on a two-page form with upload, and hearings happen by video within a week.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Detailed process earns points for transparency despite bureaucratic heft."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Appeals path and warrant standards ease privacy concerns for many."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Inspection roles sound narrower, reducing their clout and drawing pushback."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health review seems secondary, risking confusion on sanitation rules."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "No, there won't be random drawer-knocking. Inspectors schedule visits, publish names, and cannot open anything without written consent, recorded on a form you can decline.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial rings hollow against reader accounts of knocks and fines."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limiting field visits preserves order and avoids checkpoint creep."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfident assurances may crumble if evidence of searches surfaces."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing risks undercuts trust in the hygiene framework and guidance."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Paperwork will appear because bureaucracy breeds like sourdough. We are killing duplicates and auto-filling, but yes, early on, some folks will see extra screens and signatures.",
            type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting paperwork bloat confirms critics' warnings about red tape."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Complex appeals risk unequal access, angering legal watchdogs."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear lanes for safety teams offer modest operational relief."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Structured forms can standardize sanitation, reducing ad-hoc burdens."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "Pilot first, codify second. We'd rather learn from real spills than forecast imaginary souffle collapses, so the playbook will evolve after the first batch of swaps completes.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection to pilots looks like stalling while fees and audits grow."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Unclear roles during pilots frustrate coordinators and local partners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Testing rules before codifying reduces legal exposure and confusion."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Landlords warn of rent hikes to fund 'swap insurance,' and Homeland floats casserole checkpoints. What stops this from becoming pantry tolls and tenant shakedowns?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Swap fees won't fly. We'll issue guidance banning lease surcharges tied to swaps, and stand up a hotline so tenants can report creative billing faster than you can mislabel turmeric.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft reassurance fails to calm tenants bracing for swap insurance spikes."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear bans on junk fees and sanitation basics win public health points."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dialing back checkpoints weakens their footprint and draws internal ire."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Without enforceable guardrails, tenant protections look flimsy in court."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "No pantry tolls now or later. Traffic stations help with flow at events, not frisking lasagna, and no one is authorized to invoice a household for crossing with a casserole.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Sweeping denial backfires as landlords advertise new 'swap' surcharges."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No tolls policy narrows authority, vexing field planners of checkpoints."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm prohibition on tolls strengthens standing against predatory fees."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health guidance alone cannot offset new costs hitting renters."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "Housing and Homeland are drafting guardrails: no swap surcharges, clear notices, and an ombuds to unwind bogus fees. We'll publish sample lease clauses and an enforcement timeline.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Concrete guardrails read serious, partially blunting the shakedown story."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Drafted limits and penalties for violators bolster legal credibility."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Restrictions on stops curb flexibility and invite complaints from ops."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health waivers may add complexity that households find frustrating."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_4",
            text: "If a landlord needs a yacht to store your spatulas, we can all spot the garnish. Try cooperation first; we're measuring neighbors, not extracting rent from empathy.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "The jab at landlords energizes renters but invites claims of grandstanding."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Morale bump from tough talk, though operations still face tighter rules."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric without statutes leaves cases hard to prosecute cleanly."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Emphasizing fairness can boost compliance with basic sanitation steps."
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
        text: "Do households have a 'Fourth Ladle' privacy right, and what's the threshold for opening a drawer versus just eyeballing a crusty pan from a polite distance?",
        answers: [
          {
            id: "a_ter1_1",
            text: "We mirror home-privacy norms: plain-view hazards invite safety notes; drawers require consent or articulable cause. The Fourth Ladle lives in policy, training, and audit logs.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear thresholds project control and reduce panic over drawer raids."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Plain-view limits and consent focus track with established home privacy."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Constrained scope frustrates safety teams seeking broader discretion."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health staff worry that narrow rules hinder quick hazard mitigation."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "If someone reaches for your secret cookie stash, you can say no, and they should back away like a cat from a cucumber. Report overreach, and we'll retrain quickly.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance helps tone, but privacy fears persist in cramped kitchens."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Specific do's and don'ts calm families about germs and shared tools."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft language leaves room for uneven enforcement and disputes."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Advisory tone weakens the perceived authority of checkpoint crews."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "There is no license to rummage for sport. Drawer fishing expeditions are banned, and novelty aprons, bumper stickers, or chili trophies are not probable cause.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Firm denials of rummaging rights invite scrutiny if audits continue."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Stating no license to snoop upholds civil liberties expectations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limits on drawer checks complicate training and standard operating plans."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reduced intrusion may ease stress, improving hygiene cooperation."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Hard edges go to common sense and, if needed, the courts. We'll publish scenarios so inspectors aren't litigating every spoon with googly eyes at the kitchen table.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection to courts sounds passive as neighbors film drawer disputes."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deference to local judgment grants flexibility during tense moments."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Passing the buck risks inconsistent rulings and muddled guidance."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Front-line teams get little clarity on sanitation boundaries."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "What does sanitation look like in practice-single mitts, labeled sponges, polite coughing-and who keeps Homeland's casserole checkpoints from ballooning into mini-empires",
        answers: [
          {
            id: "a_ter2_1",
            text: "Simple beats theatrical: soap, gloves, consent, and clear labels on shared gear. Triple-mitten is retired; it's single-mitten plus handwashing and a magnet with whose sponge is whose.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Understated tone steadies some, yet checkpoint rumors keep spreading."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Simple, clear protocols lift compliance without theatrical overkill."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Volunteer focus shrinks their mandate, irking preparedness hawks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Consent-first stance still leaves liability questions unresolved."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Checkpoint crews are unarmed volunteers with clipboards and casserole tags. Oversight includes posted schedules, audits, and complaint portals; no surprise cordons or gear seizures.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Specific roles and limits project order and lower public anxiety."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Defined authority and logging raise accountability at checkpoints."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Paper logs and caps reduce agility, frustrating rapid response aims."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Resource strain grows if crews must monitor glove and sponge usage."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "First days will be messy, like a toddler with flour. We'll fix fast, publish error logs, and let the internet roast us into competence until the process actually works.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting messiness validates critics who foresee fines and confusion."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Learning mode grants flexibility to adjust checkpoint footprint."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Loose starts risk overreach claims before policies are finalized."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Early chaos could degrade hygiene, undermining trust in guidance."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "Join the drill, not the panic. Finding a neighbor's can opener is peak resilience, and we won't let rumor turn a soup line into a storyline about tyranny.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rallying tone lands with skeptics as policing optics overshadow empathy."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Community drill framing boosts participation at early bottlenecks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Motivation without guardrails risks sloppy documentation and appeals."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Positive framing nudges adoption of basic cleaning etiquette."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
