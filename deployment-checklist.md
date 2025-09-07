# Deployment Checklist

Follow these steps to ensure a smooth deployment to production environments like Vercel or Netlify.

## 1. Environment Variables

Ensure all required environment variables are set in your hosting provider's dashboard. Create a `.env.local` file for local development, but **do not** commit it to Git.

### Required Variables:
-   `SMTP_HOST`: Hostname of your SMTP server (e.g., `smtp.resend.com`).
-   `SMTP_PORT`: Port for the SMTP server (e.g., `587` or `465`).
-   `SMTP_USER`: Username for SMTP authentication (often `apikey` for services like Resend).
-   `SMTP_PASS`: Password or API key for SMTP authentication.
-   `SMTP_FROM_EMAIL`: The "from" email address for sending emails (e.g., `noreply@orionixlabs.com`).
-   `CONTACT_FORM_RECEIVER_EMAIL`: The email address that will receive contact form submissions.
-   `SITE_URL`: The full production URL of your website (e.g., `https://orionixlabs.com`). This is crucial for sitemap and SEO generation.

### Optional Variables:
-   `MAILCHIMP_API_KEY`: Your Mailchimp API key for the newsletter signup.
-   `MAILCHIMP_LIST_ID`: The ID of your Mailchimp audience list.
-   `NEXT_PUBLIC_GA_ID`: Your Google Analytics Measurement ID (e.g., `G-XXXXXXXXXX`).

## 2. Analytics Setup

-   If you are using Google Analytics, replace the placeholder `G-XXXXXX` in `NEXT_PUBLIC_GA_ID` with your actual Measurement ID.
-   If you are using Vercel Analytics, it works out of the box with zero configuration.

## 3. Mailchimp Integration

-   To make the newsletter form functional, you need a Mailchimp account.
-   Get your API Key and Audience List ID from your Mailchimp dashboard and add them to the environment variables.
-   The API route for the newsletter is located at `/pages/api/newsletter.ts` and is ready to be used once the keys are provided.

## 4. Domain and DNS

-   Ensure your custom domain is correctly configured to point to your Vercel or Netlify project.
-   Update the `siteUrl` in `next-sitemap.config.js` to match your production domain.

## 5. Build and Deploy

-   Push your code to your Git repository (GitHub, GitLab, etc.).
-   Connect your repository to Vercel/Netlify.
-   Configure the environment variables in the project settings on your hosting provider.
-   Trigger a deployment. The build command is `next build` and the output directory is `.next`.
