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
      text: "Who slipped the 'Sovereign Snack' clause into talks, and did the Executive Mansion bless trading our embassy for a themed diner, as the napkin-side annexes suggest?",
      answers: [
        {
          id: "a_r1",
          text: "The President will gladly challenge the Snack Regent to a televised cook-off—loser recognizes the other’s napkins. We’re not bartering embassies for booths; we’re out-cooking bad clauses.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "A televised challenge projects strength and humor under pressure."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This undermines formal messaging and complicates allied coordination."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Showmanship risks mixed signals about entry and security norms."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Our legal read is clear: the clause envisions a temporary pop-up counter adjacent to the mission, not a land swap. We’ve notified counterparts that flags stay put and any menu elements are ceremonial.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Overly legalistic tone blunts your leadership in a delicate moment."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear guidance advances your preferred pop-up compliance pathway."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ambiguity about booth limits could hinder enforcement at the door."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "We deny that any booth, boothette, or barstool transforms into sovereign soil. No ketchup issues visas, no mustard stamps passports. Security jurisdiction remains on the building, not the condiments.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Blanket denial narrows options and invites a standoff with the microstate."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hard lines may freeze talks and stall pragmatic dining workarounds."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Security doctrine is affirmed and border claims are properly rejected."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Regardless of the annex font or napkin watermark, policy hasn’t changed: alliances aren’t laminated menus. We’ll protect our people, our seal, and our fries while we audit every crumb of this paperwork.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Calming rhetoric reassures stakeholders without conceding substance."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassurance stabilizes channels and preserves space to clarify texts."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft edges risk creep toward de facto recognition via amenities."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Your memo says a pop-up counter satisfies the clause without ceding soil. Who authored that reading, and do redlines show who added the snack language?",
        answers: [
          {
            id: "a_s1_1",
            text: "That interpretation was authored by career treaty counsel citing Annex B-3 and footnote 7. We’ll publish the provenance log and a cleaned redline so you can see edits and initials in sequence.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "You appear reactive to lawyers rather than setting the narrative."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Career analysis strengthens your interpretive footing with partners."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Operational clarity is thin on security implications of pop-ups."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Early drafts included a jokey placeholder—“burger window TBD”—that should’ve been deleted sooner. It did not survive legal scrub, and the final text narrows “service” to non-sovereign hospitality.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Admission invites criticism and questions about drafting discipline."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Conceding a gag line in drafts weakens negotiating credibility today."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candor helps preempt security myths about secret booth clauses."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "We don’t annotate every quip in working copies from late-night sessions. What matters is the signed instrument, not the doodles of a diplomat who drew a waffle iron in the margin.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Evasive tone suggests you are dodging chain-of-custody questions."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection irritates counterparts seeking sourcing accountability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limited transparency offers a small operational clarity benefit."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "On behalf of the Diplomatic Department, we reiterate: the clause does not concede territory or authority; any food-service accommodation is temporary, adjacent, and symbolic within host-state law.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Delegating details without leadership framing leaves a vacuum."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong authorization empowers precise release and narrative control."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Focus on treaties leaves enforcement posture only lightly addressed."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Homeland says a booth isn’t a border. If a griddle rolls into the lobby, who enforces what—health code or visas—and could any of it trigger fryer protocols?",
        answers: [
          {
            id: "a_s2_1",
            text: "No kitchen cart creates a checkpoint. Our officers enforce security, and local inspectors handle food safety; the lines do not cross. There is no “fryer protocol” that overrides visa control.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical posture lacks the decisive tone expected from the White House."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid booth framing limits room to finesse diplomatic optics."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear denial anchors jurisdiction and prevents policy creep."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "If someone tries to turn a condiment caddy into a customs desk, they’ll be politely redirected to reality. We’ve trained staff to spot when a menu turns into a map and shut it down calmly.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Over-reassurance may appear dismissive of complex edge cases."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "This steadies external partners watching for procedural wobbles."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft comfort risks confusion at checkpoints if claims escalate."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Operationally, we would badge caterers like any vendor, keep them outside screening lanes, and separate food queues from consular flows. That’s written into our physical security plan.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process detail reads managerial, not strategic, for this audience."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Concrete steps bolster your interpretive case and interagency trust."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vendor rules help, yet deterrence posture stays muted and unclear."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "If the Snack Regent thinks a waffle maker can annex a lobby, we’ll bring a bigger waffle maker—plus a lease agreement. We challenge nonsense with procedure, and we win with paper and outlets.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Assertive warning shows spine while keeping humor at bay."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontational tone risks undercutting careful interpretive gains."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rhetoric could spur performative tests that strain security."
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
        text: "Will you release the provenance log, signature chain, and metadata for Annex B-3, including who initialed the 'Snack' edits and why attachments arrived as blurry napkin s",
        answers: [
          {
            id: "a_t1_1",
            text: "We’re preparing a document dump with hash-verified PDFs, a signature matrix, and a timeline of edits. Where scans are poor, we’ll rescan originals and include custodian affidavits.",
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
                reaction: "Transparency lands well but feels staff-driven, not presidential."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Verified release enhances credibility and neutralizes speculation."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dump timing may strain screening workflows and chain custody."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Some attachments were photographed under a heat lamp at 2 a.m., which is not best practice. We care more about the binding text than the diner-core aesthetic of the scans.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Heat-lamp excuses sound glib and undermine professional tone."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing blur invites suspicion about process management."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pointing to conditions modestly supports non-tamper narratives."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Nothing material hinges on the blur. The operative language is crisp, and we’ve cross-walked it against the clean copy. You will be able to read every binding comma without a ketchup stain.",
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
                reaction: "Downplaying concerns risks appearing dismissive of oversight requests."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Focusing on operative text keeps negotiations from derailing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances without specifics do little to guide field procedures."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We don’t accept the premise that a smudge equals a conspiracy. There’s no hidden side order in the metadata—just the usual bureaucratic fingerprints and too many versions.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat rejection can read defensive and escalate document fights."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It hardens positions and complicates cooperative disclosures."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm stance deters frivolous tamper claims against security staff."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "What does 'no fryer protocol' mean in practice: will staff be retrained, are condiments barred from screening, and can a menu-only pop-up run without touching visa ops?",
        answers: [
          {
            id: "a_t2_1",
            text: "We’ll refresh briefings on vendor separation, prohibit food carts inside screening, and mark floor paths so queues never intersect. A menu-only pop-up can operate fully outside consular space.",
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
                reaction: "Operational refresh reads managerial, not visionary, at this stage."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear guardrails protect diplomacy while respecting legal lanes."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Training load briefly diverts attention from active risks."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "We’re not banning ketchup from lunches; we’re banning ketchup from pretending to have jurisdiction. Snacks don’t get badges, stamps, or sirens—just lids and a time limit.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blunt prohibitions can appear petty if framed around condiments."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strict tone risks alienating partners who need flexible service."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm barriers reduce ambiguity and protect screening integrity."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "From the visitor’s perspective, nothing changes: visas go left, sandwiches go right, and neither touches the other. If lines blur, officers intervene long before chaos gets a tray.",
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
                reaction: "Assurances may seem complacent if incidents test the policy."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Continuity messaging calms allies monitoring consular queues."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Without sharper lines, opportunists might test security seams."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "I appreciate the urge to storyboard our cafeteria, but the mission here is security, not soufflé. We’ll keep the blueprint brisk and the lunch options boring.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Meta commentary dodges practical answers the press expects."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It dilutes the careful policy narrative you built elsewhere."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Light humor slightly diffuses tension with minimal security cost."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
