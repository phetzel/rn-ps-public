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
      text: "Why did the administration arm sentry scarecrows after wildlife-signal glitches, and who signed waivers that turned knit-ins into contraband overnight?",
      answers: [
        {
          id: "a_r1",
          text: "If the straw brigade thinks it’s smarter than us, I’ll debate the Scarecrow General at dawn. If the hay wins on wit, we end the program and compost the manuals on camera.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold radio duel signals resolve and personal accountability."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Unscripted stunts risk weakening structured defense posture."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rhetoric cannot cure defective enforcement authorities."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Off-message theatrics complicate calm incident comms."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Deterrence worked on geese and it works on panic. Whistle-primed pitchforks and anti-goose capes signal backbone, not bureaucracy. Show me a better scare, and we'll field it.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.MajorNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Projecting control over panic reassures jittery markets."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear deterrence doctrine steadies rural security partners."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Overbroad deterrence invites civil-rights exposure."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hardline tone inflames rumor mills during a pause."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Scarecrows cannot arrest, frisk, or even shrug; they are animated signage. Any citations tied to them should be voided, and yarn seized at knit-ins must be returned promptly.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Legal caveats read as backpedaling under pressure."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Narrowing roles may blunt field readiness signals."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Affirms limits; restores due process and proportionality."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Walk-backs seed confusion in local alert networks."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "We issued a 48-hour pause while engineers patch the wildlife-signal bug and audit deployments. Barn-by-barn alerts will explain scope, waivers, and how to opt out peacefully.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Technocratic pause appears timid amid public agitation."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Cooling procurement can slow needed defensive upgrades."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process notes without remedies undercut accountability."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear pause and fix messaging reduces community anxiety."
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
        text: "You cite a 48-hour pause and a technical fix, yet memos show emergency waivers for whistle-primed pitchforks and goose-cape specs. Who approved that pipeline?",
        answers: [
          {
            id: "a_s1_1",
            text: "A joint board fast-tracked under the Farmstead Safety Act, with signatures logged. We will publish the waivers, redactions minimal, alongside the patch report and procurement checklists.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Delegating approvals feels evasive at the top."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Joint boards can dilute decisive capability design."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fast-tracks risk bypassing statutory safeguards."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Specific governance calms stakeholders and seniors."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Parts of the paperwork read like a scare comedy, not a safety plan. We’re rescinding two rushed waivers and making approvals require daylight votes, not midnight hayrides.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning mistakes builds credibility under scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitted sloppiness undermines deterrent narratives."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparency aids corrective compliance and relief."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public mea culpas can magnify rumor cascades."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "We’re not going to litigate internal routing in a scrum. Counsel will brief oversight at 3 p.m., with binders, tabs, and the obligatory flowchart that makes everyone sleepy.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Stonewalling reads like concealment, not leadership."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Opacity disrupts alignment with field logistics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Evasion frustrates oversight and due process."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limiting detail can slow premature misinterpretation."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If committees want to rehear every whistle and cape spec, book the room. We’ll sit, roll tape, and hash the standard so no one needs a decoder ring to read it.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Combative tone risks alienating cooperative committees."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Assertiveness reassures partners seeking firm posture."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Bulldozing process signals disregard for legal limits."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontation distracts from technical remediation."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Civil-rights counsel calls scarecrows 'animated signage.' Why were knit-in organizers cited, and will yarn and needles be returned without conditions this week?",
        answers: [
          {
            id: "a_s2_1",
            text: "Charges based on a scarecrow’s flutter do not stand. We’re directing agencies to halt such citations and to purge them, with notices sent to organizers and venues.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Qualified denials feel reactive and late."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Scaling back tools may embolden opportunistic actors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clarifies scope; protects peaceful assembly rights."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shifts midstream complicate neighborhood briefings."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Yes—yarn, needles, and banners come back intact, with apologies that don't sound like legalese. We're also training field leads so craft circles stop getting treated like conspiracies.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Swift restitution projects empathetic control."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Asset returns can be read as capitulation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Relief must include formal vacatur, not just promises."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Plain assurances reduce hotline panic and rumors."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "An updated guidance clarifies scarecrows cannot initiate enforcement and cannot be evidence. Returns begin today via pop-up desks at depots, with receipts and timelines posted online.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process updates without relief sound bureaucratic."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Restrictions may constrain necessary field flexibility."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Guidance aligns actions with constitutional limits."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifies roles; improves message discipline locally."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_4",
            text: "On behalf of Homeland Preparedness, we're pausing deployments and sending clear barn-by-barn advisories. No roaming gourds, no curfews, and no confiscations tied to knit-ins.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Citing authority amid backlash appears defensive."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Central oversight can stabilize implementation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Conditional pauses delay justice for affected groups."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Confusing authorizations muddle the 48-hour pause."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Homeland
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter1",
        text: "Name the waivers that let hay wield pitchforks, who wrote the goose-cape spec, and when the full procurement log and audit will hit the public site.",
        answers: [
          {
            id: "a_t1_1",
            text: "Waivers FSA-19 and FSA-22 authorized prototypes; both are now sunset. The cape spec came from a rural hazards panel. The full log posts Friday, with line-item costs and vendor notes.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Specifics demonstrate command of the portfolio."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Disclosures may expose capability gaps and timing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Partial releases can still miss statutory triggers."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Timeline clarity helps synchronize the pause."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "No waiver permitted scarecrow enforcement or crowd control, and none will. Equipment specs addressed wildlife deterrence only, not people, which the audit will reaffirm in plain language.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hard denial risks collapse if documents contradict."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Constraining scope may dampen readiness narratives."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Limits reaffirm non-policing role and civil bounds."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Narrow answers leave local partners uncertain."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Some vendor names are confidential pending deconfliction. We’ll release what we can now and more once counsel clears the hay-bale of NDAs we inherited.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflections feed suspicion of procurement favoritism."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Secrecy strains vendor cooperation and planning."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Withholding invites subpoenas and litigation."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Caution can protect sensitive operations while pausing."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "If you spot fluff or weasel words in the log, flag them publicly. We’ll fix the prose, rerun the vote, and swear off any gadget that scares more voters than geese.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Crowdsourcing errors feels glib for a serious audit."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Openness to stress tests signals confidence in specs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Shifts burden to public, dodging legal accountability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Provocation distracts from methodical corrections."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "How many knit-in citations will be voided, how fast will property be returned, and will there be an apology for calling yarn 'tactical filament'?",
        answers: [
          {
            id: "a_t2_1",
            text: "Initial review voids 612 citations, with notices emailed and mailed by Monday. Property returns start within 48 hours at depots and mobile vans, with grievance hotlines staffed.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Concrete relief showcases decisive corrective action."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Voids may be perceived as retreat under pressure."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Mass vacatur vindicates rights and curbs liability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear returns timeline calms communities quickly."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Labeling yarn as 'tactical filament' was bureaucratic cosplay. We’re retracting the phrasing, retraining the form, and logging who approved it so the paper trail has consequences.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Apology humanizes leadership without conceding mission."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Contrition weakens deterrence narratives in the field."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Words alone must be paired with enforceable remedies."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public remorse can reignite rumor cycles."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "No one will need to sign away rights to reclaim their knitting or pay storage. If something’s lost or damaged, claims will be processed quickly and made right in full.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances without dates test public patience."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Predictability helps deconflict field posture."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rights should not hinge on promises or forms."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague timelines complicate local planning."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "No scarecrow initiated those citations; humans did, and they’ll own the decisions. Our guidance will make that unmistakable so straw doesn’t get blamed for human overreach.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Finger-pointing appears evasive and fuels outrage."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifying human roles preserves tool integrity."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Deflection dodges accountability to affected people."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blame games muddle coordination with locals."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
