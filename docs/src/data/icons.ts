export interface Icon {
  name: string;
  displayName: string;
  svg: string;
}

export const iconsData: Icon[] = [
  {
    name: 'add',
    displayName: 'Add',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<circle cx="14" cy="14" r="10"/>
<line x1="14" y1="9" x2="14" y2="19"/>
<line x1="9" y1="14" x2="19" y2="14"/>
</svg>`
  },
  {
    name: 'aeropress',
    displayName: 'Aeropress',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<rect x="8" y="5" width="12" height="18" rx="1"/>
<line x1="8" y1="10" x2="20" y2="10"/>
<line x1="8" y1="15" x2="20" y2="15"/>
<path d="M10 23v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2"/>
</svg>`
  },
  {
    name: 'ai-brew',
    displayName: 'AI Brew',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M14 2l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z"/>
<path d="M10 18h8v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/>
</svg>`
  },
  {
    name: 'bean',
    displayName: 'Bean',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M14 4c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z"/>
<path d="M14 8c-2 0-3 1-3 3"/>
</svg>`
  },
  {
    name: 'chemex',
    displayName: 'Chemex',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M10 4h8l-2 8-2 8h-2l-2-8z"/>
<line x1="9" y1="12" x2="19" y2="12"/>
</svg>`
  },
  {
    name: 'explore',
    displayName: 'Explore',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<circle cx="14" cy="14" r="10"/>
<polygon points="14,10 16,14 14,18 12,14"/>
</svg>`
  },
  {
    name: 'favorite',
    displayName: 'Favorite',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M14 6l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/>
</svg>`
  },
  {
    name: 'french-press',
    displayName: 'French Press',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<rect x="9" y="8" width="10" height="14" rx="1"/>
<line x1="9" y1="12" x2="19" y2="12"/>
<line x1="14" y1="4" x2="14" y2="12"/>
<circle cx="14" cy="4" r="1"/>
</svg>`
  },
  {
    name: 'grinder',
    displayName: 'Grinder',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<rect x="9" y="4" width="10" height="8" rx="1"/>
<path d="M9 12v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6"/>
<line x1="12" y1="7" x2="16" y2="7"/>
</svg>`
  },
  {
    name: 'history',
    displayName: 'History',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<circle cx="14" cy="14" r="8"/>
<polyline points="14,10 14,14 17,17"/>
<path d="M6 14a8 8 0 0 1 2-5"/>
</svg>`
  },
  {
    name: 'home',
    displayName: 'Home',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M5 12l9-8 9 8v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/>
<polyline points="10,24 10,16 18,16 18,24"/>
</svg>`
  },
  {
    name: 'kettle',
    displayName: 'Kettle',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M8 10h8a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4z"/>
<path d="M8 10V6a2 2 0 0 1 2-2h4"/>
</svg>`
  },
  {
    name: 'mail',
    displayName: 'Mail',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<rect x="4" y="6" width="20" height="16" rx="2"/>
<polyline points="4,10 14,16 24,10"/>
</svg>`
  },
  {
    name: 'moka-pot',
    displayName: 'Moka Pot',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M10 14h8v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/>
<path d="M10 14V8h8v6"/>
</svg>`
  },
  {
    name: 'my-coffees',
    displayName: 'My Coffees',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M6 8h16v10a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4z"/>
<line x1="10" y1="4" x2="10" y2="8"/>
<line x1="18" y1="4" x2="18" y2="8"/>
</svg>`
  },
  {
    name: 'my-stock',
    displayName: 'My Stock',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<rect x="6" y="6" width="16" height="16" rx="2"/>
<line x1="6" y1="12" x2="22" y2="12"/>
<line x1="14" y1="6" x2="14" y2="22"/>
</svg>`
  },
  {
    name: 'notifications',
    displayName: 'Notifications',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M14 4a6 6 0 0 0-6 6v6l-2 2h16l-2-2v-6a6 6 0 0 0-6-6z"/>
<path d="M12 22a2 2 0 0 0 4 0"/>
</svg>`
  },
  {
    name: 'origin',
    displayName: 'Origin',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<circle cx="14" cy="14" r="10"/>
<path d="M14 4v20M4 14h20"/>
<path d="M8 8c2 2 4 2 6 0s4-2 6 0"/>
</svg>`
  },
  {
    name: 'profile',
    displayName: 'Profile',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<circle cx="14" cy="10" r="4"/>
<path d="M6 22a8 8 0 0 1 16 0"/>
</svg>`
  },
  {
    name: 'ratio',
    displayName: 'Ratio',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<rect x="4" y="4" width="8" height="8" rx="1"/>
<rect x="16" y="16" width="8" height="8" rx="1"/>
<line x1="12" y1="8" x2="16" y2="20"/>
</svg>`
  },
  {
    name: 'recipes',
    displayName: 'Recipes',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M6 4h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
<line x1="10" y1="10" x2="18" y2="10"/>
<line x1="10" y1="14" x2="18" y2="14"/>
<line x1="10" y1="18" x2="14" y2="18"/>
</svg>`
  },
  {
    name: 'roast',
    displayName: 'Roast',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<circle cx="14" cy="14" r="8"/>
<circle cx="14" cy="14" r="4"/>
<circle cx="14" cy="14" r="1"/>
</svg>`
  },
  {
    name: 'scale',
    displayName: 'Scale',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<rect x="6" y="12" width="16" height="8" rx="1"/>
<line x1="14" y1="12" x2="14" y2="6"/>
<line x1="10" y1="6" x2="18" y2="6"/>
</svg>`
  },
  {
    name: 'search',
    displayName: 'Search',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="12" r="8"/>
<line x1="18" y1="18" x2="24" y2="24"/>
</svg>`
  },
  {
    name: 'settings',
    displayName: 'Settings',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<circle cx="14" cy="14" r="3"/>
<path d="M14 4v2m0 16v2M4 14h2m16 0h2m-3.5-7.5l-1.5 1.5m-9 9l-1.5 1.5m12 0l-1.5-1.5m-9-9L6.5 6.5"/>
</svg>`
  },
  {
    name: 'share',
    displayName: 'Share',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<circle cx="20" cy="8" r="3"/>
<circle cx="8" cy="14" r="3"/>
<circle cx="20" cy="20" r="3"/>
<line x1="11" y1="15" x2="17" y2="19"/>
<line x1="11" y1="13" x2="17" y2="9"/>
</svg>`
  },
  {
    name: 'stats',
    displayName: 'Stats',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<line x1="8" y1="20" x2="8" y2="12"/>
<line x1="14" y1="20" x2="14" y2="8"/>
<line x1="20" y1="20" x2="20" y2="14"/>
</svg>`
  },
  {
    name: 'tasting-notes',
    displayName: 'Tasting Notes',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M8 4h12l2 16H6z"/>
<line x1="10" y1="10" x2="18" y2="10"/>
</svg>`
  },
  {
    name: 'thermometer',
    displayName: 'Thermometer',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M14 4v12a4 4 0 1 1 0 8 4 4 0 0 1 0-8V4a2 2 0 0 1 4 0z"/>
<line x1="14" y1="8" x2="16" y2="8"/>
<line x1="14" y1="12" x2="16" y2="12"/>
</svg>`
  },
  {
    name: 'timer',
    displayName: 'Timer',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<circle cx="14" cy="16" r="8"/>
<polyline points="14,12 14,16 17,18"/>
<line x1="10" y1="4" x2="18" y2="4"/>
</svg>`
  },
  {
    name: 'v60',
    displayName: 'V60',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M8 6h12l-4 14H12z"/>
<line x1="8" y1="6" x2="20" y2="6"/>
</svg>`
  }
];
