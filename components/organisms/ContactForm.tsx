'use client';

import { useState, startTransition } from 'react';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { sendContact } from '@/actions/contact';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

interface ContactFormProps {
	className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [rows, setRows] = useState(3);

	const handleSubmit = async (e: React.SubmitEvent) => {
		e.preventDefault();
		startTransition(async () => {
			const result = await sendContact(
				formData.name,
				formData.email,
				formData.message,
			);
			if (result.success) {
				toast.success('Mensaje enviado correctamente');
				setFormData({ name: '', email: '', message: '' });
			} else {
				toast.error(result.error || 'Error al enviar el mensaje');
			}
		});
	};

	return (
		<form
			className={`flex flex-col gap-4 sm:gap-8 ${className}`}
			onSubmit={handleSubmit}
		>
			<p>
				¿Tienes un proyecto en mente o quieres ponerte en contacto? Escríbeme y
				te respondo lo antes posible.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Input
					label="Nombre"
					name="name"
					value={formData.name}
					onChange={(value) => setFormData({ ...formData, name: value })}
					required
				/>
				<Input
					label="Email"
					name="email"
					type="email"
					value={formData.email}
					onChange={(value) => setFormData({ ...formData, email: value })}
					required
				/>
			</div>
			<motion.div
				animate={{ height: rows === 5 ? '180px' : '130px' }}
				transition={{ duration: 0.25, ease: 'easeInOut' }}
				className="overflow-hidden"
			>
				<Input
					label="Mensaje"
					name="message"
					as="textarea"
					value={formData.message}
					minLength={10}
					maxLength={1000}
					rows={rows}
					onFocus={() => setRows(5)}
					onBlur={() => !formData.message.length && setRows(3)}
					onChange={(value) => setFormData({ ...formData, message: value })}
					required
				/>
			</motion.div>

			<Button
				type="submit"
				variant="outline"
				className="w-full sm:ml-auto sm:w-fit!"
				size="small"
			>
				<span>Enviar mensaje</span>
				<IoPaperPlaneOutline size={15} className="ml-2" />
			</Button>
		</form>
	);
}
