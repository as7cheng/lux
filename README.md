# Lux

Anthony Cheng’s photography archive, published at https://lux.anthonysc.com/
from the main branch by GitHub Actions. Photographs remain on images.anthonysc.com.

Run `pnpm install --frozen-lockfile`, then `pnpm dev` or `pnpm build`.

Contact uses the existing anthony-studio-contact Worker at
https://anthonysc.com/api/contact. Pages deployment does not deploy the Worker.
Allow lux.anthonysc.com in the existing Turnstile widget, and run
`pnpm worker:check` and `pnpm worker:deploy` using the existing Cloudflare
account and Worker secrets. No mail credentials belong in the frontend.
