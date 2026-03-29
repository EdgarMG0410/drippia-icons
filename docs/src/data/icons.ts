export interface Icon {
  name: string;
  displayName: string;
  svg: string;
}

export const iconsData: Icon[] = [
  {
    name: 'add',
    displayName: 'Add',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="12" r="10"/>
<line x1="12" y1="8" x2="12" y2="16"/>
<line x1="8" y1="12" x2="16" y2="12"/>
</svg>`
  },
  {
    name: 'aeropress',
    displayName: 'Aeropress',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 256" width="24" height="24" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round">
<g>
<line x1="28" y1="40" x2="100" y2="40"/>
<line x1="36" y1="100" x2="90" y2="100"/>
<line x1="28" y1="200" x2="100" y2="200"/>
<line x1="36" y1="100" x2="36" y2="200"/>
<line x1="92" y1="100" x2="92" y2="200"/>
<line x1="80" y1="40" x2="80" y2="100"/>
<line x1="50" y1="40" x2="50" y2="100"/>
<line x1="43" y1="207" x2="85" y2="207"/>
</g>
</svg>`
  },
  {
    name: 'ai-brew',
    displayName: 'AI Brew',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M14 3C19 9 21 13 21 17C21 21 18 25 14 25C10 25 7 21 7 17C7 13 9 9 14 3Z"/>
<path d="M11 17L12.5 14L14 17L15.5 14L17 17"/>
</svg>`
  },
  {
    name: 'bean',
    displayName: 'Bean',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="12" cy="12" rx="6" ry="8.5" transform="rotate(-20 12 12)"/>
<path d="M8.5 7Q12 12 15.5 17" transform="rotate(-20 12 12)"/>
</svg>`
  },
  {
    name: 'bloom',
    displayName: 'Bloom',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="14" r="3"/>
<path d="M10 11c-1-2-1-4 0-5"/>
<path d="M12 10c0-2 0-4 0-6"/>
<path d="M14 11c1-2 1-4 0-5"/>
<line x1="8" y1="2" x2="8" y2="5"/>
<line x1="16" y1="2" x2="16" y2="5"/>
<line x1="12" y1="1" x2="12" y2="3"/>
</svg>`
  },
  {
    name: 'chemex',
    displayName: 'Chemex',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M7 2h10"/>
<path d="M8 2l2 6h4l2-6"/>
<line x1="8" y1="10" x2="16" y2="10"/>
<path d="M10 10l-3 9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l-3-9"/>
</svg>`
  },
  {
    name: 'coffee-bag',
    displayName: 'Coffee Bag',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M7 8h10v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8z"/>
<polyline points="7 8 9 4 15 4 17 8"/>
<circle cx="12" cy="14" r="2"/>
<line x1="12" y1="12" x2="12" y2="16"/>
<line x1="10" y1="14" x2="14" y2="14"/>
<line x1="9" y1="11" x2="15" y2="11"/>
</svg>`
  },
  {
    name: 'coffee-bean',
    displayName: 'Coffee Bean',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="12" cy="12" rx="5" ry="8" transform="rotate(-30 12 12)"/>
<path d="M9.5 6.5c1 2 1 5 0 7" transform="rotate(-30 12 12)"/>
</svg>`
  },
  {
    name: 'coffee-cup',
    displayName: 'Coffee Cup',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M6 7h12l-1.5 13H7.5L6 7z"/>
<path d="M18 9h1a2 2 0 0 1 0 4h-1"/>
<line x1="4" y1="20" x2="20" y2="20"/>
<path d="M9 4c0-1 1-1 1-2"/>
<path d="M12 4c0-1 1-1 1-2"/>
<path d="M15 4c0-1 1-1 1-2"/>
</svg>`
  },
  {
    name: 'cold-brew',
    displayName: 'Cold Brew',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="7" y="6" width="10" height="15" rx="1"/>
<path d="M9 6V4h6v2"/>
<rect x="8" y="3" width="8" height="2" rx="0.5"/>
<line x1="8" y1="14" x2="16" y2="14"/>
<line x1="12" y1="17" x2="12" y2="21"/>
<line x1="10" y1="18" x2="14" y2="20"/>
<line x1="14" y1="18" x2="10" y2="20"/>
</svg>`
  },
  {
    name: 'espresso',
    displayName: 'Espresso',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="3" y="5" width="18" height="13" rx="2"/>
<rect x="9" y="11" width="6" height="3" rx="1"/>
<path d="M11 14v3"/>
<path d="M13 14v3"/>
<circle cx="6" cy="9" r="1.5"/>
<path d="M18 10v-3a1 1 0 0 1 2 0v4"/>
<line x1="3" y1="18" x2="21" y2="18"/>
<circle cx="17" cy="9" r="1"/>
</svg>`
  },
  {
    name: 'explore',
    displayName: 'Explore',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="12" r="10"/>
<polygon points="12,8 14,12 12,16 10,12"/>
</svg>`
  },
  {
    name: 'favorite',
    displayName: 'Favorite',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M12 6l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/>
</svg>`
  },
  {
    name: 'french-press',
    displayName: 'French Press',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="7" y="7" width="10" height="12" rx="1"/>
<line x1="7" y1="10" x2="17" y2="10"/>
<line x1="12" y1="4" x2="12" y2="10"/>
<circle cx="12" cy="4" r="1"/>
</svg>`
  },
  {
    name: 'grinder',
    displayName: 'Grinder',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="7" y="4" width="10" height="6" rx="1"/>
<path d="M7 10v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6"/>
<line x1="10" y1="7" x2="14" y2="7"/>
</svg>`
  },
  {
    name: 'grinder-manual',
    displayName: 'Grinder Manual',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="7" y="8" width="10" height="10" rx="1"/>
<path d="M7 8V4h10v4"/>
<circle cx="12" cy="13" r="2"/>
<line x1="10" y1="13" x2="14" y2="13"/>
<line x1="12" y1="11" x2="12" y2="15"/>
<path d="M12 4V2"/>
<circle cx="12" cy="2" r="1"/>
</svg>`
  },
  {
    name: 'history',
    displayName: 'History',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="12" r="8"/>
<polyline points="12,8 12,12 15,15"/>
<path d="M4 12a8 8 0 0 1 2-5"/>
</svg>`
  },
  {
    name: 'home',
    displayName: 'Home',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
<polyline points="9,22 9,12 15,12 15,22"/>
</svg>`
  },
  {
    name: 'kalita',
    displayName: 'Kalita',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M6 3h12l-2 11H8L6 3z"/>
<line x1="8" y1="14" x2="16" y2="14"/>
<circle cx="10" cy="14" r="0.5"/>
<circle cx="12" cy="14" r="0.5"/>
<circle cx="14" cy="14" r="0.5"/>
<line x1="10" y1="14" x2="10" y2="17"/>
<line x1="12" y1="14" x2="12" y2="17"/>
<line x1="14" y1="14" x2="14" y2="17"/>
<path d="M7 17h10v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2z"/>
</svg>`
  },
  {
    name: 'kettle',
    displayName: 'Kettle',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M5 10a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5z"/>
<path d="M5 12c-1.5 0-2.5-1-2.5-2.5S3.5 7 5 7h1"/>
<path d="M3 9.5C3 7 4 5 6 4c1.5-1 3-1 3-1"/>
<line x1="8" y1="6" x2="16" y2="6"/>
<circle cx="12" cy="5" r="1"/>
<path d="M19 11c1.5 0 2.5 1 2.5 2.5S20.5 16 19 16"/>
</svg>`
  },
  {
    name: 'mail',
    displayName: 'Mail',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="2" y="4" width="20" height="16" rx="2"/>
<polyline points="2,8 12,14 22,8"/>
</svg>`
  },
  {
    name: 'moka-pot',
    displayName: 'Moka Pot',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M8 12h8v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/>
<path d="M8 12V6h8v6"/>
</svg>`
  },
  {
    name: 'my-coffees',
    displayName: 'My Coffees',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M4 7h16v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/>
<line x1="7" y1="3" x2="7" y2="7"/>
<line x1="17" y1="3" x2="17" y2="7"/>
</svg>`
  },
  {
    name: 'my-stock',
    displayName: 'My Stock',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="4" y="4" width="16" height="16" rx="2"/>
<line x1="4" y1="10" x2="20" y2="10"/>
<line x1="12" y1="4" x2="12" y2="20"/>
</svg>`
  },
  {
    name: 'notifications',
    displayName: 'Notifications',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M12 2a6 6 0 0 0-6 6v6l-2 2h16l-2-2v-6a6 6 0 0 0-6-6z"/>
<path d="M10 20a2 2 0 0 0 4 0"/>
</svg>`
  },
  {
    name: 'origin',
    displayName: 'Origin',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="12" r="10"/>
<path d="M12 2v20M2 12h20"/>
<path d="M6 6c2 2 4 2 6 0s4-2 6 0"/>
</svg>`
  },
  {
    name: 'prensa-francesa',
    displayName: 'Prensa Francesa',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="7" y="5" width="10" height="15" rx="1"/>
<line x1="12" y1="5" x2="12" y2="2"/>
<line x1="9" y1="2" x2="15" y2="2"/>
<line x1="8" y1="13" x2="16" y2="13"/>
<rect x="7" y="4" width="10" height="2" rx="0.5"/>
<path d="M17 8c1 0 2 0.5 2 1.5"/>
<path d="M7 11c-1.5 0-2.5 1-2.5 2.5"/>
</svg>`
  },
  {
    name: 'profile',
    displayName: 'Profile',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="8" r="4"/>
<path d="M4 20a8 8 0 0 1 16 0"/>
</svg>`
  },
  {
    name: 'ratio',
    displayName: 'Ratio',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="3" y="3" width="8" height="8" rx="1"/>
<rect x="13" y="13" width="8" height="8" rx="1"/>
<line x1="11" y1="7" x2="13" y2="17"/>
</svg>`
  },
  {
    name: 'recipes',
    displayName: 'Recipes',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M4 4h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
<line x1="8" y1="10" x2="16" y2="10"/>
<line x1="8" y1="14" x2="16" y2="14"/>
<line x1="8" y1="18" x2="12" y2="18"/>
</svg>`
  },
  {
    name: 'roast',
    displayName: 'Roast',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="12" r="8"/>
<circle cx="12" cy="12" r="4"/>
<circle cx="12" cy="12" r="1"/>
</svg>`
  },
  {
    name: 'scale',
    displayName: 'Scale',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="4" y="10" width="16" height="8" rx="1"/>
<line x1="12" y1="10" x2="12" y2="6"/>
<line x1="8" y1="6" x2="16" y2="6"/>
</svg>`
  },
  {
    name: 'search',
    displayName: 'Search',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="11" cy="11" r="8"/>
<line x1="17" y1="17" x2="23" y2="23"/>
</svg>`
  },
  {
    name: 'settings',
    displayName: 'Settings',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="14" cy="14" r="3"/>
<path d="M14 4v3M14 21v3M4 14h3M21 14h3M6.5 6.5l2 2M19.5 19.5l2 2M6.5 21.5l2-2M19.5 8.5l2-2"/>
</svg>`
  },
  {
    name: 'share',
    displayName: 'Share',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="18" cy="6" r="3"/>
<circle cx="6" cy="12" r="3"/>
<circle cx="18" cy="18" r="3"/>
<line x1="9" y1="13" x2="15" y2="17"/>
<line x1="9" y1="11" x2="15" y2="7"/>
</svg>`
  },
  {
    name: 'stats',
    displayName: 'Stats',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<line x1="6" y1="20" x2="6" y2="12"/>
<line x1="12" y1="20" x2="12" y2="8"/>
<line x1="18" y1="20" x2="18" y2="14"/>
</svg>`
  },
  {
    name: 'tasting-notes',
    displayName: 'Tasting Notes',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M6 4h12l2 16H4z"/>
<line x1="8" y1="10" x2="16" y2="10"/>
</svg>`
  },
  {
    name: 'temperature',
    displayName: 'Temperature',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
<line x1="11" y1="8" x2="13" y2="8"/>
<line x1="11" y1="11" x2="13" y2="11"/>
</svg>`
  },
  {
    name: 'thermometer',
    displayName: 'Thermometer',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M12 4v12a4 4 0 1 1 0 8 4 4 0 0 1 0-8V4a2 2 0 0 1 4 0z"/>
<line x1="12" y1="8" x2="14" y2="8"/>
<line x1="12" y1="12" x2="14" y2="12"/>
</svg>`
  },
  {
    name: 'timer',
    displayName: 'Timer',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="14" r="8"/>
<polyline points="12,10 12,14 15,16"/>
<line x1="8" y1="4" x2="16" y2="4"/>
</svg>`
  },
  {
    name: 'v60',
    displayName: 'V60',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<line x1="8" y1="16" x2="16" y2="16"/>
<path d="M5 6h14l-6 10h-2L5 6z"/>
<path d="M19 6c2 0 2.5 1 2.5 2s-1 2-4 2"/>
</svg>`
  },
  {
    name: 'water-drop',
    displayName: 'Water Drop',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
</svg>`
  }
];
