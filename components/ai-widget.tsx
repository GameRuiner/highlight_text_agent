'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function AIWidget() {
  const router = useRouter();
  const widgetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const widget = document.querySelector(
      'elevenlabs-convai'
    ) as HTMLElement | null;
    if (widget) {
      widgetRef.current = widget;
      const article = document.querySelector('article');
      const articleText = article ? article.textContent?.trim() || '' : '';
      const dynamicVars = {
        article: articleText,
      };
      widget.setAttribute('dynamic-variables', JSON.stringify(dynamicVars));

      widget.addEventListener('elevenlabs-convai:call', (event) => {
        const customEvent = event as CustomEvent;
        customEvent.detail.config.clientTools = {
          redirectToDifferentArticle: async ({ url }: { url: string }) => {
            const path = url.split(':3000')[1] || '/';
            router.push(path);
            return 'Redirected to URL';
          },
          hightlightTextOnPage: async ({
            textFragmentDirective,
          }: {
            textFragmentDirective: string;
          }) => {
            if (!textFragmentDirective.startsWith('#:~:text=')) {
              textFragmentDirective = '#:~:text=' + textFragmentDirective;
            }
            window.location.hash = textFragmentDirective;
            return 'Text Highlighted';
          },
        };
      });
    }

    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    document.body.appendChild(script);
  }, [router]);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<elevenlabs-convai agent-id="Y2wSS1WxtpwqBptjalFW"></elevenlabs-convai>`,
      }}
    />
  );
}
