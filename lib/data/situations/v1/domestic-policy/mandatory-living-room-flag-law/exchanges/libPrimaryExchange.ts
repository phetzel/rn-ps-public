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
      text: "The new ‘living room’ flag law turns couches into compliance centers; why push fines and flashy contracts that ding renters while gilding the craft lobby?",
      answers: [
        {
          id: "a_root_1",
          text: "We’re inviting the nation to outdo itself in couch‑stage creativity while meeting a simple display rule. Think televised block pride, not ticket traps; contracts will be scored in daylight.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            flag_olympics: OutcomeModifierWeight.StrongPositive,
            pillow_peg: OutcomeModifierWeight.SlightPositive,
            sofa_clinics: OutcomeModifierWeight.ModerateNegative,
            drone_audit: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He welcomes a bold, televised push to energize compliance."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They fear pageantry could inflame surveillance rumors."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Revenue framing gains airtime, but volatility risk remains."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Craft zeal raises minor injury and allergy concern signals."
              }
            }
          },
          followUpId: "q_sec_2"
        },
        {
          id: "a_root_2",
          text: "No listening lace, no hidden mics—just boring stitching that fails every spy‑movie test. Homeland’s job is couch safety checks and fire clearance, not sofa surveillance or secret ottoman drills.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            flag_olympics: OutcomeModifierWeight.SlightNegative,
            pillow_peg: OutcomeModifierWeight.StrongNegative,
            sofa_clinics: OutcomeModifierWeight.ModeratePositive,
            drone_audit: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He sees calm messaging dulling the competitive narrative."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear reassurance helps tamp down the microphone‑thread myth."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Softer tone may weaken deterrence and fine collections."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Downplaying risks could complicate health guidance later."
              }
            }
          }
        },
        {
          id: "a_root_3",
          text: "Fines are tiered and waivable, with renter protections and hardship carve‑outs. Treasury will publish a plain‑English fee table and refund path so a missed tassel never becomes a budget boulder.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            flag_olympics: OutcomeModifierWeight.StrongNegative,
            pillow_peg: OutcomeModifierWeight.StrongPositive,
            sofa_clinics: OutcomeModifierWeight.SlightNegative,
            drone_audit: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Procedural details sap the showmanship he prefers."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "More rules can trigger inspection burden and backlash."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Transparent tiers support fairness and stabilize revenues."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Guidelines without health data may invite confusion."
              }
            }
          },
          followUpId: "q_sec_1"
        },
        {
          id: "a_root_4",
          text: "We see the glitter panic posts; Health has no evidence of ‘couch‑rash epidemics’ from standard kits. Ventilate, choose low‑tox supplies, and call the hotline—panic is optional, safety is not.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            flag_olympics: OutcomeModifierWeight.SlightPositive,
            pillow_peg: OutcomeModifierWeight.SlightNegative,
            sofa_clinics: OutcomeModifierWeight.SlightPositive,
            drone_audit: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Crisis denial blunts the dramatic arc he could exploit."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Firm denials risk being dismissed by suspicious audiences."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Curt tone may erode cooperation and payment compliance."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear rejection of panic aligns with evidence and practice."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_1",
        text: "Fines escalate with each unfluffed tassel, and renters need landlord sign‑off for mounts; how will Treasury prevent penalties from becoming a regressive couch tax?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Penalties scale with intent, not income: renters are shielded, first‑timers get warnings, and waivers trigger when mounts need landlord consent. HHS safe‑craft tips ship with notices to keep nights sane.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.SlightPositive,
              pillow_peg: OutcomeModifierWeight.StrongPositive,
              sofa_clinics: OutcomeModifierWeight.SlightNegative,
              drone_audit: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical guardrails lack the spectacle he favors."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Complex tiers could complicate neighborhood checks."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Scaling by intent protects renters and revenue integrity."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health equity concerns persist if outreach lags renters."
                }
              }
            },
            followUpId: "q_ter_1"
          },
          {
            id: "a_sec1_2",
            text: "If a block wants to flex its couch game, we’ll reward compliance sprints, not nickel‑and‑diming slipups. Beat the fine by beating your street’s average—make accountability a scoreboard, not a shakedown.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.ModerateNegative,
              pillow_peg: OutcomeModifierWeight.StrongNegative,
              sofa_clinics: OutcomeModifierWeight.ModeratePositive,
              drone_audit: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He likes competitive incentives that make compliance a sport."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Block rewards can channel energy away from rumor spirals."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Prizes may dilute fine revenue and skew allocations."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Competition can pressure families into unsafe craft rushes."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Early drafts were too rigid on shared housing and sublets. We heard the feedback and rewired the form so roommates aren’t triple‑charged for the same tragically unplucked fringe.",
            type: AnswerType.Admit,
          outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.SlightPositive,
              pillow_peg: OutcomeModifierWeight.SlightNegative,
              sofa_clinics: OutcomeModifierWeight.Neutral,
              drone_audit: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting flaws risks ceding momentum and optics."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning gaps can reduce hostility during inspections."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Corrections may slow rollout and reduce near‑term intake."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Policy churn adds stress to households balancing safety."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "We’re not deputizing landlords as flag sheriffs. If a building blocks mounts, that tussle lives in the lease, not in a fantasy where Treasury rides in with tassel badges.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.Neutral,
              pillow_peg: OutcomeModifierWeight.Neutral,
              sofa_clinics: OutcomeModifierWeight.Neutral,
              drone_audit: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection reads as weak and undercuts the bold framing."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mixed messages hinder coordination with local inspectors."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dodging details threatens compliance and payment timing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lower heat can curb panic, if guidance follows quickly."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_2",
        text: "Procurement handed rotating‑slogan fabric to three ‘artisanal megacrafters’; what guardrails stop ribbon barons from stapling the budget to their mood boards?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Contracts include fixed‑price ceilings, open ledgers, and a rotating‑slogan audit that flags recycled puns. Bid data, winners, and unit costs go on a dashboard before the first tassel ships.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.Neutral,
              pillow_peg: OutcomeModifierWeight.StrongPositive,
              sofa_clinics: OutcomeModifierWeight.SlightNegative,
              drone_audit: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ceilings and audits lack the theatrical spark he wants."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Procurement limits may still strain field oversight."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Fixed prices and ledgers protect budgets and taxpayers."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Spec focus may overlook ergonomic and burn risks."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "Materials pass the boring‑spec test: no embedded electronics, no conductive thread, no secret pockets. It’s fabric, not a spy‑novel scarf—Homeland checks stitches, not your living room soundscape.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            flag_olympics: OutcomeModifierWeight.SlightNegative,
            pillow_peg: OutcomeModifierWeight.SlightNegative,
            sofa_clinics: OutcomeModifierWeight.SlightPositive,
            drone_audit: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance flattens the drama he prefers to harness."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Plain specs ease fears of embedded listening tech."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances without audits can invite cost creep."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Materials pass lab tests, yet misuse hazards remain."
                }
              }
            },
            followUpId: "q_ter_2"
          },
          {
            id: "a_sec2_3",
            text: "If ribbon barons want to staple policy to their mood boards, they’ll do it under stadium lights. We’re publishing judges’ scorecards and flub reels, not just a triumphant press release.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.SlightPositive,
              pillow_peg: OutcomeModifierWeight.ModeratePositive,
              sofa_clinics: OutcomeModifierWeight.ModerateNegative,
              drone_audit: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Calling out abuse projects strength and control."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive posture may fuel retaliatory rumor cycles."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deterrence helps hold vendors to price and delivery."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tough talk risks sidelining safety nuance and clinics."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "No, the slogans aren’t subliminal whispers coaxing you to salute the ottoman. They’re big, sleepy letters printed by a machine that mostly dreams of nap time and maintenance oil.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.SlightNegative,
              pillow_peg: OutcomeModifierWeight.SlightNegative,
              sofa_clinics: OutcomeModifierWeight.SlightPositive,
              drone_audit: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dismissing concerns leaves narrative space to critics."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flat denials can deepen mistrust of inspections."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing risks invites waste and protest costs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Rejecting pseudo‑science protects public health focus."
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
        text: "Parents report glitter fog and hot‑glue blisters during ‘patriotism nights’; what does Health say to families worried the couch has become a craft hazard?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Clinicians found glitter levels consistent with birthday parties, not biohazards. Use non‑toxic kits and crack a window; we’ll post a ‘safe sparkle’ sheet you can tape to the fridge.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.Neutral,
              pillow_peg: OutcomeModifierWeight.SlightNegative,
              sofa_clinics: OutcomeModifierWeight.SlightPositive,
              drone_audit: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health denials mute dramatic stakes he could amplify."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal may not calm safety complaints during checks."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public pushback could depress compliance revenues."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Evidence shows typical exposure levels and minor risk."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We’re issuing craft‑night guidance: ventilation, low‑VOC adhesives, breaks for small hands, and a hotline for reactions. Insurance will not hinge on tassel compliance, full stop.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.ModeratePositive,
              pillow_peg: OutcomeModifierWeight.SlightPositive,
              sofa_clinics: OutcomeModifierWeight.ModerateNegative,
              drone_audit: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Guidance lacks the spectacle he uses to mobilize."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Practical tips reduce rumor calls to field offices."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Safety steps may slow events and lower fine yields."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Advice is solid, but compliance fatigue is a risk."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "If your living room sounds like a tinsel storm, choose a pre‑assembled flag shipped flat. No glue guns, no blisters—just a dependable rectangle of mild, constitutionally sufficient enthusiasm.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.SlightNegative,
              pillow_peg: OutcomeModifierWeight.StrongPositive,
              sofa_clinics: OutcomeModifierWeight.SlightPositive,
              drone_audit: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reassurance with action gives him a constructive lane."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft tone may reduce vigilance on home hazards."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Extra support could raise costs without new revenue."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Balanced calm plus tips can cut avoidable injuries."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Social feeds love a rash photo. Remember, toddlers lick everything; correlation is not causation. Let’s not turn a glitter sneeze into a national epidemiology thesis.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.StrongPositive,
              pillow_peg: OutcomeModifierWeight.SlightNegative,
              sofa_clinics: OutcomeModifierWeight.SlightNegative,
              drone_audit: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Snarky deflection weakens control of the storyline."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lowering panic helps keep inspections routine."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing issues may hinder fee collections."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mocking concerns can undermine credible health advice."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_2",
        text: "Rumors claim fringe hides ‘microphone‑thread’ for surprise ottoman drills; is Homeland weaving surveillance into pillows or just checking zippers and mounts?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Homeland inspects for fire safety and trip hazards, not secrets. If an inspector asks your couch to state its name for the record, file a complaint and a joke.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.SlightPositive,
              pillow_peg: OutcomeModifierWeight.SlightPositive,
              sofa_clinics: OutcomeModifierWeight.SlightNegative,
              drone_audit: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Safety check talk lacks the rally drama he prefers."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Plain scope calms fears and improves cooperation."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Narrow focus may reduce ancillary fee opportunities."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Inspections can disrupt families if guidance is vague."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "There is no microphone‑thread program. The only whisper we endorse is, ‘Please lift the corner while I check for wobbly ottomans,’ followed by a polite thank‑you.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.SlightNegative,
              pillow_peg: OutcomeModifierWeight.Neutral,
              sofa_clinics: OutcomeModifierWeight.Neutral,
              drone_audit: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat denial undercuts the theater he might deploy."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Direct clarity helps counter cottage‑industry conspiracies."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Firm tone risks backlash that slows payments."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denial without education can leave safety gaps."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "Inspection criteria are public: seam durability, mount stability, label readability. We post visit windows and checklist PDFs—no body cams, no wiretaps, just boring furniture safety.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.SlightNegative,
              pillow_peg: OutcomeModifierWeight.SlightPositive,
              sofa_clinics: OutcomeModifierWeight.SlightNegative,
              drone_audit: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process detail blunts urgency and spotlight appeal."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Publishing criteria invites nitpicking and delays."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency supports predictable budgeting and fines."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Specs help, but health context still needs emphasis."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "If conspiracy entrepreneurs want to hawk Faraday throws, they can audition on Mandate Idol and lose in round one. Facts beat merch; your couch can stay gloriously unplugged.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.Neutral,
              pillow_peg: OutcomeModifierWeight.Neutral,
              sofa_clinics: OutcomeModifierWeight.Neutral,
              drone_audit: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He relishes challenging fear merchants on a big stage."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Taunting conspiracists can escalate field tensions."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calling scams out can deter grift and stabilize fees."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontation can distract from practical safety advice."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
