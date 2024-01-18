import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="https://berrylab.xyz" className="block text-center" aria-label="BerryLab" style={{ paddingTop: '2em' }}>
      <img src="https://static.berrylab.cloud/BrandKit/SVG/BerryLabLogo_Main.svg" alt="BerryLab Logo" style={{ width: '8em', height: '8em', margin: 'auto', borderRadius: '50%' }} />
    </Link>
  );
}
