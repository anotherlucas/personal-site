import Link from 'next/link';
import { Start, InCard } from 'styles/Start';
import {
  SectionTitle,
  SectionHeader,
  SectionCopy,
  SectionSubheader,
  SectionButton,
  DividerTop,
  DividerBottom,
} from 'styles/Shared';
export default function StartComponent() {
  return (
    <Start>
      <SectionTitle>
        <DividerTop />
        BUILD WITH CONFIDENCE
        <DividerBottom />
      </SectionTitle>
      <SectionHeader>
        THE ARCHITECT IS <InCard>IN</InCard>
      </SectionHeader>
      <SectionCopy>
        I am currently taking on new clients
        <br />
        Let’s build something amazing together
      </SectionCopy>
      
      <SectionSubheader style={{ marginTop: `0` }}>
        <DividerTop />
        FREE CONSULTATION
        <DividerBottom />
      </SectionSubheader>
      <Link href="https://calendly.com/ll-consulting/30min">
        <SectionButton style={{ marginTop: `-1.25rem` }}>SCHEDULE A CALL</SectionButton>
      </Link>
    </Start>
  );
}
