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
      text: "Your plan makes families notarize micro-accords and file them with the Porch Affairs Dept; how will you deliver peace without junk fees or snooping?",
      answers: [
        {
          id: "a_r1",
          text: "I challenge every cul-de-sac to sign ceasefires over leaf blowers and bedtime borders. Peace by potluck beats grievance by group chat, and my goldfish envoy accepts payment in peas, not fees.",
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
              reaction: "Direct challenge rallies citizens, showcasing resolve without heavy bureaucracy."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Push may blur due process if neighbors feel coerced into accords."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Challenge alone risks confusion without clear filing guidance."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "The State Cabinet will issue porch passports and driveway visas with fee caps, waivers for seniors, and rural filings by radio. It's ordinary diplomacy, just cozier, and forms fit on a fridge magnet.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical details without vision can feel timid amid public skepticism."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Passport talk ignores enforcement safeguards Justice must defend."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear, routine steps strengthen credibility and reduce friction for families."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "We admit the Charter never imagined backyard embassies. Justice is reviewing mailbox sanctions, noise-truce clauses, and will bar surprise lemonade raids while we pilot privacy guardrails.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Admitting gaps may weaken authority if not paired with firm guardrails."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Owning limits sets a lawful basis to constrain overreach and abuse."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal caveats could slow rollout and muddle service expectations."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "No one wants a surveillance HOA in a trench coat. We'll keep data minimal, forbid doorbell peeping for diplomacy, and publish plain-English bills so peace doesn't come with hidden late fees.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Reassurance without specifics risks sounding dismissive about privacy."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Vague comfort could hamper accountability and remedial pathways."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Tone calms fears slightly, but operations still need clarity."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "If households need porch passports and driveway visas, who eats notarization costs, and how do you prevent treaty scalpers or late-fee snowballs before next trash day?",
        answers: [
          {
            id: "a_s1_1",
            text: "We'll cap notarization at a lemonade-stand price, waive for low-income families, and ban resellers. A fee calculator and one-page kit ship free, plus radio filings in remote hollows.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fee caps help, but president seems reactive rather than leading reform."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caps alone won't deter fraud without penalties and audits."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Simple pricing and waivers ease access and reduce administrative friction."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "If your treaty says \"no trombones after 9,\" we don't need your playlists. Payments go through the Treasury Piggy Bank portal, which can't charge what it can't pronounce, and publishes every fee table.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurance reads as hedging, not a plan to stop abuse or spiraling fees."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledging norms supports fair enforcement with minimal intrusion."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft promises may undercut consistent document standards."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "There's no surcharge for good manners, no subscription for silence, and no late-fee multiplier that multiplies your neighbors. If a form tries to upsell you, it's not our form, and we'll shut it down.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Denial risks backlash if hidden costs or confusion appear at launch."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear prohibition of junk fees aligns with consumer protection."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid stance may limit flexibility for unusual notarization demands."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Look, if anyone's monetizing porch peace, it's the guy selling \"premium\" leaf bags. We're fixing the bureaucracy, not selling commemorative stamps of your driveway diplomacy.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Humor deflects blame, but it keeps the conversation lively with voters."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Deflection undermines seriousness required for legal compliance."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes erode trust in the process and complicate field guidance."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "The charter never foresaw backyard embassies; what stops policing from creeping into kitchens, and who referees lemonade raids or mailbox sanctions when tempers spike?",
        answers: [
          {
            id: "a_s2_1",
            text: "Justice will set bright-line limits: no entry past the welcome mat, no data beyond signatures and dates, and no raids without a jelly-stain warrant. We'll test this in sandbox blocks first.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Caveats help, but the burden appears on families, not agencies."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Bright-line limits protect homes and due process from mission creep."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard limits may constrain diplomatic innovation at the neighborhood level."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "If a handful of bad actors hide behind \"privacy\" to wage 6 a.m. blower wars, we'll confront that. Peace has boundaries too, and neighbors deserve quiet as much as cul-de-sacs have memes.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm stance signals resolve against bad actors and protects neighbors."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Aggressive tone risks civil liberties complaints and uneven enforcement."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontational framing invites confusion for local liaisons."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "There's an independent Porch Oversight Board with actual porch swings and auditors. Complaints get 48-hour responses, and any overreach sunsets faster than a citronella candle in July.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Oversight promise without teeth can sound like bureaucracy dressed up."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Independent review adds accountability and appeal options."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Extra board layers can slow routine filings and approvals."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Mailbox sanctions are notices, not handcuffs; appeals go to Neutral Aunt Mediation and then to a real judge if needed. Data lives in locked cookie jars, with auto-delete on a short timer.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Detail is useful, yet leadership feels delegated to agencies."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clarifications help, but they skirt core privacy and authority limits."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Plain guidance reassures residents and streamlines everyday operations."
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
        text: "Families worry they can't ratify a bedtime ceasefire before dinner; what timeline and support keep treaties from derailing tacos or algebra?",
        answers: [
          {
            id: "a_t1_1",
            text: "Pilot timelines are snack-proof: a five-minute wizard, three checkboxes, and a stamp if you're fancy. A hotline staffed by retired hall monitors walks you through without touching taco night.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Incremental pilots are cautious; leadership tone remains subdued."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tight timelines risk errors unless complaint channels stay open."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Quick, clear steps show competence and reduce dinner-table friction."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "No one fails civics because dad forgot the preamble. We'll accept \"good-enough\" drafts, let you edit later, and honor hand-drawn maps of sock borders as long as both parties sign.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Comforting tone lacks mechanisms to prevent classroom disruption."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assurances signal proportionate enforcement and educational carve-outs."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague pledges create ambiguity for field staff and families."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "If dinner goes cold, blame the recipe, not the treaty. We built this to be quicker than finding the remote, and frankly the remote has fewer witnesses.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Blame-shifting suggests weak ownership of rollout risks."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection complicates consistent standards and remedies."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Light touch keeps goodwill, though policy clarity still lags."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "There's no requirement to filibuster at the table or read footnotes into the mashed potatoes. If someone insists, they're doing performance art, not policy, and it won't delay dessert.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Bold denial projects confidence and pushes momentum forward."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissal of concerns may backfire in court and public opinion."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Refusal to adjust can hamper troubleshooting during pilots."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On privacy, what exactly will the government see from a living-room accord, and can families purge records or opt out without summoning a sofa diplomat?",
        answers: [
          {
            id: "a_t2_1",
            text: "We collect names, addresses, dates, and the treaty title, not the gritty details of who hogs the charger. Records auto-expire in a year unless renewed, and you can nuke them sooner.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Specific data limits show care, but vision feels technocratic."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Narrow collection helps, yet audit power must stay enforceable."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clarity on fields collected builds trust and speeds compliance."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "You can opt out entirely by declaring \"no external mediation\" on a postcard. That flags your block for education, not enforcement, and your living-room debates stay sofa-confidential.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Opt-out promises risk accusations of undercutting program goals."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Voluntary pathways balance liberty with neighborhood order."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Opt-outs complicate recordkeeping and cross-street coordination."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We know data is a nosy raccoon. That's why Justice is drafting fines for any peeking, plus audit trails that tattle louder than a screen-time timer if someone misuses info.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Admitting risk without fixes exposes the plan to privacy critiques."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Acknowledging threats enables stronger guardrails and penalties."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caution may slow implementation and staff training."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We're not building a national pillow-fort registry, not even a tasteful mini-series. If a rumor says otherwise, it can request records from our Open Inbox and receive a confetti-based reply.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Confident denial can steady nerves for supporters and wavering moderates."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissing concerns invites judicial scrutiny if incidents occur."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances risk complacency and weaken data minimization discipline."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
