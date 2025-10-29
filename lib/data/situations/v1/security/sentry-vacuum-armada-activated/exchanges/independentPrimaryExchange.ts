import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const independentPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.IndependentPrimary,
  content: {
    rootQuestion: {
      id: "q_root",
      text: "Your vacuum-perimeter enlists home vacs and barn bots. What law, rural uptime, and animal-consent rules back this nationwide dust mesh?",
      answers: [
        {
          id: "a_r1",
          text: "Let's turn security into a hometown build-off: whichever county keeps 99% uptime and zero false goat arrests gets the Golden Dustpan. We can defend the porch and brag at the fair.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Framing this as a challenge energizes rural pride and draws attention."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Unclear specs risk signaling weakness and create avoidable confusion."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Grandstanding spooks pet owners instead of calming their practical fears."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hype without guardrails invites suits and drags us into avoidable fights."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Specs: owners opt in, the mesh pings every 10 seconds, rural nodes buffer 48 hours, and barn mode ignores animals by default. We'll publish cord lengths and signal maps before rollout.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Overly technical tone can feel cold and miss the human privacy concern."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear parameters project capability and deter mischief at the margins."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Specs alone will not reassure seniors worried about their living rooms."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Neutral stance rests on whether access limits are truly enforced."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r3",
          text: "No one is deputizing your bath mat. Homes choose in, data is siloed, and farm dogs keep alpha status. This is a slow parade, not a siren stampede, so neighbors can breathe.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Soothing tone helps, but it can look evasive when details are missing."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Downplaying capabilities blurs accountability for field performance."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reassurance in plain language earns trust and reduces early panic."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Promising choice without detail risks discovery battles down the line."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "We'll be honest: crumb data is a gray zone, and we need tighter warrants and sunset clauses. Lawmakers and judges will be looped in before a single closet is secured.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.MajorPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Owning gray areas is honest, but it spotlights uncertainty on day one."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting ambiguity signals risk to readiness and testing timelines."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ambiguity unsettles caretakers and complicates local coordination."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Candid admission strengthens credibility with courts and watchdogs."
              }
            }
          },
          followUpId: "q_sec1"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "If a living-room vac flags 'crumbs of interest,' what stops warrantless suction and creep into closets, tractors, and chatty baby monitors?",
        answers: [
          {
            id: "a_s1_1",
            text: "Vac logs could over-collect. We'll propose a Vacuum Privacy Act: crumb data scoped to specific threats, warrants for interiors, and auto-delete in 24 hours unless a judge extends it.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Acknowledging risk is mature, yet it may feed anxieties about overreach."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caution is proper, but it can slow deployment and muddle operators."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Saying we see the issue calms households worried about creeping scope."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague corrective plans leave gaps that courts may later penalize."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Each unit hashes events on-device and only uploads alerts with coarse geotags. No audio, no baby-cam taps, and device identifiers are blinded before any analyst sees them.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Concrete safeguards make a strong case for responsible innovation."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "On-device hashing and limits show disciplined engineering practice."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tech talk alone leaves seniors unsure how their private spaces stay safe."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Checks help, but warrants and retention policies must still be tight."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Users will see, download, and nuke their own suction history with one tap. Opt out, and the vac reverts to dumb sweep and gossips to no one.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Empathy reads well, yet skeptics may hear PR instead of firm policy."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort language can dilute urgency around real threat detection."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "User control promises build trust and defuse immediate backlash."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances must match discoverability rules or they will unravel."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If a closet is plotting treason, it can take a number like the rest of us. We're not chasing dust bunnies without cause or a judge signing off.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jokes about closets trivialize rights and invite a swift backlash."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mocking threats undermines perceived seriousness of the program."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissive tone rattles families and erodes local cooperation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor cannot substitute for warrants or clear statutory authority."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Dusty back roads brown out, barns have tin roofs, and goats chew cords. What uptime can you guarantee, and who pays when the mesh naps in a windstorm?",
        answers: [
          {
            id: "a_s2_1",
            text: "Baseline uptime target is 99.3% with solar-battery backups and mesh hopping across rural spectrum. Goats chew cords? We've got braided armor and cord-free docks ready for barns.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Solid targets show seriousness, but outages will still dominate press."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear uptime goals with batteries demonstrate operational planning."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Metrics help, yet rural households remain wary of disruptions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Promises invite liability questions if subsidy rules are unclear."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "No one's getting fined for a windstorm. When the mesh naps, we fall back to mapped patrol zones, and homeowners get a rest mode badge, not a penalty.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Compassion helps, yet it might sound like lowering the reliability bar."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Forgiving windstorms is humane but risks tolerance for lax upkeep."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Relief messaging reduces blame during storms and eases tensions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Waivers reduce disputes but must be bounded to avoid abuse."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "We're not shifting costs to farmers. Hardware subsidies cover rural nodes, and liability for outages sits with the network operator, not the person with hay in their boots.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Firm denial plays tough, but critics will attack the budget math."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cost cover pledges strain procurement and may cut into readiness."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overpromising invites anger if gear fails during real incidents."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Protecting farmers is laudable, yet funding statutes could constrain us."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Show us a county that beats a dust devil, and we'll name the relay after your Young Hoofers League. Rural grit is the edge here, not a bug we need to sand down.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "A public challenge can inspire innovation and real rural buy-in."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Unstructured contests can distract units from core reliability work."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Competition may overlook elderly needs during peak storm seasons."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Prizes are fine, but contract law must clearly frame award terms."
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
        text: "Without new law, how will courts treat crumb logs, and will users see, download, or erase their own suction histories before they fossilize?",
        answers: [
          {
            id: "a_t1_1",
            text: "Courts will poke holes unless lawmakers draw the lanes. We'll seek guardrails on retention, scope, and audit so a log can't morph into a warrantless diary.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Warning Congress is candid, yet it spotlights our current exposure."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Legal uncertainty risks evidence chain integrity in operations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Honesty helps partners plan, though it can slow local sign-ups."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Requesting statutes early strengthens prosecutorial footing."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Users get a dashboard with per-room logs, one-click purge, and a redaction timer. Investigators need a targeted warrant to freeze entries, and hashes prove tampering.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear data access rules make the system feel fair and controllable."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A dashboard standardizes logs and aids audits for field units."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Simple tools help, yet families still want firm privacy boundaries."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Access design must still preserve warrants and minimization."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Think receipts, not surveillance novels. Short entries, no voice, no faces, and deletion by default unless a judge says otherwise.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Framing logs as receipts eases nerves but can seem minimizing."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing scope may hinder analysts during critical incidents."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Short retention and redactions calm privacy-first communities."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Narrow logs help, yet courts may still demand broader context."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "If anyone wants romance from a crumb log, they need a better hobby. We keep the boring bits safe and toss the rest on schedule.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snark alienates moderates who want straight answers on privacy."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flippant tone undercuts the discipline we need during litigation."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes about logs unsettle families and local officials."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Courts dislike sarcasm; it weakens our standing in disputes."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Rural co-ops say fiber stops at the feed store. Will the mesh ride satellites, and what happens when hay dust bricks the camera lens mid-storm?",
        answers: [
          {
            id: "a_t2_1",
            text: "Backhaul runs on a tri-path: rural fiber where it exists, LEO satellite when it doesn't, and peer hops between nodes. Lens caked in hay? It self-cleans and pings a wipe me alert.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Tri-path plan signals competence and respect for rural realities."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Layered backhaul and ruggedization support mission continuity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Residents want plain talk on outages, not just architecture."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Funding paths and data handling must still comply with law."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Satellite time isn't free, and storms can blind dishes. We've budgeted redundancy and local overrides so crews aren't stuck waiting for clear skies to reboot the mesh.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning limits shows humility, but rivals may spin it as weakness."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting blind spots pushes teams to harden sensors quickly."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Candor buys patience from co-ops facing weather and dust."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparency protects credibility when discovery inevitably comes."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "If everything goes gray, the perimeter degrades gracefully to visual beacons and old-school radios. No barn gets left blinking without a backup.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Graceful degradation comforts users but may invite complacency."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Resilience is good, yet it can mask critical detection losses."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Steady fallback modes reduce panic during the worst storms."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fallback must still respect retention and authority limits."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "The hay will win a round now and then. We design to lose gracefully, shrug, and get back up without turning the county into a tech tantrum.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Folksy lines land in town halls but may look unserious on TV."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Humor about failure risks morale and external confidence."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Levity helps once, not as policy; families seek specifics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Wit cannot cover for compliance gaps when things go wrong."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
