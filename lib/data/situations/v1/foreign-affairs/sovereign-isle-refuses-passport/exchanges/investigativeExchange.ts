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
      text: "Who bankrolled the inflatable deterrence armada and the pop-up envoy pipeline after the Sovereign Isle rejected diplomats' passports?",
      answers: [
        {
          id: "a_r1",
          text: "We didn't buy more passports because we retired passports yesterday in favor of friendship-bracelet visas. The isle is refusing a product we no longer sell, and that's their paperwork problem.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "This validates our bracelet-visa pivot and defuses the passport spat."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This muddies recognition zones and raises procurement compliance risks."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This undercuts deterrence and invites ridicule of our inflatable posture."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Funding came from the public diplomacy contingency fund with legislative notice. The isle honors seafoam-scented IDs, so we certified aromas and redirected envoy training accordingly.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "This makes us look ad hoc and careless about protocol and spending."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "This clarifies scented-ID procedures and steadies recognition practice."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Respect is not a flotation device you deflate on a whim. A rubber-duck carrier group will bob outside their harbor until protocol floats back, with pool-noodle escorts if necessary.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "This suggests we escalated theatrics instead of fixing protocol calmly."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This complicates recognition management and strains vendor controls."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "This reinforces resolve and signals deterrence without real escalation."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "The only thing inflated here is the rhetoric. Let's not confuse a cosplay regatta with strategy; we'll brief costs after the splashy headlines dry.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "This sounds evasive and feeds the narrative of improvised policy."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "This offers a measured lane back to orderly recognition procedures."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This softens our stance and risks diluting the deterrent message."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Your ministry's new recognition map rewrites protocol; who signed the memo approving scented-ID purchases, and what safeguards tracked the money and vendors?",
        answers: [
          {
            id: "a_s1_1",
            text: "As authorized by the Ministry of State, we will release the memo index and procurement annex today. It shows sign-offs, vendor IDs, and audit trails, and will post after this briefing.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "This frames the approvals as deliberate rather than hasty or secretive."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This still leaves gaps in oversight and recognition mapping clarity."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This offers little assurance the deterrent spending was well-guarded."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State,
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "The deputy for recognition policy initialed the map and the scented-ID buy, with dual-controller approval and scent-chain custody logs. Drawdowns used escrow to frustrate grift.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This risks tying us directly to odd purchases without broader context."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "This clarifies scented-ID procedures and steadies recognition practice."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "No, we did not launder cash through beach kiosks or shell marinas. The fund is audited quarterly, and the only shells involved were decorative and fully receipted.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "This asserts control and denies impropriety in a clear, confident way."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This categorical denial could age poorly if documentation surfaces."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This seems dismissive and may look like we are minimizing risks."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "We admit the first draft carried a goofy legend and a typo that turned 'scented IDs' into 'scented IEDs.' It was corrected within an hour and logged with the fix.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This admission suggests sloppy process and weak document discipline."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This concedes confusion in mapping and invites protocol challenges."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning minor errors can preserve credibility for future posture moves."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "How did dozens of near-identical envoys appear overnight, and who approved deploying a rubber-duck carrier group to loiter outside the isle's harbor?",
        answers: [
          {
            id: "a_s2_1",
            text: "When a micro-state tosses protocol overboard, we answer with buoyant presence. The bobbing group is lawful, unarmed, and very visible, and it says, 'Take us seriously or get seasick'.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This looks like escalation by spectacle rather than sober policy."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This strains recognition practice and distracts from lawful process."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "This reinforces resolve and signals deterrence without real escalation."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "Envoys came from the accredited reserve roster: pre-vetted generalists trained in ceremonial ambiguity. Their badges are temporary and auto-expire with the crisis clock.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This ties us to the logistics but not the underlying policy rationale."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "This clarifies the pipeline and affirms accredited procedures."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "This suggests we accepted risk without firm control of the assets."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Nobody is getting invaded by bath toys. The flotilla is a polite visual gag stapled to a legal brief, and the envoys carry clipboards, not cudgels.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This sounds cautious but may read as minimizing a real challenge."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This is calming yet leaves recognition enforcement underspecified."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "This lowers temperature while maintaining a minimal deterrent tone."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "If you want identical envoys, blame our tailor's bulk discount. HR moved fast, and we will brief process details once the tailor stops invoicing us in buttons.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This quip risks trivializing a complex diplomatic confrontation."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "This deflection still points toward process fixes we can implement."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This erodes the seriousness of presence and undercuts our posture."
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
        text: "The procurement file lists 'Aromatics Line 7: Seafoam IDs' from a vendor registered to a marina slip; were there conflicts of interest, kickbacks, or extreme markups?",
        answers: [
          {
            id: "a_t1_1",
            text: "The marina address is a mail proxy for a bonded warehouse, and the beneficial owner cleared conflict screens. Prices tracked within 3% of resin and fragrance indices, with penalties for foam.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "This is neutral politically if controls are clear and verifiable."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "This fortifies procurement legality and stabilizes recognition work."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "This raises doubts the supply chain could support deterrent optics."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "No kickbacks, no cousins, no sand-dollar briefcases. The only perk was a swatch that smelled like a beach postcard, logged as a promotional sample.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "This firm denial projects confidence and guards executive credibility."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This could backfire if audits reveal even minor vendor overlaps."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This sounds categorical and may look defensive under scrutiny."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Independent auditors from the Office of Nose Integrity are already sniff-testing batches and matching invoices. Any card that smells like fraud will be canceled.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This hedged reassurance risks seeming like spin if details are thin."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This soothes concerns but leaves compliance triggers ambiguous."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Independent checks help sustain credibility for future posture."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "One shipment arrived smelling more like low tide than diplomacy. It was quarantined, refunded, and the supplier was told to take a long metaphorical walk off a short pier.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This admission of quality issues suggests poor vendor oversight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This concedes procurement slippage and complicates recognition work."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning faults early can blunt criticisms of the broader posture."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Photos show patched inflatables marked 'Property of the Puppet Navy'; did you lease surplus theatrics, and what did taxpayers pay per bob for this deterrent?",
        answers: [
          {
            id: "a_t2_1",
            text: "Yes, we leased surplus showcraft from a touring maritime pageant because it was cheaper and perfectly on brand. The per-bob price is capped, with penalties for dramatic deflation.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This opens us to charges of theatrics over substantive policy."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This creates optics problems that unsettle recognition partners."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Admitting the lease keeps options open while limiting commitments."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Per bob costs about a stadium hot dog, with a flotilla bulk rate. Leasing avoided storage and patch crews, and every repair has chain-of-bob forms.",
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
                reaction: "This frames costs plainly but spotlights a quirky deterrent choice."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Transparent costing helps normalize unusual, law-compliant tools."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This invites cost-effectiveness questions about deterrent value."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Call them props if you like; they still pull cameras and compliance. If spectacle is the language here, we will speak it until paperwork smells like seafoam again.",
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
                reaction: "This sounds flippant and risks trivializing a tense standoff."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This rhetoric complicates recognition diplomacy and vendor trust."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Framing visibility as advantage supports a limited deterrent aim."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "They are not toys masquerading as a navy. They are ISO-rated maritime signaling devices with whimsical livery, and the prop-house stamp is not in our ledger.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "This firm denial protects the narrative against charges of gimmicks."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This pushback may sound evasive if lease paperwork later surfaces."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This weakens credibility if imagery contradicts the hard denial."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
