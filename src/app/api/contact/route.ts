import { NextResponse } from 'next/server';
import { ContactFormData } from '@/lib/types';

export async function POST(req: Request) {
    try {
        // Parse the request body
        const data: ContactFormData = await req.json();

        // Validate required fields
        if (!data.name || !data.email || !data.message || !data.serviceInterest) {
            return NextResponse.json(
                { success: false, message: 'Champs requis manquants' },
                { status: 400 }
            );
        }

        // Send data to n8n webhook - this keeps the same functionality
        const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

        if (!n8nWebhookUrl) {
            console.error('N8N webhook URL not configured');
            return NextResponse.json(
                { success: false, message: 'Configuration du serveur incorrecte' },
                { status: 500 }
            );
        }

        // Forward the data to n8n - maintaining compatibility with n8n
        const n8nResponse = await fetch(n8nWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!n8nResponse.ok) {
            console.error('n8n webhook error:', await n8nResponse.text());
            return NextResponse.json(
                { success: false, message: 'Erreur lors de l&apos;enregistrement des données' },
                { status: 500 }
            );
        }

        // Return success response with cosmic theme message
        return NextResponse.json({
            success: true,
            message: 'Message envoyé aux étoiles ! Nous vous contacterons bientôt.',
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { success: false, message: 'Une perturbation astrale est survenue. Veuillez réessayer.' },
            { status: 500 }
        );
    }
}