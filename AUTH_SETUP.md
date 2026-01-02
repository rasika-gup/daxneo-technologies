# Authentication Setup

## Environment Variables

Create or update your `.env` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/daxneo_tech"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-change-in-production"

# JWT (for NextAuth)
JWT_SECRET="your-jwt-secret-change-in-production"

# Email (for contact form notifications)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="your-email@gmail.com"

# Application
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

## Generate NEXTAUTH_SECRET

To generate a secure `NEXTAUTH_SECRET`, run:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Admin User Seeding (Optional)

To create an initial admin user, you can run the signup API with user data and then update the role directly in the database:

```sql
UPDATE "User" SET role = 'admin' WHERE email = 'your-admin-email@example.com';
```

## Database Setup

Make sure to run the Prisma migrations to set up the database schema:

```bash
npx prisma db push
```

## Email Configuration

For the contact form email notifications to work, you need to configure an email service. The setup uses nodemailer with the following configuration:

- Gmail: Use your email and an app password
- Other providers: Update the SMTP settings accordingly

## Deployment Notes

- Set `NEXTAUTH_URL` to your production URL when deploying
- Use strong, unique values for secrets in production
- Configure your email provider properly for production
- Ensure your database connection is secure and properly configured