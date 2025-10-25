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
      text: "Why is the administration auctioning scheduled gusts, making shade a VIP perk while poorer blocks bake, and how is that equitable or even legal?",
      answers: [
        {
          id: "a_r1",
          text: "We’re not selling shade; we’re organizing it. If the wind wants to unionize, I’ll bargain at sunset and honor its shifts. Until then, we’ll direct breezes where heat hits hardest.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "A bold challenge lands; I look principled and energetic."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Public health reads bravado as dismissive of heat risk."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Fiscal folks worry about optics of selling wind to cities."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The tone invites suits to frame policy as capricious."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Health comes first: priority tiers send first gusts to the hottest blocks, with free breeze credits and hat-safe advisories. Our pilots cut heat swoons 19% with minimal hat ruffling.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.MajorPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technocratic framing makes me seem detached from street heat."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Health-first framing boosts our prevention credibility."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tiered access risks elitism narratives in budget press."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear prioritization helps defend emergency authorities."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Auctions run with community-first slots before any VIP bids, capped rates by zip code, and farmer set-asides. Payments can be standard or in verified grain receipts during harvest windows.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Process talk undercuts my leadership voice right now."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Less emphasis on safety leaves clinics uneasy."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Community-first slots validate fair auction design."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process admissions invite broader injunction arguments."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "We can’t comment on suits from scarecrows or the tumbleweed collective. The charter is wind-permeable by design, and we’ll follow the courts while keeping people cooled and safe.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "No-comment posture makes me look evasive under fire."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Silence on safety feeds rumors about health risks."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Markets hear uncertainty, spooking bidders and cities."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Protects litigation posture and avoids prejudicing cases."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "You tout gust justice, yet heat-desert blocks see no credits while lobbyists enjoy lounges. What guardrails ensure the hottest blocks get wind first?",
        answers: [
          {
            id: "a_s1_1",
            text: "Guardrails include a heat-index trigger, a mandated 60% allocation to top-need blocks, and automatic free bursts during outages. We’ll publish live maps so residents can see their share.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "I appear reactive, not setting the moral frame."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Targeting hottest blocks sharpens our health equity case."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mandates imply costs that markets and OMB will flag."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guardrails may be attacked as discriminatory in court."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Zip-code multipliers raise prices in cooler districts and drop them in hotter ones; VIP lounges can’t siphon priority breezes under the gust zoning rule enforced by curbside sensors.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Pricing wonkiness distances me from lived reality."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Multipliers could miss vulnerable households."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Smart pricing shows stewardship and anti-gouge intent."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparent rules aid defenses against equal-protection claims."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "No, we’re not turning alleys into wind deserts to polish lobbyist bangs; any private gusts happen only after community tiers clear and comfort sensors say the block is safe to breathe.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial erodes trust when maps show hot spots."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissiveness hurts clinic partnerships during heat waves."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Budget exposure is minimal here but tone still matters."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm myth-busting helps with frivolous-claim thresholds."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If a lobbyist wants a breeze, they can explain it at a town heat council. Bring your patio receipts and your conscience; the allocation algorithm listens to both.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Assertive tone shows resolve to police special access."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontational stance complicates clinic outreach."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Threats to cut access unsettle bidders and planning."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive rhetoric may be cited as arbitrary action."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Farmers say auctions yank evening wind from crops to downtown patios. Who makes them whole, and does the legal math survive suits by scarecrows and a tumbleweed union?",
        answers: [
          {
            id: "a_s2_1",
            text: "Active litigation by scarecrows and windmill cosplays is ongoing, so I can’t brief line by line. I’ll say the breeze has rights, and so do farmers, and the court will meet them.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deference reads as ducking farmers’ grievances."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clinics want clearer farm-heat mitigation support."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uncertainty risks thinning auction participation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Staying quiet shields cases and preserves options."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "Farm offsets include bid credits, crop-cycle windows, and no-poach buffers around pollination hours. A rural ombud can trigger rebalancing the same evening when tassels droop.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "I look managerial, but not emotionally engaged."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Offsets help, yet rural health still sees shortfalls."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Concrete credits and windows stabilize bid confidence."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Structured offsets bolster our takings defense."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "No farmer pays to cool a banker’s neck. Community slots fill first, and a make-whole fund ensures crops get either their wind or a check before the next sunset.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket assurances invite fact-checks and backlash."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Community guarantees echo our prevention mission."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Funding promises could strain fiscal targets."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Absolute claims weaken posture if errors emerge."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Early pilots mis-aimed a patio gust that flattened a melon display; we updated vane logic and added gust governors. When we flub, refunds and apologies go out fast.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning misfires is honest but fuels opposition lines."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitted mishap sparks safety concerns in clinics."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparent fixes reassure markets about program tuning."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admissions may be used in discovery and in court."
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
        text: "You cite 19% fewer heat swoons and only 11% of hats ruffled. Can you show the map-level health data behind that and explain the melon lids and safety winks?",
        answers: [
          {
            id: "a_t1_1",
            text: "We’ll publish block-by-block health dashboards weekly, pairing clinic data with gust logs. The melon lids are just lightweight sun caps; no one is being deputized as produce.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "I seem secondary to agencies on core equity claims."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Publishing granular data proves our health impact."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dashboards imply recurring costs and staff time."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "More data can create new exhibits for plaintiffs."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "The 19% comes from matched clinics across comparable heat weeks, controlling for clouds and humidity. Hat ruffle uses accelerometers, and yes, we open-sourced the code for peer review.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical citations read dry amid neighborhood heat."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clinic matching may not map to lived vulnerability."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Method rigor boosts credibility with budget partners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Peer methods help withstand evidentiary scrutiny."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "No, there isn’t a secret hat lobby. Ruffle is a comfort proxy we tune so gust edges cool skin, not launch hair, and it never overrides heat-risk priorities.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snapping at hat myths sounds petty and off-message."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing risks undermines safety messaging."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Light tone eases worries about program overreach."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flippancy can appear arbitrary in the record."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Bring better data and we’ll plug it in. The system will chase whatever keeps people upright at dusk, and if that means fewer gusts and more misters, we adapt.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Invitation to data improves my pragmatic image."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crowd-sourced tweaks may muddle safety standards."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Open-ended changes unsettle predictable pricing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Real-time tweaks could look ad hoc before the court."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On lawsuits from farm groups and folklore plaintiffs, what is your legal theory that breeze is a public utility yet still auctionable like box seats?",
        answers: [
          {
            id: "a_t2_1",
            text: "I won’t litigate from the lectern. Our filings speak for themselves, and the judge can read the wind without me narrating the weather.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "I look hedging while critics define the standard."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Silence on utility status stokes inequity fears."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Markets dislike ambiguity on property and access."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "No-comment keeps briefs clean and avoids waiver risks."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "We treat ambient breeze as a common good with time-limited allocation rights, like park permits. Auctions set order, not ownership, and include public-interest tiers.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "I sound like a lawyer, not a heat-fighter in chief."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Legal framing skips clinical heat prevention impacts."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Hybrid model reassures investors and cities on rules."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear doctrine narrative helps survive motions to enjoin."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "No, we’re not selling the sky or privatizing dusk; we’re scheduling gust delivery within noise and safety limits the public already uses.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denials seem defensive and invite deeper probing."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Avoiding clarity shakes trust with public health groups."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assurance against privatization calms rate fears."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Absolutes risk being contradicted by contract terms."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Whatever the ruling, farmers and hot blocks will be kept whole. If auctions are nixed, we pivot to free, sensor-driven flows with the same equity rules built in.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Promising outcomes before rulings reads as overreach."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Commitments to hot blocks reinforce health equity."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guarantees may add liabilities to the balance sheet."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances could be cited as prejudging the merits."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
