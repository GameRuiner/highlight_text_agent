'use client';

import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AIWidget() {
  const router = useRouter();
  const widgetRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    console.log("new article set")
    if (widgetRef.current) {
      const article = document.querySelector('article');
      const articleText = article ? article.textContent?.trim() || '' : '';
      const dynamicVars = {
        article: articleText,
      };
      widgetRef.current.setAttribute('dynamic-variables', JSON.stringify(dynamicVars));
    }
  }, [pathname]);

  useEffect(() => {
    console.log("Widget redefined")
    const widget = document.querySelector(
      'elevenlabs-convai'
    ) as HTMLElement | null;
    if (widget) {
      widgetRef.current = widget;
      widget.addEventListener('elevenlabs-convai:call', (event) => {
        const customEvent = event as CustomEvent;
        customEvent.detail.config.clientTools = {
          redirectToDifferentArticle: async ({ url }: { url: string }) => {
            console.log('redirectToDifferentArticle', url)
            const slug = url.split("/").at(-1) || '';
            console.log(slug);
            router.replace(slug);
            return 'Redirected to URL';
          },
          hightlightTextOnPage: async ({
            textFragmentDirective,
          }: {
            textFragmentDirective: string;
          }) => {
            console.log('hightlightTextOnPage', textFragmentDirective)
            if (!textFragmentDirective.startsWith('#:~:text=')) {
              textFragmentDirective = '#:~:text=' + textFragmentDirective;
            }
            window.location.hash = textFragmentDirective;
            return 'Text Highlighted';
          },
        };
      });
    }
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<elevenlabs-convai agent-id="Y2wSS1WxtpwqBptjalFW"></elevenlabs-convai>`,
      }}
    />
  );
}
