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
      text: "Your plan creates a national accordion alarm to jam drones; will it stop threats without walloping taxpayers or passing off subsidies as 'Main Street jobs'?",
      answers: [
        {
          id: "a_root_challenge",
          text: "If a rogue drone wants quiet skies, it picked the wrong parade. We’ll out-honk threats with smart bellows that wake up only on cue, and we won’t soak taxpayers to do it.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He relishes the duel and projects command of the moment."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They worry bravado may outpace disciplined rollout plans."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They fear boisterous framing could unsettle seniors and pets."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They caution that swagger risks ignoring legal guardrails."
              }
            }
          },
          followUpId: "q_sec_jobs"
        },
        {
          id: "a_root_inform",
          text: "Tests in five mock towns cut drone control links by 87% within a safe bubble. Arrays fire in narrow bursts under 100 dB at the source, with costs capped per block and independently verified.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He dislikes the dry details crowding out the spectacle."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "They endorse the decibel math and deterrence posture."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They see technical jargon undermining neighborhood trust."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They note data talk without due process specifics."
              }
            }
          },
          followUpId: "q_sec_tech"
        },
        {
          id: "a_root_reassure",
          text: "No, we’re not cranking polka at 3 a.m. Sites have quiet hours, pet-safe profiles, and community drills branded as Homeland Hootenannies so evacuations feel like dance steps, not sirens.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "He welcomes calm framing that still keeps him conducting."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They see softness that could dilute deterrent messaging."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "They applaud protections and quiet hours for communities."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They worry reassurance blurs the edges of accountability."
              }
            }
          }
        },
        {
          id: "a_root_admit",
          text: "We recognize the Noise Clause and the Fourth Accordianment are real legal knots. We will require warrants for sustained sound sweeps and publish bias audits before any switch is flipped.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He bristles at conceding limits and legal hedging."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They fear admissions will embolden adversaries."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They worry caveats may spook local coordinators."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "They approve frank talk on warrants and sound restrictions."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_tech",
        text: "What’s the decibel math—how do 'foldable forts' spook drones without rattling seniors, pets, or hospital gear, and who audits false alarms?",
        answers: [
          {
            id: "a_sec_tech_inform",
            text: "Decibels drop fast with distance; the rigs are directional and idle until a drone signature appears. False alarms are logged, reviewed by an independent panel, and retraining kicks in after trends.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He frowns at charts eclipsing his showman narrative."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They back the physics and phased shielding approach."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear specs may confuse caretakers and clinics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They flag audit trails missing in the technical brief."
                }
              }
            },
            followUpId: "q_ter_legal"
          },
          {
            id: "a_sec_tech_reassure",
            text: "We tuned the reeds for gentler overtones and teach operators a 'polka pause' if a senior center is nearby. Community boards can set soft-reed nights and cap volumes during nap windows.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes the soothing tone if it still spotlights him."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They see gentler tuning as potential loss of punch."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They cheer training and humane sound profiles."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They warn soothing claims must match enforceable policy."
                }
              }
            }
          },
          {
            id: "a_sec_tech_deny",
            text: "We’re not rattling hospital gear. The emission window is narrow, the duty cycle short, and labs certified the system doesn’t interfere with common monitors or hearing aids in normal operation.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He dislikes defensive denials that dampen momentum."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry categorical denials invite future blowback."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear blanket denials erode public credibility."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They support a firm line if audits verify compliance."
                }
              }
            }
          },
          {
            id: "a_sec_tech_auth",
            text: "Authorized on the record from the Defense Department: technical specs, test ranges, and safety sheets will be posted before deployment, including decibel maps for every block.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He bristles at ceding spotlight to agency signatures."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They appreciate formal authorization and oversight."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They note approval doesn’t address community worries."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They stress authorization is not a substitute for warrants."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Defense
          }
        ]
      },
      {
        id: "q_sec_jobs",
        text: "You tout Main Street jobs from bellows brigades; how much is real manufacturing versus grant theater, and what guards against pork-barrel squeezebox deals?",
        answers: [
          {
            id: "a_sec_jobs_inform",
            text: "Budget is capped with open bidding and clawbacks. At least 60% is real manufacturing, not ribbon-cutting cosplay, and we’ll publish job-creation ledgers by town with an automatic sunset review.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes clear caps that he can brand as discipline."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They praise open bids aligning industry to mission."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear contracting jargon loses small-town voices."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They insist on clawbacks tied to compliance and equity."
                }
              }
            },
            followUpId: "q_ter_funding"
          },
          {
            id: "a_sec_jobs_challenge",
            text: "Some tech lobbyists call any hometown job a subsidy unless it ships profits to their cloud. We’ll pick builders who can hold a wrench and a tune, not just write a memo about disruption.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He risks sounding combative against hometown skeptics."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They see rhetoric overshadowing procurement rigor."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They welcome pride in local work when guardrails hold."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry a hot tone masks subsidy favoritism."
                }
              }
            }
          },
          {
            id: "a_sec_jobs_admit",
            text: "Procurement can attract pork like bees to spilled soda. So we’re banning no-bid bellows, posting contracts in plain language, and empowering whistleblowers with prizes, not paperweights.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He dislikes admitting exposure to pork-barrel risks."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear candor could deter good contractors."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry admissions can chill mom-and-pop interest."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They applaud honesty paired with anti-fraud triggers."
                }
              }
            }
          },
          {
            id: "a_sec_jobs_reassure",
            text: "Small shops won’t be stage props. Microgrants go to actual fabricators with storefronts and apprentices, and payments hinge on verified deliveries, not glossy press releases.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He sees comfort talk as low energy for a jobs push."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They prefer metrics over sentiments in supplier plans."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They value microgrants and fair access for small shops."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They note assurances should be backed by audit teeth."
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
        text: "On legality, will sound sweeps require warrants, and how will you prevent discriminatory 'polka zoning' targeting certain blocks or lawful protests?",
        answers: [
          {
            id: "a_ter_legal_admit",
            text: "Yes, sustained sound sweeps need warrants, and emergency use is time-limited with a written record. We’re banning 'polka zoning' that targets communities, with quarterly civil-rights audits.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He accepts limits if he can frame them as leadership."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry strict warrants may slow urgent responses."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear legal friction during community emergencies."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They endorse warrants and anti-discrimination rules."
                }
              }
            }
          },
          {
            id: "a_ter_legal_inform",
            text: "A public legal memo lands in 30 days. Every activation writes a hashed log, reviewed by a judge and a community board. Training includes bias drills and a prohibition on surveillance-by-sound.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He chafes at memos that pull energy from the story."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They welcome clear protocols and activation logs."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They note paperwork won’t calm neighborhoods alone."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They demand drafts address chilling effects on speech."
                }
              }
            }
          },
          {
            id: "a_ter_legal_reassure",
            text: "A civil-liberties watchdog from the fictional Ombuds of Acoustics sits in oversight meetings, and there’s a hotline for complaints that triggers rapid review within 48 hours.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He finds the soft tone risks seeming evasive."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They see over-reassurance dulling deterrent edges."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They champion independent watchdogs and hotlines."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They stress comfort must not replace enforceable limits."
                }
              }
            }
          },
          {
            id: "a_ter_legal_deflect",
            text: "We’re not tuning the squeezebox to eavesdrop on solos. The point is shoving hostile drones off the stage, not scoring a bootleg of your block party playlist.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He dislikes deflection that invites follow-up heat."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear hedging looks like gaps in control."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They accept a gentle redirect to avoid panic."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They warn deflection undermines credibility in court."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_funding",
        text: "If taxpayers fund this rollout, what’s the total cap, the timeline, the success metric, and who holds the kill-switch if it starts chewing up commerce?",
        answers: [
          {
            id: "a_ter_funding_inform",
            text: "Total cap is 2.1 billion chits, phased over three years; target is a 75% drop in drone incursions. A neutral grid operator holds the kill-switch and must publish every flip.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He frets that spreadsheets mute his rally drumbeat."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They applaud phased caps and testable milestones."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry numbers ignore neighborhood impacts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They insist the kill-switch be traceable and lawful."
                }
              }
            }
          },
          {
            id: "a_ter_funding_reassure",
            text: "If the metrics miss by two reviews, the sunset hits and the bellows pack up. Hardware gets repurposed to schools and festivals, not a dusty warehouse of broken promises.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He sees sunsets as prudent but less dramatic."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear auto-sunset may erode deterrent posture."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They like safeguards if performance slips persist."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They want sunsets paired with clear due process."
                }
              }
            }
          },
          {
            id: "a_ter_funding_deny",
            text: "This isn’t a slush geyser. No naming rights, no mascot IPOs, and no payments for idle reeds—if a block doesn’t need it, it doesn’t buy it.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He thinks denials concede the frame to critics."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They warn blanket denials age poorly under scrutiny."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry denial tone hardens skeptical communities."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They approve bans on naming rights and self-dealing."
                }
              }
            }
          },
          {
            id: "a_ter_funding_challenge",
            text: "Claims that the network will 'chew up commerce' come from folks selling drones that chew up porch naps. Safe streets and open markets aren’t at odds; we can have both.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He enjoys calling out speculative doom with swagger."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They caution bravado may spook cautious suppliers."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear a chest-beating tone stirs neighborhood ire."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "They note no legal change is implied by this posture."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
