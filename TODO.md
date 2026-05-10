# NewTab Development Checklist

A structured, clear roadmap for building your minimalist MS Edge new tab extension. Work through each phase systematically.

---

## 🏗️ Phase 1: Foundation & Setup
*Goal: Get the basic structure in place*

- [ ] Create folder structure (src/, css/, js/, assets/)
- [ ] Create `manifest.json` with Manifest V3 spec for Edge
- [ ] Create base `index.html` (minimal, semantic)
- [ ] Create `css/styles.css` (grid-based, light theme)
- [ ] Create `js/app.js` (initialization)
- [ ] Create extension icon (512x512 PNG)
- [ ] Test load in Edge browser (edge://extensions/)
- [ ] Verify it loads on new tab without errors

**Exit Criteria**: Extension loads without console errors; new tab shows a blank page

---

## ⏰ Phase 2: Clock & Time Display
*Goal: Add your primary focal point*

- [ ] Create `js/clock.js` module
  - [ ] Get current time and date
  - [ ] Format: `HH:MM` (24hr or 12hr + AM/PM)
  - [ ] Display full date below (e.g., "Saturday, May 10, 2026")
- [ ] Add HTML structure to `index.html` for clock display
- [ ] Style clock in `css/styles.css`
  - [ ] Large, readable typography (60px+ for time)
  - [ ] Consistent vertical/horizontal centering
  - [ ] Light theme with high contrast
- [ ] Update clock every second
- [ ] Test: Clock displays correctly and updates smoothly

**Exit Criteria**: Large, readable clock that updates in real-time; no jank or flicker

---

## 🌤️ Phase 3: Weather Widget (Optional)
*Goal: Minimal weather information*

- [ ] Research geolocation API (privacy-friendly approach)
- [ ] Create `js/weather.js` module
  - [ ] Use free API (e.g., Open-Meteo, weatherapi.com)
  - [ ] Get current temp and condition
- [ ] Add HTML structure for weather display
- [ ] Style weather section (subtle, non-intrusive)
  - [ ] Display temp, condition icon, location
  - [ ] Keep font size smaller than clock
- [ ] Add toggle in settings to enable/disable weather
- [ ] Test: Weather displays; handles API failures gracefully

**Exit Criteria**: Optional weather display that doesn't break the minimalist aesthetic

---

## 📝 Phase 4: Quick Notes Feature
*Goal: Your core differentiator*

- [ ] Create `js/notes.js` module
  - [ ] Text input area (transparent, minimal styling)
  - [ ] Auto-save to localStorage on input change
  - [ ] Load notes on page load
- [ ] Add HTML structure for notes
  - [ ] Textarea with subtle border/background
  - [ ] Character count (optional, subtle)
- [ ] Style notes section
  - [ ] Position: bottom-right or below clock
  - [ ] Max-height with scroll if needed
  - [ ] Monospace font (feels "notepad-like")
- [ ] Test: Notes persist across page reloads
- [ ] Test: No layout shift when typing

**Exit Criteria**: Persistent notes that don't disrupt the clean layout

---

## 🎨 Phase 5: Polish & Accessibility
*Goal: Refine UX and ensure accessibility*

- [ ] Review color contrast (WCAG AA minimum)
- [ ] Test keyboard navigation (Tab through elements)
- [ ] Add focus states (visible but not jarring)
- [ ] Test on different screen sizes (responsive)
- [ ] Optimize font loading (system fonts preferred)
- [ ] Remove unused CSS/JS
- [ ] Add touch-friendly sizing for touchscreen devices
- [ ] Test with screen readers (accessibility tree)
- [ ] Audit for performance (should load <100ms)
- [ ] Add minimal animations (none jarring; consider motion preferences)

**Exit Criteria**: WCAG AA compliant; keyboard navigable; smooth on all devices

---

## 🚀 Phase 6: Publishing & Documentation
*Goal: Prepare for Edge Store*

- [ ] Write installation instructions in README
- [ ] Create CHANGELOG.md (initial version notes)
- [ ] Package extension folder for submission
- [ ] Create screenshots for Edge Store listing
- [ ] Write extension description (50-60 words, focus on minimalism)
- [ ] Test in incognito mode
- [ ] Test on clean Edge profile
- [ ] Submit to Microsoft Edge Add-ons store
- [ ] Set up GitHub releases
- [ ] Document how to update after store acceptance

**Exit Criteria**: Listed on Edge Store; installable by others

---

## 🔄 Post-Launch (Ongoing)
*Goal: Maintain and improve based on feedback*

- [ ] Monitor user feedback and issues
- [ ] Track performance metrics (if enabled)
- [ ] Plan v1.1 features (only essential)
- [ ] Keep dependencies updated
- [ ] Respond to bug reports promptly

---

## 💡 Quick Reference

**Blockers or Stuck?**
- Geolocation API not working → Use IP-based weather instead
- localStorage full → Implement cleanup for old notes
- Performance issues → Profile with DevTools; likely CSS or DOM thrashing

**Remember:**
- Avoid feature creep—say no to cool ideas that add clutter
- Test frequently (don't wait until Phase 6)
- Accessibility isn't optional; build it in from the start
- A slow, perfect interface is worse than a fast, good one

---

## 📊 Progress Tracking

Fill in dates as you complete phases:

| Phase | Status | Started | Completed |
|-------|--------|---------|-----------|
| 1: Foundation | ⬜ | - | - |
| 2: Clock | ⬜ | - | - |
| 3: Weather | ⬜ | - | - |
| 4: Notes | ⬜ | - | - |
| 5: Polish | ⬜ | - | - |
| 6: Publishing | ⬜ | - | - |

---

**Status Legend**: ⬜ Not started | 🟨 In progress | ✅ Complete

Good luck! Build something you're proud of. 🤎
