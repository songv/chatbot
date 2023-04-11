import Link from 'next/link';

export default function Navigation() {
  const listLinks = 'block pb-4 mb-4 list-link';
  return (
    <ul>
      <li><Link className={listLinks} href="https://horizontal.atlassian.net/wiki/spaces/HFEOS/">FED Confluence</Link></li>
      <li><Link className={listLinks} href="https://horizontal.atlassian.net/wiki/spaces/HFEOS/pages/7273400369513">Standards &amp; Best Practices</Link></li>
      <li><Link className={listLinks} href="hhttps://horizontal.atlassian.net/wiki/spaces/HFEOS/pages/2659811453/Coding+Standards">Coding Standards</Link></li>
      <li><Link className={listLinks} href="https://horizontal.atlassian.net/wiki/spaces/HFEOS/pages/7273652027961/Performance">Performance</Link></li>
      <li><Link className={listLinks} href="https://horizontal.atlassian.net/wiki/spaces/HFEOS/pages/2865430651/Onboarding">Onboarding</Link></li>
      <li><Link className={listLinks + " border-none"} href="https://horizontal.atlassian.net/wiki/spaces/HFEOS/pages/7273396142233/Training">Training</Link></li>
    </ul>
  );
}
