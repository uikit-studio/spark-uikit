import type { ReactNode } from "react";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/card";
import { Container } from "../components/container";
import { Avatar, AvatarGroup, Kbd, Separator, TD, TH, THead, TR, Table, Tag } from "../components/data-display";
import { Alert, EmptyState, Progress, Skeleton, Spinner, Toast } from "../components/feedback";
import { Checkbox, Label, Radio, RadioGroup, Select, Slider, Switch, Textarea, Toggle } from "../components/forms";
import { Input } from "../components/input";
import { Mark } from "../components/mark";
import { Marquee } from "../components/marquee";
import { Accordion, Dialog, DropdownMenu, Tooltip } from "../components/overlay";
import { Breadcrumb, Pagination, Stepper, Tabs } from "../components/navigation";
import { Pill } from "../components/pill";
import { useI18n } from "../i18n";

export function Showcase() {
  const { t } = useI18n();
  const s = t.showcase;
  return (
    <div>
      <Container className="space-y-12 py-14">
        <header>
          <h1 className="font-display text-4xl font-bold tracking-tight">
            {s.title.split(" ")[0]} <Mark>{s.title.split(" ").slice(1).join(" ")}</Mark>
          </h1>
          <p className="mt-2 max-w-xl text-muted-foreground">{s.sub}</p>
        </header>

        <Section title={s.sections.colors}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {[
              ["background", "bg-background"],
              ["card", "bg-card"],
              ["muted", "bg-muted"],
              ["primary", "bg-primary"],
              ["mark", "bg-mark"],
              ["brand-300", "bg-brand-300"],
              ["ink", "bg-ink"],
            ].map(([name, cls]) => (
              <div key={name}>
                <div className={`h-16 rounded-[var(--radius)] border border-border ${cls}`} />
                <p className="mt-1.5 font-mono text-xs text-muted-foreground">{name}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={s.sections.type}>
          <div className="space-y-3">
            <p className="font-display text-5xl font-bold tracking-tight">{s.display}</p>
            <p className="font-display text-2xl font-bold">{s.heading}</p>
            <p className="text-base">{s.body}</p>
            <p className="font-mono text-sm text-muted-foreground">{s.mono}</p>
          </div>
        </Section>

        <Section title="Buttons">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="ink">Ink</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
            <Toggle pressed>Toggle</Toggle>
          </div>
        </Section>

        <Section title="Badges, pills & tags">
          <div className="flex flex-wrap items-center gap-3">
            <Pill variant="solid">Solid</Pill>
            <Pill variant="soft">Soft</Pill>
            <Pill variant="brand">Brand</Pill>
            <Badge>Neutral</Badge>
            <Badge variant="brand">Brand</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="outline">Outline</Badge>
            <Tag onRemove={() => {}}>Removable</Tag>
            <span className="text-sm text-muted-foreground">Press <Kbd>⌘</Kbd> <Kbd>K</Kbd></span>
          </div>
        </Section>

        <Section title="Form controls">
          <div className="grid max-w-2xl gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Email</Label>
              <Input placeholder="you@example.com" />
            </div>
            <div className="space-y-1.5">
              <Label>Plan</Label>
              <Select>
                <option>Starter</option>
                <option>Pro</option>
                <option>Scale</option>
              </Select>
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label>Message</Label>
              <Textarea placeholder="Tell us more…" />
            </div>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm"><Checkbox defaultChecked /> Checkbox</label>
              <label className="flex items-center gap-2 text-sm"><Switch defaultChecked /> Switch</label>
            </div>
            <RadioGroup className="flex gap-6">
              <Radio name="r" label="Monthly" defaultChecked />
              <Radio name="r" label="Yearly" />
            </RadioGroup>
            <div className="sm:col-span-2">
              <Label>Volume</Label>
              <Slider defaultValue={60} className="mt-2" />
            </div>
          </div>
        </Section>

        <Section title="Avatars">
          <div className="flex items-center gap-5">
            <Avatar name="Maya Chen" />
            <Avatar name="Jordan Lee" />
            <AvatarGroup names={["Maya Chen", "Jordan Lee", "Sara Park", "Diego Ruiz"]} />
          </div>
        </Section>

        <Section title="Feedback">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-3">
              <Alert variant="info" title="Heads up">Realtime sync is on for this workspace.</Alert>
              <Alert variant="success" title="Payment received">Invoice #1043 was paid.</Alert>
              <Alert variant="warning" title="Usage at 80%">Consider upgrading your plan.</Alert>
              <Alert variant="danger" title="Card declined">Update your billing details.</Alert>
            </div>
            <div className="space-y-4">
              <div className="space-y-1.5"><Label>Storage</Label><Progress value={68} /></div>
              <div className="flex items-center gap-3"><Spinner /> <span className="text-sm text-muted-foreground">Loading…</span></div>
              <div className="space-y-2"><Skeleton className="h-4 w-3/4" /><Skeleton className="h-4 w-1/2" /></div>
              <Toast title="Saved" onClose={() => {}}>Your changes are live.</Toast>
            </div>
          </div>
        </Section>

        <Section title="Navigation">
          <div className="space-y-6">
            <Tabs tabs={["Overview", "Activity", "Settings"]}>
              {(active) => <p className="text-sm text-muted-foreground">Tab {active + 1} content.</p>}
            </Tabs>
            <Breadcrumb items={["Home", "Billing", "Invoices"]} />
            <Pagination pages={5} />
            <Stepper steps={["Account", "Plan", "Payment", "Done"]} current={1} />
          </div>
        </Section>

        <Section title="Overlays">
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip label="Realtime, edge-fast"><Button variant="outline">Hover me</Button></Tooltip>
            <Dialog trigger={<Button>Open dialog</Button>} title="Invite teammates">
              Send an invite link to add people to this workspace.
            </Dialog>
            <DropdownMenu label="Actions" items={[{ label: "Edit" }, { label: "Duplicate" }, { label: "Delete" }]} />
          </div>
        </Section>

        <Section title="Disclosure">
          <Accordion
            items={[
              { q: "Is Aurora responsive?", a: "Yes — every page works mobile → desktop." },
              { q: "Does it support dark mode + RTL?", a: "Both, via tokens and a layout that flips." },
              { q: "Can I add just one component?", a: "Yes — npx uikit-studio add button." },
            ]}
          />
        </Section>

        <Section title="Data">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <Table>
              <THead>
                <TR className="border-t-0">
                  <TH>Customer</TH>
                  <TH>Plan</TH>
                  <TH>Status</TH>
                </TR>
              </THead>
              <tbody>
                <TR><TD className="font-medium">Globex</TD><TD>Pro</TD><TD><Badge variant="success">Active</Badge></TD></TR>
                <TR><TD className="font-medium">Initech</TD><TD>Starter</TD><TD><Badge variant="outline">Trial</Badge></TD></TR>
              </tbody>
            </Table>
            <Separator vertical className="hidden lg:block" />
            <EmptyState title="No reports yet" action={<Button size="sm">Create report</Button>}>
              Reports you generate will show up here.
            </EmptyState>
          </div>
        </Section>

        <Section title={s.sections.cards}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Card title</CardTitle>
                <CardDescription>A short description.</CardDescription>
              </CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">Body content goes here.</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>With an action</CardTitle></CardHeader>
              <CardContent><Button size="sm">Do it</Button></CardContent>
            </Card>
          </div>
        </Section>
      </Container>

      <Marquee items={t.marquee} />
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">{title}</h2>
      {children}
    </section>
  );
}
