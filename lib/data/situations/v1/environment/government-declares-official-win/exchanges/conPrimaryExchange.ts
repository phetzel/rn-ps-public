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
      id: "q1_root",
      text: "With Federal Atmospherics crowning one 'official wind,' why must harvests, freight, and festivals obey a breeze calendar that seems built for permit middlemen?",
      answers: [
        {
          id: "q1a1",
          text: "Look, we didn't crown a breeze; we held a naming ceremony so my hair could negotiate safe passage. Farmers still call plays locally, and we won't escalate a gust into a constitutional crisis.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Naming a breeze does not command your crops; it cools tempers."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rigid wind slots skew prices and financing; flexibility protects markets."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A single air gate invites workarounds that strain lawful border flows."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Health impacts here are negligible; panic messaging would do more harm."
              }
            }
          }
        },
        {
          id: "q1a2",
          text: "Treasury loves predictability more than we love spreadsheets. A standard gust lets shippers hedge slots, keeps rates sane, and funds refunds when drafts misbehave. We'll meter, publish, and tame the headwinds.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "A rigid calendar for wind is not how I want people living their lives."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Predictable windows steady freight hedges and stabilize farm credit."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Financial predictability cannot justify an air monopoly's blind spots."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Economic certainty matters, but over-scheduling can raise stress risks."
              }
            }
          },
          followUpId: "q2_sec_econ"
        },
        {
          id: "q1a3",
          text: "If one agency claims all the air, we'll challenge that monopoly. Unlicensed cross-border gusts need draft visas, smug winds get flagged, and supply lines deserve airflow, not paperwork.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Creating wind cops is not my instinct; balance beats overreach."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jurisdiction fights unsettle investors; we need narrow, clear rules."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "We will oppose any monopoly that weakens lawful, secure airflow."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Security theatrics can raise anxiety without real health benefits."
              }
            }
          },
          followUpId: "q3_sec_home"
        },
        {
          id: "q1a4",
          text: "Healthwise, most wind anxiety is theater. We'll hand out ear scarves, publish calm-air tips, and remind folks that breezes rarely cause anything beyond dramatic cape movement.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "I won't inflate wind worries; we need calm, not more bureaucracy."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance helps sentiment, but markets still need operational flex."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comfort is good, yet compliance gaps can become security holes."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Most wind anxiety is performative; guidance and kits can reduce fear."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2_sec_econ",
        text: "Freight idles and turbines nap while permit brokers invoice the weather; what's the plan beyond breeze futures and a polite shrug at spoiled harvests?",
        answers: [
          {
            id: "q2a1",
            text: "We're launching a slot auction for gust windows, a public breeze board showing minute-by-minute drafts, and an automatic credit for missed windings. No one pays a toll to breathe.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Auctions and futures help, but people need fewer hoops to ship and farm."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Slot auctions and hedges dampen shocks and keep freight cash flowing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Economic tools must not create loopholes for illicit cross-drafts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Stability reduces stress loads, but we must watch fatigue on crews."
                }
              }
            }
          },
          {
            id: "q2a2",
            text: "There is no 'breeze cartel.' If someone's selling VIP air, they're scammers, not regulators, and they'll face fines steep enough to dent a weathervane.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denying the problem won't move grain or spin turbines any faster."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blanket denials erode confidence; transparency lowers risk premiums."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "We will investigate any fraud or coercion masquerading as wind fees."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal fuels frustration; that worsens mental strain in rural areas."
                }
              }
            }
          },
          {
            id: "q2a3",
            text: "Our economists ran the numbers; the wind ran faster. We'll circle back once the anemometer stops flexing for the cameras and gives us an honest barometric reading.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Let's not fight the weather with theater; we'll fix the bottlenecks."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection spooks traders; signal concrete timelines and safeguards."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes aside, we still need clarity on cross-jurisdictional drafts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Keeping tone calm helps; we will monitor fatigue and exposure anyway."
                }
              }
            }
          },
          {
            id: "q2a4",
            text: "Rollout was too calibrated-like timing a parade by leaf. We'll loosen the schedule, let local co-ops co-sign gusts, and fix refunds before any crop goes crunchy.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning the rollout is fine, but the fix must free freight quickly."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting missteps is healthy; correct incentives and release capacity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Adjustments must preserve interdiction where foreign risks exist."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear fixes reduce stress injuries and improve shift health outcomes."
                }
              }
            },
            followUpId: "q4_ter_relief"
          }
        ]
      },
      {
        id: "q3_sec_home",
        text: "Wind cops and draft visas sound like comedy until drones sniff picnics; how do you guard borders without frisking every backyard breeze for paperwork?",
        answers: [
          {
            id: "q3a1",
            text: "We challenge any air monopoly, but our badge isn't a leaf blower. Draft visas target industrial gusts crossing pipelines, not kite parties. Smug winds get warnings, not raids.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "I won't badge every breeze; security must be smart and sparing."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over-policing the air chills investment and logistics reliability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "We will challenge monopolies while focusing on real cross-border risks."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Heavy policing can raise community stress without health payoffs."
                }
              }
            }
          },
          {
            id: "q3a2",
            text: "No one's surveilling your laundry line. Sensors read speed, not secrets, and data gets binned like confetti. We're guarding ports and corridors, not grill smoke.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Privacy comes first; no one should feel watched for hanging laundry."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances help demand, but business still needs predictable rules."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We will keep sensors narrow, lawful, and targeted to real threats."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear boundaries reduce anxiety and improve community well-being."
                }
              }
            }
          },
          {
            id: "q3a3",
            text: "We'll publish a breezeline map, post audit logs, and require warrants for any intrusive sniffing. Oversight will include the Nonpartisan Picnic Board and a gust ombud.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Maps and logs help, but they cannot justify frisking backyards."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Public audit trails boost certainty and keep capital engaged."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Transparency is vital, yet we must protect sensitive operations."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Information lowers fear, though overdetail can spark rumor cycles."
                }
              }
            },
            followUpId: "q5_ter_oversight"
          },
          {
            id: "q3a4",
            text: "If a drone asks your sandwich for papers, send it to our office; we'll make it hold a kite and contemplate due process until sunset.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "We can keep safety real without turning picnics into checkpoints."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Humor softens edges, but investors still want enforceable limits."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We will not tolerate spoofed winds, but we will avoid intrusions."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Keeping tone light reduces stress; we will keep care guidance ready."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q4_ter_relief",
        text: "If the schedule loosens, what relief lands this month for farmers, crews, and festivals that missed their wind slot, and who pays when the gust simply ghosted?",
        answers: [
          {
            id: "q4a1",
            text: "A same-month Wind Miss credit auto-applies on permits, plus surge slots during harvest. Treasury funds it from anti-gouge penalties, not from hay bales or ticket stubs.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Credits help, but fewer missed windows will help even more."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Automatic credits and offsets stabilize cash flow this quarter."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Relief must not create incentives for illicit permit arbitrage."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Financial relief eases stress loads on families and crews."
                }
              }
            }
          },
          {
            id: "q4a2",
            text: "Nobody's losing a season to a shy breeze. We'll stack make-up gusts, extend deadlines, and waive late-air fees so crews can finish the work without panic.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Commitments are good; we must also simplify the path to reschedule."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances need funding sources and clear eligibility criteria."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Emergency slots should preserve security screening where needed."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Certainty reduces anxiety and prevents avoidable health flare-ups."
                }
              }
            }
          },
          {
            id: "q4a3",
            text: "We're not billing anyone for the wind's bad manners. If you see a 'no-gust, still pay' clause, that's not policy; that's performance art we didn't commission.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denials read as tone-deaf; people lost time and yield to the rules."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ignoring losses undermines trust and complicates future auctions."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "We will curb any predatory fee-seeking around missed gust claims."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing harm dismisses stress injuries from disrupted shifts."
                }
              }
            }
          },
          {
            id: "q4a4",
            text: "Our legal team is teaching the jet stream customer service. If it ghosts again, we'll put it on hold with smooth jazz until it apologizes.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "We'll fix red tape without litigating the jet stream into oblivion."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wit is fine, but the fix is cash flow and predictable throughput."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Any new process must not weaken interdiction or partner intel ties."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Lightening the mood helps; we will still track fatigue metrics."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5_ter_oversight",
        text: "You promised audits and a gust ombud; what hard guardrails stop mission creep, and who can veto a gray-area gust before bureaucracy invents a breeze felony?",
        answers: [
          {
            id: "q5a1",
            text: "Hard stops: no personal data, warrants for anything beyond speed, a sunset on emergency rules, and a civilian gust review panel. The ombud can halt operations on the spot.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard guardrails matter; they should stop nonsense before it starts."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear warrants and data limits reassure lenders and operators."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Constraints must still allow targeted action against real threats."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strong privacy rules reduce stress and care avoidance behaviors."
                }
              }
            }
          },
          {
            id: "q5a2",
            text: "If any agency tries to criminalize a picnic, we'll challenge it in daylight. Draft control is about cargo routes, not grandma's lawn chairs.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "If bureaucracy invents crimes for breezes, I will block it fast."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vetoes must be precise; broad swings can rattle capital planning."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "A firm stance deters mission creep and protects legitimate security."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overcriminalization harms mental health; restraint protects care."
                }
              }
            }
          },
          {
            id: "q5a3",
            text: "Guardrails are baked in, and the default is 'let the breeze be boring.' If policy gets windy, the brakes engage before paperwork does.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Defaults to freedom are right; we also need accountability teeth."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Leniency without audits invites arbitrage and volatile pricing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too soft a default risks exploitation of gray zones by bad actors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Lower friction reduces stress and improves public compliance."
                }
              }
            }
          },
          {
            id: "q5a4",
            text: "We've overbuilt a few guardrails before; this time we're publishing the manual first, then the fence. If it creaks, we'll unbolt it in public.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting past excess is good; this time we will measure and verify."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guardrails must be costed and tested to avoid new bottlenecks."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reform cannot dilute the ability to act on verified threats."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humility builds trust, easing anxiety around new safety rules."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
