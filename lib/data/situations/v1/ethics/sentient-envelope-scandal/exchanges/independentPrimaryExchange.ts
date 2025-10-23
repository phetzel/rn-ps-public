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
      id: "q1",
      text: "Does the President see the allegedly sentient 'thank-you' envelope as gift, witness, or worker-and what immediate fixes hit the gift rules?",
      answers: [
        {
          id: "q1a1",
          text: "If a letter can talk, it can take questions, and I've got plenty. Until it shows up with ID and consent, it's stationary, not statutory, and we'll modernize gift rules accordingly.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Debating the envelope reclaims the stage and projects confident command."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Showmanship here risks price confusion about paper and payment instruments."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It muddies evidentiary norms before we set a clear, defensible standard."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A careful acknowledgment helps defuse rumor spikes in frontline clinics."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "q1a2",
          text: "Let's not confuse thank-yous with payrolls. Treasury is reviewing stamp elasticity and ink supply chains so nobody pegs wage policy to envelopes while we separate gratitude from compensation.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "This feels evasive and makes leadership look reactive to a prop."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Pivoting to market mechanics steadies expectations and reduces volatility."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Avoiding the legal core delays clarity that investigators urgently need."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Staff hear hedging and may misapply screenings in care settings."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "q1a3",
          text: "Justice is drafting a three-part test: capability, coercion, and compensation. That framework sorts gift from witness from work product, and it slots neatly into our existing ethics procedures.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Process talk can read as conceding ground to bureaucracy, not vision."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "A rigid test may spook traders if it hints at new wage linkages."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "A principled test anchors charging decisions and protects due process."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Without protocols, clinics may overtriage odd reports and slow service."
              }
            }
          }
        },
        {
          id: "q1a4",
          text: "HHS did pilot a feelings screening for office stationery, and yes, we named it Steve. Owning that lets clinics flag sentient supplies early and apply consent checklists before anyone accepts a 'gift'.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Admitting novelty first can look like capitulation to spectacle."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Public admission risks speculation about new asset classes of paper."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning pilots before guidance invites premature litigation gambits."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Transparency on pilots builds trust and calms staff in stressed clinics."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "If consent is the new paperclip, what practical protocol would you require before staff accept, scan, or archive expressive stationery as a 'gift'?",
        answers: [
          {
            id: "q2a1",
            text: "Consent means capacity, comprehension, and a paper trail. Staff would read a standard script aloud, record the envelope's response, capture a date-stamp, and log a reversible choice before acceptance or archiving.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Over-specifying procedure can read as hiding behind forms, not action."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Complex screenings risk operational drag in payments and receipts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear capacity and consent checks protect cases from suppression fights."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Too many gates can stall intake and frustrate frontline staff."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "q2a2",
            text: "No one is taping Miranda cards to staplers. We'll adopt a light, humane script and a simple opt-out so staff can say no, the stationery can say no, and everyone keeps their dignity and their inbox.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Light reassurance keeps the story small while signaling basic control."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Minimizing too much invites uncertainty in recordkeeping for gifts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes blur Miranda versus consent and can weaken future testimony."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Calm, simple steps reduce stress and improve compliance in clinics."
                }
              }
            }
          },
          {
            id: "q2a3",
            text: "We're not deputizing paralegals for every thank-you. Most notes are plain paper; unless an item self-asserts personhood, it fails the threshold and remains a non-giftable object under current rules.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "A firm line shows resolve and keeps the frame on human governance."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Flat denial risks audit gaps if expressive documents later surface."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Ignoring edge cases invites exclusionary rulings and lost evidence."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissal can discourage staff from flagging legitimate concerns."
                }
              }
            }
          },
          {
            id: "q2a4",
            text: "Let's focus on training before theatrics. A one-page QR checklist covers consent cues, storage tags, and who to call at Ethics Desk Zero, which beats turning mail call into a courtroom drama.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection here looks cagey and fuels the sense of improvised policy."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Focused training and simple routing reduce operational risk quickly."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Skipping legal baselines now will cost time in later challenges."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Staff need clear health privacy cues, not just procedural reroutes."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "Can Treasury ensure wages and benefits won't peg to envelope chatter, and what guardrails keep ink, stamps, and 'gratitude futures' from spooking payrolls?",
        answers: [
          {
            id: "q3a1",
            text: "Markets don't move on murmurs; they move on mechanics. We're standardizing stamp auctions and smoothing ink inventory so speculators can't wedge 'gratitude' into wage formulas by rumor alone.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical calm can undercut the bold posture expected in crises."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Centering mechanics steadies wages and deters gimmicky asset pegs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Market talk without legal rails risks patchwork enforcement later."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assurances help hospitals plan payroll without panic-driven changes."
                }
              }
            }
          },
          {
            id: "q3a2",
            text: "Treasury will issue guidance decoupling compensation metrics from non-human expression and cap exposure to novelty indexes. Supervisory letters will flag any payroll models referencing stationery signals.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Guidance-first can feel slow and let rumor drive the news cycle."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear decoupling guidance cools speculation and limits spillovers."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Defined boundaries reduce litigation over novel compensation claims."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "If phrased narrowly, clinics may misread it and freeze needed hiring."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "q3a3",
            text: "Workers' pay is about people, not envelopes. We'll put that in writing, in regulation, and, for good measure, on the breakroom bulletin board so nobody treats office mail as a cost-of-living index.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soft comfort without tools risks seeming naïve about market shocks."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance alone invites tests of the guardrails you didn't state."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Lack of enforceable detail weakens deterrence against bad actors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Calm messaging supports workforce morale during payment headlines."
                }
              }
            }
          },
          {
            id: "q3a4",
            text: "If traders want to bet on thank-yous, they can do it with their own gratitude, not wages. We'll swat gimmicks that prey on headlines and protect boring, dependable paydays for real workers.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "A sharp challenge reasserts control and sets boundaries on stunts."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Provocation can unsettle rates if traders read it as policy whiplash."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Taunting the premise may prejudice cases and complicate appeals."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rhetorical heat can spook hospital finance teams planning payroll."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q4",
        text: "Do future thank-you notes need counsel or a union rep, and how would informed consent be stored to ensure transparency without violating stationery privacy?",
        answers: [
          {
            id: "q4a1",
            text: "Yes, some cases may need counsel, the way HR brings a witness to sensitive interviews. We piloted a volunteer advocate roster so staff or sentient items can ask for help without freezing daily operations.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting counsel need can look like elevating a sideshow."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Predictable representation reduces transactional risk and pricing fog."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Premature counsel claims could inflate standing and stall proceedings."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Supportive options and clarity protect vulnerable staff interactions."
                }
              }
            }
          },
          {
            id: "q4a2",
            text: "Consent records live in an encrypted registry with short retention by default and longer retention only for investigations. Access is role-limited, and revocation is as easy as the original consent.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Registry talk reads bureaucratic and drains executive momentum."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Auditability aids payment tracing and deters creative 'gift' schemes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Chain-of-consent records strengthen prosecutions and defense rights."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "If complex, staff may misfile sensitive notes and breach privacy."
                }
              }
            }
          },
          {
            id: "q4a3",
            text: "No union card for envelopes. The bar for representative involvement is exceptional circumstances; otherwise, a two-person witness protocol prevents he-said/it-sighed disputes without lawyering every memo.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A firm limit signals authority and shifts focus back to human work."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hard bans can trigger abrupt repricing of document handling costs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Bright lines without nuance invite easy court challenges to policy."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissiveness risks discouraging conscientious reporting by staff."
                }
              }
            }
          },
          {
            id: "q4a4",
            text: "Transparency won't turn a lobby into a library of souls. You'll see clear logs, redacted where necessary, and routine audits to prove process without broadcasting every heartfelt flap to the world.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soft platitudes feel thin when the story demands structure and teeth."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Opacity about access can look like hiding pipeline risks from markets."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Vague transparency claims weaken discovery and record integrity."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Calm, bounded openness helps staff comply without oversharing."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "What model handles labor-like stationery without arbitrage between paper rights and human wages, and who audits a gratitude index to prevent rigging?",
        answers: [
          {
            id: "q5a1",
            text: "We'll use a dual-ledger model: human labor on one book, expressive objects on a sandbox index with hard firewalls. Auditors test for leakage, and any correlation triggers an automatic unwind.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical architecture talk can feel bloodless and remote from people."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dual ledgers add overhead and may confuse smaller payroll shops."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Separation reduces claims conflating paper rights with human labor law."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Complexity can burden clinic admins already stretched by reporting."
                }
              }
            }
          },
          {
            id: "q5a2",
            text: "Before inventing a gratitude index, we'll check if gravity still works. Core inflation, not envelope emotion, guides payroll policy, and any whimsical metric stays in the museum, not the model.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Caution first reads as stalling and invites louder fringe theories."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Scoping before instruments prevents warped incentives and bubbles."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Delay without criteria risks uneven enforcement and forum shopping."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Prolonged uncertainty strains hospital budgeting and staffing plans."
                }
              }
            }
          },
          {
            id: "q5a3",
            text: "If someone tries to rig 'gratitude,' we'll publish their playbook and make them explain it to a room full of lunch ladies. Sunlight is cheaper than lawsuits and twice as terrifying to cheats.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "A forceful stance reclaims energy and sets a bright, simple boundary."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Markets can process rhetoric, but clarity must follow quickly."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overreach in tone can complicate charging decisions and remedies."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Heat without guidance risks missteps by overwhelmed hospital admins."
                }
              }
            }
          },
          {
            id: "q5a4",
            text: "An independent Oversight of Oddities unit will audit novelty metrics quarterly. The moment a scheme touches wages, it shuts off like a circuit breaker and payroll keeps humming.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Comfort talk alone can sound passive as speculation builds."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Reassurance without metrics can mask pricing distortions building up."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Soft oversight vows lack teeth and may not deter coordinated abuse."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Steady messaging supports patient-facing staff and reduces churn."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
