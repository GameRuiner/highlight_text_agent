# mark.ai

> Show, don't tell. Mark it with Mark.ai ✎

![AI Agent which scrolls and highlights relevant content](image.png "Visual")

## Demo

[![mark.ai in action](https://www.youtube.com/watch?v=0-SlsLuyQeI)](https://www.youtube.com/watch?v=0-SlsLuyQeI)

## Problem

Conversational AIs often produce inaccurate or misleading responses. This leads to low user trust in their answers.

## Solution

That’s where Mark.ai comes in, an AI Agent which scrolls through the webpage of the documentation and highlights relevant content that directly addresses your question.

### Value Proposition

- Build user trust in AI-generated responses.
- Save time and minimize cognitive effort needed to navigate documentation.

---

## Team

- **Wojciech Mroczyński** – Prompt engineering, backend development
- **Marko Golovko** – Full stack development

## Tech Stack

- **Conversational AI** – ElevenLabs (agent widget)
- **Next.js** – Full stack app
- **Text Fragments** – Cross-browser standard; LLM using it via tool calling to scroll & highlight relevant text on the currently viewed webpage

---

## Quick Start

```bash
cp .env.example .env
```

Edit the `.env` file with your ElevenLabs API key, and PostHog variables for analytics.

```bash
npm install
npm dev
```

---

## Learn More

To learn more about ElevenLabs, take a look at the following resources:

- [ElevenLabs Documentation](https://elevenlabs.io/docs) - learn about ElevenLabs features and API.
