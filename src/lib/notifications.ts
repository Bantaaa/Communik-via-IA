// This file would normally include notification API integrations
// However, for this project, we're using n8n to handle notifications
// This file is a placeholder to show how you could directly integrate with notification services if needed

import { ContactFormData } from './types';
import { AIAnalysisResult } from './ai';

/**
 * Send a Slack notification about a new contact
 */
export async function sendSlackNotification(
    webhookUrl: string,
    contactData: ContactFormData,
    aiAnalysis?: AIAnalysisResult
): Promise<boolean> {
    try {
        // Implementation would go here if we were using direct Slack API
        // For now, we're logging info as a placeholder since n8n handles this

        const message = {
            blocks: [
                {
                    type: "header",
                    text: {
                        type: "plain_text",
                        text: "✨ Nouveau contact reçu !",
                        emoji: true
                    }
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*Nom:*\n${contactData.name}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*Email:*\n${contactData.email}`
                        }
                    ]
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*Service:*\n${contactData.serviceInterest}`
                        }
                    ]
                },
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `*Message:*\n${contactData.message}`
                    }
                }
            ]
        };

        if (aiAnalysis) {
            message.blocks.push({
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*Analyse IA:*\n${aiAnalysis.summary}`
                }
            });
        }

        console.log('Slack notification would be sent:', message);
        return true;

    } catch (error) {
        console.error('Error sending Slack notification:', error);
        return false;
    }
}

/**
 * Send a WhatsApp notification about a new contact using Twilio
 */
export async function sendWhatsAppNotification(
    config: {
        accountSid: string;
        authToken: string;
        fromNumber: string;
        toNumber: string;
    },
    contactData: ContactFormData,
    aiAnalysis?: AIAnalysisResult
): Promise<boolean> {
    try {
        // Implementation would go here if we were using direct Twilio API
        // For now, we're logging info as a placeholder since n8n handles this

        const message = `📣 *Nouveau contact reçu !*\n\nNom: ${contactData.name}\nEmail: ${contactData.email}\nEntreprise: ${contactData.company || 'Non spécifié'}\nService: ${contactData.serviceInterest}`;

        const fullMessage = aiAnalysis
            ? `${message}\n\n_Catégorie IA: ${aiAnalysis.category}_`
            : message;

        console.log('WhatsApp notification would be sent:', fullMessage);
        return true;

    } catch (error) {
        console.error('Error sending WhatsApp notification:', error);
        return false;
    }
}


export async function sendEmailToProspect(
    config: {
        from: string;
        smtpConfig: {
            host: string;
            port: number;
            user: string;
            pass: string;
        }
    },
    contactData: ContactFormData,
    aiAnalysis?: AIAnalysisResult
): Promise<boolean> {
    try {
        // Implementation would go here if we were using direct SMTP
        // For now, we're logging info as a placeholder since n8n handles this

        const emailContent = {
            from: config.from,
            to: contactData.email,
            subject: "Merci pour votre message - Communik via IA",
            html: `<div>
        <h1>Communik via IA</h1>
        <p>Bonjour ${contactData.name},</p>
        <p>Merci d'avoir pris contact avec Communik via IA.</p>
        ${aiAnalysis ? `
        <div>
          <h3>Notre analyse de votre besoin :</h3>
          <p>${aiAnalysis.summary}</p>
          <h3>Notre suggestion :</h3>
          <p>${aiAnalysis.suggestedOffer}</p>
        </div>` : ''}
        <p>Nous aimerions discuter plus en détail de votre projet. Réservez un créneau avec notre équipe en cliquant sur le lien ci-dessous :</p>
        <div>
          <a href="https://calendly.com/communik-via-ia/30min">Prendre Rendez-vous</a>
        </div>
        <p>Cordialement,<br>L'équipe Communik via IA</p>
      </div>`
        };

        console.log('Email would be sent:', emailContent);
        return true;

    } catch (error) {
        console.error('Error sending email to prospect:', error);
        return false;
    }
}