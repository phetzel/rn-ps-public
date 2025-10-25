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
      text: "As the Sentry Vacuum Armada links home units into a national perimeter, who controls the contracts, the crumb keys, and any firmware kill switch?",
      answers: [
        {
          id: "a_r1_challenge",
          text: "We built a challenge, not a choke point: towns that keep their perimeter crumb-free win grants, bragging rights, and a golden dustpan. Critics can bring a broom or cheer from the sidelines.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Framing this as a challenge energizes rural pride and blunts partisan attacks."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Open contests can leak capabilities and complicate perimeter discipline."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Uncoordinated town trials could confuse alerts and spook seniors."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Crowd mechanisms may muddy consent trails we must defend in court."
              }
            }
          }
        },
        {
          id: "a_r1_inform",
          text: "Contracts are modular: defense sets perimeter protocols, vendors build hardware, and data keys are split across encrypted modules. The spec is deliberately dull and independently audited every month.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Neutral,
              reaction: "Technical briefings neither help nor hurt the broader narrative today."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear modular specs project strength and deter probing within limits."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Detail dumps can spark hotline surges and local panic about spying."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Vendor tiers raise chain-of-custody questions we must police."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r1_reassure",
          text: "No one’s vacuum becomes a spy on your snack habits. Units scrub IDs on-device, idle in privacy mode by default, and steer clear of bedrooms. Your dog remains your dog, not a deputy with a dust badge.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Soft tones risk looking evasive while critics set the frame."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance without specs invites doubts about coverage gaps."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Calming specifics buy quiet hours and reduce complaint volume."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Too much comfort talk weakens future arguments on exigency."
              }
            }
          }
        },
        {
          id: "a_r1_admit",
          text: "We’ll admit the law hasn’t met the robo-vac frontier. Some use cases are unsettled, and we’re drafting guardrails with judges and rural councils. Let’s go line by line on warrants and consent.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Admitting gray zones can be spun as loss of control."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal caveats may be read as capability limits by rivals."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Acknowledging uncertainty rattles rural partners and seniors."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Owning ambiguities preserves credibility with judges down the line."
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
        text: "On contracts and data sharing: which vendors touch crumb logs, what anonymization runs on-device, and can aggregated dust be resold as market insights?",
        answers: [
          {
            id: "a_s1_inform",
            text: "Only certified integrators can access logs, and only through hashed windows that hide addresses. On-device anonymization runs before anything leaves. Firmware controls are sealed and lab-tested with third-party eyes.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Granular vendor rules are neutral to the national storyline today."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Tight integrator standards harden the perimeter and signal control."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Name-dropping vendors risks neighborhood suspicion spikes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Data access tiers invite discovery fights if not airtight."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_authorized",
            text: "Authorized brief: the redacted vendor roster, key-escrow map, and retention clocks sit in Annex D. Dust cannot be resold, and over-collection flags trigger automatic cutoffs. We brought stamped copies for you.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Leaning on redacted briefs reads bureaucratic, not bold."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Publishing rosters, even redacted, maps our supply chain."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Authorizations won't soothe households worried about resale."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Documented controls strengthen later courtroom narratives."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Homeland
          },
          {
            id: "a_s1_deny",
            text: "No, dust isn’t a commodity here and won’t be packaged as “market insights.” Contracts forbid resale, and penalties kick in faster than a toddler dropping crackers on a shag rug.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denials invite reporters to find exceptions and embarrass us."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blanket no's can box us in on legitimate pilot uses."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Communities may not believe us without proof of deletion."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A clear stance narrows claims opponents can bring."
                }
              }
            }
          },
          {
            id: "a_s1_reassure",
            text: "Crumb logs age out in 24 hours unless tied to a court order, and locations blur to the block. If a toaster sneezes, the system blesses it and moves on. Normal life stays normal.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurances without receipts can look like spin."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort messaging saps the deterrent value of specs."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Aging-out promises reduce fear and lower call volumes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Promises create obligations adversaries can exploit in court."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "On legal authority and consent: what warrants cover crumb-trail access, how are off-grid refusals handled, and who audits misuse across jurisdictions?",
        answers: [
          {
            id: "a_s2_admit",
            text: "Some crumb-trail queries sit in gray space between metadata and effects. We’re drafting a tight warrant template and publishing denial stats. Next, let’s walk through court survivability together.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Gray areas headline badly and embolden skeptics."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity invites testing by rival services and trolls."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uncertainty fuels rumor lines in rural counties."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Candor on warrants builds trust with magistrates."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_reassure",
            text: "Opt-out is real and documented. Off-grid homes aren’t penalized, and emergency alerts still reach you by radio. Your porch won’t be deputized just because you own a dustpan.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Letting the policy speak may be wiser than over-selling it."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft emphasis could be read as timid on enforcement."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Opt-out clarity calms households and lowers escalation risk."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Broad comfort language may weaken exigency later."
                }
              }
            }
          },
          {
            id: "a_s2_deflect",
            text: "We won’t litigate every hypothetical at a podium. The memo posts tonight with footnotes long enough to stun a moose and a hotline staffed by people who actually read them.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dodging hypotheticals looks slippery and fuels headlines."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Refusals to engage invite adversary probing for holes."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Non-answers elevate anxiety in mixed jurisdictions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Avoiding overcommitment reduces discoverable missteps."
                }
              }
            }
          },
          {
            id: "a_s2_deny",
            text: "There is no warrantless suction program. If anyone wants to chase crumbs into a cabinet, a judge signs the napkin first, and that napkin gets archived for auditors.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Absolute claims are brittle if any exception emerges."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A firm line signals discipline to our partners."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Communities may distrust us without audit receipts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overstated certainty can backfire with federal judges."
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
        text: "About the rumored crumb-trail kill switch: does firmware include a pause or purge command, who can invoke it, and are audit logs independently verifiable?",
        answers: [
          {
            id: "a_t1_inform",
            text: "There is a pause command for recalls and storms, guarded by multi-signature keys and time locks. It cannot purge data or roam your pantry, and every use triggers a public alert with a signed receipt.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical caveats can drown out the bigger story."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Operational clarity deters opportunistic testing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much jargon unsettles seniors and first responders."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Protocol talk without logs leaves us exposed in court."
                }
              }
            }
          },
          {
            id: "a_t1_deny",
            text: "There’s no secret purge lever hiding under the beater bar. If a unit bricks, it failed a safety test or lightning won the coin toss, not because we zapped dissent from headquarters.",
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
                reaction: "Hard denial risks credibility if a legacy menu surfaces."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "If disproven, denial undercuts deterrence and trust."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Communities remember denials that later shift."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "If accurate, it limits claims of secret searches."
                }
              }
            }
          },
          {
            id: "a_t1_admit",
            text: "We found legacy models that logged more than they should during beta. They were quarantined, patched, and re-certified, and we posted the diffs so watchdogs can confirm the crumbs now go nowhere.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning legacy flaws feeds the day's negative narrative."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting over-logging hints at wider weaknesses."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "News of over-collection spooks opt-in households."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Proactive fixes and audits impress oversight judges."
                }
              }
            }
          },
          {
            id: "a_t1_challenge",
            text: "If you suspect a shadow switch, bring it to the bake-off. Our engineers will race you with transparent logs and test rigs, and the winner takes home the Golden Filter.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "A bug-bounty style call makes critics do useful work."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public hunts risk roadmap exposure and exploit sharing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Structured testing channels fear into constructive reporting."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crowdsourced claims complicate evidence integrity."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "If crumb data guides patrols or fines, will cases survive court, what suppression risks do you foresee, and will rural opt-outs be penalized in disaster aid?",
        answers: [
          {
            id: "a_t2_admit",
            text: "Some cases will wobble on novelty alone. We’ll drop edge prosecutions rather than seed bad precedent, and we’re codifying that opt-out status cannot affect aid formulas or eligibility, ever.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flagging wobble invites a weekend of 'program in peril' takes."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Conceding risk erodes deterrent posture regionally."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uncertainty unnerves rural partners during storms."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Measured admissions keep cases from being tossed wholesale."
                }
              }
            }
          },
          {
            id: "a_t2_inform",
            text: "Chain-of-custody tags include device hashes, time skews, and human attestation. If any link bends, the evidence defaults to advisory, not punitive, and reviewers see the bend in red.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Specs can look defensive unless paired with wins."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Robust custody tags strengthen survivability in court."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dense detail can raise privacy alarms on the farm."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Chain steps invite suppression if any link breaks."
                }
              }
            }
          },
          {
            id: "a_t2_reassure",
            text: "Rural opt-outs won’t lose a dime in disaster aid or grants. The program chases storms and intruders, not lifestyles, and we budgeted extra to keep that promise boringly true.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances risk sounding like damage control."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort messaging can be read as conceding gaps."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Aid guarantees reduce backlash and keep cooperation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Promises may constrain prosecutorial discretion later."
                }
              }
            }
          },
          {
            id: "a_t2_challenge",
            text: "Test us in court; we’ll test ourselves first. We’re funding mock trials with hostile counsel so real cases don’t become guinea pigs, and the public gets to watch the sparring.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Pledging self-tests sells confidence and momentum."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Inviting tests could telegraph seams to challengers."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Open trials give rural partners a voice and ownership."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pretrial experiments complicate later evidentiary claims."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
