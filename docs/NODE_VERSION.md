# Node.js Version Requirements

## 📋 Requirements

This project requires **Node.js 20.9.0 or higher** due to Next.js 16 requirements.

## 🔍 Check Your Node.js Version

```bash
node --version
```

If you see `v18.x.x` or lower, you need to upgrade.

## 🚀 Upgrading Node.js

### Option 1: Using nvm (Recommended)

nvm (Node Version Manager) allows you to easily switch between Node.js versions.

#### Install nvm:

**macOS/Linux:**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

**Windows:**
Download and run the installer from [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)

#### Use nvm:

```bash
# Install Node.js 20.9.0
nvm install 20.9.0

# Use Node.js 20.9.0
nvm use 20.9.0

# Set as default (optional)
nvm alias default 20.9.0

# Verify installation
node --version
```

#### Using .nvmrc file:

This project includes a `.nvmrc` file. If you're using nvm, you can simply run:

```bash
nvm use
```

This will automatically switch to the correct Node.js version specified in `.nvmrc`.

### Option 2: Direct Download

1. Visit [nodejs.org](https://nodejs.org/)
2. Download Node.js 20.9.0 or higher (LTS recommended)
3. Install the downloaded package
4. Verify installation:
```bash
node --version
npm --version
```

### Option 3: Using Homebrew (macOS)

```bash
# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node@20

# Link Node.js
brew link node@20

# Verify
node --version
```

## ⚠️ Common Issues

### Issue: "Node.js version is too old"

**Error:**
```
You are using Node.js 18.20.8. For Next.js, Node.js version ">=20.9.0" is required.
```

**Solution:**
1. Upgrade Node.js to 20.9.0 or higher (see methods above)
2. Restart your terminal
3. Verify with `node --version`
4. Run `npm install` again
5. Run `npm run dev`

### Issue: "Multiple Node.js versions installed"

If you have multiple Node.js versions:

**Using nvm:**
```bash
# List installed versions
nvm list

# Switch to correct version
nvm use 20.9.0

# Set as default
nvm alias default 20.9.0
```

**Without nvm:**
- Uninstall old versions
- Keep only Node.js 20.9.0+

### Issue: "npm commands fail after upgrade"

After upgrading Node.js, you may need to:

```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 🔧 CI/CD Configuration

If you're setting up CI/CD, make sure to use Node.js 20.9.0+:

**GitHub Actions:**
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20.9.0'
```

**Vercel/Netlify:**
- Set Node.js version to 20.9.0 or higher in project settings

## 📚 Resources

- [Node.js Official Website](https://nodejs.org/)
- [nvm GitHub Repository](https://github.com/nvm-sh/nvm)
- [Next.js Requirements](https://nextjs.org/docs/getting-started/installation#system-requirements)
- [Node.js Version Support](https://nodejs.org/en/about/releases/)

---

**Need Help?** If you're still having issues, check:
1. Node.js version: `node --version`
2. npm version: `npm --version`
3. Clear cache and reinstall: `npm cache clean --force && rm -rf node_modules && npm install`

