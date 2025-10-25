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
      text: "Is the ethics board's string-powered interim mayor a legitimate fix or farce, and will you back workers and youth demanding real voices over strings?",
      answers: [
        {
          id: "a_root_1",
          text: "We reject the puppet premise. It's an interim civic metronome-visible strings, no hidden hands-meant to keep time, not call tunes. Calm, accountable process beats theatrics, and public voices lead.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Reasserting calm leadership steadies the city amid theatrical governance."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It sidelines our safety cautions while protests grow and routes tangle."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It blurs legal lines and risks undermining our injunction posture."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "We secure the stage, not the script. Our focus is safe streets, open exits, and trip-hazard control; unions march, youth chant, nobody eats pavement. For policy questions on puppetry, look to the board, not safety crews.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Dodging substance looks weak and fuels the puppet narrative online."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Focus on safety without endorsing content tracks with our core mission."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Noncommittal tone hampers urgency needed to contest unlawful appointments."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "A wooden stand-in can't wield legal authority without a human, accountable signatory. Our legal team will challenge any offstage governing, because protest is speech and statute is not improv.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Aggressive legal framing can read cold to youth and striking workers."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal talk without safety context complicates field planning for rallies."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear challenge strengthens our basis to seek immediate injunctive relief."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "We will bring workers and youth into open forums this week, with livestreams and published notes, so decisions aren't yanked by unseen strings. You'll see who speaks, who votes, and who tidies the knots.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Promising process without blame may look timid given public frustration."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Opens venue commitments we must secure with limited staff and time."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Constructive engagement helps compliance but may slow litigation tempo."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Unions striking and rallies multiplying; will Homeland's safety plan protect voices without turning squares into stages patrolled by knot marshals?",
        answers: [
          {
            id: "a_sec1_1",
            text: "We secure the venue, not the message. Expect cord covers, medics, and clear egress-no gag orders, no choreography notes. If props tangle feet, we snip hazards, not speeches, and we publish every intervention.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Stagecraft language risks trivializing worker demands and youth voices."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clarity on safety lanes and exits supports peaceful high-energy crowds."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overt security focus can be cited as chilling effect in court debates."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "No kettling, no cosplay SWAT. Safety shears are for tripping risks, not banners, and de-escalation is standard. The loudest thing we bring is a bullhorn that says, 'Keep the exits clear and keep speaking.'",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Protecting speech while setting limits shows humane, rights-forward leadership."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Commitments reduce flexibility if conditions escalate unexpectedly."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Less aggressive posture could weaken deterrence against illegal actions."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "We'll post a real-time 'string map' of routes and hazards, plus a hotline for knot complaints and accessibility needs. Union marshals get briefed with us so crowds stay spirited, safe, and un-ziplined.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Data tools help, but tech framing may appear aloof from real grievances."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mapping strings aids logistics but adds monitoring obligations for teams."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Transparency eases discovery and supports claims about hidden decision-makers."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "If the board wants performative government, it can face a non-performative crowd. We'll protect the crowd either way, but accountability belongs on the dais, not dangling over it.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Confrontational tone risks inflaming tensions and overshadowing policy aims."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric can draw crowds to unsafe chokepoints we must manage."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Calling out pretext strengthens narrative of unlawful delegation of power."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "If a marionette signs ordinances with a human hand offstage, who is accountable, will Justice seek an injunction before budgets and contracts knot up?",
        answers: [
          {
            id: "a_sec2_1",
            text: "On behalf of the Ministry of Justicecraft, we will seek immediate injunctive relief to halt offstage signings and compel a lawful, human signatory. Protest is fine; statutes require named, accountable hands.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Heavy legal move may appear punitive amid calls for democratic inclusion."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Litigation focus shifts resources from crowd safety to courthouse security."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Decisive authority claim positions us to halt unlawful acts quickly."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Justice,
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "We'll contest any attempt to launder marionette acts with mystery hands. Chain-of-custody for policy is not a magic trick; if you can't name who signed, it doesn't govern.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Partial measures look indecisive given the stakes for budgets and law."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Targeted scope limits operational disruptions across agencies and streets."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Softening our claim undercuts injunction likelihood and case coherence."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "We won't accept the idea that chaos is the only alternative to strings. There are legal, interim options that don't involve woodgrain executive privilege or offstage pens.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Rejecting chaos frames us as steady, but risks minimizing real concerns."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Downplaying risk leaves field staff exposed to cascades of confusion."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caution here could be cited as tolerating ultra vires signatures."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Timeline: filings this week, notice to agencies, and guidance to courts on preserving services while legitimacy is tested. We'll coordinate with labor and youth groups to keep the public looped in.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear timelines reassure agencies and the public about orderly steps."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notice periods add workload and tie up mobile units in briefings."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Process transparency supports credibility and expedites court scheduling."
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
        text: "How will Homeland handle rallies with novelty scissors, miles of theatrical string, and a band called Habeas Porpoise without muting the message?",
        answers: [
          {
            id: "a_ter1_1",
            text: "We don't book the band or write the setlist; we tape the cords. Novelty scissors get foam tips, spools get caps, and we route floats away from power cables. The only thing we cut is hazard tape.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection reads as evasive while tensions and attendance keep rising."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Neutral tone lets us stage safety perimeters without chilling speech."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Avoiding substance weakens our argument about unlawful delegation."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "No confiscation unless it's genuinely dangerous. We'll consult organizers on prop tweaks, keep exits open, and let the porpoises porpoise. The message stays big; the risks get small.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassurance projects care for rights and safety during volatile nights."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Nonseizure pledges constrain response if hazards escalate suddenly."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft security posture may enable questionable acts by proxy handlers."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "Permit guidance adds string caps, 8-foot sightlines, decibel checks for the sousaphones, and disability corridors. We'll publish after-action notes so the next rally is safer and louder.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Detailed rules can appear bureaucratic amid heartfelt civic energy."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sightlines help safety, but limits may be framed as content control."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear caps document control gaps that bolster our legality challenge."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "We won't let disguised rigging or booby-trapped props pass as speech, and we won't mute lawful music. Safety rules exist so crowds leave with sore throats, not sprained ankles.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hardline language risks overreach headlines and reactive crowd behavior."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vigilance adds strain and potential friction at checkpoints and stages."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm screening deters spoofed authority that could taint ordinances."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "If a court freezes the marionette's pen, what happens to already signed ordinances: null props, ratification, or a quick human signature do-over?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Agencies would maintain status quo, pause new enforcement, and prepare ratification packets for a lawful signer. We'd issue public guidance within 48 hours so residents and vendors know what counts.",
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
                reaction: "Pausing calmly may look passive unless paired with clear next steps."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Stability stance reduces scramble and keeps critical services predictable."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delay risks normalizing void signatures before courts can rule."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "We'll oppose any attempt to backdate legality or staple a fresh signature to bad process. If it wasn't accountable when ink met page, it needs an open vote, not sleight of hand.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Strong push could alienate moderates if relief appears too sweeping."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Court fights divert staff from field safety and agency continuity."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Firm challenge defends the charter and protects contracting integrity."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "No one loses benefits overnight. Essential services continue, paychecks clear, and deadlines are tolled where needed while legality is resolved in daylight, not behind a curtain.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassurance protects vulnerable residents from sudden policy whiplash."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Service guarantees bind resources we might need for emergent risks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Holding benefits during litigation may reduce leverage for compliance."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "Some filings may need clerical untying and a humble public do-over. Process can be messy; accountability shouldn't be. We'll fix errors in the open and document every stitch.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting clerical fixes can read as messy and feed the farce narrative."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Retro edits add administrative load across already taxed field teams."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limited do-overs respect due process while emphasizing proper signatures."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
