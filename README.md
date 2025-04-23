# Astro Communik - A Modern Agency Website with AI Automation

![image](https://github.com/user-attachments/assets/d4a86399-04c0-4b4d-8417-226ca0d5877c)


A fullstack solution for a fictional communication agency that integrates AI automation and intelligent workflows. This project was developed as a technical test for a fullstack developer position.

## ✨ Features

- 🎨 **Responsive Agency Website** - Modern space-themed UI with animations
- 🤖 **AI Integration** - Auto-response and content analysis with Claude 3.5
- 🔄 **Workflow Automation** - Lead capture and follow-up system using n8n
- 📱 **Notifications** - Automated Slack and WhatsApp notifications for new leads
- 📊 **Data Management** - Lead storage and tracking in Google Sheets

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** with Zod - Form validation

### Backend & Automation
- **Next.js API Routes** - Serverless functions
- **n8n** - Workflow automation platform
- **Claude AI (Anthropic)** - AI analysis and response generation
- **Google Sheets API** - Data storage
- **Twilio** - WhatsApp notifications
- **Slack Webhooks** - Team notifications

## 📂 Project Structure

```
astro-communik/
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js pages and layouts
│   ├── components/       # React components
│   │   ├── astro/        # Theme-specific components
│   │   ├── forms/        # Form components
│   │   ├── icons/        # Icon components
│   │   └── layout/       # Layout components
│   ├── lib/              # Utilities and types
│   └── api/              # API routes
├── n8n/                  # n8n workflow configuration
├── .env.local            # Environment variables
└── ...config files
```

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/astro-communik.git
   cd astro-communik
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with the following variables:
   ```
   # n8n webhook
   N8N_WEBHOOK_URL=your-n8n-webhook-url

   # Google Sheets API
   GOOGLE_SHEETS_DOCUMENT_ID=your-google-sheets-id

   # OpenAI API
   OPENAI_API_KEY=your-openai-api-key

   # Email configuration
   SMTP_HOST=your-smtp-host
   SMTP_PORT=your-smtp-port
   SMTP_USER=your-smtp-username
   SMTP_PASSWORD=your-smtp-password

   # Slack webhook
   SLACK_WEBHOOK_URL=your-slack-webhook-url

   # Twilio/WhatsApp API
   TWILIO_ACCOUNT_SID=your-twilio-account-sid
   TWILIO_AUTH_TOKEN=your-twilio-auth-token
   TWILIO_WHATSAPP_NUMBER=your-twilio-whatsapp-number
   WHATSAPP_TO_NUMBER=your-whatsapp-number
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Set up n8n workflow**
   - Import the `lead-workflow.json` file into your n8n instance
   - Configure the necessary credentials in n8n

## 🌠 Key Workflows

### Contact Form Submission Flow
1. User submits the contact form
2. Data is sent to n8n webhook
3. Information is stored in Google Sheets
4. AI analyzes the request and generates personalized responses
5. Automated email is sent to the prospect
6. Team receives Slack and WhatsApp notifications

### Lead Follow-up Flow
1. Scheduled task checks for leads without action after 2 days
2. Automated follow-up email is sent
3. Lead status is updated in the database

## 🎨 UI Theme

The website features a cosmic/space theme with:
- Animated star backgrounds
- Zodiac-themed service sections
- Gradient color schemes
- Cosmic card and button components

## 📝 API Documentation

### `/api/contact` (POST)
Handles contact form submissions and triggers the n8n workflow.

**Request Body:**
```typescript
{
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  serviceInterest: string; // branding, site-creation, ai-strategy, automation
}
```

**Response:**
```typescript
{
  success: boolean;
  message: string;
}
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/astro-communik/issues).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer

Created by [Taha Amnay ALLAM](https://github.com/bantaaa)
