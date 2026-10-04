# Showcase Scope

LeetIn's public repository is designed to answer three questions:

1. What problem does the product solve?
2. What does the learner experience?
3. What engineering boundaries shape the system?

It is not designed to enable a third party to reproduce the service.

## Included

- English product documentation
- High-level architecture and request flow
- Public technology categories
- Small TypeScript contracts and interfaces
- Illustrative orchestration with proprietary work delegated to ports
- Brand assets owned by LeetIn

## Not Included

- A runnable web application
- Production UI components or styles
- Route handlers or integration adapters
- Algorithms that choose or evaluate blanks
- Prompts or model configuration
- Real problem, solution, submission, or user data
- Database models or migration history
- Environment-variable names or deployment configuration
- Production tests, fixtures, thresholds, or monitoring rules

## Sanitization Rules

Every public addition should pass this checklist:

- Is the file necessary to explain product value or an engineering boundary?
- Could the file materially reduce the time needed to clone a core LeetIn behavior?
- Does it expose a credential, endpoint detail, schema, prompt, dataset, quota, or operational policy?
- Does it contain copied production code rather than a purpose-written example?
- Does it reveal a security control precisely enough to help bypass it?
- Does it include third-party or user content that LeetIn cannot redistribute?

If the answer to any risk question is yes, document the concept at a higher level or keep it private.

## Contribution Policy

This showcase is maintained as a curated representation of the private product. It is not accepting feature pull requests for the production application. Security reports should follow [`SECURITY.md`](../SECURITY.md).
