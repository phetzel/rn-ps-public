# Welcome to Press Office

import Link from '@docusaurus/Link';

**Press Office** is a React Native simulation game where you play as the White House Press Secretary.

Manage relationships with the press corps, spin difficult situations, and keep the administration's approval ratings afloat.

## Getting Started

<div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
  <Link className="button button--primary button--lg" to="/docs/gameplay/guide">
    Read Player Guide
  </Link>
  <Link className="button button--secondary button--lg" to="/docs/technical">
    View Tech Stack
  </Link>
</div>

## Project Vision

We built Press Office to explore the intersection of simulation gameplay and modern React Native development. It demonstrates a "local-first" architecture using WatermelonDB and offline generation capabilities.

### Key Features

-   **Dynamic Content**: Situations are generated via an LLM pipeline, creating infinite replayability.
-   **Relationship System**: Balance favor with individual journalists, cabinet members, and voter subgroups.
-   **Offline First**: All game state is persisted locally.

## Join the Community

Check out our [GitHub Repository](https://github.com/press-office/rn-ps) to contribute or report issues.
