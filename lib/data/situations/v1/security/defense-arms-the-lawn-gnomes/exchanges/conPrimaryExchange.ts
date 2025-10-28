import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const conPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.ConPrimary,
  content: {
    rootQuestion: {
      id: "q_root",
      text: "Leaked budgets say Defense funded autonomous lawn gnomes with microdrones; do these sentinels deter prowlers or just mulch dollars?",
      answers: [
        {
          id: "a_root_1",
          text: "Look, if your yard can’t outthink a garden gnome, you don’t have a prowler problem—you have a strategy gap. We test hard so spies meet smarter turf, not softer targets.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold framing; it fits the combative tone I want today."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This quip risks trivializing our deterrence program."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Such bravado complicates our soothing calls to allies."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes aside, it invites questions about legal process."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "These platforms are non-lethal deterrents with strict geofencing and a very unglamorous spreadsheet. Early pilots show fewer porch raids, and funding is gated by real metrics, not folklore.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Overly technical; it saps the punch from our stance."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear reassurance keeps appropriators calm and engaged."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Our embassies need empathy, not a sales brochure."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Noted; clarity on non‑lethal use aids compliance work."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "Some hedge outreach hummed when it should have nodded. We’re candid with partners, pausing deployments near missions and swapping singing units for quiet, neighborly models while we fix triggers.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Admission sounds weak amid a spectacle‑heavy cycle."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning missteps may spook budget hawks on the Hill."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Candid tone helps us mend fences with irritated allies."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting error risks exposure in pending reviews."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "We can’t litigate lawn cases at a microphone. There’s an active review into microdrone licensing, alleged gnome entrapment, and any data sharing, and we’ll speak when facts eclipse memes.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Stonewalling plays defensive and dulls our momentum."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Distance is prudent, but it leaves us carrying heat."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Non‑answers prolong embassy anxiety over gnome cams."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Limiting comment protects ongoing investigative steps."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "'Non-lethal yard diplomacy' sounds charming, but what measurable drop beats a porch light, and who audits contracts so we’re not buying premium hats and budget buzzwords?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Per Defense: In pilot zones, porch thefts fell 27% versus 8% for lights alone, verified by the Inspector of Miscellany. We froze add-ons, capped margins, and will post redacted audits this week.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
                o1: OutcomeModifierWeight.SlightNegative,
                o2: OutcomeModifierWeight.SlightPositive,
                o3: OutcomeModifierWeight.SlightNegative,
                o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Numbers without contrition feel tone‑deaf right now."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Performance data bolsters our case to funders."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Stats alone do not calm tomorrow’s country team."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Claims of efficacy outpace our licensure findings."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Defense,
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "Independent testers compared gnome patrols to motion lights and doorknob cams; the mix matters. We’ll release the protocol and raw logs so people can replicate results without marketing fog.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Independent tests give bite to our public case."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Third‑party parity undercuts our premium pricing."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comparisons miss the diplomatic noise these made."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "External trials complicate evidentiary chains."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "No one is rubber-stamping garden cosplay. Payment milestones hinge on verified deterrence, safety checks, and a boredom test so they ignore squirrels, grills, and toddlers in dinosaur pajamas.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
                o1: OutcomeModifierWeight.ModeratePositive,
                o2: OutcomeModifierWeight.Neutral,
                o3: OutcomeModifierWeight.ModerateNegative,
                o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance without receipts reads as spin."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Contract controls and audits show fiscal discipline."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Guardrails help us brief partners with less friction."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audit talk is fine, but keep legal exposure narrow."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "We’re not paying couture rates for plastic hats. Accessories are commodity-priced, and any gilded garden gear was flagged and clawed back before it left procurement.",
            type: AnswerType.Deny,
            outcomeModifiers: {
                o1: OutcomeModifierWeight.SlightNegative,
                o2: OutcomeModifierWeight.Neutral,
                o3: OutcomeModifierWeight.Neutral,
                o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissive tone may rile watchdogs and committees."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Price fights invite harsher audits of our vendors."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Snapping at costs hurts us in allied briefings."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm stance deters opportunistic claims in court."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Allies woke to embassy hedges singing in Gnomeish and filming diplomats; what’s the plan to stop garden misunderstandings from sprouting treaty weeds and meme wars?",
        answers: [
          {
            id: "a_sec2_1",
            text: "We overestimated 'hedge outreach.' We’ve apologized, suspended serenade modules near missions, and sent teams to debrief partners before any leaf whispers again without consent.",
            type: AnswerType.Admit,
            outcomeModifiers: {
                o1: OutcomeModifierWeight.MajorNegative,
                o2: OutcomeModifierWeight.SlightPositive,
                o3: OutcomeModifierWeight.StrongPositive,
                o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Apology headlines feed the meme cycle we dislike."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Owning error risks slashing our prototype lane."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "This mea culpa gives me room to repair rapport."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting fault complicates open investigative work."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "We’re moving from novelty to normalcy. A joint tasker with Defense is rewriting geofences and etiquette packs so gnomes default to silent mode within a generous bubble around diplomatic sites.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
                o1: OutcomeModifierWeight.ModeratePositive,
                o2: OutcomeModifierWeight.ModerateNegative,
                o3: OutcomeModifierWeight.SlightNegative,
                o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk drags; it dulls the moment’s energy."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Task force message steadies stakeholders and staff."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We need warmth, not panels, to calm spouses’ nerves."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Coordination is fine; keep subpoenas uncompromised."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "Cross-border legalities can get thorny fast. We’ll let State manage diplomacy while we assess whether any code or contractor conduct crossed lines that would merit action.",
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
                reaction: "Legal hedging reads as evasive under hot lights."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection leaves us shouldering political blame."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Allies hear buck‑passing, not partnership or care."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Caution protects due process across jurisdictions."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "An inter-ally garden tech forum convenes this week to share logs, disable lists, and best practices, because nothing calms nerves like a spreadsheet that says 'no singing near consulates.'",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear steps and timelines play well with the public."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Forums help optics, but create churn for operators."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "This forum signals respect and a path back to normal."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public agendas must not front‑run criminal reviews."
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
        text: "Great, numbers; now show line items and kill-switches. Who ate the overruns—the gnomes or taxpayers—and will you publish the shrub logic that flagged grill smoke?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Line items, unit costs, and maintenance schedules will post with test footage, with private data masked. The kill-switch is dual-control, hardware plus software, and audited by people who hate surprises.",
            type: AnswerType.Inform,
            outcomeModifiers: {
                o1: OutcomeModifierWeight.StrongPositive,
                o2: OutcomeModifierWeight.StrongNegative,
                o3: OutcomeModifierWeight.Neutral,
                o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fine, but spreadsheets won’t win tonight’s narrative."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Granularity invites nitpicks on experimental costs."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency eases some diplomatic grievances."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Disclosures must not compromise active warrants."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "Taxpayers didn’t swallow novelty markups; overruns hit vendor holdbacks. If an invoice tried to bill luxury beards, it met a shredder and a very caffeinated auditor.",
            type: AnswerType.Deny,
            outcomeModifiers: {
                o1: OutcomeModifierWeight.MajorNegative,
                o2: OutcomeModifierWeight.ModeratePositive,
                o3: OutcomeModifierWeight.ModeratePositive,
                o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat denial risks a receipts‑filled backlash later."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfident tone could backfire with auditors."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This posture may irritate partners awaiting answers."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Drawing lines here strengthens our litigation stance."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "We added a 'do not engage barbecue' rule and a boring-by-design mode. If a porch party reads as fog-of-war, the system times out and pings a human, not a hedge hero.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
                o1: OutcomeModifierWeight.Neutral,
                o2: OutcomeModifierWeight.Neutral,
                o3: OutcomeModifierWeight.SlightNegative,
                o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances sound cautious; momentum may suffer."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Upgrades and rules show we learn and adapt quickly."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Better, but we still owe fuller context to posts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Technical fixes do not resolve licensure issues."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Perfection at zero cost is a fairy tale with a pointy hat. We’ll beat prowlers and spies by sharing code reviews and fixes, not by pretending grill smoke is an existential scandal.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
                o1: OutcomeModifierWeight.Neutral,
                o2: OutcomeModifierWeight.Neutral,
                o3: OutcomeModifierWeight.SlightNegative,
                o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "I like the fight; it frames this as bold, not bungled."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric risks new oversight riders and constraints."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Combative tone complicates quiet ally outreach."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A tougher stance can discourage nuisance suits."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "When allies ask who green-lit serenade modules, will you accept blame, refund the garden diplomacy, and commit to no charmware exports without explicit consent?",
        answers: [
          {
            id: "a_ter2_1",
            text: "We signed off on a bad flourish. We’ll credit affected partners, retire the serenade packs, and require written consent for any charmware exports, with opt-outs that actually opt out.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning blame fuels hostile clips in the hearing loop."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Refund chatter endangers our innovation runway."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Accountability helps us salvage trusted access."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admissions can bind us in potential litigation."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Our export screen now treats charmware like any sensor: no default on, no surprise vocals, and a manners pack that prioritizes silence over showmanship near diplomatic turf.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Compliance talk is dry; it won’t lead the news."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Tighter screens protect capability and credibility."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Good, but we still owe contrition to affected posts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treating charmware strictly aligns with enforcement."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "Compensation talks are between governments, not a press raffle. We’ll keep those conversations private so we fix the problem faster than the meme cycle.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Silence on money won’t satisfy the questioners."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection hints at fragility in our contracts."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Allies expect gestures, not procedural fencing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Keeping negotiations private shields our cases."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "We’re issuing a public directive and a bilateral annex listing banned behaviors—singing, clapping, wink LEDs—plus a plain-language consent template any mission can customize.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Public directives show command and restore tempo."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fine, but publishing terms invites copycats."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "An accord signals respect and stabilizes relations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Statements must not prejudice ongoing prosecutions."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
