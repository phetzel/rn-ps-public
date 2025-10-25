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
      id: "root",
      text: "Your agencies tout squirrel cyber teams as faster and cheaper at hardening networks; what is jamming deployment while phantom threats still gnaw our cables?",
      answers: [
        {
          id: "root-a1",
          text: "The President didn’t order woodland commandos; he green‑lit a pilot for snail cryptographers. If acorns are moving packets, that’s an overcaffeinated clerical flourish, not presidential doctrine.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He welcomes clarifying the order while denying the premise."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Defense bristles at the dismissal of validated trials."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Homeland sees risk in muddled messaging during rollout."
              }
            }
          }
        },
        {
          id: "root-a2",
          text: "Defense ran twelve controlled sims: squirrel teams cut patch time by 41% and false alerts by 28%. We’re staging a 60‑day hardening sprint and a 90‑site pilot, with procurement doors already unlatched.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He dislikes shifting away from his stated direction."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Defense applauds evidence-based framing of the program."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Homeland values the operational details shared here."
              }
            }
          },
          followUpId: "sec-ops"
        },
        {
          id: "root-a3",
          text: "We can’t itemize budget lines while bids are under seal and bark‑encryption waivers are pending. Publishing tiny‑PPE and perch specs mid‑procurement would tilt the field and tip off adversaries.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He rejects evasive tone and wants unambiguous answers."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Defense worries deflection erodes support for pilots."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Homeland approves a cautious posture on specifics."
              }
            }
          },
          followUpId: "sec-cost"
        },
        {
          id: "root-a4",
          text: "On the Defense Secretary’s authority, the mission is defensive hardening of critical I/O trunks, not gadget cosplay. Units deploy only on signed cyber orders with Homeland coordination and audited paw logs.",
          type: AnswerType.Authorized,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He questions authorizing statements absent his directive."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Defense appreciates limited confirmation of guardrails."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Homeland dislikes implying readiness beyond approvals."
              }
            }
          },
          authorizedCabinetMemberId: CabinetStaticId.Defense
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "sec-ops",
        text: "If the ROI is a slam dunk, give us a start date, milestones, and who actually holds the clipboard that keeps stamping ‘pending’ on the squirrel rollout?",
        answers: [
          {
            id: "sec-ops-a1",
            text: "Phase zero is underway now: 3 weeks of handler training, then a 60‑day rollout to the top 90 targets. The long pole is inter‑agency permits, which we expect to finalize on a single standardized form.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He resists timelines that contradict his preference."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Defense supports clear phases and measurable goals."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland worries dates could expose operational gaps."
                }
              }
            },
            followUpId: "ter-permits"
          },
          {
            id: "sec-ops-a2",
            text: "We don’t timestamp patrol routes for the same reason we don’t publish passwords. Announcing when the teams rappel onto branches would help intruders pre‑position their ladders.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He rejects secrecy that undercuts public accountability."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense sees value in discretion but not vagueness."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Homeland favors withholding sensitive route details."
                }
              }
            }
          },
          {
            id: "sec-ops-a3",
            text: "While paperwork lumbers, baseline hardening is already happening with human crews and canines. The squirrel teams are an accelerant, not the only lock on the door.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He finds reassurance without specifics unconvincing."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense notes the claim lacks binding milestones."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland appreciates baseline hardening underway."
                }
              }
            }
          },
          {
            id: "sec-ops-a4",
            text: "The ‘stall’ narrative is largely from vendors selling anti‑squirrel appliances. We’ll happily compare dashboards when their boxes outperform a motivated rodent with a packet sniffer.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He dislikes blaming vendors instead of fixing delays."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense welcomes scrutiny of rent-seeking narratives."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland worries confrontation invites policy blowback."
                }
              }
            }
          }
        ]
      },
      {
        id: "sec-cost",
        text: "What’s the true cost curve—training, micro‑badges, tiny PPE, tree‑top servers—and why does procurement act like buying acorns requires a moonshot?",
        answers: [
          {
            id: "sec-cost-a1",
            text: "Unit cost sits below existing response teams by 23% after training, with tree‑top server credits negotiated citywide. Security controls add modest overhead; we can walk you through those guardrails.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He resists endorsing savings without caveats."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Defense backs the comparative cost advantage claim."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland flags ongoing compliance overhead risks."
                }
              }
            },
            followUpId: "ter-security"
          },
          {
            id: "sec-cost-a2",
            text: "No, we are not buying tiny helmets with night‑vision monocles. If anyone is pitching couture for rodents, it’s not on our purchase orders and not on the taxpayers’ tab.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He appreciates dispelling frivolous cost rumors."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Defense dislikes dismissing gear needs too broadly."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland notes procurement bans still constrain buys."
                }
              }
            }
          },
          {
            id: "sec-cost-a3",
            text: "Active solicitations mean we can’t disclose line‑item pricing without skewing bids. We’ll release a full dashboard the instant awards are signed and adversaries can’t game the menu.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He opposes hiding numbers behind active solicitations."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense thinks limited disclosure is prudent but thin."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Homeland values protecting bid integrity during talks."
                }
              }
            }
          },
          {
            id: "sec-cost-a4",
            text: "The program is capped, phased, and audited, with kill‑switch funding if ROI slips. We’re swapping bloated overtime for faster mitigation, not inventing a woodland subsidy.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He doubts reassurances without hard cost ceilings."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense sees audits as helpful but not yet decisive."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland welcomes phased oversight and caps."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "ter-permits",
        text: "You cite park permits and bark‑encryption waivers; are we truly waiting on a forestry checkbox to defend routers, and who signs that bark in ink?",
        answers: [
          {
            id: "ter-permits-a1",
            text: "It’s a stack: municipal arbor boards, transit catenary owners, and inter‑park agreements. We’ve pre‑drafted a unified waiver, and the sign‑offs are tracking to single‑digit days, not months.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He dislikes bureaucracy slowing core cyber defense."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Defense welcomes mapping dependencies to move faster."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland notes interagency permits can be hazardous."
                }
              }
            }
          },
          {
            id: "ter-permits-a2",
            text: "We won’t litigate specific forms at a podium. The teams will be where the law and safety say yes, and we’ll file the paperwork without inviting sabotage by itinerary.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He rejects podium evasions about simple forms."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense warns opacity fuels confusion on timelines."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Homeland defends protecting sensitive legal steps."
                }
              }
            }
          },
          {
            id: "ter-permits-a3",
            text: "Some of the paperwork prose is archaic—one clause still defines a ‘woodland modem’ as a whisper. We’re modernizing that language so it governs encryption, not poetry.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He appreciates honesty but demands quick fixes."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense sees outdated language as an actionable fix."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland supports scrubbing archaic clauses swiftly."
                }
              }
            }
          },
          {
            id: "ter-permits-a4",
            text: "In parallel, we’re staging on certified utility poles and indoor labs, so coverage doesn’t wait on a single stamp. There’s no security donut hole in the meantime.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He questions whether staging truly mitigates delay."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense likes parallel posture on certified sites."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland worries staging can mask compliance gaps."
                }
              }
            }
          }
        ]
      },
      {
        id: "ter-security",
        text: "Critics say squirrels chew cables and leak kernels; how do you isolate risk, audit paw‑prints, and prove they beat humans under live‑fire conditions?",
        answers: [
          {
            id: "ter-security-a1",
            text: "Each unit uses insulated harnesses, fiber‑safe muzzles, and paw‑signed modules that only run on vetted trees. Telemetry captures every hop; red‑team trials showed faster containment and fewer false alarms.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He prefers stronger human oversight on safeguards."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Defense backs rigorous safety and training standards."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland flags handling risks during early ops."
                }
              }
            }
          },
          {
            id: "ter-security-a2",
            text: "We’ve logged zero cable‑chew incidents in pilots. The ‘kernel leaks’ claim came from a lobby that still thinks air‑gapping is unplugging a toaster, not from our auditors.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes the clean pilot record but remains wary."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Defense doubts blanket denials persuade skeptics."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland fears overconfidence can erode vigilance."
                }
              }
            }
          },
          {
            id: "ter-security-a3",
            text: "If someone thinks humans beat them, bring metrics, not vibes. In blind trials, the mammals with tails ended more incidents before coffee than the mammals with inboxes.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He dislikes taunting critics instead of proving it."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense tolerates challenge but wants metrics first."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland warns bravado can miscue field behavior."
                }
              }
            }
          },
          {
            id: "ter-security-a4",
            text: "Independent reviewers tag every paw‑print, and a humane stop switch halts a squad if anomalies pop. The goal is safer systems, not rodent theater, and that’s exactly what the data shows.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He wants independent audits but clearer thresholds."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense sees the hybrid testbed as a smart step."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland welcomes tagged auditing of paw-prints."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
