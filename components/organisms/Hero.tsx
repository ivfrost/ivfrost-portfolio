import React from 'react';
import Button from '../atoms/Button';
import DecorativeRule from '../atoms/DecorativeRule';
import Container from '../layout/Container';
import SnowflakeSVG from '../atoms/SnowflakeSVG';

interface HeroProps {
	titleContent: React.ReactNode;
	ruleContent?: React.ReactNode;
	subtitle?: string;
	className?: string;
}

export default function Hero({
	titleContent,
	ruleContent,
	subtitle,
	className,
}: HeroProps) {
	const baseStyles = `py-10 bg-frost-2 border-sage-1 relative`;
	const containerStyles = `flex flex-col items-start space-y-6`;

	return (
		<section className={`${baseStyles} ${className}`}>
			<Container className={containerStyles}>
				<DecorativeRule>{ruleContent}</DecorativeRule>
				<h1 className="text-7xl font-medium leading-14 tracking-tight text-sage-4">
					{titleContent}
				</h1>
				{subtitle && (
					<p className="leading-normal text-2xl font-medium italic text-ink-lite max-w-md">
						{subtitle}
					</p>
				)}
				<div className="flex gap-4">
					<Button type="button" variant="primary" size="medium">
						View Work
					</Button>
					<Button type="button" variant="outline" size="medium">
						Get in Touch
					</Button>
				</div>
			</Container>
			<SnowflakeSVG
				className="absolute right-16 top-1/2 -translate-y-1/2 text-sage-1 opacity-60"
				size={200}
			/>
		</section>
	);
}
