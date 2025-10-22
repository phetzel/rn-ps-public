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
      text: "With subpoenas flying over Secret Santa pickles-for-memos and forged notes, who baked that office culture, and who’s about to be ribboned up as the scapegoat?",
      answers: [
        {
          id: "a_root_1",
          text: "I’m not here to litigate condiment lore; presidents tackle big mustards, not pickles. Elf Oversight handles gift drama, and I’m focused on governing.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Staying above petty details reinforces executive focus."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection leaves State owning a mess without clarity."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Vagueness complicates evidentiary pathways for DOJ."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "We categorically deny memo-for-pickle swaps; those jars were ceremonial brine tokens, and the “memos” were decoy morale-drill sheets vetted by compliance.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Passing blame erodes credibility at the top."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Firm denial signals institutional control and resolve."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Minimizing market effects ignores jar-price volatility."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "Unlabeled jar trading spooks the Fermented Commodities Index. We challenge any pickle economy that launders risk behind novelty bows and holiday euphemisms.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Picking fights invites more ethics heat than answers."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Market vigilance reassures investors during odd news."
              }
            }
          }
        },
        {
          id: "a_root_4",
          text: "Subpoenas went to trace chain-of-custody and who forged what. We’re following the brine, not the buzz, and evidence—not carols—will decide accountability.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Detailing probes risks overexposure from the podium."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Specifics help prosecutors map facts and secure chain."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Acknowledging subpoenas can unsettle sensitive markets."
              }
            }
          },
          followUpId: "q_sec2"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "If “ceremonial brine” and decoy drills were real, who signed off, what guardrails failed, and are interns becoming scapegoats for manager decisions?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Approvals followed policy; no one authorized trading documents for snacks, ceremonial or otherwise. The suggestion that interns were cover stories is simply wrong.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Avoiding ownership fuels a perception of distance."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Policy-consistent denial steadies a rattled bureau."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uncertainty around jars rattles niche markets."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dodging sign-offs weakens prosecutorial clarity."
                }
              }
            }
          },
          {
            id: "a_sec1_2",
            text: "We admit festive judgment blurred lines in a few cubicles; that’s on leadership to fix. We’re auditing sign-offs and retiring any cutesy protocol that invites confusion.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Leadership appears reactive rather than directing."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning lapses aids fair charging and transparent fixes."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admission suggests management tolerated sloppy rules."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Independent reviewers are combing rosters and receipts. No junior staff will be scapegoated while decision-makers hide behind tinsel, and corrective actions are underway.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calm tone projects steadiness amid seasonal drama."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Minimizing risks leaves market concerns unanswered."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft-pedaling failures undermines internal discipline."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_4",
            text: "The question presumes a swap economy we don’t recognize. Challenge accepted: show a single directive equating pickles with paper, and we’ll publish it by sundown.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Confrontational tone invites political blowback."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Challenging jar markets protects financial norms."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "You say subpoenas speak louder than carols—did you map the memo’s chain from desk to jar, and are we heading for charges or festive wrist slaps?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Forensic timelines map every handoff and each forged scribble. When the facts meet the statutes, decisions follow the law, not the holiday playlist.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Leaning legal shifts leaves leadership looking aloof."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear chain maps raise charging confidence and trust."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "We won’t narrate an active probe like it’s a parade. When filings are public, you’ll get them, minus the jingling commentary and rumor confetti.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Briefly stepping back can de-escalate the spectacle."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Stonewalling from Justice pressures State to answer."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity stirs needless volatility in odd markets."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "Process is deliberately dull: logs, seals, and custody tags. If it looks like a crime and quacks like forgery, accountability won’t be seasonal or decorative.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Process talk softens heat on the West Wing."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dullness still signals risk to niche investors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over-reassurance risks appearing complacent."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "As authorized for Justice, I confirm subpoenas target forged-note origins and jar provenance. No names tonight while interviews continue and evidence is logged.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Authorizing details from here can look meddlesome."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confirming scope may narrow leverage in negotiations."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparency from Justice lightens State’s burden."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Justice
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter1",
        text: "Name names without wrapping paper: who greenlit the “morale drill” decoys, and how many jars actually moved during this so-called festive barter window?",
        answers: [
          {
            id: "a_ter1_1",
            text: "There is no directive equating jars with documents, and the decoys were never authorized for circulation beyond training rooms. Anything else is rumor dressing.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Distance from facts reads as evasive leadership."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "A clear denial shores up departmental boundaries."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Skirting costs ignores quirky market ripples."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lack of names limits prosecutorial precision."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We can admit a supervisor tolerated cutesy labels past their shelf life; that leniency is being addressed with training that uses actual policy words.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting drift reflects poorly on oversight."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Partial candor helps prosecutors target the right tier."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Conceding tolerance suggests weak managerial control."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "A paper trail of training memos and sign-off logs is being released to oversight. Inventory queries show jar counts, not contents, and that’s being reconciled.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Detail focus can overshadow strategic leadership."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Documentation strengthens subpoenas and charges."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Anyone who signed something silly will sign the correction in ink, not cranberry gel. The culture is tilting back toward grown-up, minus the glitter.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassurance steadies headlines but not evidence."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Glib tone risks underestimating fiscal spillovers."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Promises ring hollow without accountable names."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Are the pickles themselves evidence, and will filings weigh jar-market volatility sparked by memo rumors when you calculate harm and seek remedies?",
        answers: [
          {
            id: "a_ter2_1",
            text: "We challenge the idea of a jar-market free-for-all driving policy; speculative brine bubbles don’t rewrite statutes, even if they pop loudly.",
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
                reaction: "Overemphasis on markets seems detached from ethics."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Asserting standards calms traders eyeing brine assets."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Samples and jars are cataloged for trace compounds and prints. Economic ripples are noted, but exposure turns on acts and intent, not pickle futures.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical talk can read as hiding from culpability."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Forensic cataloging improves credibility in court."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Detailing tests may unsettle quirky commodity bets."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "We deny any suggestion our staff engineered market swings; nobody in State runs a condiment desk, despite the memes and the snackable conspiracy boards.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denials risk backlash if evidence surfaces."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Strong denial protects morale and diplomatic posture."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pushback can hamper cooperation with investigators."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "If this rattled investors, guidance will clarify that snacks are not securities and memos are not coupons, restoring the pulse to something less fizzy.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Offering guidance shows responsiveness to public risk."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Policy hints can spark speculation and volatility."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances without names look like soft-pedaling."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
