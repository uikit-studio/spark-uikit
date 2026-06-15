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

        <Section title={s.sections.buttons}>
          <div className="flex flex-wrap items-center gap-3">
            <Button>{s.buttons.primary}</Button>
            <Button variant="ink">{s.buttons.ink}</Button>
            <Button variant="outline">{s.buttons.outline}</Button>
            <Button variant="ghost">{s.buttons.ghost}</Button>
            <Button size="sm">{s.buttons.small}</Button>
            <Button size="lg">{s.buttons.large}</Button>
            <Button disabled>{s.buttons.disabled}</Button>
            <Toggle pressed>{s.buttons.toggle}</Toggle>
          </div>
        </Section>

        <Section title={s.sections.badges}>
          <div className="flex flex-wrap items-center gap-3">
            <Pill variant="solid">{s.badges.solid}</Pill>
            <Pill variant="soft">{s.badges.soft}</Pill>
            <Pill variant="brand">{s.badges.brand}</Pill>
            <Badge>{s.badges.neutral}</Badge>
            <Badge variant="brand">{s.badges.brand}</Badge>
            <Badge variant="success">{s.badges.success}</Badge>
            <Badge variant="outline">{s.badges.outline}</Badge>
            <Tag onRemove={() => {}}>{s.badges.removable}</Tag>
            <span className="text-sm text-muted-foreground">{s.badges.press} <Kbd>⌘</Kbd> <Kbd>K</Kbd></span>
          </div>
        </Section>

        <Section title={s.sections.forms}>
          <div className="grid max-w-2xl gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>{s.forms.email}</Label>
              <Input placeholder={s.forms.emailPh} />
            </div>
            <div className="space-y-1.5">
              <Label>{s.forms.plan}</Label>
              <Select>
                <option>{s.forms.starter}</option>
                <option>{s.forms.pro}</option>
                <option>{s.forms.scale}</option>
              </Select>
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label>{s.forms.message}</Label>
              <Textarea placeholder={s.forms.messagePh} />
            </div>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm"><Checkbox defaultChecked /> {s.forms.checkbox}</label>
              <label className="flex items-center gap-2 text-sm"><Switch defaultChecked /> {s.forms.switch}</label>
            </div>
            <RadioGroup className="flex gap-6">
              <Radio name="r" label={s.forms.monthly} defaultChecked />
              <Radio name="r" label={s.forms.yearly} />
            </RadioGroup>
            <div className="sm:col-span-2">
              <Label>{s.forms.volume}</Label>
              <Slider defaultValue={60} className="mt-2" />
            </div>
          </div>
        </Section>

        <Section title={s.sections.avatars}>
          <div className="flex items-center gap-5">
            <Avatar name="Maya Chen" />
            <Avatar name="Jordan Lee" />
            <AvatarGroup names={["Maya Chen", "Jordan Lee", "Sara Park", "Diego Ruiz"]} />
          </div>
        </Section>

        <Section title={s.sections.feedback}>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-3">
              <Alert variant="info" title={s.feedback.infoTitle}>{s.feedback.infoBody}</Alert>
              <Alert variant="success" title={s.feedback.successTitle}>{s.feedback.successBody}</Alert>
              <Alert variant="warning" title={s.feedback.warnTitle}>{s.feedback.warnBody}</Alert>
              <Alert variant="danger" title={s.feedback.dangerTitle}>{s.feedback.dangerBody}</Alert>
            </div>
            <div className="space-y-4">
              <div className="space-y-1.5"><Label>{s.feedback.storage}</Label><Progress value={68} /></div>
              <div className="flex items-center gap-3"><Spinner /> <span className="text-sm text-muted-foreground">{s.feedback.loading}</span></div>
              <div className="space-y-2"><Skeleton className="h-4 w-3/4" /><Skeleton className="h-4 w-1/2" /></div>
              <Toast title={s.feedback.savedTitle} onClose={() => {}}>{s.feedback.savedBody}</Toast>
            </div>
          </div>
        </Section>

        <Section title={s.sections.navigation}>
          <div className="space-y-6">
            <Tabs tabs={s.nav.tabs}>
              {(active) => <p className="text-sm text-muted-foreground">{s.nav.tabs[active]} — {s.nav.tabContent}</p>}
            </Tabs>
            <Breadcrumb items={s.nav.crumbs} />
            <Pagination pages={5} />
            <Stepper steps={s.nav.steps} current={1} />
          </div>
        </Section>

        <Section title={s.sections.overlays}>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip label={s.overlays.tooltip}><Button variant="outline">{s.overlays.hover}</Button></Tooltip>
            <Dialog trigger={<Button>{s.overlays.openDialog}</Button>} title={s.overlays.dialogTitle}>
              {s.overlays.dialogBody}
            </Dialog>
            <DropdownMenu label={s.overlays.actions} items={[{ label: s.overlays.edit }, { label: s.overlays.duplicate }, { label: s.overlays.delete }]} />
          </div>
        </Section>

        <Section title={s.sections.disclosure}>
          <Accordion items={s.faq} />
        </Section>

        <Section title={s.sections.data}>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <Table>
              <THead>
                <TR className="border-t-0">
                  <TH>{s.data.customer}</TH>
                  <TH>{s.data.plan}</TH>
                  <TH>{s.data.status}</TH>
                </TR>
              </THead>
              <tbody>
                <TR><TD className="font-medium">Globex</TD><TD>{s.forms.pro}</TD><TD><Badge variant="success">{s.data.active}</Badge></TD></TR>
                <TR><TD className="font-medium">Initech</TD><TD>{s.forms.starter}</TD><TD><Badge variant="outline">{s.data.trial}</Badge></TD></TR>
              </tbody>
            </Table>
            <Separator vertical className="hidden lg:block" />
            <EmptyState title={s.data.emptyTitle} action={<Button size="sm">{s.data.createReport}</Button>}>
              {s.data.emptyBody}
            </EmptyState>
          </div>
        </Section>

        <Section title={s.sections.cards}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{s.cardDemo.title}</CardTitle>
                <CardDescription>{s.cardDemo.desc}</CardDescription>
              </CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">{s.cardDemo.body}</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>{s.cardDemo.withAction}</CardTitle></CardHeader>
              <CardContent><Button size="sm">{s.cardDemo.doIt}</Button></CardContent>
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
