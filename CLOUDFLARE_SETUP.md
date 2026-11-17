# Cloudflare Pages migration

- Repository: millenniumrenovation19/millennium-renovation-website
- Migration branch: cloudflare-migration
- Framework preset: None
- Build command: leave empty
- Output directory: / (repository root)
- No environment variables required.

Before domain cutover, deploy this branch and test all images, videos, navigation and forms. Activate FormSubmit for contact@millenniumrenovationllc.com and verify email delivery. Existing Netlify form submissions do not migrate automatically.

Keep the domain registration and existing email service. Preserve all DNS records, including Microsoft email MX, SPF, DKIM, autodiscover and verification records. Public DNS queries are not a complete zone export; obtain the authoritative zone from the current provider before nameserver changes.

Do not cancel Netlify until Cloudflare custom-domain HTTPS and form delivery are verified.
