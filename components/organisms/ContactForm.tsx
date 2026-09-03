'use client';

import { sendContact } from '@/actions/contact';
import { motion } from 'framer-motion';
import { startTransition, useState } from 'react';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { toast } from 'sonner';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

interface ContactFormProps {
	className?: string;
	contactDesc?: string;
	submitText?: string;
	nameLabel?: string;
	messageLabel?: string;
	successMessage?: string;
	errorMessage?: string;
}

export default function ContactForm({
	className,
	contactDesc,
	submitText,
	nameLabel,
	messageLabel,
	successMessage,
	errorMessage,
}: ContactFormProps) {
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
				toast.success(successMessage);
				setFormData({ name: '', email: '', message: '' });
			} else {
				toast.error(errorMessage);
			}
		});
	};

	return (
		<form
			className={`flex flex-col gap-4 sm:gap-8 ${className}`}
			onSubmit={handleSubmit}
		>
			<p>{contactDesc}</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Input
					label={nameLabel!}
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
			<motion.div className="overflow-visible">
				<Input
					label={messageLabel!}
					name="message"
					as="textarea"
					value={formData.message}
					minLength={10}
					maxLength={1000}
					rows={rows}
					onFocus={() => setRows(5)}
					onBlur={(e) => {
						if (!e.target.value.trim()) {
							setRows(3);
						}
					}}
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
				<span>{submitText}</span>
				<IoPaperPlaneOutline size={15} className="ml-2" />
			</Button>
		</form>
	);
}
