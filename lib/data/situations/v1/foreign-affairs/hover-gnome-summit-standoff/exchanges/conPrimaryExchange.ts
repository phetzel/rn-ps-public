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
      text: "Two embassy hovercrafts of ceremonial gnomes were seized at sea; who’s steering this circus, and how big is the emerging 'gnome gap'?",
      answers: [
        {
          id: "a_r1",
          text: "I won’t negotiate with hover-pirates over lawn art. The President is focused on the Moon Picnic jobs tour, where real workers, not gnomes, are getting paid. State and Defense have their lanes.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Deflects the circus, pivots to Moon Picnic jobs tour without legitimizing gnome hostages."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Looks evasive on protocols; risks spooking insurers and gardeners."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Undercuts deterrence message; pirates may read this as softness."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Markets and gardeners can relax: the Ancient Gnome Conveyance Protocols are intact, and we’re arranging a respectful, bilingual gnome-swap ceremony that returns every figurine without fueling theatrics.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.MajorPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Process-heavy tone; acceptable only if it stabilizes markets and media narrative."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Reassurance lands cleanly; protocols and swap optics project calm competence."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soothing message blunts urgency for escorts and countermeasures."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Novelty piracy meets steel reality. We’re positioning escorts and electronic counter-polka to deter copycats and keep costs from spiking. Touch our convoys and you meet consequences in international waters.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.MajorPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Sounds too martial; risks dragging focus from the Moon Picnic jobs tour."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hard-edged stance complicates the delicate gnome-swap choreography."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Signals resolve against copycats; strengthens case for funded escorts."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "The chain of command isn’t a clown car; it’s a convoy. State leads diplomacy, Defense secures lanes, and Coastward Agency tracks the craft. That sequencing held, and we’re executing the playbook.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.MajorNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Dry process talk pulls me into the weeds of lawn art policy."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Technical clarity helps, though it lacks the warmth insurers seek."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Facts alone do not deter; pirates need to feel pressure."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Can State truly calm insurers and gardeners with 'Ancient Gnome Conveyance Protocols,' and what would a tasteful, bilingual gnome-swap actually entail?",
        answers: [
          {
            id: "a_s1_1",
            text: "We’ll stage the exchange at a neutral hover-moor with observers, two languages, and zero pageantry for pirates. Certificates of Custody will follow each gnome, restoring confidence without rewarding bad actors.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fine, but ceremony chatter risks validating a trivial hostage frame."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Constructive reassurance; credible plan calms gardeners and insurers."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Ceremonial focus dilutes deterrent signals and resource arguments."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "The protocols predate this fiasco: sealed manifests, transponder locks, and ceremonial object tags that make resale pointless. We’re syncing with insurers so rates reflect mitigated risk, not rumor.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Informative but lengthy; invites follow-ups on gnome arcana."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Explains protocols well; incremental trust-building with markets."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Pure process talk stalls momentum for anti-piracy measures."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "We’re not auditioning for a reality show. The focus is recovery and prevention, not confetti cannons. If people want spectacle, the Moon Picnic has plenty of fireworks and none of the ransom notes.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clean deflection; keeps focus on jobs tour and avoids gnome sovereignty talk."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Less warmth for markets; reassurance message gets sidelined."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimal deterrent value; pirates may sense limited resolve."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "No, we are not paying a 'souvenir tax,' and no pallets of coins are moving. Anyone saying otherwise is selling panic to boost premiums, not telling the public the truth.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard no can read brittle; risks prolonging the spectacle."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Firm line may unsettle insurers awaiting conciliatory signals."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity on no-tribute helps deterrence, if paired with capability."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Defense says a 'gnome gap' invites copycats; are you angling for new funds and polka-jamming escorts, or just commissioning louder stern looks?",
        answers: [
          {
            id: "a_s2_1",
            text: "Deterrence is cheaper than tribute. If pirates think the prize is kitsch and chaos, they’ll try again. We’ll harden convoys, shadow high-value runs, and make the next heist the last headline.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Too hawkish for my tone; risks overshadowing domestic agenda."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Escalatory flavor complicates swap optics and premium soothing."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong challenge posture; reinforces deterrence and funding case."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "On behalf of Defense, I can confirm provisional tasking of two hover-capable escorts and activation of counter-polka suites on trial routes. We’ll brief committees before seeking any new funding.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Authorized but cautious; keeps me tethered to details I’d rather deflect."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Measured confirmation steadies markets without chest-thumping."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Provisional tone softens urgency for escorts and jamming kits."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Defense,
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_3",
            text: "We’re assessing gaps: signal spoofing, hover-drift chokepoints, and novelty-goods routing. Some fixes cost doctrine, not dollars, like convoy math that pairs slow pomp with fast protection.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dry assessment; useful, yet media may glaze over or nitpick."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Gap audit helps, though lacks the reassurance cadence."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Analytic framing supports needs assessment for capabilities."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "No one is sabre-rattling over garden decor. The goal is calm seas and boring shipping receipts, not viral footage. Measured steps now prevent expensive drama later.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Temperate line fits my posture; lowers temperature of the spectacle."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reassurance language helps premiums and de-escalation optics."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft tone risks signaling tolerance and delaying resourcing."
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
        text: "If hover-shipping premiums jump by teatime, when do your protocols hit the water, and who covers the bill for those bilingual ribbon-cutters you promised?",
        answers: [
          {
            id: "a_t1_1",
            text: "Premium spikes thrive on uncertainty; we’re stamping that out this week. The ceremony is lean, monitored, and funded from existing consular contingency lines, not a gnome tax on shippers.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Steadying tone is fine, but I prefer less detail on gnome theatrics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reassures underwriters and gardeners; shows rhythm and readiness."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Comfort talk weakens the urgency for escorts on the water."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Timeline: manifests reconciled in 48 hours, swap window opens by day three, escorts in place throughout. Costs are audited and published after action, so carriers see real risk, not whispers.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Timelines invite scrutiny; press may obsess over slip risks."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Crisp milestones help insurers price risk down quickly."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Schedules without teeth do little to deter hover-pirates."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Our budget doesn’t buy pomp; it buys predictability. If people need a ribbon, they can cut it themselves at the Moon Picnic pavilion while we handle the grown-up paperwork.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Redirect lands; keeps spotlight on Moon Picnic jobs tour."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection blunts the soothing effect of protocol messaging."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limited deterrent value; sounds like we’re dodging the threat."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We can’t promise premiums won’t flutter before they fall. Panic pricing is fast; trust rebuilds slower. That’s why we’re over-communicating milestones and naming a single point of contact.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting premium flutter fuels anxiety and headline churn."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Candor is admirable, but markets wanted firmer reassurance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Sober caveat supports argument for immediate escorts."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "About those polka-jamming escorts: what keeps music warfare from spiraling, and how do you keep gnome rescue from becoming a floating disco-war?",
        answers: [
          {
            id: "a_t2_1",
            text: "Rules of sound engagement are clear: we drown signals, not eardrums. If pirates escalate, so will consequences, and not with trumpets. The point is to end the episode, not headline a tour.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Combative soundtrack vibe risks meme-ifying the crisis."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Escalatory acoustics complicate diplomacy and swap tone."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear rules and punchy posture bolster deterrence credibility."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Counter-polka is a non-kinetic nudge that confuses cheap control rigs. It’s reversible, narrow, and boring by design. Boring is the metric; boring ships get home with all their knickknacks.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Explanatory tone is fine; still keeps us stuck in gnome details."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reassures allies and insurers; frames escorts as de-escalatory."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Downplays pressure; risks weakening the funding narrative."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Escorts carry deconfliction beacons, pre-filed routes, and standing hails to neutral observers. Every move is logged, which deters improvisation and shrinks the window for mishaps.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process and routing reduce drama, but attention still lingers."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Useful clarity, though it lacks comfort language for markets."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deconfliction specifics help avoid incidents while posturing."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If anyone wants a dance floor, they can join the Moon Picnic after-party. At sea, the playlist is silence and compliance, followed by paperwork and a nap.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Light deflection returns focus to jobs tour and away from gnome theatre."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokey sign-off undercuts the careful reassurance cadence."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Humor blunts deterrence; pirates need pressure, not punchlines."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
