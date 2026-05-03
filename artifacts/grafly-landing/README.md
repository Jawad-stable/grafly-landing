# Grafly Landing Page

## Asset Checklist — Drop files into these paths before deploying

All assets live in the `public/` folder. The app already uses these paths and will show colored placeholder boxes until the real files are added.

### Fonts
- [ ] `public/fonts/Teshrin_Black.ttf`
- [ ] `public/fonts/Teshrin_Bold.ttf`
- [ ] `public/fonts/Teshrin_Medium.ttf`
- [ ] `public/fonts/Teshrin_Regular.ttf`

### Logo
- [ ] `public/logo/icon_colored.png` — Main app icon (rounded square, ~512×512 recommended)
- [ ] `public/logo/icon_white.png` — White version for dark surfaces
- [ ] `public/logo/wordmark_primary.png` — Full wordmark in cyan (#00A4FA)
- [ ] `public/logo/wordmark_white.png` — White wordmark for dark surfaces

### Mascot
- [ ] `public/mascot/idle.png`
- [ ] `public/mascot/celebrate.png`
- [ ] `public/mascot/think.png`
- [ ] `public/mascot/correct.png`
- [ ] `public/mascot/wrong.png`
- [ ] `public/mascot/cool_purple.png`
- [ ] `public/mascot/cool_yellow.png`

### App Screenshots (portrait phone size, ~390×844 recommended)
- [ ] `public/screenshots/home.png`
- [ ] `public/screenshots/lesson.png`
- [ ] `public/screenshots/color-game.png`
- [ ] `public/screenshots/drag-drop.png`

---

## Brand Colors (reference)
| Name | Hex | Usage |
|------|-----|-------|
| Cyan | `#00A4FA` | Primary brand, CTA backgrounds |
| Cyan Deep | `#0078BB` | White-on-cyan text backgrounds |
| Lime | `#E3ED43` | Accent, stats card |
| Pink | `#FF7BD0` | Feature cards |
| Pink Deep | `#BC4090` | White-on-pink text backgrounds, testimonial |
| Navy | `#21263F` | Dark text, dark mode background |
| Purple | `#7B5CFF` | Color Theory course tint |
| Off-white | `#F5F6FA` | Light mode background |

## Development
```bash
pnpm --filter @workspace/grafly-landing run dev
```
