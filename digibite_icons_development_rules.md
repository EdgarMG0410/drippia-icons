# 🧩 Drippia Icons — Development Rules

Este documento define las reglas para mantener consistencia, escalabilidad y calidad en el sistema de iconos tipo Lucide.

---

# 🎯 Objetivo

Construir un sistema de iconos multiplataforma con:

- Fuente única: SVG
- Outputs automáticos: React + Flutter
- Consistencia visual estricta
- Escalabilidad futura (CLI, docs, contribuciones)

---

# 📁 Estructura del proyecto

```
drippia-icons/
  icons/                  # Fuente única (SVG)
  scripts/                # Generadores
  packages/
    react/                # Output React
    flutter/              # Output Flutter
```

---

# 🎨 Reglas de diseño (CRÍTICO)

Todos los iconos DEBEN cumplir:

### Base
- Tamaño: `24x24`
- ViewBox: `0 0 24 24`

### Estilo
- `fill="none"`
- `stroke="currentColor"`
- `stroke-width="2"`
- `stroke-linecap="round"`
- `stroke-linejoin="round"`

### Prohibido
- ❌ Colores hardcodeados
- ❌ Fill (a menos que sea absolutamente necesario)
- ❌ Tamaños distintos
- ❌ Estilos inconsistentes

---

# 🧠 Naming conventions

### Archivos SVG

Formato: `kebab-case`

```
coffee.svg
grinder-manual.svg
pour-over.svg
```

### React components

Formato: `PascalCase`

```
Coffee
GrinderManual
PourOver
```

---

# ⚙️ Flujo de trabajo

### 1. Crear icono

Agregar archivo en:

```
/icons
```

---

### 2. Ejecutar build

```
pnpm build
```

---

### 3. Outputs generados

React:
```
/packages/react/src
```

Flutter:
```
/packages/flutter/assets/icons
```

---

# ⚛️ Reglas React

- Usar `currentColor`
- Componentes funcionales
- Props dinámicas (`width`, `height`, etc.)

Ejemplo:

```tsx
<Coffee width={24} height={24} />
```

---

# 🐦 Reglas Flutter

- Usar SVGs (no icon fonts por ahora)
- Usar rutas desde package

Ejemplo:

```dart
SvgPicture.asset(drippiaIcons.coffee);
```

---

# 🧪 Validaciones (manual por ahora)

Antes de hacer commit:

- ✔ SVG abre correctamente
- ✔ Se ve bien en 24x24
- ✔ Stroke consistente
- ✔ No tiene basura (metadata innecesaria)

---

# 🔥 Buenas prácticas

- Mantener iconos simples
- Usar el menor número de paths posible
- Reutilizar formas
- Pensar en legibilidad a tamaño pequeño

---

# 🚫 Errores comunes

- Exportar desde Figma con fills
- No limpiar SVG
- Diferentes grosores de línea
- Iconos demasiado complejos

---

# 🧭 Roadmap (futuro)

- [ ] Metadata JSON por icono
- [ ] CLI (`add-icon`)
- [ ] Preview web
- [ ] Auto build en cambios
- [ ] Publicación npm + pub.dev

---

# 🏁 Filosofía

Este sistema sigue 3 principios:

1. **Single source of truth** → SVG
2. **Automatización** → todo se genera
3. **Consistencia visual** → sin excepciones

---

# ⚡ Regla de oro

> Si un icono rompe consistencia → NO entra al repo.

---

Listo para escalar 🚀

