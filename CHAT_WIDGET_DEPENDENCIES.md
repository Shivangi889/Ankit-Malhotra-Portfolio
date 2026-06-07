# Chat Widget - Dependencies & Installation

## Required Packages

Make sure these are installed in your project:

```bash
npm install framer-motion lucide-react
```

## Verify Installation

Check your `package.json`:

```json
{
  "dependencies": {
    "react": "^18.0.0",        // You should already have
    "react-dom": "^18.0.0",    // You should already have
    "framer-motion": "^10.16.0", // NEW
    "lucide-react": "^0.292.0"   // NEW
  }
}
```

## Version Requirements

- **React**: 18.0.0 or higher
- **React DOM**: 18.0.0 or higher
- **Framer Motion**: 10.0.0 or higher
- **Lucide React**: 0.280.0 or higher

## Optional Packages

These are nice-to-have but not required:

```bash
# For debugging
npm install --save-dev @react-devtools/shell-extension

# For testing
npm install --save-dev vitest @testing-library/react

# For code quality
npm install --save-dev eslint prettier
```

## Tailwind CSS

The chat widget uses Tailwind CSS classes. Make sure Tailwind is configured in your project:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure `tailwind.config.js`:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Checking Installation

Run this command to verify all packages are installed:

```bash
npm list framer-motion lucide-react
```

Should output:

```
├── framer-motion@10.16.0
└── lucide-react@0.292.0
```

## Troubleshooting

### "Module not found" error

**Solution**: Run `npm install` to install all dependencies:

```bash
npm install
```

### Framer Motion animations not working

**Solution**: Make sure it's installed and imported correctly:

```javascript
import { motion, AnimatePresence } from 'framer-motion';
```

### Icons not showing

**Solution**: Make sure lucide-react is installed:

```bash
npm install lucide-react
```

### Tailwind classes not applied

**Solution**: Make sure Tailwind CSS is configured and imported:

```bash
# Check if tailwind.config.js exists
ls tailwind.config.js

# Check if index.css has Tailwind directives
cat src/index.css | grep "@tailwind"
```

## Environment Variables

Create a `.env.local` file in your project root:

```env
VITE_WEB3FORMS_KEY=your_web3forms_api_key_here
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/d/YOUR_ID/usercontent
```

## Local Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Browser Compatibility

The chat widget works on:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

## Performance Notes

- **Bundle Size Impact**: ~90KB (gzipped: ~25KB)
  - Framer Motion: ~30KB gzipped
  - Lucide React: ~5KB gzipped
  - Chat components: ~5KB gzipped

- **Runtime Performance**:
  - Floating button: Always rendered (minimal impact)
  - Chat drawer: Only rendered when open
  - Animations: 60fps on modern devices

## Next Steps

After installing dependencies:

1. Add environment variables to `.env.local`
2. Set up Google Sheets (see CHAT_WIDGET_SETUP.md)
3. Set up Web3Forms (see CHAT_WIDGET_SETUP.md)
4. Add `<ChatWidget />` to your App
5. Test locally with `npm run dev`

## Still Having Issues?

See the troubleshooting section in [CHAT_WIDGET_SETUP.md](./CHAT_WIDGET_SETUP.md)
