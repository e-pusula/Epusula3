# e-Pusula website

Static website for https://epusula.net.

## Local preview

Run `python3 -m http.server 8000 --bind 127.0.0.1`, then open http://127.0.0.1:8000.

## Languages

Turkish is the default. The header’s TR / ENG buttons switch the page in place and save the choice in browser storage. English copy is curated locally; no translation service or API key is required.

- `index.html`: Turkish fallback content and `data-i18n` keys.
- `assets/translations.js`: Turkish and English copy for each key.
- `assets/i18n.js`: language switching, metadata, accessible labels and WhatsApp templates.
- Use `data-i18n-attr` for translated attributes; `data-i18n-title` supports the embedded form’s title alongside its fallback text.

When adding or editing copy, update both the HTML fallback and the matching translation entry. The embedded Google Form is managed separately and its questions remain Turkish; English visitors see a note with an English WhatsApp contact option. Visitors’ edited WhatsApp drafts are preserved when switching languages.

## Publishing

The repository includes a GitHub Pages workflow triggered by pushes to `main`. The custom domain currently serves through Netlify; verify the live domain after deployment rather than assuming a successful Pages run updates it.
