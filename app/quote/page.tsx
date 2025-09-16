import fs from 'node:fs/promises'
import path from 'node:path'
import ForceDirLTR from './ForceDir'


// (removed duplicate type and helper declarations after revert)

type CostItem = { title: string; price: string }
type Stage = { title: string; bullets: string[] }

function extractHeading(markdown: string): string {
  const m = markdown.match(/^##\s+(.+)$/m)
  return m ? m[1].trim() : 'Estimated Costs'
}

function extractCostTable(markdown: string): { items: CostItem[]; total?: string } {
  const lines = markdown.split(/\r?\n/)
  const tableStart = lines.findIndex(l => /^\|\s*Item\s*\|/i.test(l))
  if (tableStart === -1) return { items: [] }
  const tableLines: string[] = []
  for (let i = tableStart; i < lines.length; i++) {
    const line = lines[i]
    if (line.trim().startsWith('|')) tableLines.push(line)
    else if (tableLines.length > 0) break
  }
  const clean = (l: string) => l.trim().replace(/^\||\|$/g, '')
  const split = (l: string) => clean(l).split('|').map(c => c.trim().replace(/^\*+|\*+$/g, ''))
  const rows = tableLines.slice(2).map(split)
  const items: CostItem[] = []
  let total: string | undefined
  for (const r of rows) {
    if (r.length < 2) continue
    const name = r[0]
    const price = r[1]
    if (/^total$/i.test(name.replace(/[^a-z]/gi, ''))) {
      total = price
    } else if (name) {
      items.push({ title: name, price })
    }
  }
  return { items, total }
}

function extractStageDescriptions(markdown: string): Stage[] {
  const lines = markdown.split(/\r?\n/)
  const startIdx = lines.findIndex(l => /^####\s+Stage Descriptions/i.test(l))
  if (startIdx === -1) return []
  const endIdx = lines.findIndex((l, i) => i > startIdx && /^---/.test(l) || /^###\s+Option B/i.test(l))
  const slice = lines.slice(startIdx + 1, endIdx === -1 ? undefined : endIdx)
  const stages: Stage[] = []
  let current: Stage | null = null
  for (const line of slice) {
    const num = /^(\d+)\)\s+(.+)$/.exec(line.trim())
    if (num) {
      if (current) stages.push(current)
      const title = num[2].replace(/\s*\(.+?\)\s*$/, '').trim()
      current = { title, bullets: [] }
      continue
    }
    const bullet = /^-\s+(.+)$/.exec(line)
    if (bullet && current) {
      current.bullets.push(bullet[1])
    }
  }
  if (current) stages.push(current)
  return stages
}

function matchDescriptionsToCosts(costs: CostItem[], stages: Stage[]): Array<CostItem & { bullets: string[] }> {
  return costs.map(ci => {
    const key = ci.title.toLowerCase()
    const match = stages.find(s => s.title.toLowerCase().startsWith(key.split('&')[0].trim()))
    return { ...ci, bullets: match ? match.bullets : [] }
  })
}

export default async function QuotePage() {
  const enPath = path.join(process.cwd(), 'quotes', 'estimated-costs-en.md')
  let en = ''
  try {
    en = await fs.readFile(enPath, 'utf8')
  } catch {
    en = '## Estimated Costs\n\nUnable to read costs file.'
  }
  const heading = extractHeading(en)
  const { items, total } = extractCostTable(en)
  const stages = extractStageDescriptions(en)
  const merged = matchDescriptionsToCosts(items, stages)

  return (
    <main dir="ltr" className="min-h-screen px-4 py-10">
      <ForceDirLTR />
      <div className="container mx-auto max-w-5xl">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">{heading || 'Estimated Costs'}</h1>
          <p className="text-muted-foreground mt-2">A concise, professional breakdown of costs and stages.</p>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {merged.map((sec) => (
            <section dir="ltr" key={sec.title} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 shadow-elevation-1 text-left">
              <h2 className="text-2xl font-semibold">{sec.title}</h2>
              {sec.bullets.length > 0 && (
                <ul className="mt-4 list-disc pl-5 space-y-1 text-foreground/80">
                  {sec.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              <div className="mt-6 flex justify-end">
                <div className="rounded-lg bg-primary-50 text-primary-700 border border-primary-200 px-3 py-1 text-sm font-semibold">
                  <span className="mr-2 opacity-80">Price:</span>{sec.price}
                </div>
              </div>
            </section>
          ))}

          {total && (
            <section dir="ltr" className="rounded-2xl border-2 border-primary-300 bg-primary-50/60 p-6 shadow-elevation-2 text-left">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-primary-800">Total</h3>
                <div className="rounded-lg bg-primary-600 text-white px-4 py-1.5 text-base font-semibold">
                  <span className="mr-2 opacity-90">Price:</span>{total}
                </div>
              </div>
            </section>
          )}

          {/* Estimate Note */}
          <section dir="ltr" className="rounded-xl border border-warning-200 bg-warning-50/60 p-4 shadow-elevation-1 text-left">
            <p className="text-sm text-warning-700">
              Please note: The pricing presented is an estimate based on the current scope. Any additional features or material changes may affect the final cost.
            </p>
          </section>

          {/* Payment Terms */}
          <section dir="ltr" className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 shadow-elevation-1 text-left">
            <h3 className="text-xl font-semibold">Payment Terms</h3>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-foreground/80">
              <li>50% upfront to start (upon contract signature).</li>
              <li>30% upon completion of core development (feature freeze).</li>
              <li>20% upon final delivery and production launch.</li>
              <li>Invoices due Net 15 days. Payments in SAR; VAT/taxes excluded.</li>
              <li>Out-of-scope changes billed on time & materials, pre-approved.</li>
              <li>3 months of post-launch support included; extended support via monthly retainer.</li>
            </ul>
          </section>

          {/* Commercial Terms */}
          <section dir="ltr" className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 shadow-elevation-1 text-left">
            <h3 className="text-xl font-semibold">Commercial Terms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
              <div>
                <h4 className="font-semibold">Assumptions</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Client provides brand assets, copy, and domain/DNS access.</li>
                  <li>One production and one staging environment.</li>
                  <li>Single-region hosting unless specified.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Exclusions</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Hardware; SMS, email, maps, and payment gateway fees.</li>
                  <li>Third-party penetration testing and app store fees.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical & Security */}
          <section dir="ltr" className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 shadow-elevation-1 text-left">
            <h3 className="text-xl font-semibold">Technical & Security</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
              <div>
                <h4 className="font-semibold">Non-functional Targets</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Availability target (e.g., 99.5%), P95 response time baseline.</li>
                  <li>Maximum error rate threshold; SEO/accessibility baseline.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Security & Data</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Data residency (region), retention policy, backup/RTO/RPO.</li>
                  <li>Role-based access and audit logging scope.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Governance */}
          <section dir="ltr" className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 shadow-elevation-1 text-left">
            <h3 className="text-xl font-semibold">Governance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
              <div>
                <h4 className="font-semibold">Acceptance Criteria</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Written UAT test cases; sign-off within 5 business days.</li>
                  <li>One feedback cycle per stage; extra cycles billed T&amp;M.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Change Control</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Changes via written change request with cost/time impact.</li>
                  <li>Client delays (&gt;2 business days) extend schedule accordingly.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Support & IP */}
          <section dir="ltr" className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 shadow-elevation-1 text-left">
            <h3 className="text-xl font-semibold">Support & IP</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
              <div>
                <h4 className="font-semibold">Support & Warranty</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>30-day warranty on shipped scope (bug fixes only).</li>
                  <li>Post-launch support as defined; optional monthly retainer.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">IP & Licensing</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Client owns project IP; vendor retains generic frameworks.</li>
                  <li>Third-party licenses billed at cost.</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-sm text-foreground/70">
              Quote validity: 30 days. Confidential and intended for the recipient only.
            </div>
          </section>

          {/* Additional Delivery Stages (Senior PM view) */}
          <section dir="ltr" className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 shadow-elevation-1 text-left">
            <h3 className="text-xl font-semibold mb-3">Additional Delivery Stages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">Discovery & Requirements</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Stakeholder alignment and scope baseline</li>
                  <li>User stories, acceptance criteria, success metrics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Architecture & Technical Design</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Solution architecture and data model</li>
                  <li>API contracts, NFRs, integration strategy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">DevOps & Environments</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>IaC (staging/production parity), secrets, CI/CD</li>
                  <li>Release versioning and environment promotion</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Security & Compliance</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Threat modeling, privacy review, data classification</li>
                  <li>Vulnerability scans and pen-test planning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Data Strategy & Migration</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Source mapping, migration scripts, validation</li>
                  <li>Rollback plan and data quality checks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Performance & Reliability</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Load testing, SLOs, capacity planning</li>
                  <li>Caching strategy, DR/backup drills</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Observability & SRE</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Metrics, tracing, alerting, dashboards</li>
                  <li>Runbooks and incident response</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">UAT & Pilot Rollout</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Test scripts, UAT sign-off</li>
                  <li>Pilot cohort, rollback criteria</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Documentation & Training</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Admin/provider playbooks and knowledge base</li>
                  <li>Operational runbooks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Change Management & GTM</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Comms plan, enablement sessions</li>
                  <li>Launch checklist and readiness</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Post-launch Support & SLAs</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Severity matrix, response/restore targets</li>
                  <li>Maintenance calendar</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">FinOps</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Infra budget, usage caps, cost monitoring</li>
                  <li>Optimization guardrails</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Accessibility & Localization QA</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>WCAG checks, RTL/LTR audits</li>
                  <li>Content QA across locales</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Legal & Contracts</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>DPA/BAA (as applicable), 3rd-party licensing</li>
                  <li>Terms and policy updates</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>


    </main>
  )
}


