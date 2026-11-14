import { useState, type ReactNode } from 'react';
import SectionHeading from './SectionHeading';

const featuredStudyPdfUrl = `${import.meta.env.BASE_URL}assets/featured-study.pdf`;

function Authors({ names }: { names: string }) {
  const parts = names.split('Yoon, H.');
  return parts.map((part, index) => (
    <span key={`${index}-${part.slice(0, 12)}`}>
      {part}
      {index < parts.length - 1 && <strong className="font-semibold text-foreground">Yoon, H.</strong>}
    </span>
  ));
}

function DoiLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 [overflow-wrap:anywhere]">
      {href}
    </a>
  );
}

function PublicationRow({
  label,
  children,
  testId,
}: {
  label: string;
  children: ReactNode;
  testId: string;
}) {
  return (
    <article
      className="grid gap-2 border-b border-border py-4 last:border-b-0 sm:grid-cols-[150px_1fr] sm:gap-6"
      data-testid={testId}
    >
      <span className="font-mono text-xs text-primary">{label}</span>
      <div className="max-w-[40rem] text-sm leading-6 text-foreground">{children}</div>
    </article>
  );
}

const journalArticles = [
  {
    year: '2025',
    authors: 'Lapinski, M. K., Heo, R., Liu, R. W., Kerr, J. M., Zhao, J., Bum, T., Wang, Y., Yoon, H., Hipple, S., & Lu, Z.',
    title: 'Social norms for illegal hunting and patrolling to prevent it: Formative data for intervention design and communication campaigns.',
    venue: <><em>Environmental Communication, 19</em>(7), 1240–1256.</>,
    doi: 'https://doi.org/10.1080/17524032.2025.2458225',
  },
  {
    year: '2024',
    authors: 'Yoon, H., Jang, Y., Lapinski, M. K., Turner, M. M., Peng, T. Q., & Lee, S.',
    title: 'The role of collective group orientation and social norms on physical distancing behaviors for disease prevention.',
    venue: <><em>Health Communication, 39</em>(13), 3108–3121.</>,
    doi: 'https://doi.org/10.1080/10410236.2024.2303826',
    pdf: true,
  },
  {
    year: '2023',
    authors: 'Schmälzle, R., Liu, H., Delle, F. A., Lewin, K. M., Jahn, N. T., Zhang, Y., Yoon, H., & Long, J.',
    title: 'Moment-by-moment tracking of audience brain responses to an engaging public speech: Replicating the reverse-message engineering approach.',
    venue: <><em>Communication Monographs, 91</em>(1), 31–55.</>,
    doi: 'https://doi.org/10.1080/03637751.2023.2240398',
  },
];

const manuscriptsInPreparation = [
  {
    authors: 'Yoon, H., Turner, M. M., Jeon, M., & Cho, H. J.',
    title: 'Not all efficacy is the same: Disaggregating self-efficacy, response efficacy, and retributive efficacy in anger-based persuasion.',
    tag: 'Accepted at NCA 2026',
  },
  {
    authors: 'Yoon, H., Lapinski, M. K., & Choi, H.',
    title: 'Cultural dynamics and social norms in binge drinking.',
    tag: 'Accepted at NCA 2026',
  },
  {
    authors: 'Yoon, H., Lapinski, M. K., Kim, M., Waller, J., & Moore, N.',
    title: 'Whose norms, whose group? The role of referent groups and group identity in normative influence on water conservation behavior.',
    tag: 'Submitted to ICA 2027',
  },
  {
    authors: 'Yoon, H., Kim, M., Heo, R., Iyer, S., Lapinski, M., Moore, N., Tracey, K., & Waller, J.',
    title: 'The Shorter Shower Initiative: Using formative data to shape messages about water conservation.',
    tag: 'Presented at NCA 2025',
  },
  {
    authors: 'Lapinski, M. K., Waller, J., Moore, N., Yoon, H., Kim, M., Tracey, K., Iyer, S., Heo, R., & Chowles, R.',
    title: 'The Shorter Shower Initiative: Combining timer technology and persuasive messages to shape water use.',
    tag: 'Submitted to ICA 2027',
  },
  {
    authors: 'Turner, M. M., Cho, H. J., Yoon, H., Jeon, M., & Du, Y.',
    title: 'The anger defiance hypothesis: When discouraging efficacy fuels agency.',
    tag: 'Presented at NCA 2025',
  },
  {
    authors: 'Turner, M. M., Cho, H. J., Yoon, H., Jeon, M., & Du, Y.',
    title: 'Measuring emotional flow: Assessing self-report and psychophysiological indicators with multi-trait multi-measure methodology.',
    tag: 'Accepted at NCA 2026',
  },
  {
    authors: 'Turner, M. M., Cho, H. J., & Yoon, H.',
    title: 'Measuring campaign dose and its association with drinking norms and behavior: A six-wave trend study of a collegiate social-norms campaign.',
    tag: 'Submitted to ICA 2027',
  },
];

const presentationGroups = [
  {
    label: 'ICA 2027 · Glasgow · Submitted',
    items: [
      {
        authors: 'Yoon, H., Lapinski, M. K., Kim, M., Waller, J., & Moore, N.',
        title: 'Whose norms, whose group? The role of referent groups and group identity in normative influence on water conservation behavior [Extended abstract].',
      },
      {
        authors: 'Yoon, H.',
        title: 'When normative feedback becomes a conversation: Relational AI and the acceptance of descriptive norm feedback [Extended abstract].',
      },
      {
        authors: 'Lapinski, M. K., Waller, J., Moore, N., Yoon, H., Kim, M., Tracey, K., Iyer, S., Heo, R., & Chowles, R.',
        title: 'The Shorter Shower Initiative: Combining timer technology and persuasive messages to shape water use.',
      },
      {
        authors: 'Turner, M. M., Bakus, M., Yoon, H., Jeon, M., Martell, D., Clark, K., Hembroff, L., & Poole, A.',
        title: 'Measuring campaign dose and its association with drinking norms and behavior: A six-wave trend study of a collegiate social norms campaign.',
      },
    ],
  },
  {
    label: 'NCA 2026 · New Orleans',
    items: [
      {
        authors: 'Turner, M. M., Cho, H. J., Yoon, H., Jeon, M., & Du, Y.',
        title: 'Measuring emotional flow: Assessing self-report and psychophysiological indicators with multi-trait multi-measure methodology.',
      },
      {
        authors: 'Yoon, H., Turner, M. M., Jeon, M., & Cho, H. J.',
        title: 'Not all efficacy is the same: Disaggregating self-efficacy, response efficacy, and retributive efficacy in anger-based persuasion.',
      },
      {
        authors: 'Yoon, H., Lapinski, M. K., & Choi, H.',
        title: 'Cultural dynamics and social norms in binge drinking.',
      },
    ],
  },
  {
    label: 'NCA 2025 · Denver',
    items: [
      {
        authors: 'Yoon, H., Kim, M., Heo, R., Iyer, S., Lapinski, M., Moore, N., Tracey, K., & Waller, J.',
        title: 'The Shorter Shower Initiative: Using formative data to shape messages about water conservation.',
      },
      {
        authors: 'Turner, M. M., Yoon, H., Jeon, M., Cho, H. J., & Lim, J. I.',
        title: 'Crossing the efficacy threshold: When anger turns counterproductive.',
      },
      {
        authors: 'Turner, M. M., Cho, H. J., Yoon, H., Jeon, M., & Du, Y.',
        title: 'The anger defiance hypothesis: When discouraging efficacy fuels agency.',
      },
    ],
  },
  {
    label: 'ICA 2025 · Denver',
    items: [
      {
        authors: 'Turner, M. M., Yoon, H., Jeon, M., Cho, H. J., & Lim, J. I.',
        title: 'How low can you go? Testing the efficacy threshold for the Anger Activism Model.',
      },
    ],
  },
  {
    label: 'ICA 2024 · Gold Coast',
    items: [
      {
        authors: 'Heo, R., Lapinski, M., Liu, R., Kerr, J., Zhao, J., Bum, T., Wang, Y., Yoon, H., Hipple, S., & Lu, Z.',
        title: 'Social norms for illegal hunting and patrolling to prevent it: Formative data for intervention design and communication campaigns.',
      },
      {
        authors: 'Cho, H. J., Turner, M. M., Jeon, M., Yoon, H., Long, J., & Ha, J. H.',
        title: "You can do it and here's how! The use (or absence) of efficacy messaging in obesity prevention campaigns.",
      },
    ],
  },
  {
    label: 'ICA 2023 · Toronto',
    items: [
      {
        authors: 'Yoon, H., Jang, Y., Lee, S., Lapinski, M., Peng, W., & Turner, M. M.',
        title: 'The role of collective group orientation and social norms on physical distancing behaviors for disease prevention.',
      },
    ],
  },
  {
    label: 'NCA 2022 · New Orleans',
    items: [
      {
        authors: 'Schmälzle, R., Ye, Q., Zhang, Y., Yoon, H., Liu, H., Delle, F., Lewin, K., Jahn, N., & Long, J.',
        title: 'Moment-by-moment tracking of brain responses to an engaging story: A replication study using forward and reverse correlation to study narrative reception.',
      },
    ],
  },
];

export default function PublicationSection({ cvUrl }: { cvUrl: string }) {
  const [showAllPresentations, setShowAllPresentations] = useState(false);
  const visiblePresentationGroups = showAllPresentations
    ? presentationGroups
    : presentationGroups.slice(0, 2);

  return (
    <section id="publications" className="mx-auto max-w-[1240px] px-5 py-20 md:px-10 md:py-28">
      <SectionHeading number="03">Publications</SectionHeading>

      <div className="space-y-10">
        <section aria-labelledby="journal-articles-heading">
          <h3 id="journal-articles-heading" className="mb-3 text-sm font-semibold">Journal articles</h3>
          <div className="border-y border-border divide-y divide-border">
            {journalArticles.map((article) => (
              <PublicationRow key={article.year} label={article.year} testId={`publication-journal-${article.year}`}>
                <Authors names={article.authors} /> ({article.year}). {article.title} {article.venue}{' '}
                <DoiLink href={article.doi} />
                {article.pdf && (
                  <>
                    {' · '}
                    <a href={featuredStudyPdfUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">PDF (open access)</a>
                  </>
                )}
              </PublicationRow>
            ))}
          </div>
        </section>

        <section aria-labelledby="book-review-heading">
          <h3 id="book-review-heading" className="mb-3 text-sm font-semibold">Book review</h3>
          <div className="border-y border-border">
            <PublicationRow label="2026" testId="publication-book-review">
              <Authors names="Yoon, H." /> (2026). Review of the book <em>Acknowledging Indigenous knowledge: Voices of tropical forest people</em>, by P. Bose. <em>Environmental Politics</em>.{' '}
              <DoiLink href="https://doi.org/10.1080/09644016.2026.2624252" />
            </PublicationRow>
          </div>
        </section>

        <section aria-labelledby="under-review-heading">
          <h3 id="under-review-heading" className="mb-3 text-sm font-semibold">Under review</h3>
          <div className="border-y border-border">
            <PublicationRow label="Communication Research" testId="publication-under-review">
              <Authors names="Turner, M. M., Yoon, H., Jeon, M., Cho, H. J., & Lim, J. I." /> Locating anger&apos;s activation and efficacy thresholds: Two tests of the Anger Activism Model. Under review at <em>Communication Research</em>.
            </PublicationRow>
          </div>
        </section>

        <section aria-labelledby="manuscripts-heading">
          <h3 id="manuscripts-heading" className="mb-3 text-sm font-semibold">Manuscripts in preparation</h3>
          <div className="border-y border-border divide-y divide-border">
            {manuscriptsInPreparation.map((manuscript, index) => (
              <PublicationRow key={manuscript.title} label={`0${index + 1}`} testId={`publication-in-preparation-${index + 1}`}>
                <Authors names={manuscript.authors} /> {manuscript.title}{' '}
                <span className="inline-block whitespace-nowrap border border-border bg-accent px-2 py-0.5 align-middle font-mono text-xs leading-4 text-accent-foreground">{manuscript.tag}</span>
              </PublicationRow>
            ))}
          </div>
        </section>

        <section aria-labelledby="conference-presentations-heading">
          <h3 id="conference-presentations-heading" className="mb-3 text-sm font-semibold">Conference presentations</h3>
          <div className="border-y border-border divide-y divide-border">
            {visiblePresentationGroups.map((group) => (
              <PublicationRow key={group.label} label={group.label} testId={`presentation-group-${group.label.replaceAll(' ', '-').replaceAll('·', '')}`}>
                <ul className="space-y-3">
                  {group.items.map((item, index) => (
                    <li key={`${item.title}-${index}`} className="leading-6">
                      <Authors names={item.authors} /> {item.title}
                    </li>
                  ))}
                </ul>
              </PublicationRow>
            ))}
          </div>
          <button
            type="button"
            aria-expanded={showAllPresentations}
            onClick={() => setShowAllPresentations((expanded) => !expanded)}
            className="mt-4 border border-primary/50 px-4 py-2.5 text-sm text-primary transition-colors hover:bg-accent"
            data-testid="button-toggle-presentations"
          >
            {showAllPresentations ? 'Show fewer presentations' : 'Show all presentations'}
          </button>
        </section>
      </div>

      <div className="mt-10 flex flex-col gap-4 border border-border bg-card p-5 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-muted-foreground">For a complete record, see my CV.</p>
        <a href={cvUrl} download className="inline-flex shrink-0 items-center gap-2 bg-primary px-4 py-3 text-sm text-primary-foreground transition-colors hover:bg-primary-hover" data-testid="link-download-full-cv">
          Download full CV
        </a>
      </div>
    </section>
  );
}
