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

Create a `.env.local` file:

```env
CMS_API_KEY=your-secret-key-change-in-production
```

**Important:** Always use a strong API key in production!

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
