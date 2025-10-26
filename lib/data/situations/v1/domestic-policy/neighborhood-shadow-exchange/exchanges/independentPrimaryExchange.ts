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
      text: "Does the Neighborhood Shadow Exchange build empathy on our blocks, or spawn forms, consent fog, and Friday rushes to return mismatched shadows?",
      answers: [
        {
          id: "a_root_1",
          text: "I challenge the idea that shadows are hoarded property; they’re neighborly tools. Sharing outlines for a week lowers suspicion and raises empathy, and no one loses their light.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.StrongPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "The President welcomes shared outlines to foster empathy."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Treasury warns markets against confusing light with money."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Justice appreciates the civil liberties framing."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "HHS cautions that tone should include public health basics."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "There is no shadow tax, no silhouette bonds, and we’re not collateralizing noon. Fiscal rumors are spreadsheet cosplay, not policy, and they won’t appear by Friday.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.Neutral,
            outcome4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He rejects framing the program as taxation or bonds."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Treasury is relieved the answer denies any shadow tax."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice notes denial leaves gray areas in enforcement."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "HHS sees fiscal focus as sidelining wellness guidance."
              }
            }
          }
        },
        {
          id: "a_root_3",
          text: "Shadow custody law is untested, and courts may treat borrowed outlines like umbrellas, not identities. We’ll publish guidance so Friday returns aren’t a courtroom parade.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He worries legal caveats may chill neighborly swaps."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Treasury dislikes ambiguous property analogies."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Justice supports clear notice on unsettled custody law."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "HHS prefers legal talk not to spook participants."
              }
            }
          },
          followUpId: "q_sec_legal"
        },
        {
          id: "a_root_4",
          text: "On safety: swapped silhouettes don’t affect mood, health, or vitamin D vibes. We designed consent cues and return windows so blocks can trade kindly and get Fridays back.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.SlightPositive,
            outcome4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He dislikes safety talk eclipsing community spirit."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Treasury notes reassurances do not address fiscal optics."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice worries safety claims may mask due process gaps."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "HHS welcomes reassurance on mood and hygiene."
              }
            }
          },
          followUpId: "q_sec_health"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_legal",
        text: "On consent and custody: if a borrowed silhouette wanders, who owns the outline, and how do neighbors fix Friday mismatches without turning stoops into pop-up courts?",
        answers: [
          {
            id: "a_sec1_1",
            text: "We’re issuing plain-language rules: the person keeps identity, the block stewards the outline. A consent tag travels with the shadow, and disputes use free mediation, not a gavel.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes plain rules to reduce stoop disputes."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury warns rules must avoid implying shadow assets."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice values clear custody standards for swaps."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS wants any rules to include stress-reduction tips."
                }
              }
            },
            followUpId: "q_ter_legal"
          },
          {
            id: "a_sec1_2",
            text: "Let’s not turn a weeklong pilot into porch Law School. We’re gathering data, then we’ll patch the leaks before anyone files a writ on a welcome mat.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes dismissing residents’ consent questions."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury favors deflection away from market speculation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice dislikes minimizing unsettled legal issues."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS appreciates avoiding panic while pilots start."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "No, a mismatch won’t trigger fines or confiscations. Friday is for returns, not raids, and the only citation we’re writing is a reminder card with a smiley.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.Neutral,
            outcome4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He fears blunt denials could erode local trust."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Treasury backs denial of fines and confiscations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice notes denial may undercut needed guidance."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS worries strict denials may deter voluntary care."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "Treating silhouettes like stock certificates misses the point. Stewardship beats ownership here, and neighbors can set commonsense swap rules at the block level.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.StrongPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He applauds challenging commodification of silhouettes."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury rejects framing shadows as certificates."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice sees challenge rhetoric lacking procedural detail."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS likes reframing to focus on community empathy."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_health",
        text: "On safety and sanity: are borrowed silhouettes hygienic, how will kids and night-shift folks handle gaps, and who manages Friday chaos on busy blocks?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Public health cleared silhouettes as mood-safe and germ-neutral. We built kid-friendly cues and after-dark check-ins, and Friday flow captains keep lines orderly without whistles.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.SlightPositive,
            outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He welcomes clear health sign-offs to calm blocks."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury cautions health claims not to imply new costs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice asks that health guidance respect privacy."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "HHS affirms hygiene and mood safety of swaps."
                }
              }
            },
            followUpId: "q_ter_metrics"
          },
          {
            id: "a_sec2_2",
            text: "First days may feel awkward; a tall shadow on a tiny stoop draws stares. We budgeted for extra volunteers and clearer cue cards to smooth the swap choreography.",
            type: AnswerType.Admit,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.ModerateNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.ModeratePositive,
            outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He accepts awkwardness but wants faster fixes."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury supports low-cost adjustments over funding."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice notes awkward swaps can trigger disputes."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS values transparency about early friction."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "No fees, no tickets, and no shadow curfews. Participation stays voluntary, and night-shift residents get flexible windows so life and light can coexist.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.Neutral,
            outcome4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He rejects punitive vibes; keep it voluntary."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Treasury endorses denying fees and tickets explicitly."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns denials must align with ordinance powers."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS worries denials may confuse safety messaging."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "If your block wants a different rhythm, local councils can remix it. The pilot sets guardrails, not a metronome, and we’re listening for better beats.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He dislikes deflection; locals need options spelled out."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury prefers deflection not to hide budget impacts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice supports local councils tailoring procedures."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS urges planning for Friday crowd management."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_legal",
        text: "If silhouettes are mishandled, will patrols stop people over outline loans, and will Justice issue guidance to prevent doorstep detentions for borrowed shadows?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Guidance will say an outline is not probable cause. We’ll train patrols to ask for consent tags only when there’s a real complaint, and to de-escalate porch disputes.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He supports guidance limiting stops over outlines."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury sees minimal fiscal risk in civil guidance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice will codify that outlines aren’t probable cause."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS asks that guidance consider wellness during checks."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We’re not authorizing stop-and-shadow tactics. No checkpoints, no silhouette frisking, and no database of who borrowed whose outline.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.Neutral,
            outcome4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He opposes any stop-and-shadow tactics outright."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury approves clarity that avoids new spending."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns blanket denials need precise directives."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS fears fear-based policies harm community health."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "Mediation teams arrive with clipboards, not cuffs. If a swap goes sideways, the first call is to the hotline, not a siren.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.SlightPositive,
            outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He prefers mediation over punitive approaches."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury worries mediation teams could add costs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice notes mediation requires legal parameters."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "HHS welcomes de-escalation and non-carceral teams."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Let’s not invent a panic to solve. Fear thrives in the dark; the policy uses daylight rules and neighborly consent that can be seen and verified.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.StrongPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He challenges panic narratives that breed profiling."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury rejects rhetoric that could unsettle markets."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice dislikes dismissing risks without evidence."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS cautions against rhetoric that heightens anxiety."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_metrics",
        text: "By next Friday, what measurable gains justify the pilot—fewer disputes, calmer stoops—and what costs hit if blocks need swap coordinators or hotline staff?",
        answers: [
          {
            id: "a_ter2_1",
            text: "We’ll publish metrics: fewer noise complaints, shorter porch arguments, and more cross-block chats. Targets are modest—single-digit dips—but meaningful for trust.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He favors publishing calm, stoop-level metrics."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury wants metrics without implying new levies."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice supports tracking disputes and due process."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS asks that metrics include wellness indicators."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "There’s no new tax hiding under the streetlamp. Coordination funds come from existing civic grants, and the lights remain blissfully un-mortgaged.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.Neutral,
            outcome4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes fiscal rumors distracting from outcomes."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury welcomes denial of any hidden taxation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice fears denials could obscure rights reporting."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS worries rumors can raise stress on blocks."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "If lines snarl, we’ll extend hours and add volunteers; if it flops, we’ll sunset it. We’d rather print a retraction than pretend a bad idea casts a good shadow.",
            type: AnswerType.Admit,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.ModerateNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.ModeratePositive,
            outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He accepts hiccups but insists on fixes."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury warns adjustments could strain budgets."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice backs extending hours to reduce conflict."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS prefers resources targeted to Friday surges."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "Costs are capped, and any block can opt out. Residents won’t pay a dime for tags, and the hotline is staffed by humans, not a maze of beeps.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.SlightPositive,
            outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He supports opt-outs but demands transparency."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury needs caps grounded in real cost models."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice insists opt-outs preserve legal clarity."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "HHS supports assurance and choice to reduce strain."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
