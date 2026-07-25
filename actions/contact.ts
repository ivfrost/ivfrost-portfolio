'use server';

import { headers } from 'next/headers';
import nodemailer from 'nodemailer';

const requestMap = new Map<string, { count: number; firstRequest: number }>();

export async function sendContact(
	name: string,
	email: string,
	message: string,
) {
	const headersList = await headers();
	const ip =
		headersList.get('x-forwarded-for') ??
		headersList.get('x-real-ip') ??
		'unknown';
	const now = Date.now();
	const window = Number(process.env.RATE_LIMIT_WINDOW_MS);
	const max = Number(process.env.RATE_LIMIT_MAX_REQUESTS);
	const entry = requestMap.get(ip);

	if (entry) {
		if (now - entry.firstRequest < window) {
			if (entry.count >= max) {
				return { error: 'Demasiados intentos, por favor inténtalo más tarde' };
			}
			requestMap.set(ip, {
				count: entry.count + 1,
				firstRequest: entry.firstRequest,
			});
		} else {
			requestMap.set(ip, { count: 1, firstRequest: now });
		}
	} else {
		requestMap.set(ip, { count: 1, firstRequest: now });
	}

	if (!name || !email || !message) {
		return { error: 'Rellena todos los campos' };
	}

	try {
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT) || 587,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to: process.env.CONTACT_EMAIL,
			subject: 'Nuevo mensaje de contacto desde portfolio',
			text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
		});

		return { success: true };
	} catch (error) {
		console.error('Error sending contact email:', error);
		return {
			error:
				error instanceof Error ? error.message : 'Error al enviar el mensaje',
		};
	}
}
