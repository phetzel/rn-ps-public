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
      text: "Your mandatory mood rings gamify lines and tax perks into a chroma caste, where chartreuse skips queues and mauve gets docked. How, exactly, is that equitable?",
      answers: [
        {
          id: "a_r1",
          text: "If anyone thinks color beats character, I’ll debate them in a live vibe decathlon wearing twelve rings. And to the DIY saboteurs: stop tasting the system, or our safety team will out-vibe you, legally and swiftly.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Bold challenge plays to strengths; spectacle shifts focus away from rule mechanics now."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Perks tied to colors resemble arbitrary brackets; deficit hawks will bristle hard."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Forceful stance signals deterrence to DIY spoofers and organized ring-hacking cells."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Fiscal modeling shows queues down 18% and admin costs down 11%, with perks nudging off-peak use by 9%. The color engine favors need over status and publishes public fairness dashboards.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Technocratic defense sounds cold; equity doubts may dominate the news cycle."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Efficiency claims and queue cuts bolster a savings narrative for appropriators."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Numbers alone won’t calm patient groups worried about stress being penalized."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft tone suggests weak deterrence; could invite more spoofing experiments."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Rings read a coarse civic mood score, not health, biometrics, or secrets. No one is punished for purple; eligibility remains, and the tint only shifts timing and tiny rebates within strict equity rails.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Over-reassurance risks looking evasive on real-world impacts and enforcement."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear limits on data types and intent will soothe unions and senior advocates."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Medicalized language blurs authority; enforcement footing feels undercut."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Before we declare a caste, remember we replaced coin-operated forms and complaint thunderdomes with a nudge and a glow. Let’s judge outcomes after the pilot, not the internet’s palette panic.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Deflection reads as dismissive; fairness and bias concerns remain unanswered."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Downplaying design choices muddles fiscal case; skeptics will sense hand-waving."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reframing reduces panic slightly; still projects enough resolve to deter dabblers."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Your model is a black box with pastel LEDs. Who audits weightings across neighborhoods, and what’s the appeal when chartreuse skips grandma’s mauve at the bus stop?",
        answers: [
          {
            id: "a_s1_1",
            text: "Independent reviewers from civic colleges and rider groups run shadow tests, publish bias reports, and can freeze bad weightings. We also open a codebook so people can see how each factor is tuned.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Outside auditors imply weakness; opponents may claim you lost control of policy."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Independent audits aid credibility and preserve the efficiency narrative."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Third-party scoring without bedside context may unsettle patient advocates."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "No one loses baseline access. If your ring misreads, staff can override on the spot, and an appeal takes minutes, not months, with a paper option for people without apps.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances on appeal help little if equity at the curb feels arbitrary and cold."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Safety valves and rapid fixes directly reduce harm and calm anxious groups."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Leniency headline could signal exploitable gaps to organized spoofers."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Early pilots over-favored downtown hubs; we found it, owned it, and reweighted for distance, mobility, and caregiving. We funded pop-up lanes so mauve doesn’t mean marathon.",
            type: AnswerType.Admit,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting bias shows candor but fuels critics’ narrative on systemic unfairness."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Revealed bias suggests targets to exploit; urges tighter, faster safeguards."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledged skew undercuts savings claims and triggers oversight questions."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning flaws and publishing fixes builds clinical trust across stakeholders."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Let’s be real: the biggest line cutters weren’t colors, they were cronies with laminated lanyards. This system posts receipts, so the old privilege tricks won’t survive daylight.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Punchy contrast re-centers blame on old elites; energizes core supporters fast."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Aggressive framing signals resolve that can deter coordinated line-hacking."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Confrontation invites hearings; budget allies dislike inflammatory rhetoric."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Combative tone spooks caregivers; empathy gap widens with patient groups."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "The privacy memo says rings 'sample ambiance.' Translate: what data, how long, who sees it, and how do you enforce against DIY hacks without turning sidewalks into vibe c",
        answers: [
          {
            id: "a_s2_1",
            text: "We store only a minute-by-minute mood score with heavy salt and blur, no raw audio or location trails. It auto-deletes after 30 days unless a user opts to keep receipts for an appeal.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Detail helps, but privacy skeptics may still frame this as surveillance creep."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Minimized, time-bounded data reassures providers and labor groups alike."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Data minimization complicates tracing coordinated spoofing campaigns."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "There is no biometric capture—no pulse, no sweat, no micro-eavesdropping. And no, the gecko drones are not patrols; they watch for aggregate anomalies, not chase individual wrists.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial risks fact-check fights if vendors disclose broader capabilities."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "If later contradicted, trust erosion jeopardizes the whole savings case."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Narrowing scope reduces civil-liberty heat while keeping basic deterrence."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "An independent oversight board reviews vendor logs, deletion audits, and red-team reports. We publish retention stats and reject any contract that tries to monetize glow history.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Oversight talk sounds procedural; critics will say the buck is being passed."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Independent boards and logs support credible, auditable efficiency claims."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Board oversight feels distant to patients; frontline assurances still needed."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Extra process may slow responses to coordinated spoofing and ring tampering."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "If you spoof, you’re jumping ahead of nurses and night crews. We’ll cite, fine, and detune counterfeit rigs with color-neutralizers, with due process and a clear path to appeal for mistakes.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Firm enforcement stance projects control and resolves doubts about resolve."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear penalties and priorities deter copycats and signal operational readiness."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Threat-heavy framing worries patient groups about punitive spillovers at desks."
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
        text: "Tax perks tilt toward people who can sustain 'emerald' moods. Isn’t that regressive by aura, and what relief helps shift workers and caregivers stuck in stress-o'clock?",
        answers: [
          {
            id: "a_t1_1",
            text: "Perks are capped micro-rebates, with means-tested uplifts that boost low-income mauve and gray. We expanded off-peak credits for night shifts and caregiving windows to redirect net gains toward stressed groups.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Leading with rebates looks small-ball; equity frame remains largely unanswered."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Capped micro-rebates with caps and audits sell well as low-cost efficiency."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rebates alone won’t reassure stressed workers who fear mood penalties."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "No one is penalized for stress. Relief tiers auto-adjust when community mood dips, and hardship flags lock in access and rebates regardless of color swings during hard seasons.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances help, but critics may call it semantics if outcomes still skew."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Auto-relief framing directly eases anxiety for shift workers and caregivers."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Added relief tiers dilute projected savings and complicate administration."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Emerald isn’t a VIP pass. It moves sequence inside a time window, not eligibility or core benefit size. The base promise stays the base promise, full stop.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denying regressivity reads as out of touch; expect tough editorial pushback."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal risks losing moderates; design tweaks may be demanded by budgeteers."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifying sequencing, not exclusion, modestly reassures clinical partners."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard denial ignores spoof risks that accompany perk chasing and line gaming."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We’re not gamifying empathy; we’re gamifying paperwork. The vibe is a line manager with a dimmer switch, not a bouncer with a velvet rope, and it’s better than the old maze.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection to paperwork feels glib; fairness and burden questions still loom."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissing concerns erodes fiscal credibility and invites oversight reviews."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Focusing on admin burden hints at order; minor boost to street-level calm."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tone underplays stress reality; unions will bristle at perceived minimization."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "About enforcement toys: you teased gecko drones that 'taste' colors. What due process stops false positives, and how do you prevent crackdown cosplay on ordinary sidewalk",
        answers: [
          {
            id: "a_t2_1",
            text: "Bad actors love chaos theater; we’ll meet them with rules, recorded interactions, and fines, not theatrics. Try to spoof, expect a citation and a free class on not being a jerk.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Decisive posture against abuse looks strong and preempts disorder narratives."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear, rapid response doctrine deters spoofers and organizes field discipline."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Aggressive tools add costs and liability; threatens the efficiency storyline."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "No street stops. Reviews happen at service counters by trained staff with ombuds present. Devices test samples from anonymous kiosks, not people, and only with posted notice.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "No-stop pledge risks looking soft if abuse stories surface on social feeds."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Counter-only reviews protect dignity and due process; clinics will welcome it."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Street optics improve, but fewer checks may embolden coordinated spoofers."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Extra process time eats savings; auditors will question throughput gains."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Early testers flagged kale chips as suspicious. We fixed the sensor bias and now require two independent systems to agree before any action, plus a human review.",
            type: AnswerType.Admit,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting false positives shows humility but feeds doubts about readiness."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Plain error rates with fixes can preserve credible, data-driven budgeting."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Publicizing glitches signals openings to exploit; urges tighter calibration."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Error anecdotes unsettle patients; they will demand stronger patient safeguards."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Every action gets a case number, time-stamped footage, and automatic notice with timelines for response. Weekly summaries publish error rates and corrections for public review.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process detail sounds bureaucratic; critics will ask who is truly accountable."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Case numbers and logs support audits and help defend the efficiency case."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Documentation helps little at the counter if fear of mistakes persists."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
