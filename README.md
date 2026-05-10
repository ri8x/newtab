# NewTab – Elegant MS Edge New Tab Extension

A minimalist new tab extension designed for Microsoft Edge that provides a clean, distraction-free experience. Built with OCD and ADHD-friendly principles in mind: intentional spacing, minimal visual noise, and at-a-glance useful information.

## 🎯 Vision

Replace the cluttered default new tab with an elegant, purposeful design that respects your cognitive load. No unnecessary animations, no advertising, no feature bloat—just what matters.

## ✨ Key Features

- **Minimalist Design**: Clean white space, intentional typography, zero clutter
- **At-a-Glance Information**: Time, weather, quick notes—nothing more
- **Zero Distractions**: No ads, no auto-playing content, no notifications
- **OCD/ADHD Friendly**: 
  - Predictable layout with consistent alignment
  - High contrast, readable typography
  - Clear visual hierarchy
  - No unexpected animations or movement
- **Customizable but Simple**: Minimal toggles—turn features on/off, that's it
- **Privacy First**: All processing happens locally; no data collection

## 🎨 Design Principles

1. **Essentialism**: Every element must earn its place
2. **Consistency**: Predictable patterns and spacing
3. **Clarity**: Information hierarchy that's immediately obvious
4. **Accessibility**: High contrast, readable fonts, keyboard navigation
5. **Simplicity**: No settings overload; smart defaults

## 📋 Components (Planned)

- **Clock/Date**: Large, readable display
- **Weather**: Optional, location-based (no tracking)
- **Quick Notes**: Persistent, minimal text area
- **Mood/Focus Indicator**: Simple status toggle (optional)
- **Time Blocking**: Optional visual timer or focus reminder

## 🛠️ Tech Stack

- **HTML/CSS**: For fast, clean rendering
- **JavaScript (Vanilla)**: Minimal dependencies, maximum control
- **Chrome Manifest V3**: Edge compatibility
- **Local Storage**: For persistent user preferences

## 📦 Installation

1. Clone this repository
2. Open Microsoft Edge and navigate to `edge://extensions/`
3. Enable "Developer mode" (top right)
4. Click "Load unpacked" and select the `src/` folder
5. Pin the extension to your toolbar

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Ri8x/newtab.git
cd newtab

# Open in your editor
code .

# Test in Edge
# Follow installation steps above
```

## 📄 File Structure

```
newtab/
├── src/
│   ├── manifest.json          # Extension configuration
│   ├── index.html             # New tab page
│   ├── css/
│   │   └── styles.css         # All styling
│   └── js/
│       ├── app.js             # Main logic
│       ├── clock.js           # Time/date handler
│       └── weather.js         # Weather module (optional)
├── assets/
│   └── icon.png               # Extension icon
├── README.md                  # This file
└── TODO.md                    # Development checklist
```

## 🎓 Contributing

This is a personal project, but ideas are welcome. Please keep suggestions aligned with the minimalist philosophy.

## 📝 License

MIT License - feel free to fork and customize for yourself

---

**Remember**: The best interface is the one you don't think about. Keep it simple. 🤎
