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
      text: "Critics call tree citizenship revenue theater: who pays, who profits, and why tag mature oaks while saplings and low‑shade blocks get sidelined?",
      answers: [
        {
          id: "a_r_challenge",
          text: "I’ll debate a maple at noon. This is about equal shade rights, not a cash grab. If critics out‑photosynthesize the plan, I’ll gladly water their argument.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Bold duel grabs attention and frames debate as leadership theater."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Public stunts complicate calm perimeter messaging on streets."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Spectacle risks spooking markets about cost discipline."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Neutral for clinics, but focus drifts from service readiness."
              }
            }
          }
        },
        {
          id: "a_r_reassure",
          text: "Nobody’s raiding lawns. Soft root checkpoints mean quick bark scans at public entrances, not hedge interrogations. Fines target serial saw‑offs, not backyard hammock enthusiasts.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Low-drama tone undercuts his desired high-contrast narrative."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear promise of soft checks supports measured field posture."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Vague comfort without forms invites compliance confusion."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurances promise access we may struggle to deliver early."
              }
            }
          },
          followUpId: "q_sec_enforcement"
        },
        {
          id: "a_r_inform",
          text: "Rate is a modest canopy‑meter levy, paired with credits for planting in low‑shade zones. Forty percent feeds a Shade Equity Fund, audited quarterly and posted in plain digits.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Stats overshadow showmanship and dull his spotlight."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rule-heavy framing can read as mission creep to locals."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear rates and dates stabilize expectations and uptake."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical talk sidesteps access and triage realities."
              }
            }
          },
          followUpId: "q_sec_money"
        },
        {
          id: "a_r_admit",
          text: "We’re health folks, not dendromancers; ring counts aren’t checkups. We’ll own the learning curve and scale clinics for heat‑stressed trees before issuing any wellness edicts.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Owning confusion dents the bravado he wants to project."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting gaps fuels skepticism about street protocols."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Uncertainty implies cost drift and administrative risk."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Candor builds trust and aligns with humane service tone."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_enforcement",
        text: "Backyard fines and registry deadlines are sprouting like weeds—how will enforcement avoid bark harassment while tackling canopy inequity on low‑shade streets?",
        answers: [
          {
            id: "a_se_reassure",
            text: "Soft checks are pop‑up shade tents with handheld scanners, no rakes at dawn. A five‑minute bark scan, a QR tag if needed, and a clear appeal path for mis‑tagged maples.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soothing tone blunts his preferred clash narrative."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Calm tents and scans match de-escalation doctrine."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances without fee clarity risk arrears."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance overpromises capacity on hot days."
                }
              }
            },
            followUpId: "q_ter_enforcement_details"
          },
          {
            id: "a_se_inform",
            text: "Cities get a 90‑day registry window, capped fees, and automatic waivers where shade is scarce. Repeat abusers pay more; first‑time misses get coaching, not citations.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk lacks the dramatic beat he craves."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deadlines can read punitive if field tone is soft."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Timelines and caps improve compliance and revenue flow."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid windows strain clinics in heat spikes."
                }
              }
            }
          },
          {
            id: "a_se_deflect",
            text: "Let’s not confuse leaf‑blower drama with policy. The priority is fixing bare‑sun blocks, and that means mapping canopy and funding new plantings, not ticketing garden gnomes.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dodging details invites ridicule and cedes drama."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection undermines trust in sidewalk protocols."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Shifting focus eases immediate sell but adds audit risk."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Evasion frustrates public health partners on triage."
                }
              }
            }
          },
          {
            id: "a_se_challenge",
            text: "Show us your shade map or stop fear‑casting. We’ll publish ride‑along schedules so watchdogs can witness enforcement that targets gaps, not grill parties.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Confrontational demand fuels his high-contrast brand."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Rhetoric neither helps nor harms checkpoint rollout."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Antagonism can spook city finance directors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive tone complicates outreach to vulnerable areas."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_money",
        text: "Follow the money: which agencies cash in from oak taxes, and what stops this from becoming a leafy shakedown that leaves poor blocks and saplings behind?",
        answers: [
          {
            id: "a_sm_inform",
            text: "Revenues flow to municipal Canopy Funds, sapling grants, and tag logistics; admin skim is capped by statute. An independent auditor live‑posts ledgers and variance flags.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Budget charts dim the drama he wants to headline."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Revenue talk sidelines perimeter priorities."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Dedicated funds and audits calm stakeholders."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fiscal focus ignores clinic staffing realities."
                }
              }
            }
          },
          {
            id: "a_sm_admit",
            text: "Early drafts were messy, and triage criteria still need sanding. HHS will prioritize heat‑islands and storm‑stressed elders first, with equity boards reviewing placements.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting messiness hands critics an easy clip."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uncertain criteria invite street-level complaints."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Messy drafts imply cost risk and backlogs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Honesty about triage builds service credibility."
                }
              }
            },
            followUpId: "q_ter_clinics"
          },
          {
            id: "a_sm_deny",
            text: "This isn’t a shakedown; credits and exemptions outmuscle penalties. Low‑shade blocks net plantings and fee relief, while lush zones pay for the sunlight they’ve long banked.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Blank denial reads defensive and brittle on revenue."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm line helps field teams push back on panic."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overconfident spin triggers scrutiny and volatility."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal weakens trust with community partners."
                }
              }
            }
          },
          {
            id: "a_sm_challenge",
            text: "Call it theater if you want; we’ll put the budget on a public 'leafstream' with targets and timestamps. If it flops, you get the headline—if it works, you get shade.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Public budget duel suits his combative instincts."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Showdown spectacle does little for street workflow."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "High-stakes optics risk derailing negotiations."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Showboating disrupts clinic planning and morale."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_enforcement_details",
        text: "Homeland’s root‑perimeter plan promises 'soft checkpoints'—what does that actually mean on a sidewalk, and who keeps clipboard zealots from mulching rights?",
        answers: [
          {
            id: "a_te_reassure",
            text: "Think festivals, not blockades: umbrellas, scanners, and posted rules. Residents can request a rescan, and officers log every interaction so trees and people aren’t hassled twice.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Chill framing mutes the conflict he wants to stage."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Event-like setup fits de-escalation training."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort talk without costs invites overruns."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft promises risk mismatched clinic capacity."
                }
              }
            }
          },
          {
            id: "a_te_deny",
            text: "No stop‑and‑sniff for ferns, no door‑to‑door shrub checks, and absolutely no trunk pat‑downs. Sidewalks stay open; we target event entries and city depots, not porches.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial seems evasive and fuels parody."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Categorical no’s box in field discretion."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Drawing lines can protect budgets from creep."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal chafes partners seeking safeguards."
                }
              }
            }
          },
          {
            id: "a_te_inform",
            text: "There’s a hotline, a two‑minute interaction max, and a 'no ID, no problem' policy with follow‑up appointments. Data expire in 30 days unless a case goes to appeal.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Procedural detail lacks the showfire he prefers."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Timers may feel punitive at curbside."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Standards and metrics bolster oversight."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Time caps may hinder compassionate encounters."
                }
              }
            }
          },
          {
            id: "a_te_deflect",
            text: "We rejected the 'badge‑wearing squirrels' pilot, funny as it was. Education beats ambush; we’ll flood neighborhoods with signage, not citations, to set norms.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Humor jab still spotlights him as ringmaster."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Joke lands harmlessly; field playbooks unchanged."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Snark risks alienating city finance allies."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Levity can trivialize patient-facing concerns."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_clinics",
        text: "HHS floated 'wellness for wood' clinics and oak triage—what services are real, who qualifies, and will low‑shade districts get more than pamphlets and sap?",
        answers: [
          {
            id: "a_tc_admit",
            text: "Day one was chaotic; we triaged a picnic table. Now criteria prioritize heat‑burdened blocks and storm‑damaged elders. We’ll publish wait times and miss rates weekly.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning missteps risks late-night mockery."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clinic chaos stories spook patrol coordination."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitted confusion implies cost volatility."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparency builds trust in ShadeCare rollout."
                }
              }
            }
          },
          {
            id: "a_tc_inform",
            text: "Clinics offer sap‑flow checks, pest counseling, mulch vouchers, and drought resilience plans. Qualifying starts with heat exposure or age, with mobile units for far blocks.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Service menus won’t satisfy his appetite for spectacle."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Specs can be read as scope creep curbside."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Benefit details stabilize expectations and billing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lists alone won’t fix triage bottlenecks."
                }
              }
            }
          },
          {
            id: "a_tc_reassure",
            text: "Low‑shade districts get standing clinic weekends, translators for botanist‑speak, and on‑site planting crews. No tag required to get seen, and no bills for basic care.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comfort tone dulls the dramatic contrast he seeks."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Distribution promise supports equity posture."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Expanded weekends threaten overtime overruns."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances stretch staffing in low-shade zones."
                }
              }
            }
          },
          {
            id: "a_tc_challenge",
            text: "We challenge nurseries to match weekend hours with free saplings and dare cities to open vacant lots for 'shade blitzes.' Bring skeptics; we’ll bring shovels.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Calling out nurseries feeds his rivalrous theater."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Vendor pressure has limited impact on field ops."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public challenge disrupts procurement calm."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontation undermines partnership with providers."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
