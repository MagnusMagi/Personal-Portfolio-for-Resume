# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please **do not** open a public issue. Instead, please send an email to **hello@aydingundeger.com** with the following information:

- A description of the vulnerability
- Steps to reproduce the issue
- Potential impact
- Suggested fix (if you have one)

We will respond to your report within 48 hours and work with you to address the vulnerability.

## Security Best Practices

This project follows security best practices:

- **API Key Authentication**: CMS operations require authentication
- **Input Validation**: All API inputs are validated
- **Environment Variables**: Sensitive data stored in environment variables
- **No Hardcoded Secrets**: All secrets are externalized
- **Regular Updates**: Dependencies are kept up to date
- **HTTPS Only**: Production deployments use HTTPS

## Known Security Considerations

- **CMS API Key**: Always use a strong, unique API key in production
- **Admin Panel**: The admin panel should be protected in production environments
- **Rate Limiting**: Consider implementing rate limiting for API endpoints in high-traffic scenarios

## Security Updates

Security updates will be released as patches to the latest version. We recommend keeping your dependencies up to date:

```bash
npm audit
npm audit fix
```

