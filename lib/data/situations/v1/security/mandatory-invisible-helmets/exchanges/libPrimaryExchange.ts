import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const libPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.LibPrimary,
  content: {
    rootQuestion: {
      id: "q_root",
      text: "Shortages, fines, and quiet crackdowns from the invisible‑helmet edict hit low‑income riders. Who okayed the hush contracts and sidelined oversight?",
      answers: [
        {
          id: "a_r1",
          text: "I approved “invisible helmets” thinking it was a pep‑talk metaphor, not a procurement category. That’s on me. I’ve ordered a penalty freeze, a transparency audit, and a fix that protects people, not paperwork.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Owning the approval clarifies intent and takes responsibility."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting confusion undermines our security message at a tense moment."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This admission invites blame and weakens operational confidence."
              }
            }
          },
          followUpId: "q_procurement"
        },
        {
          id: "a_r2",
          text: "The goal is shielding residents from unseen threats, not hassling commuters. We’re pausing ticketing in impacted corridors, publishing plain‑language rules, and capping costs so nobody pays for air.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Framing only safety sounds evasive while equity harms dominate."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear reassurance steadies the public and signals accountable care."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft talk without specifics erodes credibility with field partners."
              }
            }
          },
          followUpId: "q_crackdown"
        },
        {
          id: "a_r3",
          text: "Let’s challenge the premise: oversight didn’t vanish; it’s scheduled. If you can see a helmet, it’s defective—or ours in testing. We’ll bring the windy‑barn data and face questions in open session.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Challenging the premise looks defensive against documented issues."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Minimizing oversight gaps risks further backlash and legal scrutiny."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Confidently challenging critics reinforces test rigor and resolve."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "The Inter‑Agency Resilience Board approved pilot contracts under emergency rules with statutory redactions. A line‑item summary and vendor list, minus sensitive specs, posts tonight.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Bureaucratic phrasing sounds like passing the buck on oversight."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Offloading decisions to boards blurs accountability for crackdowns."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clarifying roles helps distinguish advisory from enforcement work."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_procurement",
        text: "Who won the invisible‑helmet contracts, why the blacked‑out pages, and how did equity scoring miss people who can’t afford gear they can’t see?",
        answers: [
          {
            id: "a_p1",
            text: "Authorized on the record: Homeland contracted three vetted makers after independent security reviews. We’ll unseal pricing bands and equity weights this week, with safety specs withheld by law.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Taking procedural credit without outcomes reads tone-deaf on costs."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Publishing authorizations signals openness and basic due diligence."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Procurement optics pull us into civilian contracting controversy."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Homeland
          },
          {
            id: "a_p2",
            text: "Vendors include two small cooperatives and one mid‑size fabricator, selected for supply reach and privacy safeguards. Equity scoring was weighted, but demand spikes outpaced our subsidy rollout.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Listing vendors without prices sidesteps the equity failures."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Detailing cooperatives shows attention to community capacity."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Fragmentary details invite suspicion about testing and vetting."
                }
              }
            }
          },
          {
            id: "a_p3",
            text: "We can’t litigate line items from the podium. Audit staff and the watchdog from the Office of Unseen Things will walk you through the redactions and which ones get peeled back.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Refusing specifics from the podium reads like hiding the ball."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dodging line items damages trust with riders and local partners."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeping procurement in audit channels protects operational data."
                }
              }
            }
          },
          {
            id: "a_p4",
            text: "Affordability testing lagged reality. We’ll expand vouchers, publish cost ceilings by zip code, and suspend penalties where stock is scarce while we rebuild supply in a way people can actually use.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Admitting equity misses sets a corrective tone and accepts blame."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledging misses exposes process gaps we should have caught."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Conceding flaws invites critics to question safety claims broadly."
                }
              }
            },
            followUpId: "q_relief"
          }
        ]
      },
      {
        id: "q_crackdown",
        text: "Why were 'helmet‑hesitancy' marches corralled off‑camera, citations sealed, and oversight boards told the footage is, conveniently, invisible?",
        answers: [
          {
            id: "a_c1",
            text: "There was no secret “off‑camera corral.” Safety perimeters were posted, and curfew notices went out. Footage exists; portions are withheld to avoid doxxing minors and undercover marshals.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial clashes with reports and deepens credibility holes."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Asserting protocols emphasizes order and intent to keep peace."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denials risk overshadowing our limited, technical advisory role."
                }
              }
            }
          },
          {
            id: "a_c2",
            text: "We’re issuing a public protest operations manual this week and dropping citations tied to ambiguous guidance. Independent observers will get access to the full protest logs.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Committing to public guidance shows responsiveness to protesters."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "A transparent manual can calm tensions and anchor lawful practice."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Publishing tactics may constrain flexibility and invite misreadings."
                }
              }
            }
          },
          {
            id: "a_c3",
            text: "Calling lawful crowd management a “crackdown” doesn’t make it so. If any team exceeded policy, body‑cam IDs will be referred, and you’ll see disciplinary receipts, not disappearing ink.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Questioning the word crackdown sounds dismissive of lived harm."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Framing critics as unfair prolongs conflict and fuels resentment."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pushing back frames actions as measured and proportional to risk."
                }
              }
            }
          },
          {
            id: "a_c4",
            text: "Defense provided non‑lethal tech advice and crowd acoustics modeling; deployment decisions stayed with civil authorities. They can brief you on tests and limits.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical briefings do not address secrecy or sealed citations."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Pointing to interagency jargon sidesteps accountability demands."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifying advisory limits avoids overstating Defense’s footprint."
                }
              }
            },
            followUpId: "q_testing"
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_relief",
        text: "If fines hit gig workers and transit riders hardest, will you waive penalties, replace helmets during shortages, or fund stipends so people aren’t ticketed into debt?",
        answers: [
          {
            id: "a_t1",
            text: "We will waive fines during shortages, expand grace periods near transit hubs, and hand out loaner helmets at shelters and libraries. No one should choose between a shift and a citation.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Offering relief acknowledges harm and shows practical compassion."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Grace periods and waivers reduce stress and restore legitimacy."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Relief framing risks implying prior enforcement was excessive."
                }
              }
            }
          },
          {
            id: "a_t2",
            text: "A stipend portal opens Friday with auto‑enrollment for verified low‑income riders and delivery workers. Replacement inventory arrives in staggered drops prioritized by need.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Announcing portals without fixes can feel like bureaucratic spin."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Auto-enrollment signals inclusive design and lowers friction."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Operational details blur lines with civilian aid administration."
                }
              }
            }
          },
          {
            id: "a_t3",
            text: "We built the rule too fast for people juggling three jobs and a prepaid data plan. We’re rewriting the guidance with plain words and translating it before enforcement resumes.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting the rollout was rushed concedes leadership missteps."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Process failure admissions weaken deterrence and planning image."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning errors can reset coordination with municipal partners."
                }
              }
            }
          },
          {
            id: "a_t4",
            text: "Some scarcity comes from panic‑buying by corporate fleets. We’re meeting CEOs who tried to corner invisible stock and reminding them hoarding air still counts as hoarding.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Blaming corporations dodges responsibility for policy impacts."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pointing fingers worsens relations with supply partners and cities."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calling out hoarding can justify targeted logistics oversight."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_testing",
        text: "Defense touts windy‑barn tests with loud geese and polite drones—what does that prove on crowded streets, and why run a helmet mandate like a war game?",
        answers: [
          {
            id: "a_d1",
            text: "We’ll stack our windy‑barn trials against any city‑block chaos you pick. If you can see a helmet, it’s either counterfeit or our test rig, and either way we’ll bring receipts.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Over-proud testing rhetoric can read as aloof from street reality."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Barn trials feel distant from riders’ daily congestion and risk."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Defending test rigor validates our expertise and program value."
                }
              }
            }
          },
          {
            id: "a_d2",
            text: "Street pilots measured fog, gusts, and goose decibels against comfort and safety metrics. Mandate framing stays civil; Defense’s role is testing physics, not writing tickets.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Metrics without accountability leave justice concerns unresolved."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Street measures show we’re tracking real conditions, not theory."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Detail dumps risk exposing tactics and brittle evaluation design."
                }
              }
            }
          },
          {
            id: "a_d3",
            text: "No militarization here. Civilian agencies lead, and our gear advice starts with de‑escalation and comfort so nobody ends up headbutting bureaucracy for sport.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassuring tone without proof will frustrate communities fined."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Civilians in the lead counters fears of creeping militarization."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Downplaying our role may undercut support for necessary assets."
                }
              }
            }
          },
          {
            id: "a_d4",
            text: "We’re not running a war game. We loaned sensors and a barn because it was windy and full of volunteers with clipboards, not soldiers.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denying militarization strains credulity after tactical imagery."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denial invites more scrutiny from councils and oversight bodies."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifying limited loans protects mission boundaries and trust."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
