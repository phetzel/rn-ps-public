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
      text: "How will 'Dollar Now Barter-Optional' actually price a couch, a casserole, or a cat-sitting IOU, and who audits the memes before the acceptance deadline?",
      answers: [
        {
          id: "a_root_1",
          text: "Markets already put froth premiums on lattes; pricing goat hugs just cleans the mirror. Forcing bids on the unpriceable drags hidden value into daylight without fearing a little comic chaos.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Bold framing nudges creative markets toward action."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Data gaps could invite volatile barter valuations."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Signals risk of confusing tax rules with leniency."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Treasury will post reference bands: couches via the Comparable Sofa Census, casseroles by Ingredient Cost plus Effort Minutes, and cat-sits at neighborhood medians. Meme receipts get time-stamped hashes.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Over-specifying can dull the intended market jolt."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear bands accelerate compliant pricing behavior."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Clarity helps, but legal boundaries may blur."
              }
            }
          },
          followUpId: "q_s1"
        },
        {
          id: "a_root_3",
          text: "Justice denies that barter buys innocence. A lasagna cannot quash a subpoena, and no tractor ride outruns due process. Payments satisfy taxes, not charges, and that wall stays high.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Hard lines may stifle the experiment’s discovery."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Strict denial slows adoption in rural barter zones."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Affirms prosecutorial independence and equal rules."
              }
            }
          },
          followUpId: "q_s2"
        },
        {
          id: "a_root_4",
          text: "Audits won’t rummage your linen closet. Expect light-touch checks and a clear app, not clipboard zealotry. If you can photograph it, you can document it, and most folks will never see an audit.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Reassurance risks lowering the program’s urgency."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Light-touch audits still preserve core oversight."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Too soft a tone could embolden boundary-testing."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_s1",
        text: "Walk us through the valuation math: how does a sagely couch, a heroic casserole, or a cat-sitting IOU land a price, and when exactly do memes stop being accepted?",
        answers: [
          {
            id: "a_s1_1",
            text: "Benchmarks drive it: couches map to the Household Fixtures Index, casseroles to Ingredients+Labor Minutes, and IOUs to sitter medians. Memes require provable reach and originality attestations in the annex.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Ambition here supports the policy’s experimental arc."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Benchmarking improves confidence in exchanges."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "This invites misvaluation that strains enforcement."
                }
              }
            },
            followUpId: "q_t1"
          },
          {
            id: "a_s1_2",
            text: "Per Treasury’s Section 4.2, memes are accepted until Fiscaltober 31 at 11:59 Civic, with a 24-hour grace for outages. Filenames must carry hash IDs, and reposts need creator consent on file.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModerateNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tight deadlines can alienate skeptical communities."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rigid cutoff risks operational backlogs and errors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear windows help standardize evidentiary review."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury
          },
          {
            id: "a_s1_3",
            text: "If your casserole can’t clear a bid, perhaps it’s priceless only to your aunt. This forces candor: either bake better or pay cash, and that’s a helpful feedback loop for taste and taxes.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissive tone could sour public cooperation fast."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Incentivizes realistic self-pricing by participants."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pushback may escalate disputes into casework."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "No one is forced to hawk a couch to pay a fee. The app shows suggested ranges, flags wild entries, and always offers a 'pay cash instead' escape hatch. The aim is clarity, not yard‑sale panic.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Flexibility maintains public goodwill and patience."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much ease can dilute pricing discipline."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft edges may hamper timely accountability."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_s2",
        text: "On audits, who shows up at the door—the Tax Inspectors of Miscellany or the Prosecutors of Feelings—and can casseroles sway cases despite your denials?",
        answers: [
          {
            id: "a_s2_1",
            text: "Justice keeps lanes separate. Tax auditors verify claims; prosecutors handle crimes. A casserole is evidence only of dinner, not innocence, and anyone selling verdicts for goat hugs will face charges.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Separation talk may dampen the program’s momentum."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Siloing could complicate coordinated compliance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear lanes protect due process and fairness."
                }
              }
            },
            followUpId: "q_t2"
          },
          {
            id: "a_s2_2",
            text: "Audit selection fires on risk flags: oversized valuations, recycled memes, or barter chains that never close. Reviews start remote via your BarterLog and escalate only if numbers fight physics.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Transparent criteria bolster legitimacy and trust."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Risk-based audits improve efficiency and yield."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Algorithmic flags can introduce bias concerns."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "We’ll publish the audit playbook after public comment so we don’t beta-test on your grandma’s end table. Better to get it right than cosplay certainty this afternoon.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Delay on details erodes confidence in execution."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Unfinalized playbooks slow partner readiness."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Consultation ensures enforceable, durable rules."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Auditors will not taste-test stew or nap-test couches. Photos, receipts, and a short sworn note beat drama. Keep honest records and an audit is a brisk jog, not a marathon.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Humor may undercut the seriousness of oversight."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear boundaries reduce audit scope creep risks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limits ensure focus but may miss subtle fraud."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_t1",
        text: "Your meme annex sounds like a trap; what counts as 'provable reach,' who certifies 'originality,' and can a viral goat wink outrank a thoughtful spreadsheet?",
        answers: [
          {
            id: "a_t1_1",
            text: "Provable reach means platform‑agnostic proofs: cryptographic impressions, independent timestamps, and bot‑scrubbed counts. Originality uses similarity scores plus creator attestations reviewed by a panel.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical framing may dull broader narrative impact."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Verifiable metrics anchor valuation integrity."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Complex proofs can obscure deceptive behavior."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "If a goat wink funds streetlights faster than a spreadsheet, the market has spoken. This policy lets cultural value stop hiding behind eye‑rolls and start paying its civic rent.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Competitive framing energizes the innovation wave."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Showmanship can destabilize predictable intake."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Spectacle may crowd out sober legal scrutiny."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We deny that cringe equals fraud. Bad taste is not a crime; fabrication is. Justice steps in only when numbers are forged or bots are hired, not when puns take the long way home.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Defensive posture risks alienating creators."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denials can freeze helpful market experimentation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Protects good-faith actors from taste-policing."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We won’t crown a Meme of the Month. The annex is calibration, not a talent show, and we’ll iterate after pilot data rather than decree aesthetic law from a windowless room.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Avoiding rankings may sap public excitement."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Less guidance could widen pricing dispersion."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Neutrality reduces claims of selective favoritism."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_t2",
        text: "Spell out the legal safeguards: appeals, penalties, and how you stop barter rules from becoming a backdoor plea market for the well-connected with vintage tractors.",
        answers: [
          {
            id: "a_t2_1",
            text: "We deny any barter‑to‑justice pipeline. Charging and sentencing are firewalled from revenue collection, with discipline for violators and public logs to expose cozy detours.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard denial narrows room to pilot accountability."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Zero-tolerance stance can scare off participants."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Strong message defends equal justice standards."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Tax disputes get a fast‑track appeal: 30 days to contest valuation, independent reviewers, and plain‑language rulings. Penalties scale with intent, and first‑time errors default to education.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Process clarity strengthens reform credibility."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Appeals pipeline curbs revenue and backlog risks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Expedited tracks may compress needed review time."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Whistleblower shields and anonymized audit stats keep sunlight on the process. If a VIP tractor winks at a prosecutor, expect a report and consequences, not a nod and a wink.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance helps tone but reduces urgency."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Protections add cost and may slow detections."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Whistleblowers improve case quality and reach."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We admit gray zones will surface—barter is messy by design. That’s why the wildest bits sunset unless data supports them, and cities can A/B test before anything becomes permanent.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting gray areas invites political blowback."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candor builds private-sector planning discipline."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledged ambiguity complicates prosecutions."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
