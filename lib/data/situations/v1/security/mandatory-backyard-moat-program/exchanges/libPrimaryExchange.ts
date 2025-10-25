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
      text: "Homeland’s backyard moat mandate launched with glossy ads, yet unions walk out and seniors fear slips. Who owns this muddy plan, and will you pause enforcement?",
      answers: [
        {
          id: "a_r1",
          text: "I’ll race any panic in a cul-de-sac canoe and prove calm floats. We’ll fix the rollout without scaring grandma or union crews, and I’ll bring pool noodles to show safety beats showmanship.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "The daring canoe rally projects calm and resolve."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Showmanship muddies clear guidance on yard safety."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Parades blur roles and distract from real planning."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Public clarity helps trim frivolous injunctions."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "The moat spec is three geese wide and two raccoons deep, with bridges, buddy-digging, and city help for elders. It’s a patriotic puddle, not a shark trench, and seniors can request pauses.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "It can read as minimizing genuine worker worries."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reassuring specs cut confusion and calm households."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Cutesy measures imply we requested odd equipment."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overpromising specs complicates imminent rulings."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Defense never asked for crocodiles, koi platoons, or canal maneuvers. Our playbook doesn’t cover begonias. Keep amphibious theatrics off our budget and out of our inbox.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Creates distance from policy while crisis unfolds."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Shifts blame toward us, raising credibility costs."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear denial protects budgets from cosplay add-ons."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Finger-pointing invites suits over mixed signals."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Justice is inventorying every statute a ditch might trip, from mailbox egress to turtle tenancy. Expect temporary injunctions and plain-English guidance as we define “yard moat.”",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Legalese without empathy can feel tone-deaf."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Highlighting injunctions chills voluntary uptake."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "More rules mean inquiries drift onto our lane."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Timely definitions reduce chaos and forum shopping."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "On seniors and access: the plan expects 70-year-olds to wield trench shovels. What waivers or safer options exist before aunties start rappelling to the mailbox?",
        answers: [
          {
            id: "a_s1_1",
            text: "We’re issuing non-dig options: shared-block moats, prefab mini-bridges, and city crews for elders. No one should rappel to the mailbox; the only harness is for garden flamingos.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Pragmatism frames you as attentive to seniors."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Alternatives show flexibility and reduce hazards."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Scope creep persists and stirs needless alarms."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Waiver schemes raise liability and review time."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "Justice is drafting a senior-waiver form, ADA-style clarifications, and temporary injunction guidance while definitions settle. Expect a simple checkbox, not a bureaucratic labyrinth.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Paperwork leadership can look aloof from pain."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signals rollout flaws and weakens confidence."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Legal delays keep us answering odd press calls."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear forms speed enforcement and protect rights."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_3",
            text: "The rollout assumed too many spry elbows. We’ll own that, extend timelines, and go permit-first instead of shovel-first while we fix ergonomics and training.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning missteps reads as honest and corrective."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting misdesign damages program legitimacy."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "More backtracking deepens external confusion."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledgment invites broader injunction bids."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Let’s not canonize the glossy brochure; vendors staged hero shovels with jazz hands. We’re pulling those ads and rewriting the sales script before anyone buys grappling hooks.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Blaming vendors seems evasive amid real risks."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection undermines trust in safety guidance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Managers look unprepared and reactionary."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pointing to sales hype supports fraud probes."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Unions say crews are conscripted into trench duty as vendors hike prices for “aquatic perimeter” kits. Who’s cashing in, and why is Defense suddenly flustered by garden-g",
        answers: [
          {
            id: "a_s2_1",
            text: "Defense did not requisition, budget, or whisper about crocodiles, pontoons, or tactical koi. If someone stamped our crest, it’s counterfeit cosplay, and we’ll call security.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Distance may read as dodging oversight duties."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Leaves us carrying full political exposure."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm denial shields doctrine and procurement lines."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We still must verify claims, slowing response."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "If profiteers want to gouge for hoses and bucket brigades, meet me at noon; we’ll price-compare live and refund the cul-de-sac on camera. Bring receipts and sunscreen.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Aggressive stance reassures workers and buyers."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontation suggests specs fueled profiteers."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Heat keeps misperceptions tied to our shop."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Threat of clawbacks strengthens our leverage."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Procurement watchdogs are freezing suspect contracts, tracing shell vendors with watery logos, and flagging collusion. Expect hearings and clawbacks before any drawbridge doorbells ship.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process focus can look timid in a storm."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Watchdogs highlight that rollout got ahead of law."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Investigations sustain headlines we do not want."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Freezes deter gouging and preserve public funds."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Some walkouts happened because managers heard “moat” and smelled “overtime buffet.” That’s an HR casserole, not federal cuisine; locals should season and serve it accordingly.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Sounds dismissive of labor’s safety arguments."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifying causes may cool tensions on sites."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing chaos still leaves us answering why."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Downplaying disputes complicates case building."
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
        text: "Justice teased brisk injunctions while defining “yard moat.” What counts as a moat, who can opt out, and when do mailbox egress and turtle tenancy halt the shovels?",
        answers: [
          {
            id: "a_t1_1",
            text: "A moat is a continuous water barrier wider than three geese and deeper than two raccoons, unless bridged and shared. Exemptions cover seniors, renters, caregivers, and verified turtle habitats.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical focus may feel detached from seniors."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "A tight definition reduces flexibility mid-rollout."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Complex criteria invite logistical press queries."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Precise terms narrow disputes and curb injunctions."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "No one gets cited for a birdbath, rain ribbon, or festive puddle. If your “moat” evaporates by brunch, you’re compliant by charm, not facing trench tribunals.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Compassionate note softens the public mood."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Exemptions ease fears and improve compliance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "More exceptions mean more boundary disputes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Broad carve-outs weaken our enforcement posture."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We are not the moat navy or the ditch police. Please stop mailing soggy schematics labeled “classified koi”-that’s not our lane, or our aquarium.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Disavowal risks seeming disunified at the top."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Undercuts the safety narrative we are advancing."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Drawing a line protects mission and budgets."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mixed messages complicate courtroom arguments."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Panic merchants keep selling trench drama. I challenge them to read the footnotes: safety means options, waivers, and bridges, not cosplay with buckets.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calling out hype rallies supporters behind you."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric can inflame skeptics and stall uptake."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Grandstanding drags us into culture-war theater."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Taunts risk prejudicing ongoing litigation."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Defense seems flustered by backyard canals and HOA submarines. Did anyone ask you to stock crocodiles, or is this just moat cosplay sneaking onto your budget?",
        answers: [
          {
            id: "a_t2_1",
            text: "Categorically no crocodiles, no submarines, and no amphibious fiscal cosplay. Our budget defends borders, not begonias, and lily-pad line items will be vetoed.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Backing sanity frames you as a steady hand."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public distance makes our plan seem ad hoc."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "A categorical no detaches us from frivolous asks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We still must parse contracts for violations."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "If someone stapled “tactical” to a garden hose, that’s theater, not strategy. Ask procurement why their catalog is wearing camo to a spring picnic.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Snark risks trivializing worker and buyer pain."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mockery undercuts the reassurance campaign."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes keep dragging us into the discourse."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Ridicule can deter bogus 'tactical' claims."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Homeland’s specs are civilian and frankly adorable: festival puddle, not fortress canal. Nobody is staging war games near the hydrangeas on our watch.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Charm can read as spin without fixes attached."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Civilians-only framing lowers anxiety at home."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We remain on the hook to rebut niche rumors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cute framing does little to close loopholes."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Auditors are tagging any defense-logo invoices tied to backyard gear. Where logos and lily pads overlap, we’ll separate them with receipts, hearings, and subpoenas.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Oversight talk may look bureaucratic under fire."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Scrutiny hints our specs invited grift."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audit spotlight keeps us fielding tough questions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Active audits protect budgets and deter fraud."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
