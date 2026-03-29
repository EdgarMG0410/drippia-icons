# Configurar Secrets para GitHub Actions

## 1. Cloudflare API Token
1. Ve a: https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Usa "Custom token" template
4. Permisos:
   - Account: Cloudflare Pages:Edit
   - Zone: Zone:Read (si usas dominio personalizado)
5. Copia el token

## 2. Cloudflare Account ID
1. Ve a: https://dash.cloudflare.com
2. En el sidebar derecho, verás "Account ID"
3. Copia el ID

## 3. Agregar Secrets en GitHub
1. Ve a: https://github.com/EdgarMG0410/drippia-icons/settings/secrets/actions
2. Click "New repository secret"
3. Agrega:
   - CLOUDFLARE_API_TOKEN: (token del paso 1)
   - CLOUDFLARE_ACCOUNT_ID: (ID del paso 2)
