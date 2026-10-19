# Brabo preparation changes

Prepared locally on 2026-10-19. The owner authorized publication to brabo1-com on 2026-10-19. No remote commit has been published yet. Original source: `dyad-sh/nextjs-template@02c389a61bca0db346791b2989d4473d6ee830d2`.

## Purpose and compatibility

Preserve template features and component-selection protocol while preparing an independently distributed source tree. Original licenses and historical notices are retained. The component tagger runtime is byte-identical to the reviewed npm package; only local distribution metadata/paths changed. `data-dyad-*`, `DYAD_DISABLE_DB_PUSH` and the existing cart storage key are compatibility identifiers, not network destinations.

Local OFL Geist/Geist Mono fonts replace build-time Google font downloads. The Brabo icon/attribution replace product branding; unused Next/Vercel logo files and the uninspected original favicon are excluded. The pnpm lock is canonical; conflicting npm lock removed. Standalone ESLint tooling and an equivalent ESM Tailwind plugin import make validation independent of the parent checkout.

Two build CPUs and a template-local output tracing root bound build resources and prevent tracing the parent Electron checkout. These are explicit preparation settings.

## Files changed from upstream

- `.gitignore`
- `README.md`
- `next.config.ts`
- `package.json`
- `pnpm-lock.yaml`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `tailwind.config.ts`

## Files excluded/replaced

- `public/next.svg`
- `public/vercel.svg`
- `src/components/made-with-dyad.tsx`

## Added files

- `.npmrc`
- `BRABO_SOURCE.json`
- `DEPENDENCIES.json`
- `LICENSES/Brabo-assets-MIT.txt`
- `LICENSES/Geist-OFL-1.1.txt`
- `LICENSES/shadcn-MIT.txt`
- `THIRD_PARTY_NOTICES.md`
- `eslint.config.mjs`
- `src/app/fonts/Geist.woff2`
- `src/app/fonts/GeistMono.woff2`
- `src/app/icon.svg`
- `src/components/made-with-brabo.tsx`
- `vendor/nextjs-webpack-component-tagger/LICENSE`
- `vendor/nextjs-webpack-component-tagger/README.md`
- `vendor/nextjs-webpack-component-tagger/lib/index.cjs`
- `vendor/nextjs-webpack-component-tagger/lib/index.d.cts`
- `vendor/nextjs-webpack-component-tagger/lib/index.d.ts`
- `vendor/nextjs-webpack-component-tagger/lib/index.js`
- `vendor/nextjs-webpack-component-tagger/package.json`
- `BRABO_CHANGES.md`
- `BRABO_FILES.json`

## Remaining release work

Content publication was explicitly authorized on 2026-10-19. Remaining: actual own-repository commits/pins; own hosting for desktop preview assets; desktop creation with Dyad destinations blocked and process-wide network observation. This local preparation does not prove those checks. Full Portal checkout, order, reset-password/email and deploy flows are not certified by the build and HTTP smoke. Current upstream versions and their peer/deprecation warnings remain documented; no broad dependency upgrade is claimed.

## Publication preparation — 2026-10-19

Added `public/brabo-template-preview.svg`, an original Brabo card illustration under the included `LICENSES/Brabo-assets-MIT.txt`. Content publication to this template's brabo1-com repository is authorized. Local allowlist/hashes include the illustration and current authorization metadata. Upload and pinned public URLs remain unverified until a remote commit exists.

Validação desktop T137: TypeScript ESLint parser/plugin fixados via overrides em 8.71.1 (publicado em 2026-10-05), pois 8.72.0 tinha menos de 24 horas. Mantida a proteção de idade mínima de pacotes do Brabo. Também fixado ignore transitivo do ESLint em 7.0.12 (publicado em 2026-10-02). Runtime Next 15.5.26, licenças e código funcional inalterados. Lock completo resolvido com pnpm 11.1.2 e idade mínima de 1440 minutos já ativa, incluindo as dependências transitivas restantes; pnpm-workspace.yaml preserva essa política. Inventário Linux regenerado; lint/build validados.

Configuração pnpm11: unrs-resolver tem script de instalação explicitamente recusado em allowBuilds. Seus binários distribuídos já permitem o build e a prévia; não há aprovação genérica de scripts nem redução de idade mínima.
