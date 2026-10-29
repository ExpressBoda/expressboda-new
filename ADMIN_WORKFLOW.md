# ExpressBoda content workflow

## Publication process

1. An editor changes content in `/admin/` and saves it as a draft.
2. The CMS opens a GitHub pull request instead of publishing the change.
3. Vercel creates a preview deployment for that pull request.
4. The content is checked in the preview, then the pull request is merged into `main`.
5. Vercel deploys the merged version to the live site.

## One-time setup still required

The CMS is configured to use GitHub and editorial workflow for drafts. Before staff can sign in, a repository administrator must connect a GitHub OAuth login service to the CMS. This requires administrator access to the ExpressBoda GitHub organization and Vercel project; no credentials are stored in this repository.

## Editorial rules

- Prices, requirements, timelines, legal statements and guarantees need factual approval before publishing.
- Each translated version must be checked before its pull request is approved.
- Preview the site on mobile and desktop before merging.
- Keep legal and privacy pages in draft until their text has been approved.
