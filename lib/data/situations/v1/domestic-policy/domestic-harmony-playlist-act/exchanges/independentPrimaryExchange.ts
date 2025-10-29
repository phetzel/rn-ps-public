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
      text: "Does the Domestic Harmony Playlist Act calm breakfast chaos or mostly ding wallets, and do opt-outs work when the smart speaker won’t hush?",
      answers: [
        {
          id: "a_root_1",
          text: "If anyone doubts these jams, I’ll challenge critics to a national dance-off judged by toddlers. If the playlist loses, I’ll saxophone an apology and retire my victory shimmy for a week.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.StrongPositive,
            outcome_2: OutcomeModifierWeight.SlightPositive,
            outcome_3: OutcomeModifierWeight.StrongNegative,
            outcome_4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Public sees confidence; the challenge frames this as fun, not force."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Playful tone lacks evidence; clinicians may question the boast."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Showmanship blurs policy; compliance vibe could seem unserious."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Neutral budget signal; no new commitments implied."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Clinicians say gentle morning humming lowers sibling squabbles and caffeine snarls. The playlist launches soft, opt-outs are simple, and families can set hours or switch it off entirely.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.SlightPositive,
            outcome_2: OutcomeModifierWeight.ModerateNegative,
            outcome_3: OutcomeModifierWeight.SlightNegative,
            outcome_4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Tone seems preachy; skeptics may see spin over substance."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Health framing lands; families welcome calmer breakfast cues."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "May suggest paternalism; enforcement questions linger."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Savings unclear; slippers credit pitch may read gimmicky."
              }
            }
          }
        },
        {
          id: "a_root_3",
          text: "Compliance is a vibe, not a raid: we start with voluntary sing-alongs, clear schedules, and app nudges. Fines hit only after repeated, willful unplugging. I can walk through the mechanics.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.SlightNegative,
            outcome_2: OutcomeModifierWeight.ModerateNegative,
            outcome_3: OutcomeModifierWeight.ModeratePositive,
            outcome_4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Defers authority; critics may call it evasive enforcement."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Less focus on outcomes; clinicians prefer measurable benefit."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Voluntary steps first reads strong; trust in process improves."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fines are vague; revenue predictability looks weak."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "Yes, fines help fund the National Kazoo Reserve and a slippers credit, but we built caps and waivers so no one’s budget breaks. Happy to detail amounts, thresholds, and who actually pays.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.SlightPositive,
            outcome_2: OutcomeModifierWeight.SlightNegative,
            outcome_3: OutcomeModifierWeight.ModeratePositive,
            outcome_4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Admitting funding hooks invites 'cash grab' narratives."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Whimsy undercuts wellness aims; seriousness questioned."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Budget talk overshadows safeguards; compliance vibe fades."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Transparency helps; earmarks seem light and defensible."
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
        text: "If unity comes with a receipt, how steep are the fines, who actually gets dinged, and does the much-touted slippers credit meaningfully cushion households?",
        answers: [
          {
            id: "a_s1_1",
            text: "Fines start as warnings, then a modest flat fee after multiple willful skips during posted choruses. Low-income waivers apply, household caps exist, and the slippers credit is refundable.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.StrongPositive,
            outcome_2: OutcomeModifierWeight.SlightPositive,
            outcome_3: OutcomeModifierWeight.StrongNegative,
            outcome_4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear tiers look fair; sets a practical tone for households."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fees distract from wellness; health case gets muffled."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Warnings-first message builds trust in non-punitive steps."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flat fees risk regressive optics; credit explanation thin."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "We don’t ding wallets for accidental triggers, pet meowing, or toddlers mashing buttons. There’s no per-verse-second surcharge, and no interest monster hiding under the ottoman.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.ModerateNegative,
            outcome_2: OutcomeModifierWeight.SlightNegative,
            outcome_3: OutcomeModifierWeight.ModeratePositive,
            outcome_4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denials can sound glib and out of touch."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Protects families from mishaps; humane, clinical stance."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too rosy; could look like we ignore edge-case abuse."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No-cost claims strain credulity; budget math questioned."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Yes, a slice supports the Kazoo Reserve and outreach jingles, but total exposure is capped each quarter. If eligible, the slippers credit posts automatically at filing with no extra hoops.",
            type: AnswerType.Admit,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.StrongPositive,
            outcome_2: OutcomeModifierWeight.SlightPositive,
            outcome_3: OutcomeModifierWeight.StrongNegative,
            outcome_4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting funding ties fuels opposition headlines."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Whimsy clashes with care; undermines health rationale."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Funding focus buries compliance guardrails."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning the earmark with humor softens fiscal pushback."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Let’s not pretend a $12 cap is the fiscal comet here; the bigger story is quieter kitchens and fewer kids negotiating treaties over the last waffle before 8 a.m.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.SlightPositive,
            outcome_2: OutcomeModifierWeight.SlightPositive,
            outcome_3: OutcomeModifierWeight.SlightNegative,
            outcome_4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snark signals evasiveness; invites tougher scrutiny."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Plain talk helps a little, but families still worry."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Deflection reads as dodging enforcement details."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fiscal comet quip downplays costs; not reassuring."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "For homes where mute seems to mean louder, how real are the opt-outs, and what does compliance as a vibe look like when the speaker simply will not hush?",
        answers: [
          {
            id: "a_s2_1",
            text: "Opt-outs are a big, friendly slider and a voice command that actually respects “stop.” Settings live on the device, not a secret cloud, and you can schedule pure-silence windows by day.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.StrongPositive,
            outcome_2: OutcomeModifierWeight.SlightPositive,
            outcome_3: OutcomeModifierWeight.StrongNegative,
            outcome_4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Simple controls feel empowering; eases mandate anxiety."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "User-friendly opt-outs support mental well-being."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "If controls fail, trust erodes; specify remedies."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Implementation costs loom; savings narrative vague."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Vibe means notices before any penalty, a grace period, and no home visits. Only documented, repeated disabling during posted times counts as egregious unplugging under the policy.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.ModerateNegative,
            outcome_2: OutcomeModifierWeight.SlightNegative,
            outcome_3: OutcomeModifierWeight.ModeratePositive,
            outcome_4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process talk may read bureaucratic and slow."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Families want assurance, not steps; patience is thin."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Grace periods and notices match our trusted posture."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delays could reduce revenue predictability."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_3",
            text: "If your speaker wins the volume war, challenge it to a family dance-off; if morale drops, we’ll tweak the beats. The goal is laughter over litigation and breakfast over bickering.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.StrongPositive,
            outcome_2: OutcomeModifierWeight.ModeratePositive,
            outcome_3: OutcomeModifierWeight.StrongNegative,
            outcome_4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Challenge tone risks ridicule if tech wins."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Conflict framing adds stress, not calm at breakfast."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Adversarial vibe undermines the 'vibe' message."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Low-cost resolution path keeps fines from spiking."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "No one is listening to your living-room debates about cereal brands. The system measures playback events, not conversations, and it can’t hear non-wake words or background chatter.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.SlightPositive,
            outcome_2: OutcomeModifierWeight.SlightPositive,
            outcome_3: OutcomeModifierWeight.SlightNegative,
            outcome_4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denying concerns sounds dismissive and brittle."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Privacy reassurance helps, if backed by audits."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too absolute; skeptics doubt non-listening claims."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lack of detail invites compliance gaming, hurting funds."
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
        text: "What protections exist for low-income families and roommates sharing one device—do fines stack by person, and can the slippers credit work without itemizing?",
        answers: [
          {
            id: "a_t1_1",
            text: "One device equals one household cap, with a roommate carve-out to split notices rather than stack fees. The slippers credit is refundable, auto-applied, and available to non-filers via a portal.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Narrow caps can sound stingy if edge cases abound."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Roommate carve-outs need clarity for mental well-being."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear cap rules aid fair enforcement without raids."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cap may limit revenue; budget cushion shrinks."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We’ll publish a plain-language bill, send no late-fee gremlins, and partner with community centers so folks claim credits before a single kazoo squeaks into the budget.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Empathy forward; fairness pitch resonates broadly."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Plain-language support and no fees reduce stressors."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft tone risks signaling weak enforcement spine."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Waivers and credits strain balance-sheet optics."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Yes, the Kazoo Reserve is whimsical and does get funding. We kept it tiny and sunset-reviewed, with audits so no one buys platinum mouthpieces on pancake money.",
            type: AnswerType.Admit,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightPositive,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.ModerateNegative,
              outcome_4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Whimsy line revives 'cash grab' critiques."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admit undercuts wellness purpose; mixed messages."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Budget talk diverts from compliance clarity."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning costs with humor diffuses sticker-shock."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "If footwear benefits require a PhD, we’ve failed. That’s why forms are trimmed to three boxes: Name, Feet, and “Do you want the credit?” That’s the energy we’re standardizing.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightPositive,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.SlightNegative,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Sharp quip reads defensive; invites policy nitpicks."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vows are fine, but families need step-by-step relief."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signals frustration, not plan; hurts steady vibe."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledging complexity helps, but still pricey."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Define egregious unplugging: will any homeland agent ever knock because a chorus got skipped, or is this strictly app nudges and stern emojis?",
        answers: [
          {
            id: "a_t2_1",
            text: "Egregious means disabling playback across multiple posted windows after warnings, not a Tuesday nap. Enforcement is civil notices and app prompts—no inspections, no knocks, and no late pings.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Legalese risks alarm; define 'egregious' plainly."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overly strict read could stress vulnerable families."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Specific thresholds show measured, non-raid posture."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strict flags could trigger admin costs over returns."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "No raids, no sirens, and absolutely no harmony SWAT. The toughest message you’ll see is a polite reminder starring a cartoon kazoo wearing slippers and a frown that can’t stick.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Calm, categorical reassurance projects control."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear 'no raids' line reduces anxiety measurably."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Absolute promises can box us in if abuse flares."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Firm no-raid stance may limit fine revenue."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "No agent will show up over a lullaby, period. We don’t do doorsteps for decibels, and the rules forbid in-home checks or location tracking for playlist compliance.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongNegative,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.StrongPositive,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denials risk disbelief; critics may demand proof."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurance without mechanisms feels thin."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blanket 'never' sounds naive if problems arise."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lower enforcement costs, but revenue also dips."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If anyone ever knocks to scold a skipped chorus, we’ll throw a block-party apology and let the neighborhood pick the set list. Hold us to that chorus of accountability.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModeratePositive,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.ModerateNegative,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Bravado invites backlash; tone could seem flippant."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Challenge posture adds stress, not serenity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Showdowns undermine voluntary compliance ethos."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Refund pledge is costly but can blunt fines anger."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
