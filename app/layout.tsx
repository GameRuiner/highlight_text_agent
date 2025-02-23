import type { Metadata } from 'next';

import { getApiKey } from '@/app/actions';
import { AppSidebar } from '@/components/app-sidebar';
import { KeyProvider } from '@/components/key-provider';
import { ThemeProvider } from '@/components/theme-provider';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';
import AIWidget from '@/components/ai-widget';
import { PostHogProvider } from './providers'

import './globals.css';
import './layout.css';

export const metadata: Metadata = {
  title: {
    default: 'Mark.ai Conversational Agent',
    template: '%s | Mark.ai',
  },
  metadataBase: new URL('https://highlight-text-agent.vercel.app'),
  description: 'AI Agent which scrolls and highlights relevant content that directly addresses the user\'s query.',
  openGraph: {
    title: 'Mark.ai Conversational Agent',
    description: 'AI Agent which scrolls and highlights relevant content that directly addresses the user\'s query.',
    images: [`/api/og?title=ElevenLabs Next.js Playground`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiKeyResult = await getApiKey();
  const apiKey = apiKeyResult.ok ? apiKeyResult.value : null;

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <KeyProvider apiKey={apiKey}>
            <PostHogProvider>
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset className="background-gradient fern-container fern-theme-default">
                  <header className="relative flex h-[60px] shrink-0 items-center justify-center">
                    <SidebarTrigger className="absolute left-3" />
                  </header>
                  <div className="fern-main">{children}</div>
                </SidebarInset>
              </SidebarProvider>
            </PostHogProvider>
          </KeyProvider>
          <AIWidget /> {/* AI Widget is now included globally */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
