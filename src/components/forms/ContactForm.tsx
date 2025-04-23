'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormData } from '@/lib/types';

// Form validation schema
const contactFormSchema = z.object({
    name: z.string().min(2, 'Le nom est requis'),
    email: z.string().email('Email invalide'),
    company: z.string().optional(),
    phone: z.string().optional(),
    message: z.string().min(10, 'Votre message doit contenir au moins 10 caractères'),
    serviceInterest: z.string({
        required_error: 'Veuillez sélectionner un service',
    }),
});

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
    const [submitMessage, setSubmitMessage] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            serviceInterest: '',
        }
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitSuccess(true);
                setSubmitMessage('Votre message a été envoyé avec succès!');
                reset(); // Clear the form
            } else {
                setSubmitSuccess(false);
                setSubmitMessage(result.message || 'Une erreur est survenue. Veuillez réessayer.');
            }
        } catch {
            // No need to declare the error variable if we're not using it
            setSubmitSuccess(false);
            setSubmitMessage('Une erreur est survenue. Veuillez réessayer.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Form response message */}
            {submitSuccess !== null && (
                <div
                    className={`p-4 rounded-md ${
                        submitSuccess ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}
                >
                    {submitMessage}
                </div>
            )}

            {/* Name field */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom *
                </label>
                <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
            </div>

            {/* Email field */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                </label>
                <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
            </div>

            {/* Two columns layout for company and phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company field */}
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Entreprise
                    </label>
                    <input
                        id="company"
                        type="text"
                        {...register('company')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Phone field */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Téléphone
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            {/* Service interest field */}
            <div>
                <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-1">
                    Service d&apos;intérêt *
                </label>
                <select
                    id="serviceInterest"
                    {...register('serviceInterest')}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                        errors.serviceInterest ? 'border-red-500' : 'border-gray-300'
                    }`}
                >
                    <option value="">Sélectionnez un service</option>
                    <option value="branding">Branding</option>
                    <option value="site-creation">Création de site web</option>
                    <option value="ai-strategy">Stratégie IA</option>
                    <option value="automation">Automatisation</option>
                </select>
                {errors.serviceInterest && (
                    <p className="mt-1 text-sm text-red-600">{errors.serviceInterest.message}</p>
                )}
            </div>

            {/* Message field */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                </label>
                <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
            </div>

            {/* Submit button */}
            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition disabled:bg-blue-300"
                >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
            </div>
        </form>
    );
}