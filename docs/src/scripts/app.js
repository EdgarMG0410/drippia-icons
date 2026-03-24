let currentSize = 24;
let currentStroke = 2;
let currentColor = '#3D2B1F';
let currentTab = 'react';
let selectedIcon = null;

// Import icons data
const iconsData = [
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
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="6" y="4" width="12" height="16" rx="1"/>
<line x1="6" y1="8" x2="18" y2="8"/>
<line x1="6" y1="12" x2="18" y2="12"/>
<path d="M8 20v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2"/>
</svg>`
  },
  {
    name: 'ai-brew',
    displayName: 'AI Brew',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M12 2l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z"/>
<path d="M8 16h8v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/>
</svg>`
  },
  {
    name: 'bean',
    displayName: 'Bean',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M12 4c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z"/>
<path d="M12 8c-2 0-3 1-3 3"/>
</svg>`
  },
  {
    name: 'chemex',
    displayName: 'Chemex',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M8 4h8l-2 8-2 8h-2l-2-8z"/>
<line x1="7" y1="12" x2="17" y2="12"/>
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
    name: 'kettle',
    displayName: 'Kettle',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M6 9h8a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4z"/>
<path d="M6 9V6a2 2 0 0 1 2-2h4"/>
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
<circle cx="12" cy="12" r="3"/>
<path d="M12 1v2m0 18v2M1 12h2m18 0h2m-3.5-7.5l-1.5 1.5m-9 9l-1.5 1.5m12 0l-1.5-1.5m-9-9L4.5 4.5"/>
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
<path d="M6 6h12l-4 14H10z"/>
<line x1="6" y1="6" x2="18" y2="6"/>
</svg>`
  }
];

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    renderIcons();
});

function renderIcons() {
    const iconGrid = document.querySelector('.icon-grid');
    if (!iconGrid) return;
    
    iconGrid.innerHTML = '';
    
    iconsData.forEach(icon => {
        const card = createIconCard(icon);
        iconGrid.appendChild(card);
    });
    
    updateStats();
}

function createIconCard(icon) {
    const card = document.createElement('div');
    card.className = 'icon-card';
    card.dataset.name = icon.name;
    card.dataset.icon = JSON.stringify(icon);
    
    const preview = document.createElement('div');
    preview.className = 'icon-preview';
    preview.innerHTML = icon.svg;
    
    const name = document.createElement('div');
    name.className = 'icon-name';
    name.textContent = icon.displayName;
    
    card.appendChild(preview);
    card.appendChild(name);
    
    card.addEventListener('click', () => {
        selectedIcon = icon;
        updatePreview(icon);
        openModal(icon);
    });
    
    return card;
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    searchInput?.addEventListener('input', handleSearch);
    
    const sizeSlider = document.getElementById('sizeSlider');
    const sizeValue = document.getElementById('sizeValue');
    sizeSlider?.addEventListener('input', (e) => {
        currentSize = e.target.value;
        if (sizeValue) sizeValue.textContent = currentSize;
        updateIconStyles();
        updatePreview(selectedIcon);
    });
    
    const strokeSlider = document.getElementById('strokeSlider');
    const strokeValue = document.getElementById('strokeValue');
    strokeSlider?.addEventListener('input', (e) => {
        currentStroke = e.target.value;
        if (strokeValue) strokeValue.textContent = currentStroke;
        updateIconStyles();
        updatePreview(selectedIcon);
    });
    
    const colorPicker = document.getElementById('colorPicker');
    colorPicker?.addEventListener('input', (e) => {
        currentColor = e.target.value;
        updateIconStyles();
        updatePreview(selectedIcon);
    });
    
    const modal = document.getElementById('iconModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    modalClose?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', closeModal);
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentTab = btn.dataset.tab;
            updateTabs();
            updateCodeContent();
        });
    });
    
    const copyBtn = document.getElementById('copyBtn');
    copyBtn?.addEventListener('click', copyCode);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
        
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput?.focus();
        }
    });
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.icon-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const displayName = card.querySelector('.icon-name')?.textContent.toLowerCase() || '';
        
        if (name.includes(query) || displayName.includes(query)) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });
    
    const visibleIcons = document.getElementById('visibleIcons');
    if (visibleIcons) visibleIcons.textContent = visibleCount;
}

function updateIconStyles() {
    const icons = document.querySelectorAll('.icon-preview svg');
    icons.forEach(svg => {
        svg.style.width = currentSize + 'px';
        svg.style.height = currentSize + 'px';
        
        // Apply color to all path, line, circle, rect, polygon, polyline elements
        const elements = svg.querySelectorAll('path, line, circle, rect, polygon, polyline');
        elements.forEach(element => {
            element.style.stroke = currentColor;
            element.style.strokeWidth = currentStroke;
        });
    });
    
    // Also update the preview icon
    updatePreview(selectedIcon);
}

function updatePreview(icon) {
    const previewIcon = document.getElementById('previewIcon');
    if (!previewIcon || !icon) return;
    
    // Set the SVG content
    previewIcon.innerHTML = icon.svg;
    
    // Apply styles to the SVG and all its elements
    const svg = previewIcon.querySelector('svg');
    if (svg) {
        svg.style.width = '120px';
        svg.style.height = '120px';
        
        // Apply color to all path, line, circle, rect, polygon, polyline elements
        const elements = svg.querySelectorAll('path, line, circle, rect, polygon, polyline');
        elements.forEach(element => {
            element.style.stroke = currentColor;
            element.style.strokeWidth = currentStroke;
        });
    }
}

function openModal(icon) {
    selectedIcon = icon;
    const modal = document.getElementById('iconModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    
    if (modalIcon) modalIcon.innerHTML = icon.svg;
    if (modalTitle) modalTitle.textContent = icon.displayName;
    
    const svg = modalIcon?.querySelector('svg');
    if (svg) {
        // Apply color to all path, line, circle, rect, polygon, polyline elements
        const elements = svg.querySelectorAll('path, line, circle, rect, polygon, polyline');
        elements.forEach(element => {
            element.style.stroke = currentColor;
            element.style.strokeWidth = currentStroke;
        });
    }
    
    updateCodeContent();
    modal?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('iconModal');
    modal?.classList.remove('active');
    document.body.style.overflow = '';
}

function updateTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        if (btn.dataset.tab === currentTab) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updateCodeContent() {
    if (!selectedIcon) return;
    
    const codeContent = document.getElementById('codeContent');
    if (!codeContent) return;
    
    let code = '';
    const componentName = selectedIcon.displayName.replace(/\s+/g, '');
    const constantName = selectedIcon.name.replace(/-/g, '_');
    
    switch (currentTab) {
        case 'react':
            code = `import { ${componentName} } from '@drippia/icons-react';

function MyComponent() {
  return (
    <${componentName} 
      size={${currentSize}} 
      color="${currentColor}"
      strokeWidth={${currentStroke}}
    />
  );
}`;
            break;
            
        case 'flutter':
            code = `import 'package:flutter_svg/flutter_svg.dart';
import 'package:drippia_icons/drippia_icons.dart';

SvgPicture.asset(
  drippiaIcons.${constantName},
  width: ${currentSize},
  height: ${currentSize},
  colorFilter: ColorFilter.mode(
    Color(0xFF${currentColor.replace('#', '')}),
    BlendMode.srcIn,
  ),
)`;
            break;
            
        case 'svg':
            code = selectedIcon.svg
                .replace(/stroke="[^"]*"/g, `stroke="${currentColor}"`)
                .replace(/stroke-width="[^"]*"/g, `stroke-width="${currentStroke}"`)
                .replace(/width="[^"]*"/g, `width="${currentSize}"`)
                .replace(/height="[^"]*"/g, `height="${currentSize}"`);
            break;
    }
    
    codeContent.textContent = code;
}

function copyCode() {
    const codeContent = document.getElementById('codeContent');
    const copyBtn = document.getElementById('copyBtn');
    if (!codeContent || !copyBtn) return;
    
    navigator.clipboard.writeText(codeContent.textContent).then(() => {
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
            Copied!
        `;
        
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
                Copy
            `;
        }, 2000);
    });
}

function updateStats() {
    const totalIcons = document.getElementById('totalIcons');
    const visibleIcons = document.getElementById('visibleIcons');
    
    if (totalIcons) totalIcons.textContent = iconsData.length;
    if (visibleIcons) visibleIcons.textContent = iconsData.length;
}
