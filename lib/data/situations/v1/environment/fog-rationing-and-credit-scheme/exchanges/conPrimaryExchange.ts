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
      text: "With the Fog Rationing and Credit Scheme rolling out, are checkpoints and quota swaps choking coastal harvesters and rooftop vendors, or improving safety?",
      answers: [
        {
          id: "a_r1",
          text: "The President denies that fog can be rationed; it's weather with a side hustle. We are not metering moods of water; if it invoices us, he'll pay in coupons, not policy.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Playful denial charms base and blunts panic over rationing."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Undercuts health framing and risks mixed signals to clinics."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Signals laxity that smugglers could exploit at checkpoints."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Public health hinges on calm breathing, not cargo jams. We're smoothing checkpoints into 90-second mist checks, issuing towels and charts, and keeping harvesters and rooftops moving safely.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Soothing tone may seem evasive amid market choke complaints."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reassurance aligns with health briefings and reduces anxiety."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft focus leaves enforcement resolve ambiguous to bad actors."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Homeland Atmospherics will post checkpoint windows, swap limits by zone, and anti-laundering triggers. Vendors can scan a cloud-status board to plan routes and avoid bottlenecks.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Procedure talk sounds bureaucratic, not bold leadership."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dry details sideline health context and muddle public cues."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear info backs deterrence and steadies checkpoint flow."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Allocation auctions and swap math are run by the Ministry of Mists, not the podium. We'll let the modelers model while we focus on clarity and calm.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Humor and deflection lighten mood but risk trivializing pain."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Light tone helps de-escalate but may erode clinical trust."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes invite noncompliance and complicate field discipline."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Coastal crews say perishables spoil at fog checkpoints while rooftop vendors miss dawn markets; what relief or redesign will stop the choke without chaos?",
        answers: [
          {
            id: "a_s1_1",
            text: "We are opening a perishables lane, pre-clearing coastal boats by radio, and front-loading swaps before dawn. No one should lose a day’s catch to a clipboard.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Special lanes admit weakness and invite more demands from sectors."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Priority lanes reduce spoilage stress and calm vulnerable vendors."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Exceptions create gaps traffickers can game without tight audit."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "The rollout had first-week friction; we stacked too many pilots on one pier. We are staggering windows, adding mobile staff, and fixing the hold-music purgatory.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Admitting friction feeds critics and suggests rollout mismanagement."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Operational mea culpa distracts from health messaging discipline."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Owning mistakes helps reset compliance and deter panic hoarding."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Median dwell is 11 minutes outside fog spikes, and marked crates get seal-through. A roaming auditor team is empowered to bust clogs and reroute on the hour.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Stats without empathy risk appearing detached from livelihoods."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Numbers alone obscure health nuance and readiness expectations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Publishing dwell data supports targeting and reduces rumor mills."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Some choke is self-inflicted by credit hoarding and viral queue theatrics. If traders stop cosplay-panicking, the line moves like, well, fog.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Chastising traders may sound combative yet shows firmness."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blame narrative can heighten stress and worsen breathing risks."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm stance pressures hoarders but may stoke clever evasion."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Homeland Atmospherics flags voucher laundering and gray-mist rackets; what evidence backs that, and how will you avoid punishing honest swappers?",
        answers: [
          {
            id: "a_s2_1",
            text: "Authorized: Homeland has traced clusters of sequential swaps, seized counterfeit voucher sheets, and flagged gray-mist shells. Tipline 707-MIST gets priority; repeat fraud loses licenses.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Crime emphasis can overshadow economic relief and stall momentum."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crackdown framing escalates stress, a public health negative."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Trace evidence validates alerts and enables targeted stings."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Homeland,
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "Evidence includes time-stamped swap chains hopping rooftops to coast in minutes, plus duplicate serials. We target networks, not neighborhoods, and publish redacted maps weekly.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical proof talk lacks vision and won't satisfy anxious sellers."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dense detail loses lay audiences and clouds risk cues."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Specific markers bolster cases and refine checkpoint triage."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "We are not punishing honest swappers. First hits are warnings with fixes, and only willful rerouters see fines after a clean appeal path.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Protecting honest swappers resonates with market freedoms."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances reduce anxiety yet may blunt compliance with screens."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Blanket denial weakens deterrence and signals audit pullback."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Hype about laundering often comes from fog-credit speculators who profit on panic. We will not let market theater write enforcement scripts.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Calling out hype challenges elites and appeals to skeptics."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Dismissive tone undermines health partners and local clinics."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing threat saps resolve and complicates operations."
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
        text: "If delays are billed as 'for health,' show the health: what's the respiratory risk, what data are you collecting, and do fog-lullabies and towels actually help?",
        answers: [
          {
            id: "a_t1_1",
            text: "Baseline risk is low; fog is damp air, not doom. Calm pacing reduces cough spikes, and yes, towels and lullabies work because slowing breath beats sprinting through checkpoints.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Minimizing risk may later backfire if conditions tighten."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear reassurance reduces panic and supports healthy routines."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Downplaying hazards could relax vigilance at chokepoints."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We are collecting voluntary spirometry and pulse-ox samples at booths, with weekly dashboards and clear caveats. Data guide tweaks to queue length and swap timing.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Data talk feels technocratic and remote from kitchen-table pain."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Metrics help care planning but require careful privacy framing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Health data sync helps schedule windows and reduce backups."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "There is no evidence of an asthma surge tied to checkpoints. If clinic alerts rise above thresholds, we will pause segments and retool immediately.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Confident denial plays well with skeptics demanding normalcy."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal risks undercutting clinicians tracking flareups."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Soft-pedaling risk can weaken compliance with fog windows."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "For anyone craving extra calm, our federally unaccompanied Fog Choir holds open rehearsals Tuesdays. Participation is free, pitch optional.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Whimsy disarms critics and keeps message agile for broad audiences."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Gentle humor aids coping, though benefits are mostly placebo."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Light touch may dilute deterrence and muddy field priorities."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On enforcement, are you barcoding clouds and ringing a midnight fog-curfew bell, or is this theater that lets the real mist-mob drift past the gate?",
        answers: [
          {
            id: "a_t2_1",
            text: "We are not barcoding clouds; we are serializing vouchers and anomaly-scanning flows. The 'midnight bell' is an app alert, and stings are scheduled off-pattern to avoid theater.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Overly technical tone may feel like dodging efficacy concerns."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Process talk sidelines health impacts and care readiness."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clarifying tools boosts deterrence and guides field discipline."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Capacity is finite; we will not chase every wisp. We prioritize high-risk rings and cut low-yield stops so honest traders spend minutes, not hours, under clipboards.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting limits shows honesty but fuels charges of theater."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candor helps trust yet can heighten anxiety in fragile groups."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Resource realism signals focus, though crooks may probe gaps."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "This is not pageant policing. Every checkpoint needs a measurable fraud delta, or it gets shut down and re-tasked.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm denial projects control to those weary of restrictions."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confidence may soothe some but risks ignoring vulnerable lungs."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overconfidence invites testing by smugglers and copycats."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Mist-mobs hate paperwork. Drown them in it, and the honest folks breeze through on a fast lane of transparency and predictability.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Aggressive posture energizes base but risks bureaucratic excess."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Paperwork surge raises stress and can burden clinics with spillover."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Red tape can deter petty rings yet overloads frontline teams."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
