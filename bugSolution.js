```javascript
//In your main app.js file
import 'tailwindcss/tailwind.css';

// ...rest of your code
```

```javascript
//In your tailwind.config.js file
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

```javascript
//In one of your component's js file
<div className="bg-red-500 p-4">
{/*This class is now working*/}
</div>
```