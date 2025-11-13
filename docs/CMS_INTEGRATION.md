# Custom CMS - Tools Section

A database-free, JSON-based custom CMS structure for managing the Tools section.

## Architecture

### 1. JSON File (`data/tools.json`)
All tool data is stored in a JSON file. No database is used.

### 2. API Route (`app/api/tools/route.ts`)
API endpoints for CRUD operations:
- **GET** `/api/tools` - Fetch all tools (public)
- **POST** `/api/tools` - Create a new tool (authentication required)
- **PUT** `/api/tools` - Update a tool (authentication required)
- **DELETE** `/api/tools?id={index}` - Delete a tool (authentication required)

### 3. Admin Panel (`app/admin/tools/page.tsx`)
Web interface for managing tools through a user-friendly admin panel.

### 4. Component (`components/Tools.tsx`)
Client Component that fetches data from the API.

## Usage

### Management via Admin Panel

1. Navigate to the admin panel: `http://localhost:3000/admin/tools`
2. Enter your API key (default: `your-secret-key-change-in-production`)
3. Add, edit, or delete tools

### API Key Configuration

#### What is an API Key?

An API key is a secret token that authenticates requests to modify the Tools section. It prevents unauthorized users from adding, editing, or deleting tools.

#### How to Generate an API Key

You can generate a secure API key using several methods:

##### Method 1: Using OpenSSL (Recommended)

```bash
openssl rand -hex 32
```

This generates a 64-character hexadecimal string (e.g., `a1b2c3d4e5f6...`).

##### Method 2: Using Node.js

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

##### Method 3: Using Online Generator

Visit [randomkeygen.com](https://randomkeygen.com/) and use a "CodeIgniter Encryption Keys" (256-bit) or generate a random string.

##### Method 4: Manual Generation

Create a long, random string with:
- At least 32 characters
- Mix of letters (a-z, A-Z), numbers (0-9), and special characters
- Example: `MyS3cr3t-K3y-2024!@#$%^&*()`

#### Setting Up the API Key

1. **Create `.env.local` file** in the project root:

```bash
touch .env.local
```

2. **Add your API key** to `.env.local`:

```env
CMS_API_KEY=your-generated-api-key-here
```

**Example:**
```env
CMS_API_KEY=a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456
```

3. **Restart your development server**:

```bash
npm run dev
```

#### Using the API Key in Admin Panel

1. Navigate to the admin panel: `http://localhost:3000/admin/tools`
2. Enter your API key in the "Enter API key" field
3. Click "Login"
4. The API key will be saved in your browser's localStorage for the session

#### Using the API Key in API Calls

Include the API key in the `Authorization` header:

```bash
Authorization: Bearer your-api-key-here
```

**Important Security Notes:**
- ✅ **Never commit** `.env.local` to Git (it's already in `.gitignore`)
- ✅ Use a **strong, random** API key (at least 32 characters)
- ✅ **Change the default key** in production
- ✅ **Don't share** your API key publicly
- ✅ Use **different keys** for development and production

### Manual JSON Editing

You can directly edit the `data/tools.json` file:

```json
{
  "tools": [
    {
      "name": "New Tool",
      "href": "https://example.com",
      "category": "Frontend"
    }
  ]
}
```

## API Usage

### Adding a Tool

```bash
curl -X POST http://localhost:3000/api/tools \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-secret-key" \
  -d '{
    "name": "New Tool",
    "href": "https://example.com",
    "category": "Frontend"
  }'
```

### Updating a Tool

```bash
curl -X PUT http://localhost:3000/api/tools \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-secret-key" \
  -d '{
    "id": 0,
    "name": "Updated Tool",
    "href": "https://example.com",
    "category": "Backend"
  }'
```

### Deleting a Tool

```bash
curl -X DELETE "http://localhost:3000/api/tools?id=0" \
  -H "Authorization: Bearer your-secret-key"
```

## Security

- API key authentication is used
- Only the GET endpoint is public
- POST, PUT, DELETE operations require authentication
- Always use a strong API key in production

## Cache Strategy

The API route uses cache headers:
- `s-maxage=60`: 60 seconds cache
- `stale-while-revalidate=300`: Show stale content for 300 seconds

## Categories

Supported categories:
- Design & Productivity
- AI
- Blockchain
- Backend
- Frontend
- Development Tools
