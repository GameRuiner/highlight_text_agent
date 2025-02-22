import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/page1'); // Redirect to Page 1 on app load
}
