import {
  certifications,
  education,
  experience,
  industries,
  navLinks,
  profile,
  projects,
  skillGroups,
} from './data/profile'

const photoUrl = `${import.meta.env.BASE_URL}${profile.photo}`

function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string
  eyebrow: string
  title: string
}) {
  return (
    <header id={id} className="scroll-mt-24 mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80 mb-2">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
    </header>
  )
}

function App() {
  const year = new Date().getFullYear()

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 grid-bg opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden
      />

      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0c1222]/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
          <a
            href="#top"
            className="font-mono text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            GS
          </a>
          <ul className="hidden sm:flex flex-wrap items-center gap-1 text-sm text-slate-400">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="rounded-lg px-3 py-1.5 hover:bg-slate-800/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className="shrink-0 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100 hover:bg-cyan-500/20 transition-colors"
          >
            Get in touch
          </a>
        </nav>
      </header>

      <main className="relative mx-auto max-w-5xl px-5 pb-20">
        <section
          id="top"
          className="animate-fade-up pt-16 pb-20 sm:pt-24 sm:pb-28"
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(260px,340px)] lg:gap-16">
            <div>
              <p className="font-mono text-sm text-cyan-400/90 mb-4">
                {profile.location}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.1]">
                {profile.name.split(' ')[0]}{' '}
                <span className="gradient-text">
                  {profile.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="mt-4 text-xl sm:text-2xl text-slate-300 font-medium">
                {profile.title}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="AWS certifications">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="inline-flex items-center gap-2 rounded-full border border-amber-500/35 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-100/95"
                    title={cert.name}
                  >
                    <span className="font-mono text-amber-400/90" aria-hidden>
                      AWS
                    </span>
                    {cert.short}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2" aria-label="Industry focus">
                {industries.map((item) => (
                  <span
                    key={item.label}
                    title={item.detail}
                    className="rounded-md bg-slate-800/80 border border-slate-700/90 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-cyan-200/90"
                  >
                    {item.label}
                  </span>
                ))}
              </div>

              <p className="mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
                {profile.tagline}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Email me
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Gyanesh_Saikhedkar_Resume.pdf`}
              download
              className="inline-flex items-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-slate-500 hover:bg-slate-800/50 transition-colors"
            >
              Download résumé
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              {profile.phone}
            </a>
              </div>
            </div>

            <figure className="relative mx-auto w-full max-w-[340px] lg:max-w-none lg:mx-0">
              <div
                className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-cyan-400/40 via-cyan-500/10 to-transparent blur-sm"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-[#141c2f] shadow-2xl shadow-cyan-950/40">
                <img
                  src={photoUrl}
                  alt={profile.photoAlt}
                  width={680}
                  height={850}
                  className="aspect-[4/5] w-full object-cover object-[center_18%]"
                  fetchPriority="high"
                />
              </div>
              <figcaption className="sr-only">{profile.name}</figcaption>
            </figure>
          </div>
        </section>

        <section className="border-t border-slate-800/80 py-16 sm:py-20">
          <SectionHeading id="about" eyebrow="01" title="About" />
          <p className="max-w-3xl text-lg text-slate-400 leading-relaxed">
            {profile.summary}
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 max-w-2xl">
            <div className="rounded-xl border border-slate-800 bg-[#141c2f]/60 p-4">
              <dt className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Languages
              </dt>
              <dd className="mt-1 text-slate-200">{profile.languages.join(' · ')}</dd>
            </div>
            <div className="rounded-xl border border-slate-800 bg-[#141c2f]/60 p-4">
              <dt className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Certifications
              </dt>
              <dd className="mt-1 text-slate-200 text-sm leading-relaxed">
                {certifications.map((c) => c.name).join(' · ')}
              </dd>
            </div>
            <div className="rounded-xl border border-slate-800 bg-[#141c2f]/60 p-4 sm:col-span-2">
              <dt className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Domains
              </dt>
              <dd className="mt-2 space-y-2">
                {industries.map((item) => (
                  <p key={item.label} className="text-sm text-slate-300">
                    <span className="font-medium text-cyan-200/90">{item.label}</span>
                    <span className="text-slate-500"> — {item.detail}</span>
                  </p>
                ))}
              </dd>
            </div>
          </dl>
        </section>

        <section className="border-t border-slate-800/80 py-16 sm:py-20">
          <SectionHeading id="skills" eyebrow="02" title="Skills & stack" />
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-2xl border border-slate-800 bg-[#141c2f]/40 p-6 hover:border-cyan-500/20 transition-colors"
              >
                <h3 className="font-mono text-xs uppercase tracking-wider text-cyan-400/90 mb-4">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-slate-900/80 border border-slate-700/80 px-2.5 py-1 text-sm text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-800/80 py-16 sm:py-20">
          <SectionHeading id="experience" eyebrow="03" title="Experience" />
          <ol className="relative space-y-0 border-l border-slate-800 ml-3 pl-8">
            {experience.map((job, index) => (
              <li key={`${job.company}-${job.period}`} className="relative pb-12 last:pb-0">
                <span
                  className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-400 ring-4 ring-[#0c1222]"
                  aria-hidden
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                  <time className="font-mono text-sm text-slate-500 shrink-0">
                    {job.period}
                  </time>
                </div>
                <p className="text-cyan-200/90 text-sm font-medium">
                  {job.company} · {job.location}
                  {job.teamSize != null && (
                    <span className="text-slate-500 font-normal">
                      {' '}
                      · Team of {job.teamSize}
                    </span>
                  )}
                </p>
                <ul className="mt-3 space-y-2 text-slate-400 text-[15px] leading-relaxed list-disc pl-4 marker:text-slate-600">
                  {job.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-xs text-slate-500">
                  {job.tech.join(' · ')}
                </p>
                {index < experience.length - 1 && (
                  <span className="sr-only">Next role</span>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-slate-800/80 py-16 sm:py-20">
          <SectionHeading id="projects" eyebrow="04" title="Selected projects" />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-gradient-to-b from-[#141c2f]/80 to-transparent p-6 hover:border-cyan-500/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-100 transition-colors">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {project.client} · {project.company}
                  {project.domain != null && (
                    <span className="text-cyan-600/80"> · {project.domain}</span>
                  )}
                </p>
                <p className="mt-4 flex-1 text-slate-400 text-[15px] leading-relaxed">
                  {project.description}
                </p>
                <p className="mt-4 font-mono text-xs text-cyan-500/80">
                  {project.tech.join(' · ')}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-800/80 py-16 sm:py-20">
          <SectionHeading id="education" eyebrow="05" title="Education" />
          <div className="rounded-2xl border border-slate-800 bg-[#141c2f]/50 p-6 max-w-xl">
            <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
            <p className="mt-2 text-slate-400">{education.institute}</p>
            <p className="text-sm text-slate-500">{education.university}</p>
            <p className="mt-3 font-mono text-sm text-slate-500">
              {education.location} · {education.period}
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 border-t border-slate-800/80 py-16 sm:py-20"
        >
          <SectionHeading eyebrow="06" title="Contact" id="contact-heading" />
          <p className="max-w-xl text-slate-400 mb-8">
            I am open to lead engineering, principal backend, and cloud-architecture
            roles — especially where banking, insurance, aviation, or booking
            platforms need someone who has shipped in those worlds. Say hello.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl border border-slate-700 bg-slate-900/50 px-5 py-4 hover:border-cyan-500/40 transition-colors"
            >
              <span className="block text-xs font-mono uppercase text-slate-500">
                Email
              </span>
              <span className="text-slate-200">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="rounded-xl border border-slate-700 bg-slate-900/50 px-5 py-4 hover:border-cyan-500/40 transition-colors"
            >
              <span className="block text-xs font-mono uppercase text-slate-500">
                Phone
              </span>
              <span className="text-slate-200">{profile.phone}</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 py-8 text-center text-sm text-slate-600">
        <p>
          © {year} {profile.name}. Built with React & Vite.
        </p>
      </footer>
    </div>
  )
}

export default App
