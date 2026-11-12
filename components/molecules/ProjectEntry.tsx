'use client';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Users } from 'lucide-react';
import { useState } from 'react';
import { BsStar } from 'react-icons/bs';
import type { Locale } from '@/app/[lang]/dictionaries';
import type { Project } from '@/data/types';
import Button from '../atoms/Button';
import Entry from './Entry';

export interface ProjectEntryProps extends Project {
  lang?: Locale;
}

export default function ProjectEntry({
  number,
  name,
  description,
  lang,
  stack,
  collaborative = false,
  stars = 0,
  href,
}: ProjectEntryProps) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isStackExpanded, setIsStackExpanded] = useState(false);
  const descriptionText = description[lang ?? 'en'];
  const canExpandDescription = descriptionText.length > 200;
  const visibleStack = isStackExpanded ? stack : stack.slice(0, 5);

  return (
    <Entry
      className="border-b last:border-b-0 border-b-border hover:border-border-hover transition-colors"
      number={number}
      title={
        href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            {name}
            <ExternalLink
              size={14}
              className="ml-1 inline-block align-middle"
            />
          </a>
        ) : (
          name
        )
      }
      titleIcons={
        <>
          {collaborative && (
            <span
              title={
                lang === 'es'
                  ? 'Proyecto colaborativo'
                  : 'Collaborative project'
              }
              className="text-xs inline-flex items-center gap-1 ml-1.5 opacity-60"
            >
              <Users size={14} />
            </span>
          )}
          {stars > 0 && (
            <span className="text-xs inline-flex items-center gap-1 ml-1.5">
              <BsStar size={14} /> {stars}
            </span>
          )}
        </>
      }
      titleMeta={
        <span className="inline-block max-w-full whitespace-normal sm:max-w-[min(45vw,32rem)]">
          <span id={`project-stack-${number}`}>
            {visibleStack.slice(0, -1).join(' · ')}
            {visibleStack.length > 1 && ' · '}
            <span
              className={
                stack.length > 5 && !isStackExpanded ? 'whitespace-nowrap' : ''
              }
            >
              {visibleStack[visibleStack.length - 1]}
              {stack.length > 5 && (
                <>
                  <span aria-hidden="true"> · </span>
                  <button
                    type="button"
                    aria-expanded={isStackExpanded}
                    aria-controls={`project-stack-${number}`}
                    aria-label={
                      isStackExpanded
                        ? lang === 'es'
                          ? 'Mostrar menos tecnologías'
                          : 'Show fewer technologies'
                        : lang === 'es'
                          ? 'Mostrar todas las tecnologías'
                          : 'Show all technologies'
                    }
                    onClick={event => {
                      event.stopPropagation();
                      setIsStackExpanded(expanded => !expanded);
                    }}
                    className="group relative font-medium text-ink-subtle hover:text-ink border-b border-ink-subtle-lite hover:border-ink-subtle cursor-pointer focus-visible:outline focus-visible:outline-offset-2"
                  >
                    {isStackExpanded
                      ? lang === 'es'
                        ? 'Menos'
                        : 'Less'
                      : `+${stack.length - 5}`}
                  </button>
                </>
              )}
            </span>
          </span>
        </span>
      }
    >
      <div>
        <motion.p
          id={`project-description-${number}`}
          initial={false}
          animate={{
            height:
              canExpandDescription && !isDescriptionExpanded
                ? '4.875em'
                : 'auto',
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 26 }}
          className="-mt-2 max-w-prose overflow-hidden text-sm text-ink-subtle leading-relaxed"
        >
          {descriptionText}
        </motion.p>
        {canExpandDescription && (
          <Button
            type="button"
            variant="outline"
            size="small"
            aria-expanded={isDescriptionExpanded}
            aria-controls={`project-description-${number}`}
            onClick={() => setIsDescriptionExpanded(expanded => !expanded)}
            className="w-full sm:w-auto sm:ml-auto mt-6"
          >
            <div className="flex items-center justify-center text-ink-subtle hover:text-ink transition-colors">
              <span>
                {isDescriptionExpanded
                  ? lang === 'es'
                    ? 'Mostrar menos'
                    : 'Show less'
                  : lang === 'es'
                    ? 'Mostrar más'
                    : 'Show more'}
              </span>
              <ChevronDown
                size={17}
                strokeWidth={1.5}
                className={`ml-2 transition-transform ${isDescriptionExpanded ? 'rotate-180' : 'rotate-0'}`}
              />
            </div>
          </Button>
        )}
      </div>
    </Entry>
  );
}
