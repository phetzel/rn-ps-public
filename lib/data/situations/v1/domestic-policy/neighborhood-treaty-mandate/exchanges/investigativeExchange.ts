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
      text: "Your 'Neighborhood Treaty' mandates notarized neighbor accords; memos cite pilot towns, doorbell vendors, and driveway DMZ maps. Who built it, and who runs it?",
      answers: [
        {
          id: "a_root_1",
          text: "We challenge every cul-de-sac to broker leaf-blower ceasefires by potluck. Peace starts with a casserole and ends with a signed truce; even my goldfish envoy has a tiny clipboard ready.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold challenge resonates with civic-minded audiences."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Legal staff balk at overreach and vagueness here."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Diplomats see optics risk and operational strain."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "We admit backyard embassies were not on the founders' vision boards. Justice is scrubbing the playbook first-no mailbox sanctions or lemonade-stand raids without strict, public guardrails.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Sounds defensive and invites constitutional scrutiny."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear admission opens path to corrective policy."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State worries this narrows diplomatic flexibility."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_3",
          text: "State will issue porch passports and driveway visas through a painless form. Seniors get stamp waivers, rural folks can file by radio, and the registry pilots opt-in districts before any wider use.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technocratic tone dilutes your leadership posture."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Unclear enforcement lanes trouble department lawyers."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Practical details align well with consular routines."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_4",
          text: "Authorized from State: the Registry logs treaty status only, not your doorbell video. Pilot maps mark boundaries neighbors agree on, and all entries expire unless renewed with fresh consent.",
          type: AnswerType.Authorized,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Bureaucratic phrasing distances you from accountability."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Limited authority signal eases due process concerns."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Mandate vibes without support could backfire locally."
              }
            }
          },
          authorizedCabinetMemberId: CabinetStaticId.State
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Files show the Registry plots 'demilitarized driveways' and treats doorbell pings as diplomatic knocks. What is stored, who can see it, and how long is it kept?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Stored fields are block-level boundaries, treaty status, and a time-stamp; no audio, no video, no MAC addresses. Access is limited to neighbors in the accord and State clerks. Default retention is 90 days.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overly granular talk risks privacy anxieties."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Scope and retention remain hazy to prosecutors."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear schema aids diplomatic equivalence at scale."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "No one is mapping your sprinklers. \"DMZ\" means a driveway line two households negotiated, nothing more. Kill-switches, third-party audits, and a big red \"forget me\" button ship with the pilot.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance reads thin given leaked maps."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Narrowing claims reduces litigation exposure."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Downplaying features undermines field operations."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "We don't ingest doorbell feeds, triangulate foot traffic, or draw heat maps of porch gossip. If a vendor pitch implied that, it was sales fog, not policy, and it is not in the contracts.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denials strain credibility with reporters."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Crisp limits help draw a defensible line."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigidity may hamper pilot learning and tweaks."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "If we actually mapped real hazards, half the city would be flagged \"rogue raccoon corridor.\" Jokes aside, the point is consented boundaries, not surveillance, and that's where we stay.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snark risks appearing cavalier about surveillance."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes do not answer retention or access issues."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor softens tone but yields little guidance."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Draft notes cite mailbox sanctions, lemonade raids, and mediation subpoenas. What legal footing lets you push micro-treaties without turning into a backyard police force?",
        answers: [
          {
            id: "a_sec2_1",
            text: "We'll admit the doctrine is novel. That's why there are zero criminal penalties, a sunset clock, and an independent ombuds. Participation is the stickiest part-so we made it voluntary in the pilots.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Caution is noted but sounds hedged on authority."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning novelty builds trust with courts and AGs."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Legal hedging slows interagency coordination."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "Or we can keep waging passive-aggressive wars by anonymous flyers. We'd rather channel that energy into signed norms and shared snack tables. Try the truce first; keep your megaphones holstered.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Challenge energizes base but risks seeming glib."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Taunting tone undercuts statutory discipline."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric complicates partner city commitments."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "We're using voluntary compacts and arbitration analogs that cities already use for noise and fence disputes. Enforcement tops out at mediation referrals, not fines or cuffs, and oversight sits outside agencies.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk lacks presidential vision and lift."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Arbitration analogies need firmer statutory hooks."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Voluntary framing fits diplomatic best practices."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_4",
            text: "If the legislature wants to etch this in stone, wonderful-our lawyers adore footnotes. Meanwhile, the focus is neighbors choosing civility over sirens, which needs fewer statutes and more snacks.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection implies weak footing on core powers."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Passing the buck invites judicial skepticism."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Openness to legislation helps external alignment."
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
        text: "About those 'ambassador doorbells': which vendors are in the pilot, what data do they keep, and can the system geofence driveways or is that just marketing drama?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Three vendors won an open, posted RFP; devices emit a simple \"knock intent\" ping and nothing else. Vendors keep only hashed device IDs for support, purged on opt-out or after 30 days-no geofencing, no locks.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Specs talk feels small for an executive rollout."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Procurement clarity helps, but audits still thin."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "RFP transparency backs credible foreign-service tone."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "No, the doorbell won't freeze your car at the property line, dim your porch, or declare curfew. The DMZ tag is metadata on a map, not a force field, and it can't be enforced by a gadget.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissal of concerns looks out of touch."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear limits temper Fourth Amendment worries."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard nos box in partners and vendors publicly."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "If someone sells 'tactical chimes,' that's between them and their conscience. Our spec reads like a toaster manual on purpose: boring, interoperable, and designed to be unplugged without drama.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Shrugging off marketing risks appears careless."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lax posture may invite consumer protection heat."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Distance from hype shields core pilot diplomacy."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Residents control the hardware. You can unplug it, shred the treaty, and walk away without a bill or a black mark; the system forgets you faster than a raccoon forgets last night's trash day.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Putting control on residents reduces mandate aura."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "User agency answer defuses seizure-law critiques."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Optionality jeopardizes uniform field protocols."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Who audits the Registry, how are pilot blocks picked, and what recourse exists if a street is mislabeled a 'leaf-blower hot zone' by an overcaffeinated mediator?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Audits land with the Civic Inspectorate and a civic-tech nonprofit; redacted logs are published quarterly. Pilots are randomized from volunteers, and appeals get a ten-day review with binding corrections.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process detail reads managerial, not visionary."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "External audits help, but remedies lack teeth."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Multi-layer oversight boosts partner confidence."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "There's a hard sunset in a year, and no Registry tag can be used for taxes, zoning, or criminal matters. If it isn't about neighbor peace, it's out of bounds by design.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Sunset talk can look like backpedaling."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Time limits limit due process exposure and risk."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hard end date weakens continuity with pilots."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "Early labels were clumsy; \"hot zone\" sounded like a reality show. We scrubbed the taxonomy, added plain-English notices, and built a one-click revert for neighborhoods that hate the labels.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting mislabels concedes avoidable sloppiness."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning errors strengthens credibility with courts."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Language shift creates comms churn across posts."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "If a label stings, bring receipts. Challenge it at the forum, overturn it together, and write a better norm. The point is neighbors running their block, not the other way around.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Direct recourse pledge shows fighting spirit."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Encouraging disputes could flood dockets fast."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Adversarial framing strains district partnerships."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
