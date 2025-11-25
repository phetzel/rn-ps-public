# Content Pipeline

Press Office uses a unique LLM-based pipeline to generate infinite gameplay scenarios. This system lives in `scripts/gen-situation`.

## The Generator Flow

The command `npm run gen-situation` triggers the following process:

1.  **Analysis (`generation-analysis.ts`)**:
    *   The system analyzes the current "Situation Balance" (e.g., have we had too many foreign policy crises lately?).
    *   It selects a target topic and difficulty.

2.  **Generation (`generator.ts` & `steps/`)**:
    *   **Base Step**: Generates the core event title and description.
    *   **Exchanges Step**: Generates journalist questions and potential player responses (Answer, Spin, Defer) based on the event.
    *   **Outcomes Step**: Calculates the statistical impact of each response on different voter subgroups.

3.  **Validation (`utils/final-validator.ts`)**:
    *   Ensures the generated JSON adheres to the strictly typed schema.
    *   Checks for logical consistency (e.g., outcome scores aren't impossible values).

4.  **Output**:
    *   Files are written to `lib/data/situations/{category}/{id}.ts`.
    *   These files are bundled with the app or can be fetched remotely (future feature).

## LLM Integration

We use OpenAI's API with structured outputs. Configuration for prompts and parameters is located in `scripts/gen-situation/llm/configs`.

*   **Model**: GPT-4o (or configured equivalent).
*   **Safety**: All outputs are sanitized to prevent generation of prohibited content.
