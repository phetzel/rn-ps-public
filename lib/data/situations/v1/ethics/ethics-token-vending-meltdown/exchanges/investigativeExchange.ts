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
      text: "Did the President know ethics waivers were dispensed for pizza, and who coded the slot? Walk us through procurement crumbs and Justice logs.",
      answers: [
        {
          id: "a_root_1",
          text: "The President will challenge the vending machine to an ethics duel, unplugging shortcuts and outlawing snack-based waivers. Any badge that beeped for pizza will be audited, refunded, and retired.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Confronting the rogue kiosk signals zero tolerance for snack corruption."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Speculation or jokes can compromise active reviews and cases."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Confusion would heighten urban concern about waiver safety."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_2",
          text: "Justice is cross-referencing kiosk logs, waiver timestamps, and repository commits to pinpoint who minted what and why. Preliminary mappings post today, with subpoenas for any sauce-scented anomalies.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "This framing undercuts my authority and fuels the vending sideshow."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Documented facts and precise scope give us firm legal footing."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Mixed signals could trigger unnecessary clinic call surges."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "HHS is issuing emergency guidance clarifying pizza is not, was not, and will not be ethical tender. Urban residents will see a clean rule, a hotline, and a recall for dubious tokens.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Defensive posture here risks ceding ground to a novelty narrative."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Overpromising access could violate privacy and chain-of-custody."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Plain standards reassure cities that waivers aren’t food-tender."
              }
            }
          }
        },
        {
          id: "a_root_4",
          text: "The President did not authorize snack-based waivers, did not trade slices for favors, and did not tell a machine to wink at conflicts. Anyone who did will meet auditors before dessert.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Such denial tension invites more questions than answers right now."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Speculation or jokes can compromise active reviews and cases."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear health guidance calms residents and deters rumor spirals."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "On procurement: who picked the Ethics Token vendor, who greenlit pizza-as-tender, and where are the hush-pizza ledgers stored and signed?",
        answers: [
          {
            id: "a_sec1_1",
            text: "HHS will clarify in writing that pizza is not legal or ethical currency, and any waiver tied to it is paused. Residents get plain-English notices and zero-stress swaps for clean tokens.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This narrows my room to lead while the machine dominates headlines."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overpromising access could violate privacy and chain-of-custody."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Plain standards reassure cities that waivers aren’t food-tender."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "Under the Justice Ministry’s standing order, I am authorized to confirm procurement files, bid records, and ledger hashes are intact, sequestered, and ready for oversight review by morning.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "I will lead decisively and show that policy, not pizza, governs ethics."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Methodical disclosure strengthens our litigation posture."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Confusion would heighten urban concern about waiver safety."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Justice
          },
          {
            id: "a_sec1_3",
            text: "The vendor, OmniVend Ethicos, won a micro-bid for kiosks, not waiver minting. The pizza toggle came via a later patch, which is precisely what internal and external auditors are dissecting now.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Defensive posture here risks ceding ground to a novelty narrative."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Documented facts and precise scope give us firm legal footing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mixed signals could trigger unnecessary clinic call surges."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "We’re less interested in who signed for the stapler and more in who coded a pepperoni payment path. The paper trail exists; we’ll publish it after we scrub the grease and sarcasm.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Such denial tension invites more questions than answers right now."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Speculation or jokes can compromise active reviews and cases."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear health guidance calms residents and deters rumor spirals."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Our code dive shows a 'pepperoniFlag' and a fastWaiver() path. Who pushed that commit, did senior aides merge it, and why was pizza treated as priority?",
        answers: [
          {
            id: "a_sec2_1",
            text: "The Justice tech team is correlating commit authorship, kiosk serials, and waiver timestamps to identify the flow. We’ll release a readable map once counsel clears the privacy scrub.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This narrows my room to lead while the machine dominates headlines."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Methodical disclosure strengthens our litigation posture."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Confusion would heighten urban concern about waiver safety."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "No senior aide approved a pizza payment path, and no policy ever treated toppings as clearance speed. If someone smuggled that in, they did it without authority and against guidance.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Such denial tension invites more questions than answers right now."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Speculation or jokes can compromise active reviews and cases."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear health guidance calms residents and deters rumor spirals."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "If a variable called pepperoniFlag thinks it can outrun oversight, we’ll refactor it in daylight and name the patch Broccoli. Code that gamed ethics will get rolled back and logged.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Confronting the rogue kiosk signals zero tolerance for snack corruption."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overpromising access could violate privacy and chain-of-custody."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mixed signals could trigger unnecessary clinic call surges."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "We should have flagged novelty payments the moment they surfaced in testing. We missed it, and that’s on us. That is why the kiosk is frozen and code forensics are underway.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Defensive posture here risks ceding ground to a novelty narrative."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Documented facts and precise scope give us firm legal footing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Confusion would heighten urban concern about waiver safety."
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
        text: "If pizza isn’t ethical tender, what replaces it, and how will urban residents get clarity without needing a sauce-to-stamp conversion chart?",
        answers: [
          {
            id: "a_ter1_1",
            text: "We’re rolling out a clear, boring standard: only government-issued tokens count, period. We’ll mail pocket cards, post signage, and replace any tainted tokens at zero cost to residents.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This narrows my room to lead while the machine dominates headlines."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Speculation or jokes can compromise active reviews and cases."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Plain standards reassure cities that waivers aren’t food-tender."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "A rapid rulemaking will define approved tokens, disallow barter, and require barcode validation at kiosks. Draft in 72 hours, public comment in one week, enforcement after training.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Such denial tension invites more questions than answers right now."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Methodical disclosure strengthens our litigation posture."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mixed signals could trigger unnecessary clinic call surges."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "We won’t be publishing a pizza taxonomy because there won’t be one. If it’s not an issued token, it won’t buy anything, not even a joke waiver or a commemorative napkin.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Defensive posture here risks ceding ground to a novelty narrative."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overpromising access could violate privacy and chain-of-custody."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear health guidance calms residents and deters rumor spirals."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "We’re challenging every agency to hit zero-snack loopholes in thirty days, with weekly scorecards. If a workaround survives that gauntlet, we’ll retire the whole machine.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "I will lead decisively and show that policy, not pizza, governs ethics."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Speculation or jokes can compromise active reviews and cases."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confusion would heighten urban concern about waiver safety."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Will you release unredacted Justice logs mapping each minted waiver to each slice, or are we stuck with crust-only summaries and mystery olives?",
        answers: [
          {
            id: "a_ter2_1",
            text: "We’ll release logs that map machine IDs to waivers and commit hashes, with necessary privacy redactions. A reproducible methodology and checksum will let anyone verify the totals.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This framing undercuts my authority and fuels the vending sideshow."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Documented facts and precise scope give us firm legal footing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Mixed signals could trigger unnecessary clinic call surges."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "We will not dump unredacted logs that expose private data or active inquiries. That is not transparency; that is sabotage. Verified summaries and auditor access will suffice.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Such denial tension invites more questions than answers right now."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overpromising access could violate privacy and chain-of-custody."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear health guidance calms residents and deters rumor spirals."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "An independent auditor will attest that the slice-to-waiver trail matches the public report, and residents can track fixes on a live dashboard updated daily.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defensive posture here risks ceding ground to a novelty narrative."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Speculation or jokes can compromise active reviews and cases."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Plain standards reassure cities that waivers aren’t food-tender."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "If someone claims a ghost pizza bought a waiver, bring the receipt. We’ll trace it live, on-camera, and retire every bogus token that shivers under the studio lights.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Confronting the rogue kiosk signals zero tolerance for snack corruption."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overpromising access could violate privacy and chain-of-custody."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confusion would heighten urban concern about waiver safety."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
