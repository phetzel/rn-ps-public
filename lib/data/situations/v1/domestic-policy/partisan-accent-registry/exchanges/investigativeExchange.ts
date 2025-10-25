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
      text: "Who signed the checks for the Partisan Accent Registry, why are accuracy audits redacted, and did Justice warn internally this won’t survive in court?",
      answers: [
        {
          id: "r1a1",
          text: "I challenge both parties and the registry vendors to a Neutral Accent Duel: loser funds transparency. We’ll release the contracts and audits this week and let the facts enunciate themselves.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.StrongPositive,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "The President welcomes this bold, accountable approach."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Treasury warns of budget risk and market jitters."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "HHS sees benefits for clinics, access, and clear guidance."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Justice flags constitutional exposure and litigation risk."
              }
            }
          }
        },
        {
          id: "r1a2",
          text: "Initial payments are frozen pending a line-item review; no one gets paid for extra syllables. Treasury will post a readable ledger of vendor rates, audit costs, and who tried to bill us for premium r’s.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.StrongPositive,
            outcome3: OutcomeModifierWeight.StrongNegative,
            outcome4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "The President is concerned about legal and fiscal exposure."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Treasury welcomes transparency on rates and contracts."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "HHS flags resource diversion from core care delivery."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice notes likely injunctions and discovery headaches."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "r1a3",
          text: "Whatever the politics, assigned drawls won’t harm throats or wallets. HHS has clinics ready with free consonant boosters, vowel hydration stations, and refunds for any accidental tongue sprains.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.StrongPositive,
            outcome4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "The President sees avoidable risk and mixed priorities."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Treasury flags procurement gaps and volatility concerns."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "HHS supports data-driven clinics and patient protection."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice warns of enforceability issues and civil rights harm."
              }
            }
          }
        },
        {
          id: "r1a4",
          text: "Justice has cautioned that compelled party vowels likely flunk constitutional sniff tests. We advised a cooling period and won’t defend the registry unless it’s rebuilt to respect unscripted speech.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.StrongNegative,
            outcome2: OutcomeModifierWeight.StrongNegative,
            outcome3: OutcomeModifierWeight.SlightPositive,
            outcome4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "The President warns this invites confusion and blowback."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Treasury cautions revenue uncertainty from policy whiplash."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "HHS cautions on messaging fatigue and equity impacts."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Justice welcomes corrective steps consistent with the law."
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
        text: "Which vendors are cashing in on mandatory party drawls, how were per-syllable rates set, and did shell firms slip glitter vowels past procurement?",
        answers: [
          {
            id: "s1a1",
            text: "Bids came through the Standard Syllable Portal; per-syllable rates were capped and indexed to punctuation inflation. We’ll post the vendor roster, rate cards, and any familial commas hiding in footnotes.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightPositive,
              outcome2: OutcomeModifierWeight.SlightNegative,
              outcome3: OutcomeModifierWeight.StrongPositive,
              outcome4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "The President dislikes the opacity and potential backlash."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury notes fiscal prudence and clearer cost controls."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS worries about compliance strain on frontline clinics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice flags constitutional exposure and litigation risk."
                }
              }
            }
          },
          {
            id: "s1a2",
            text: "No glitter vowels, no shell firms, no secret umlauts. If someone tried to sneak sparkle into a contract, Treasury’s auditors scraped it off and mailed the invoice back in plain text.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongNegative,
              outcome2: OutcomeModifierWeight.StrongPositive,
              outcome3: OutcomeModifierWeight.SlightNegative,
              outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "The President is concerned about legal and fiscal exposure."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury flags procurement gaps and volatility concerns."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS supports data-driven clinics and patient protection."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns of enforceability issues and civil rights harm."
                }
              }
            }
          },
          {
            id: "s1a3",
            text: "If any vendor padded invoices with decorative diphthongs, I invite them to testify in daylight under a feedback mic. Bring your receipts and your consonants—no autotune allowed.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongPositive,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.StrongNegative,
              outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "The President appreciates decisive action and clarity."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury warns of budget risk and market jitters."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS welcomes relief funding and public health safeguards."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice sees First Amendment concerns and judicial pushback."
                }
              }
            }
          },
          {
            id: "s1a4",
            text: "Before any checks go out, HHS and Procurement will certify accents are ergonomic and non-irritating. We’ll publish safety attestations and clinic contacts for anyone with tickled larynxes.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.StrongNegative,
              outcome3: OutcomeModifierWeight.SlightPositive,
              outcome4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President sees avoidable risk and mixed priorities."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury welcomes transparency on rates and contracts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS cautions on messaging fatigue and equity impacts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice notes likely injunctions and discovery headaches."
                }
              }
            },
            followUpId: "q_ter1"
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Why are the accuracy audits treated like spy thrillers, and what do Justice’s notes say about the registry’s odds once a judge hears a test sentence?",
        answers: [
          {
            id: "s2a1",
            text: "Audits are temporarily restricted to protect whistle-fonts and sampling integrity. Justice’s notes flag serious First-Word concerns; we’ve urged a pause-and-rewrite rather than kamikaze litigation.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongNegative,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.SlightNegative,
              outcome4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "The President warns this invites confusion and blowback."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury notes fiscal prudence and clearer cost controls."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS flags resource diversion from core care delivery."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice flags constitutional exposure and litigation risk."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "s2a2",
            text: "Yes, drafts exist saying the registry is legally spicy and likely flammable. Those drafts are why the administration is cooling the pan instead of flambéing the courts.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongPositive,
              outcome2: OutcomeModifierWeight.StrongNegative,
              outcome3: OutcomeModifierWeight.SlightPositive,
              outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "The President supports this focused, constructive step."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury warns of budget risk and market jitters."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS sees benefits for clinics, access, and clear guidance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice sees First Amendment concerns and judicial pushback."
                }
              }
            }
          },
          {
            id: "s2a3",
            text: "We don’t narrate active legal choreography. When the redactions lift, the public will hear the audits without spoiler alerts or plot twists from me.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightPositive,
              outcome2: OutcomeModifierWeight.StrongPositive,
              outcome3: OutcomeModifierWeight.StrongNegative,
              outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President dislikes the opacity and potential backlash."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury flags procurement gaps and volatility concerns."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS welcomes relief funding and public health safeguards."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice notes likely injunctions and discovery headaches."
                }
              }
            }
          },
          {
            id: "s2a4",
            text: "There is no midnight enforcement afoot; the registry is on a legal timeout. Nobody’s getting cited for stray consonants while we sort this out properly.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.SlightNegative,
              outcome3: OutcomeModifierWeight.StrongPositive,
              outcome4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "The President is concerned about legal and fiscal exposure."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury welcomes transparency on rates and contracts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS cautions on messaging fatigue and equity impacts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice warns of enforceability issues and civil rights harm."
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
        text: "On health impacts, are assigned accents causing throat strain or vowel dehydration, and will HHS actually fund those ‘consonant boosters’ clinics you keep promising?",
        answers: [
          {
            id: "t1a1",
            text: "HHS clinics are staffed and free; no ID, no copay, just water and consonant care. Most discomfort resolves in hours, and anyone stressed gets an immediate accent cooldown pass.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongPositive,
              outcome2: OutcomeModifierWeight.SlightNegative,
              outcome3: OutcomeModifierWeight.SlightPositive,
              outcome4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "The President applauds a candid, solutions-first tone."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury cautions revenue uncertainty from policy whiplash."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "HHS supports data-driven clinics and patient protection."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice flags constitutional exposure and litigation risk."
                }
              }
            }
          },
          {
            id: "t1a2",
            text: "Treasury approved a micro-grant stream for speech ergonomics so clinics can buy humidifiers and loaner syllables. Vendors pay a surcharge if their accents fail comfort benchmarks.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.StrongPositive,
              outcome3: OutcomeModifierWeight.StrongNegative,
              outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "The President is concerned about legal and fiscal exposure."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury notes fiscal prudence and clearer cost controls."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS worries about compliance strain on frontline clinics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice notes likely injunctions and discovery headaches."
                }
              }
            }
          },
          {
            id: "t1a3",
            text: "We’ve seen no verified cases of chronic vowel dehydration tied to assigned drawls. If one appears, we’ll yank the model and switch to neutral phonemes while we investigate.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightPositive,
              outcome2: OutcomeModifierWeight.StrongNegative,
              outcome3: OutcomeModifierWeight.StrongPositive,
              outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President sees avoidable risk and mixed priorities."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury flags procurement gaps and volatility concerns."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS welcomes relief funding and public health safeguards."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns of enforceability issues and civil rights harm."
                }
              }
            }
          },
          {
            id: "t1a4",
            text: "Our epidemiologists are finishing a randomized mumble-controlled trial. We’ll publish methods, not mantras, and let independent phoneticians kick the consonants.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongNegative,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.SlightNegative,
              outcome4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "The President warns this invites confusion and blowback."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury welcomes transparency on rates and contracts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS cautions on messaging fatigue and equity impacts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice flags constitutional exposure and litigation risk."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On enforcement, who ordered the ‘do it quietly’ memos, what’s the timeline, and will Justice name authors before anyone raids for contraband diphthongs?",
        answers: [
          {
            id: "t2a1",
            text: "No raids are planned; any memo urging stealth was flagged and retracted. We’ll release a timeline of authors and edits after privilege review, with names where law permits.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.StrongPositive,
              outcome3: OutcomeModifierWeight.StrongNegative,
              outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "The President dislikes the opacity and potential backlash."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury notes fiscal prudence and clearer cost controls."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS flags resource diversion from core care delivery."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice flags constitutional exposure and litigation risk."
                }
              }
            }
          },
          {
            id: "t2a2",
            text: "If someone greenlit hush-hush enforcement, step into the sunlight and explain your italicized courage. We prefer loud law, not sneaky stage directions.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongPositive,
              outcome2: OutcomeModifierWeight.SlightNegative,
              outcome3: OutcomeModifierWeight.SlightPositive,
              outcome4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "The President appreciates decisive action and clarity."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury warns of budget risk and market jitters."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS sees benefits for clinics, access, and clear guidance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice warns of enforceability issues and civil rights harm."
                }
              }
            }
          },
          {
            id: "t2a3",
            text: "There’s no secret accent police lurking behind curtains. Any enforcement must be public, posted, and appealable—otherwise it doesn’t happen.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightPositive,
              outcome2: OutcomeModifierWeight.StrongNegative,
              outcome3: OutcomeModifierWeight.SlightNegative,
              outcome4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President sees avoidable risk and mixed priorities."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury flags procurement gaps and volatility concerns."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS welcomes relief funding and public health safeguards."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice notes likely injunctions and discovery headaches."
                }
              }
            }
          },
          {
            id: "t2a4",
            text: "Personnel notes aren’t a talk show. We’ll follow disclosure rules, resist theatrics, and keep the focus on fixing policy, not casting a soap opera.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongNegative,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.StrongPositive,
              outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "The President warns this invites confusion and blowback."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury welcomes transparency on rates and contracts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS cautions on messaging fatigue and equity impacts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice flags constitutional exposure and litigation risk."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
