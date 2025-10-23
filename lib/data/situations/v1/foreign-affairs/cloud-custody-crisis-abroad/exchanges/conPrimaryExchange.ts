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
      text: "Two microstates claim a roaming 'diplomatic cloud' over both capitals. Will you release sky maps or assert custody to steady investors and keep commerce dry?",
      answers: [
        {
          id: "a_r1",
          text: "We logged that cloud as a 'visiting dignitary cumulus' in a routing memo—that’s on us. We’re correcting it now, keeping talks moving, and making sure umbrellas don’t need visas.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Owning the mix-up calms markets and keeps embassies from sparring in the rain."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This admits a clerical oddity but risks precedent on weather documents."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Treating vapor as a VIP undercuts common airspace norms for stability."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Clouds have no passports; we’re coordinating with both microstates and our Embassy Row neighbors to keep commerce dry. Expect joint guidance that calms tariffs, not stokes them.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "It sounds cautious but may look indecisive if investors want a firm stance."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear reassurance aligns with international practice and cools tempers."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft language invites opportunists to test our air management."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "You can’t plant a flag in vapor. Our stance is common airspace, common sense: we’ll escort the drift clear of choke points and challenge any bid to patent rain or fence the sky.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Firm talk helps clarity, yet it may read as combative to fragile partners."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dismissing claims outright could sour talks and trigger tariff feuds."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Challenging the premise safeguards shared skies and deters grabby claims."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r4",
          text: "We’re preparing a public sky-lane map, scrubbed for security, plus a hotline for storm conflicts. Investors will see routes and rules before the next shower, not after the puddles form.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Transparency steadies markets, but overexposure risks operational leaks."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Publishing lanes helps coordination and reduces rumor-driven tariffs."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Maps in public view can constrain tactical flexibility near embassies."
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
        text: "If clouds can't be owned, what is Defense's playbook when ambiguity parks over embassies—escort it out, share the sky, or let kite diplomacy tug it along?",
        answers: [
          {
            id: "a_s1_1",
            text: "Defense, Civil Breezes, and State have a playbook: steer drift away from embassies, notify airfields, and keep it boring. Safe skies keep investors awake for earnings, not umbrellas.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Balanced playbook talk cools tensions but may seem vague under pressure."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reassurance with a plan builds confidence and constrains tariff brinkmanship."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Playbook language without firmness could embolden airspace freelancing."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "If someone tries to box the cloud, we’ll contest the claim and keep lanes open. Vapor can’t blockade a visa line, and we won’t let novelty lawfare clog trade winds.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A hard line deters bad behavior but could escalate a trivial dispute."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Contest rhetoric risks litigation floods and politicizes weather corridors."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Challenging boxes around clouds protects common air and mission freedom."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Let’s not turn a cloud into a constitutional convention. The real story is routine traffic control, not a thunder coup, and that’s handled hourly.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Humor lowers the temperature, though it can read as dodging substance."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection avoids panic, but partners may doubt our coordination."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Jokes about protocols can blur enforcement and readiness expectations."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "We’ve authorized dehumidifier escorts only when embassies request them, and kite diplomacy is ceremonial, not coercive. A one-pager of rules posts after the next interagency huddle.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Specific triggers show control, yet they telegraph thresholds to rivals."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity on escorts reassures neighbors and stabilizes the tariff outlook."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Publishing conditions may limit rapid response options if abused."
                }
              }
            },
            followUpId: "q_ter1"
          }
        ]
      },
      {
        id: "q_sec2",
        text: "State's hush-hush sky maps reportedly guide rain tariff disputes. Will you declassify enough to calm markets without tipping rival microstates on cloud routes?",
        answers: [
          {
            id: "a_s2_1",
            text: "Early drafts were labeled hush-hush because they included coffee-stain notes like 'avoid parade balloons.' That’s being scrubbed. The maps will be readable and harmless to share.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Admitting overclassification humanizes us but could invite FOIA pile-ons."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Owning the label helps reset expectations without spilling sensitive routes."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Confession signals process gaps and invites probing of defense patterns."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "We’ll release enough routing detail to calm tariff talk without exposing embassy rooftops to paparazzi meteorology. Markets will see predictability, not a treasure map.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Measured release calms traders, yet critics may call it selective."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Right-sizing detail reassures allies while avoiding roadmap giveaways."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Partial reveals still risk adversaries mapping response rhythms."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Classifications happen when interns panic at weather jargon. We’re fixing the labels so the debate is about policy, not cloud cartography mystique.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Light sarcasm defuses heat, though it feeds a narrative of lax controls."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection protects sources, but partners may read evasiveness."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Downplaying classification can dull compliance and discipline."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Expect a declassified sky-lane packet with dispute steps, tariff triggers, and a contact tree. It’s timed for the next forecast cycle, not the next scandal cycle.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deliverables show competence, but timing may narrow negotiating space."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "A tailored packet steadies markets and preserves dispute tools."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Declassification windows create openings adversaries could exploit."
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
        text: "Do you have a deadline for joint airspace rules on migratory weather near embassies, and what should investors price if downpour detours jam ports or paperwork?",
        answers: [
          {
            id: "a_t1_1",
            text: "Timeline: draft rules in ten days, pilot in thirty, finalize in a quarter. Ports and consulates get dry-run drills so logistics contracts don’t price in mythical monsoons.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Clear milestones project control, but slips would bruise credibility."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Timelines reassure partners and keep tariff talk from spiraling."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public clocks can box in security adjustments if conditions change."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Investors shouldn’t bake in panic premiums. We’ll keep passport windows open rain or shine, and any detours will be measured in minutes, not fiscal seasons.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Confidence messaging supports valuations and deters overpricing risk."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over-soothing could dull urgency on hard coordination problems."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances may signal low risk and reduce leverage for enforcement."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "If your portfolio needs a forecast to the minute, buy an umbrella factory. Our job is to keep the sky boring and the paperwork short, and that’s what we’re doing.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Snark risks alienating investors seeking planning guidance."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Evasion frays trust and reignites tariff suspense among neighbors."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Dodging the question blurs thresholds and readiness expectations."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We reject the premise that drizzle equals disruption. The risk is speculation about secret skies, and we’re clearing that rumor front before it fogs balance sheets.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rejecting the premise sounds strong, but it can read as dismissive."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Challenging drizzle claims may chill talks and invite tit-for-tat."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm stance protects norms and deters opportunistic claims."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "How soon will traders get a clear tariff-and-passport advisory for precipitation events, and will cloud custody claims be paused while guidance lands?",
        answers: [
          {
            id: "a_t2_1",
            text: "Advisory lands within 72 hours, in plain words and large fonts. It freezes new tariff experiments during storms and lists who answers the phone at 3 a.m.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Fast, plain guidance steadies pricing and reduces rumor-driven volatility."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rushing language risks ambiguity that complicates cross-border filings."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rapid advisories can telegraph patterns adversaries might time."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "We’ll pause novel custody filings during rollout so nobody sprints to the courthouse in galoshes. Clarity comes first, paperwork second, and commerce stays pleasantly dry.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Pausing filings signals control, yet it invites fairness scrutiny."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Freeze reduces forum shopping and stabilizes tariff expectations."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Moratoriums can be gamed and slow legitimate security measures."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We are not creating 'rain passports.' Weather remains visa-free, and anyone selling permits to clouds should expect a sternly worded breeze from legal.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hard denial sounds tidy but may appear aloof to practical concerns."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal risks partners crafting unilateral patches and tariffs."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Drawing a red line on 'rain passports' helps preserve commons."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We underestimated how fast rumor thunderheads form online. That’s on us, and the advisory will include a myth-busting sheet so markets stop chasing shadows and start checking data.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning the lag restores credibility, though it highlights process gaps."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Admitting delay builds candor, but market nerves may spike briefly."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confession invites questions about readiness and coordination."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
