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
      text: "Your moss-credit plan promises climate gains but turns patios into moss audits, how will you verify results without burying people in forms?",
      answers: [
        {
          id: "a_r1",
          text: "I challenge the landscaping label - moss is a tiny unionized workforce trapping carbon between barbecues. Measure it, reward it, and watch the backyard GDP finally clock in.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Framing moss as labor signals resolve and boosts confidence."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Legal staff worry rhetoric outpaces statutory footing."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Markets hate surprise humidity. We'll pace auctions quarterly, set a gentle floor, and bundle credits for apartment dwellers. Nurseries get pre-cert lanes and pocket rakes, not paperwork avalanches.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Critics say this sounds technocratic and distant."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Predictable pacing reassures markets and families alike."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Backyard tensions stay low. We're training community marshals-plus conflict-honking geese-and issuing reflective vests for nosy neighbors. Most disputes fizzle at the first honk.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Promises of calm feel soft against potential conflicts."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Community training plan reduces fears of escalation."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Additional outreach implies hidden costs to small sellers."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Our authority traces to the Ancient Seaweed Accord, misfiled under moss by a damp clerk. Courts may snicker, but precedent is precedent, and we'll tighten it with guidance.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Admitting wobble may undercut overall authority."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Owning the precedent reads candid and legally prudent."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Neighbors may fixate on federal role despite caveats."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "On the market side, how will auctions prevent a soggy moss bubble, and what changes should nurseries expect when bundling credits for city renters?",
        answers: [
          {
            id: "a_s1_1",
            text: "Auctions launch with a soft floor and caps to curb hoarding. Certified nurseries can list lots weekly, and bundle packs let buildings buy shade-loving credits without scalpers muscling in.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Opponents see micromanagement of a quirky new market."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Soft floors and caps steady expectations for bidders."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Complex rules could invite avoidable disputes."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "The only bubble is the one on a spray bottle. Speculators can't profit off shade; real growers win because moisture doesn't obey hype cycles.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Punchy pushback energizes supporters and media interest."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissiveness risks missing early warning signs."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Snark may inflame local tensions during audits."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "City renters tap building cooperatives; no one needs to raise moss in a cereal bowl. Registration is ten minutes, not a weekend lost to spreadsheets.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Vague assurances read as hand-waving on market risks."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Co-op access lowers friction for renters and neighbors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity leaves room for arbitrage and gray zones."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If someone invents MossCoin, they can brief the Finance Goblins. We're sticking to boring, auditable auctions while they chase imaginary lichen on the blockchain.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection reads evasive on financial safeguards."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear oversight for new tokens could curb fraud early."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signals of uncertainty unsettle auction participants."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Neighborhoods fear HOA turf wars and patio audits with honking oversight; what concrete steps keep this from federalizing lawns or fueling doorbell drama?",
        answers: [
          {
            id: "a_s2_1",
            text: "De-escalation first: bright boundary flags, shared tape measures, and, yes, trained geese before anyone phones a lawyer. A 24/7 hotline reroutes squabbles to mediators, not sirens.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Critics say flags and vests trivialize real concerns."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Bright-line protocols help prevent porch confrontations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Light touch may leave loopholes for persistent actors."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Protocol is simple: timestamped photos, chalked perimeters, and an HOA liaison list. Disputes trigger a 72-hour cooling-off and a neutral visit, not a citation parade.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Checklists can still feel like creeping bureaucracy."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Simple documentation reduces transaction friction."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uniform steps risk appearing federally intrusive."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid rules could trigger needless legal wrangling."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "No, we're not federalizing your thyme patch. There's zero authority or appetite to dictate lawn art, patio furniture, or the number of garden gnomes.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Downplaying scope may sound dismissive to wary owners."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong remedies deter abuse without criminalizing yards."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Financial clarity remains thin for edge credit cases."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Edge cases land in small-claims or arbitration, and we'll publish model neighbor agreements. We'd rather write fewer rules and more checklists than litigate every patch.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Concessions may be read as weakness on oversight."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Admitting limits builds credibility on enforcement."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Local disputes might linger without stronger tools."
                }
              }
            },
            followUpId: "q_ter2"
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter1",
        text: "Walk us through verification tech: will the moss app sniff humidity, track geolocation, and hoard backyard data, or does it stay politely out of people's lives?",
        answers: [
          {
            id: "a_t1_1",
            text: "The app stores hashed geotags, moisture readings from a cheap meter, and patch photos. No faces, no interiors, and data ages out after 12 months unless you opt to keep it for resale.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Skeptics fear hidden tracking despite assurances."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Hashed data and minimization align with privacy norms."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Data disputes could spill into neighborhood conflicts."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "No drones, no sneaking through your blinds, and no surprise inspectors at brunch. It pings only during your chosen window, then goes quiet like a well-watered rock.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Some see safety claims as soft and unverifiable."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "No-drone pledge directly eases doorbell-camera anxieties."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Light-touch design may complicate credit audit trails."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "It doesn't listen to conversations, scrape contacts, or map your grill habits. If it can't see moss, it shrugs and asks you to try again in daylight.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denials can backfire if bugs or leaks emerge."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear boundaries limit scope creep and fraud exposure."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overbroad assurances risk litigation if standards slip."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Neighbors may distrust blanket denials during audits."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We're allergic to soggy data. If anyone proposes biometric dew-tracking, we'll send them to the Department of Overthinking and a very dry room.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection suggests reluctance to confront tough tradeoffs."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Rejecting data hoards reassures privacy-first communities."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Less data might weaken verification confidence."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Legally, if the Seaweed Accord is a wobbly stool here, what keeps the program upright, and when will homeowners see clear, challenge-proof rules?",
        answers: [
          {
            id: "a_t2_1",
            text: "Yes, the stool wobbles, but we've got three legs: the Accord, a Clean Yard Sinks statute, and voluntary contracts. We'll seek a clarifying bill before the first big sale cycle.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Acknowledging wobble fuels critics of the program."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Triangulating authority reads careful and defensible."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Investors dislike legal uncertainty around credits."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Draft guidance posts next month, followed by 45 days of public comment and a line-by-line FAQ. There's an ombudsmoss office for weird cases like rock gardens and fairy doors.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process talk risks sounding slow and bureaucratic."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Predictable timelines help businesses plan compliance."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delays could prolong neighborhood ambiguity."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Nobody's getting cuffed for soggy pavers. This is civil, education-first, with penalties reserved for staged or spray-painted moss, not honest miscounts.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soft language may erode urgency and clarity."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calm tone reduces fears of heavy-handed enforcement."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances without citations invite tests in court."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If critics dislike a low-cost, habitat-friendly sink, they're welcome to propose something cleaner that fits on a patio. Until then, we'll keep it clear and workable.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Direct challenge projects confidence and leadership."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimal legal nods may look cavalier toward precedent."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontational tone could unsettle market partners."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
