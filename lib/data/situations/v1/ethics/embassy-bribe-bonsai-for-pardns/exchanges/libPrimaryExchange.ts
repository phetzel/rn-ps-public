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
      text: "Leaked ledgers say State and Justice swapped quick immunities and 'honorary visas' for rare bonsai; were ethics pruned for perks, or is this theater?",
      answers: [
        {
          id: "a_root_1",
          text: "We didn’t swap justice for houseplants. Expedited reviews exist for security and statute, not shrubbery. A bonsai is a plant, not a pardon, and no plant dictates prosecutions.",
          type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "He relishes the absurd denial and projects command."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State bristles at being mocked over 'micro-ambassadors'."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice sees this as undercutting its sober posture."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Let’s not confuse cultural diplomacy with crime drama. The State Ministry engages citizens with art, music, and, yes, living symbols. Policy is made by people, not pots.",
          type: AnswerType.Deflect,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He dislikes the dodge and worries it looks complicit."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "State welcomes the pivot to culture as protective cover."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice fears optics of spin during an active probe."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_3",
          text: "Justice tracks immunities via a public docket with timestamps, reviewers, and criteria. We can walk you through that boring spreadsheet rather than a spicy bonsai fanfic.",
          type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He hates bean-counting that invites follow-up traps."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State sees timelines feeding critics of gift programs."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Justice approves fact focus that cools the headlines."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_4",
          text: "An independent ethics office is already clipping through the facts. If anyone tried to fertilize favors with gifts, it will be exposed quickly and addressed in the open.",
          type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He thinks calming talk surrenders the narrative now."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State worries reassurances sound like admissions."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Justice likes process talk but not the timing."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Your readout shows expedited immunities spiked the week bonsai shipments landed. Dates, approvals, who signed the paperwork—map the timeline without pruning blame?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Authorized by the Justice Ministry: docket 14-Q lists 27 expedite requests over six weeks; 9 approved, 18 denied, none tied to gifts by reviewer notes. A redacted audit log posts at 5 p.m.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes leading with authorizations tied to gifts."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State welcomes clarity to separate gifts from policy."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice resents the implied quid pro quo framing."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Justice,
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "The spike tracks to a cyber backlog fix, not botany. Requests moved from manual queue to auto triage on the 12th; criteria unchanged; all gift disclosures sit in a separate registry.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He sees tech excuses as weak against vivid ledgers."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State appreciates the backlog context softening blame."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice rewards precise dockets and traceable steps."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "We’re not mixing watering cans with warrants. Gift ledgers are handled by protocol staff, while immunities go through legal triage. They share a calendar month, not a motive.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He tolerates deflection but fears it fuels ridicule."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State worries jokes will trivialize compliance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice accepts the distancing, with caveats."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "If someone has a ledger alleging quid pro shrub, publish it in full. Selective fragments make memorable headlines and terrible evidence.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes challenging the premise to rattle questioners."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State dislikes daring critics to escalate leaks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice prefers not to litigate via taunts."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "State calls the bonsai 'micro-ambassadors.' How did gift intake, honorary visa ceremonies, and consular thank-yous intersect without letting graft climb the trellis?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Cultural gifts are handshakes with roots. They’re logged, quarantined, and displayed under ethics rules. Our visa honors celebrate people, not planters, and no pot has a stamp.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He thinks 'micro-ambassadors' invites late-night mockery."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "State enjoys rebranding that highlights soft power."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice dislikes cutesy terms amid legal scrutiny."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "Intake uses Form 602-Green; valuations by third-party botanists; protocol tracks custody; visas assessed by law. We’ll release the workflow and a scrubbed registry excerpt.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.MajorPositive,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He chafes at dry forms stealing his spotlight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State values the paperwork trail as a shield."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice applauds verifiable forms and audits."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_3",
            text: "We’ve commissioned a top-to-soil review of our gift pipeline with outside auditors. Where policy needs trimming, we’ll prune and show the clippings.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes promising reviews he can later claim as wins."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State fears a review implies guilt before findings."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice doubts optics of self-investigation mid-probe."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Calling a potted tree a bribe ignores the firewall between protocol and visas. It’s a punchline that wilts when you read the policy manual.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He worries a fighty tone hardens investigations."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State fears firewall talk sounds evasive."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice welcomes clarity on the legal boundaries."
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
        text: "On that audit, who signed off, how many expedites were reversed on review, and when will you publish the oversight timeline for public trust?",
        answers: [
          {
            id: "a_ter1_1",
            text: "The Compliance Director and the Deputy for Immunities signed; three of twenty-seven expedites were reversed after second-level review. The full timeline posts with the audit tonight.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He dislikes sharing the spotlight with auditors."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State values named sign-offs to reassure partners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice favors timestamps that survive court review."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "No one traded favors for foliage, and the audit found no gift-linked anomalies in case notes. The only spike was from a backlog purge after a software fix.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes a punchy denial to rally supporters."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State worries blanket denials age poorly."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice fears overstatement risks credibility."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "We’ll release the audit packet, reviewer matrix, and anonymized case paths so the public can trace every step without outing litigants or staff.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He thinks promises of packets sound bureaucratic."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State dislikes committing to timelines under pressure."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice appreciates orderly releases, if verified."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "We can’t litigate live with plant metaphors. Read the audit; if you still think ficus equals favoritism, we’ll bring a botanist and a lawyer to office hours.",
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
                reaction: "He sees deflection as weak against concrete dates."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State prefers narrowing topics to limit exposure."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns flippancy can anger investigators."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Will State release the gift registry and any 'micro-ambassador' memos, or are we pruning transparency to keep the arrangement artful?",
        answers: [
          {
            id: "a_ter2_1",
            text: "We’ll publish the registry with valuations, custody chain, and display locations, minus sensitive donor data. The symbolism memo will be released with standard redactions.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He dislikes ceding documents without leverage."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State supports publishing to calm foreign partners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice approves transparency that reduces rumor."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "We don’t hang policy from a bonsai branch. The registry is a museum list, not a lever, and we won’t stage-manage ethics for a press montage.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He fears dismissive tone looks slippery."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State likes distancing policy from pageantry."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice worries this framing invites subpoenas."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "Expect a transparency bundle this week: registry excerpts, training decks, and an FAQ that translates our plant puns into policy plain-speak.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.MajorPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes promising bundles that buy time."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State resists clock commitments without vetting."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice wants review before releasing sensitive files."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "If every ribbon-cutting is cast as a kickback, nothing will satisfy that narrative. We’ll meet the law and disclosure, not conspiracy fan fiction.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He enjoys a sharp pushback to energize base."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State fears antagonizing press and committees."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns rhetoric can chill cooperation."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
