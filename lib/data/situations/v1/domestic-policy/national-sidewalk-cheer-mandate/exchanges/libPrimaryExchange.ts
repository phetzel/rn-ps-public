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
      text: "A sidewalk applause mandate fines quiet people and deputizes 'morale marshals.' How is that not privatizing sidewalks and chilling dissent?",
      answers: [
        {
          id: "a_r1",
          text: "We’re elevating civic joy, not renting out your block. I dare every neighborhood to out-cheer the float of democracy, and yes, we can do that without muzzling critics or billing the broke.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold challenge energizes public pride without coercion."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Risks appear of compelled speech and vague authority."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Crowd controls may blur into enforcement against silence."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Cheer costs could creep despite non-revenue claims."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Compelled ovations wobble in court like gelatin. Justice prefers voluntary pep, clear decibel caps, and zero loyalty oaths. We’re drafting guidance to nix penalties for respectful silence.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Cautious legal tone can dampen executive momentum."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Acknowledging limits strengthens constitutional footing."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Softening stance may reduce operational clarity."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal hedging suggests added compliance expenses."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Safety first: marshals coordinate crowd flow and defuse balloon panics; they don’t grade your clap. We’re issuing wrist metronomes, not batons, and training to protect speakers and non-speakers alike.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Neutral,
              reaction: "Neutral posture keeps flexibility but risks mixed signals."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Delegating to marshals threatens due process boundaries."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear safety framing reassures crowds and partners."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Safety kit logistics still imply procurement spend."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "Fines aren’t a revenue plan, and meters aren’t golden geese. Treasury’s modeling shows small pilots, capped costs, and public audits, with waivers for low-income blocks and zero debt tricks.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Downplaying fines weakens the motivational frame."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Nonchalance on penalties undercuts civil liberty safeguards."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Budget talk distracts from security readiness needs."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Fiscal restraint message aligns with taxpayer protection."
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
        text: "If silence becomes ticketable under 'morale marshals,' how do you avoid criminalizing dissent and turning sidewalks into rented stages for officials?",
        answers: [
          {
            id: "a_s1_1",
            text: "Silence is not a crime; it’s a lane. Marshals focus on safety, not enthusiasm audits. Our rules bar tone policing, require de-escalation, and forbid recording individuals’ clap data.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances may read as spin to skeptics of compulsion."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lane rules risk selective enforcement and bias."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear crowd focus enhances safety without coercion."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Operational staffing still carries hidden costs."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "We hear the chill concerns. Draft regs carve out broad First-Booth zones for quiet presence, ban compulsion scripts, and make citations for disruption-only, not volume. We’ll test and amend fast.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting chill may embolden critics to stall policy."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Carveouts reinforce First Amendment protections."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too many exceptions complicate field coordination."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Exemptions can erode projected efficiencies."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_3",
            text: "If a parade can coexist with a protest sign, so can applause with a polite shrug. We’re asking for a shared chorus, not a choir audition. Bring your jazz hands or your pockets; both fit.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Confident tone reframes mandate as coexistence."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Equating protest with cheer blurs legal standards."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mixed activities could strain situational awareness."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Complex setups imply event support spending."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Implementation will be city-led with ombuds on speed dial, public reporting of stops, and anonymous complaint lines. We’ll publish a dashboard so patterns of overreach get corrected quickly.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Process focus avoids rhetoric but lacks inspiration."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ombuds promises mean little without enforceable rules."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "City-led layers may slow urgent decisions."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Oversight plan reduces waste and vendor drift."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Your team touts minimal fines, yet new 'applause meters' sound pricey; who pays, and are quiet blocks effectively taxed through privatized sidewalks?",
        answers: [
          {
            id: "a_s2_1",
            text: "Meters are leased in bite-size pilots with open bids, capped service fees, and opt-out clauses. No block pays for silence; fee waivers and subsidies prevent regressive impacts, audited quarterly.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Leasing talk invites fears of creeping privatization."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vendor pilots can outpace civil oversight."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fragmented gear undermines coordinated safety."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Phased leases curb capital risk and cost spikes."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "There’s no privatization tollbooth. Sidewalks remain public; vendors provide gear like streetlights, not velvet ropes. If a contract smells like rent-seeking, it won’t be signed.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat denial reads evasive amid visible meters."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear stance helps draw legal boundary lines."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal may ignore enforcement realities."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfidence could mask maintenance burdens."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Let’s not chase sticker shock theater. We’ll release full cost tables next week with benchmarks from non-cheering programs, so you can compare claps to cones instead of rumors.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Redirecting tone steadies the message under fire."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection signals weak statutory grounding."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vagueness complicates crowd management plans."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delays obscure true lifecycle expenses."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "If a pilot overruns, we pause it. Residents get hardship waivers by default, not by scavenger hunt, and cities can redirect funds to basics before buying a single sparkle-meter.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassurance meets community anxieties constructively."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Discretion must not erode due process."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Pause triggers improve safety and de-escalation."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Refund guarantees carry contingent liabilities."
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
        text: "Walk us through the appeals process for a 'failure to clap' citation and whether data from morale marshals’ wrist apps will be stored, sold, or expunged.",
        answers: [
          {
            id: "a_t1_1",
            text: "Appeals start with a same-day text portal, escalate to a community magistrate, and end with independent review. No biometric tracking, logs auto-purge in 24 hours, and sale of data is banned.",
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
                reaction: "Heavy tech talk sidelines civil liberty concerns."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Portal design must ensure impartial adjudication."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Device reliance risks operational blind spots."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Centralized appeals can streamline costs."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Our tech only paces events, not people. Devices count beats, not identities, and supervisors audit for zero retention. If a gadget logs more than rhythms, it’s removed and the vendor benched.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance alone may sound dismissive to watchdogs."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Data minimization aligns with constitutional limits."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Privacy-by-design supports public trust in safety."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tighter specs can increase procurement costs."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Some of those steps are still in draft with city partners. We’ll publish the full process map and code repo before any citations happen, so folks can poke holes before it launches.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Draft status fuels uncertainty and criticism."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Openness to input can strengthen due process."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Unclear steps hinder event security planning."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity risks scope creep and vendor upsells."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We’ll make the appeals flow so simple your grandma can beat a bad ticket before her tea cools. Bureaucracy shouldn’t clap back harder than the crowd.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Confident challenge projects competence and control."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overpromising invites legal setbacks if rights strain."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bold tone can eclipse safety details on the ground."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Speed may sacrifice cost checks and auditing."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "What’s the lifetime cost of applause hardware, and do contract terms let cities exit if the meters eat budgets faster than the cheering boosts commerce?",
        answers: [
          {
            id: "a_t2_1",
            text: "Ten-year TCO ranges from tinny to brassy: about 0.02% of city ops budgets in pilots, falling with reuse. Contracts carry 30-day exit ramps, no exclusivity, and open components for repairs.",
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
                reaction: "Upfront clarity on costs is still politically risky."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Contracts must not bypass public accountability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aging gear can complicate emergency coordination."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Lifecycle budgeting protects city balance sheets."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Shiny gadgets age like avocados. If upkeep outpaces value, we’ll recommend mothballing and reallocating funds. Treasury’s red-team will publish flunked models alongside the winners.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Candor shows ownership and improves credibility."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Admitting risk strengthens consumer protections."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Frequent swaps may disrupt readiness schedules."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flexibility can invite premium pricing."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "No city is trapped in a cheer lease. If merchants aren’t smiling and spreadsheets are frowning, the gear goes back and the sidewalk stays gloriously public.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Firm denial may calm backlash but invites scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances lack detail on civil safeguards."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Exit options preserve continuity and safety choices."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lease exits may trigger penalties or fees."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We’ll brief you on costs when the procurement smoke clears, not when the salesman is still juggling. Price tags mean more after we squeeze for bulk and ban unnecessary cymbals.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Obfuscation suggests weak grip on the numbers."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Oversight promise can temper legal exposure."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague timing undermines contingency planning."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deferred briefings often hide cost overruns."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
