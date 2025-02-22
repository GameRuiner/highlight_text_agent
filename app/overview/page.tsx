export default function Overview() {
  return (
    <>
      <main className="fern-guide-layout">
        <article className="fern-layout-content max-w-content-width">
          <header className="mb-8">
            <div className="space-y-1">
              <div>
                <span className="fern-breadcrumb">
                  <a
                    className="fern-breadcrumb-item"
                    href="/docs/conversational-ai/overview"
                  >
                    GET STARTED
                  </a>
                </span>
              </div>
              <h1 className="fern-page-heading">
                <p>Conversational AI overview</p>
              </h1>
            </div>
            <div className="prose-p:t-muted mt-2 leading-7">
              <p>Deploy customized, conversational voice agents in minutes.</p>
            </div>
          </header>
          <div className="prose dark:prose-invert prose-h1:mt-[1.5em] first:prose-h1:mt-0 max-w-full break-words">
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%"
              }}
            >
              <iframe
                data-state="closed"
                src="https://player.vimeo.com/video/1029660636"
                frameBorder={0}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                className="aspect-video w-full rounded-lg"
                allow="autoplay; fullscreen; picture-in-picture"
              />
            </div>
            <h2 id="what-is-conversational-ai" data-state="closed">
              What is Conversational AI?
            </h2>
            <p>
              ElevenLabs{" "}
              <a
                className="fern-mdx-link"
                href="https://elevenlabs.io/conversational-ai"
              >
                Conversational AI
              </a>{" "}
              is a platform for deploying customized, conversational voice agents.
              Built in response to our customers’ needs, our platform eliminates
              months of development time typically spent building conversation
              stacks from scratch. It combines these building blocks:
            </p>
            <div className="my-6 grid gap-4 first:mt-0 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              <div className="fern-card not-prose relative block rounded-xl border p-6 text-base">
                <div className="flex items-start flex-col space-y-3">
                  <div className="w-full space-y-1 overflow-hidden">
                    <div className="t-default text-base font-semibold">
                      Language model
                    </div>
                    <div className="t-muted">
                      <p>
                        Choose from Gemini, Claude, OpenAI and more, or bring your
                        own.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fern-card not-prose relative block rounded-xl border p-6 text-base">
                <div className="flex items-start flex-col space-y-3">
                  <div className="w-full space-y-1 overflow-hidden">
                    <div className="t-default text-base font-semibold">
                      Text to speech
                    </div>
                    <div className="t-muted">
                      <p>
                        Our low latency, human-like TTS across 5k+ voices and 31
                        languages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fern-card not-prose relative block rounded-xl border p-6 text-base">
                <div className="flex items-start flex-col space-y-3">
                  <div className="w-full space-y-1 overflow-hidden">
                    <div className="t-default text-base font-semibold">
                      Turn taking
                    </div>
                    <div className="t-muted">
                      <p>
                        Our custom turn taking and interruption detection service
                        that feels human.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Altogether it is a highly composable AI Voice agent solution that can
              scale to thousands of calls per day. With
              <a
                className="fern-mdx-link"
                href="/docs/conversational-ai/customization/tools"
              >
                server
              </a>{" "}
              &amp;{" "}
              <a
                className="fern-mdx-link"
                href="/docs/conversational-ai/customization/client-tools"
              >
                client side
              </a>{" "}
              tools,{" "}
              <a
                className="fern-mdx-link"
                href="/docs/conversational-ai/customization/knowledge-base"
              >
                knowledge
              </a>{" "}
              bases,{" "}
              <a
                className="fern-mdx-link"
                href="/docs/conversational-ai/customization/dynamic-variables"
              >
                dynamic
              </a>{" "}
              agent instantiation and{" "}
              <a
                className="fern-mdx-link"
                href="/docs/conversational-ai/customization/overrides"
              >
                overrides
              </a>
              , plus built-in monitoring, it’s the complete developer toolkit.
            </p>
            <div className="fern-card not-prose relative block rounded-xl border p-6 text-base">
              <div className="flex items-start flex-col space-y-3">
                <div className="w-full space-y-1 overflow-hidden">
                  <div className="t-default text-base font-semibold">Pricing</div>
                  <div className="t-muted">
                    <p>
                      15 minutes to get started on the free plan. Get 13,750 minutes
                      included on the Business plan at $0.08 per minute on the
                      Business plan, with extra minutes billed at $0.08, as well as
                      significantly discounted pricing at higher volumes.
                    </p>
                    <br />
                    <p>
                      <strong className="font-semibold">
                        Setup &amp; Prompt Testing
                      </strong>
                      : billed at half the cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 id="pricing-tiers" data-state="closed">
              Pricing tiers
            </h2>
            <div dir="ltr" data-orientation="horizontal">
              <div
                role="tablist"
                aria-orientation="horizontal"
                className="border-default mb-6 mt-4 flex gap-4 border-b first:-mt-3"
                tabIndex={0}
                data-orientation="horizontal"
                style={{ outline: "currentcolor" }}
              >
                <h6
                  className="text-default scroll-mt-content-padded hover:border-default data-[state=active]:t-accent data-[state=active]:border-accent -mb-px flex max-w-max cursor-pointer whitespace-nowrap border-b border-transparent pb-2.5 pt-3 text-sm font-semibold leading-6"
                  id="in-minutes"
                  // type="button"
                  role="tab"
                  aria-selected="true"
                  aria-controls="radix-:r9:-content-in-minutes"
                  data-state="active"
                  tabIndex={-1}
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  In Minutes
                </h6>
                <h6
                  className="text-default scroll-mt-content-padded hover:border-default data-[state=active]:t-accent data-[state=active]:border-accent -mb-px flex max-w-max cursor-pointer whitespace-nowrap border-b border-transparent pb-2.5 pt-3 text-sm font-semibold leading-6"
                  id="in-credits"
                  // type="button"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-:r9:-content-in-credits"
                  data-state="inactive"
                  tabIndex={-1}
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  In Credits
                </h6>
              </div>
              <div
                data-state="active"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:r9:-trigger-in-minutes"
                id="radix-:r9:-content-in-minutes"
                tabIndex={0}
                className="border:content-[''] before:mb-4 before:block"
                style={{ animationDuration: "0s" }}
              >
                <div className="fern-table-root not-prose" data-state="closed">
                  <div
                    dir="ltr"
                    className="fern-scroll-area"
                    style={{ position: "relative" }}
                  >
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                [data-radix-scroll-area-viewport] {\n                  scrollbar-width: none;\n                  -ms-overflow-style: none;\n                  -webkit-overflow-scrolling: touch;\n                }\n\n                [data-radix-scroll-area-viewport]::-webkit-scrollbar {\n                  display: none\n                }\n              "
                      }}
                    />
                    <div
                      data-radix-scroll-area-viewport=""
                      className="fern-scroll-area-viewport"
                      data-scrollbars="both"
                      style={{ overflow: "scroll" }}
                    >
                      <div style={{ minWidth: "100%", display: "table" }}>
                        <table className="fern-table">
                          <thead>
                            <tr>
                              <th>Tier</th>
                              <th>Price</th>
                              <th>Minutes included</th>
                              <th>Cost per extra minute</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Free</td>
                              <td>$0</td>
                              <td>15</td>
                              <td>Unavailable</td>
                            </tr>
                            <tr>
                              <td>Starter</td>
                              <td>$5</td>
                              <td>50</td>
                              <td>Unavailable</td>
                            </tr>
                            <tr>
                              <td>Creator</td>
                              <td>$22</td>
                              <td>250</td>
                              <td>~$0.12</td>
                            </tr>
                            <tr>
                              <td>Pro</td>
                              <td>$99</td>
                              <td>1100</td>
                              <td>~$0.11</td>
                            </tr>
                            <tr>
                              <td>Scale</td>
                              <td>$330</td>
                              <td>3,600</td>
                              <td>~$0.10</td>
                            </tr>
                            <tr>
                              <td>Business</td>
                              <td>$1,320</td>
                              <td>13,750</td>
                              <td>$0.08 (annual), $0.096 (monthly)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:r9:-trigger-in-credits"
                // hidden=""
                id="radix-:r9:-content-in-credits"
                tabIndex={0}
                className="border:content-[''] before:mb-4 before:block"
              />
            </div>
            <div className="mb-6 mt-4 rounded-lg p-4 first:mt-0 callout-outlined-info">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 w-4">
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className="size-icon-md text-intent-info"
                  >
                    <path
                      d="M9.5 14.5L3 21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.00007 9.48528L14.1925 18.6777L15.8895 16.9806L15.4974 13.1944L21.0065 8.5211L15.1568 2.67141L10.4834 8.18034L6.69713 7.78823L5.00007 9.48528Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="prose prose-sm dark:prose-invert -my-4 flex-1 overflow-x-auto before:mb-4 before:block after:mt-4 after:block">
                  <div className="text-intent-info">
                    <h5 className="leading-snug" />
                    <p>
                      Today we’re covering the LLM costs, though these will be
                      passed through to customers in the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 id="models" data-state="closed">
              Models
            </h2>
            <p>
              Currently, the following models are natively supported and can be
              configured via the agent settings:
            </p>
            <ul className="mb-3 list-outside list-disc space-y-2">
              <li className="">Gemini 2.0 Flash</li>
              <li className="">Gemini 1.5 Flash</li>
              <li className="">Gemini 1.5 Pro</li>
              <li className="">Gemini 1.0 Pro</li>
              <li className="">GPT-4o Mini</li>
              <li className="">GPT-4o</li>
              <li className="">GPT-4 Turbo</li>
              <li className="">GPT-3.5 Turbo</li>
              <li className="">Claude 3.5 Sonnet</li>
              <li className="">Claude 3 Haiku</li>
            </ul>
            <p>
              <span aria-owns="rmiz-modal-7cf81e7803a8" data-rmiz="">
                <span data-rmiz-content="found" style={{ visibility: "visible" }}>
                  <img
                    alt="Supported models"
                    loading="lazy"
                    width={1983}
                    height={1115}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent", aspectRatio: "1.778475 / 1" }}
                    srcSet="https://app.buildwithfern.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fhttps%3A%2F%2Felevenlabs.docs.buildwithfern.com%2Fdocs%2F2025-02-22T07%3A18%3A06.652Z%2Fassets%2Fimages%2Fconversational-ai%2Fllms.png&w=2048&q=75&dpl=dpl_AcDEc7EsRzaXsagj4fNbc632oZNv 1x, https://app.buildwithfern.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fhttps%3A%2F%2Felevenlabs.docs.buildwithfern.com%2Fdocs%2F2025-02-22T07%3A18%3A06.652Z%2Fassets%2Fimages%2Fconversational-ai%2Fllms.png&w=3840&q=75&dpl=dpl_AcDEc7EsRzaXsagj4fNbc632oZNv 2x"
                    src="https://files.buildwithfern.com/https://elevenlabs.docs.buildwithfern.com/docs/2025-02-22T07:18:06.652Z/assets/images/conversational-ai/llms.png"
                  />
                </span>
                <span
                  data-rmiz-ghost=""
                  style={{ height: 396, left: 263, width: 704, top: 2495 }}
                >
                  <button
                    aria-label="Expand image: Supported models"
                    data-rmiz-btn-zoom=""
                    type="button"
                  >
                    <svg
                      aria-hidden="true"
                      data-rmiz-btn-zoom-icon="true"
                      fill="currentColor"
                      focusable="false"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"></path>
                    </svg>
                  </button>
                </span>
              </span>
            </p>
            <p>
              You can start with our{" "}
              <a className="fern-mdx-link" href="https://elevenlabs.io/app/sign-up">
                free tier
              </a>
              , which includes 15 minutes of conversation per month.
            </p>
            <p>
              Need more? Upgrade to a{" "}
              <a className="fern-mdx-link" href="https://elevenlabs.io/pricing">
                paid plan
              </a>{" "}
              instantly - no sales calls required. For enterprise usage (6+ hours of
              daily conversation),{" "}
              <a
                className="fern-mdx-link"
                href="https://elevenlabs.io/contact-sales"
              >
                contact our sales team
              </a>{" "}
              for custom pricing tailored to your needs.
            </p>
            <h2 id="popular-applications" data-state="closed">
              Popular applications
            </h2>
            <p>
              Companies and creators use our Conversational AI orchestration
              platform to create:
            </p>
            <ul className="mb-3 list-outside list-disc space-y-2">
              <li className="">
                <strong className="font-semibold">Customer service</strong>:
                Assistants trained on company documentation that can handle customer
                queries, troubleshoot issues, and provide 24/7 support in multiple
                languages.
              </li>
              <li className="">
                <strong className="font-semibold">Virtual assistants</strong>:
                Assistants trained to manage scheduling, set reminders, look up
                information, and help users stay organized throughout their day.
              </li>
              <li className="">
                <strong className="font-semibold">Retail support</strong>:
                Assistants that help customers find products, provide personalized
                recommendations, track orders, and answer product-specific
                questions.
              </li>
              <li className="">
                <strong className="font-semibold">Personalized learning</strong>:
                Assistants that help students learn new topics &amp; enhance reading
                comprehension by speaking with books and{" "}
                <a
                  className="fern-mdx-link"
                  href="https://elevenlabs.io/blog/time-brings-conversational-ai-to-journalism"
                >
                  articles
                </a>
                .
              </li>
            </ul>
            <div className="mb-6 mt-4 rounded-lg p-4 first:mt-0 callout-outlined-info">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 w-4">
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className="size-icon-md text-intent-info"
                  >
                    <path
                      d="M9.5 14.5L3 21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.00007 9.48528L14.1925 18.6777L15.8895 16.9806L15.4974 13.1944L21.0065 8.5211L15.1568 2.67141L10.4834 8.18034L6.69713 7.78823L5.00007 9.48528Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="prose prose-sm dark:prose-invert -my-4 flex-1 overflow-x-auto before:mb-4 before:block after:mt-4 after:block">
                  <div className="text-intent-info">
                    <h5 className="leading-snug" />
                    <p>
                      Ready to get started? Check out our{" "}
                      <a
                        className="fern-mdx-link"
                        href="/docs/conversational-ai/quickstart"
                      >
                        quickstart guide
                      </a>{" "}
                      to create your first AI agent in minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 id="faq" data-state="closed">
              FAQ
            </h2>
            <div className="fern-accordion m-mdx" data-orientation="vertical">
              <details
                data-state="closed"
                data-orientation="vertical"
                className="fern-accordion-item scroll-mt-content-padded"
                id="concurrency-limits"
              >
                <summary
                  // type="button"
                  aria-controls="radix-:rk:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:rj:"
                  className="fern-accordion-trigger"
                  data-radix-collection-item=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right fern-accordion-trigger-arrow"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  <h6 className="fern-accordion-trigger-title">
                    Concurrency limits
                  </h6>
                </summary>
                <div
                  data-state="closed"
                  id="radix-:rk:"
                  role="region"
                  aria-labelledby="radix-:rj:"
                  data-orientation="vertical"
                  className="fern-accordion-content"
                  style={{ transitionDuration: "0s", animationName: "none" }}
                >
                  <div className="m-5">
                    <p>Plan limits</p>
                    <p>
                      Your subscription plan determines how many calls can be made
                      simultaneously.
                    </p>
                    <div className="fern-table-root not-prose" data-state="closed">
                      <div
                        dir="ltr"
                        className="fern-scroll-area"
                        style={{ position: "relative" }}
                      >
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                    [data-radix-scroll-area-viewport] {\n                      scrollbar-width: none;\n                      -ms-overflow-style: none;\n                      -webkit-overflow-scrolling: touch;\n                    }\n\n                    [data-radix-scroll-area-viewport]::-webkit-scrollbar {\n                      display: none\n                    }\n                  "
                          }}
                        />
                        <div
                          data-radix-scroll-area-viewport=""
                          className="fern-scroll-area-viewport"
                          data-scrollbars="both"
                          style={{ overflow: "scroll" }}
                        >
                          <div style={{ minWidth: "100%", display: "table" }}>
                            <table className="fern-table">
                              <thead>
                                <tr>
                                  <th>Plan</th>
                                  <th>Concurrency limit</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Free</td>
                                  <td>4</td>
                                </tr>
                                <tr>
                                  <td>Starter</td>
                                  <td>6</td>
                                </tr>
                                <tr>
                                  <td>Creator</td>
                                  <td>10</td>
                                </tr>
                                <tr>
                                  <td>Pro</td>
                                  <td>20</td>
                                </tr>
                                <tr>
                                  <td>Scale</td>
                                  <td>30</td>
                                </tr>
                                <tr>
                                  <td>Business</td>
                                  <td>30</td>
                                </tr>
                                <tr>
                                  <td>Enterprise</td>
                                  <td>Elevated</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-6 mt-4 rounded-lg p-4 first:mt-0 callout-outlined-info">
                      <div className="flex items-start space-x-3">
                        <div className="mt-0.5 w-4">
                          <svg
                            width="1.5em"
                            height="1.5em"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="currentColor"
                            className="size-icon-md text-intent-info"
                          >
                            <path
                              d="M9.5 14.5L3 21"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M5.00007 9.48528L14.1925 18.6777L15.8895 16.9806L15.4974 13.1944L21.0065 8.5211L15.1568 2.67141L10.4834 8.18034L6.69713 7.78823L5.00007 9.48528Z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="prose prose-sm dark:prose-invert -my-4 flex-1 overflow-x-auto before:mb-4 before:block after:mt-4 after:block">
                          <div className="text-intent-info">
                            <h5 className="leading-snug" />
                            <p>
                              To increase your concurrency limit{" "}
                              <a
                                className="fern-mdx-link"
                                href="https://elevenlabs.io/pricing"
                              >
                                upgrade your subscription plan
                              </a>
                              or{" "}
                              <a
                                className="fern-mdx-link"
                                href="https://elevenlabs.io/contact-sales"
                              >
                                contact sales
                              </a>{" "}
                              to discuss enterprise plans.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
              <details
                data-state="closed"
                data-orientation="vertical"
                className="fern-accordion-item scroll-mt-content-padded"
                id="supported-audio-formats"
              >
                <summary
                  // type="button"
                  aria-controls="radix-:rq:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:rp:"
                  className="fern-accordion-trigger"
                  data-radix-collection-item=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right fern-accordion-trigger-arrow"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  <h6 className="fern-accordion-trigger-title">
                    Supported audio formats
                  </h6>
                </summary>
                <div
                  data-state="closed"
                  id="radix-:rq:"
                  role="region"
                  aria-labelledby="radix-:rp:"
                  data-orientation="vertical"
                  className="fern-accordion-content"
                  style={{ transitionDuration: "0s", animationName: "none" }}
                >
                  <div className="m-5">
                    <p>
                      The following audio output formats are supported in the
                      Conversational AI platform:
                    </p>
                    <ul className="mb-3 list-outside list-disc space-y-2">
                      <li className="">
                        PCM (8 kHz / 16 kHz / 22.05 kHz / 24 kHz / 44.1 kHz)
                      </li>
                      <li className="">μ-law 8000Hz</li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>
          </div>
          <footer className="mt-12">
            <div className="flex gap-4 max-sm:flex-col sm:justify-between">
              <div>
                <div>
                  <div className="flex w-full flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center justify-start gap-2">
                      <span className="t-muted text-sm font-medium">
                        Was this page helpful?
                      </span>
                      <span className="fern-button-group">
                        <button
                          tabIndex={0}
                          data-state="closed"
                          aria-disabled="false"
                          data-selected="false"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:Rpat8um:"
                          className="fern-button outlined normal"
                        >
                          <span className="fern-button-content">
                            <svg
                              width="1.5em"
                              height="1.5em"
                              strokeWidth="1.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              color="currentColor"
                              className=""
                            >
                              <path
                                d="M16.4724 20H4.1C3.76863 20 3.5 19.7314 3.5 19.4V9.6C3.5 9.26863 3.76863 9 4.1 9H6.86762C7.57015 9 8.22116 8.6314 8.5826 8.02899L11.293 3.51161C11.8779 2.53688 13.2554 2.44422 13.9655 3.33186C14.3002 3.75025 14.4081 4.30635 14.2541 4.81956L13.2317 8.22759C13.1162 8.61256 13.4045 9 13.8064 9H18.3815C19.7002 9 20.658 10.254 20.311 11.5262L18.4019 18.5262C18.1646 19.3964 17.3743 20 16.4724 20Z"
                                stroke="currentColor"
                                strokeLinecap="round"
                              />
                              <path
                                d="M7 20L7 9"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="fern-button-text">Yes</span>
                          </span>
                        </button>
                        <button
                          tabIndex={0}
                          data-state="closed"
                          aria-disabled="false"
                          data-selected="false"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:R19at8um:"
                          className="fern-button outlined normal"
                        >
                          <span className="fern-button-content">
                            <svg
                              width="1.5em"
                              height="1.5em"
                              strokeWidth="1.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              color="currentColor"
                              className=""
                            >
                              <path
                                d="M16.4724 3.5H4.1C3.76863 3.5 3.5 3.76863 3.5 4.1V13.9C3.5 14.2314 3.76863 14.5 4.1 14.5H6.86762C7.57015 14.5 8.22116 14.8686 8.5826 15.471L11.293 19.9884C11.8779 20.9631 13.2554 21.0558 13.9655 20.1681C14.3002 19.7497 14.4081 19.1937 14.2541 18.6804L13.2317 15.2724C13.1162 14.8874 13.4045 14.5 13.8064 14.5H18.3815C19.7002 14.5 20.658 13.246 20.311 11.9738L18.4019 4.97376C18.1646 4.10364 17.3743 3.5 16.4724 3.5Z"
                                stroke="currentColor"
                                strokeLinecap="round"
                              />
                              <path
                                d="M7 14.5L7 3.5"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span className="fern-button-text">No</span>
                          </span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <a
                tabIndex={0}
                aria-disabled="false"
                data-state="off"
                className="fern-button outlined normal"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/elevenlabs/elevenlabs-docs/blob/main/fern/conversational-ai/pages/overview.mdx?plain=1"
              >
                <span className="fern-button-content">
                  <svg
                    width="1.5em"
                    height="1.5em"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                  >
                    <path
                      d="M3 21L12 21H21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.2218 5.82839L15.0503 2.99996L20 7.94971L17.1716 10.7781M12.2218 5.82839L6.61522 11.435C6.42769 11.6225 6.32233 11.8769 6.32233 12.1421L6.32233 16.6776L10.8579 16.6776C11.1231 16.6776 11.3774 16.5723 11.565 16.3847L17.1716 10.7781M12.2218 5.82839L17.1716 10.7781"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="fern-button-text">Edit this page</span>
                </span>
              </a>
            </div>
            <div className="not-prose grid grid-cols-1">
              <a
                className="fern-card interactive my-12 flex flex-1 items-center rounded-xl p-6"
                href="/docs/conversational-ai/quickstart"
              >
                <div className="flex-1">
                  <div className="text-base font-semibold">Quickstart</div>
                </div>
                <span className="sm-4 t-muted sm:border-default inline-flex items-center gap-2 py-2.5 text-sm sm:ml-6 sm:border-l sm:pl-6">
                  <span className="hidden leading-none sm:inline">Up Next</span>
                  <svg
                    width="1.5em"
                    height="1.5em"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className="size-icon"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </footer>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      #builtwithfern {\n        display: flex !important;\n        opacity: 100% !important;\n      }\n\n      #builtwithfern * {\n        display: initial !important;\n        width: unset !important;\n        opacity: 100% !important;\n      }\n\n      #builtwithfern,\n      #builtwithfern * {\n        visibility: initial !important;\n        overflow: visible !important;\n        position: relative !important;\n        left: unset !important;\n        top: unset !important;\n        right: unset !important;\n        bottom: unset !important;\n        inset: unset !important;\n      }\n    "
            }}
          />
          <a
            id="builtwithfern"
            className="mx-auto flex items-baseline gap-1 my-8 w-fit"
            href="https://buildwithfern.com/?utm_campaign=buildWith&utm_medium=docs&utm_source=elevenlabs.io"
            data-state="closed"
          >
            <span className="t-muted whitespace-nowrap text-xs">Built with</span>
            <svg
              viewBox="0 0 604 164"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition"
              style={{ aspectRatio: "604/164", height: 14, marginTop: "-2px" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M295.294 0H255.861H255.836C234.047 0 221.437 11.4661 221.437 33.483V47.2372H193.242V75.2033H221.437V160.5H253.547V75.2033H288.404V47.2372H253.547V37.3728C253.547 30.7118 257.208 27.9661 263.87 27.9661H295.294V0ZM345.26 43.8081C311.777 43.8081 288.844 67.1979 288.844 103.198H288.87C288.87 139.884 311.802 163.96 346.43 163.96C375.311 163.96 392.727 149.291 399.388 126.816H366.591C363.591 133.02 356.955 137.367 346.633 137.367C331.277 137.367 321.87 129.562 320.497 115.35H400.761C401.219 110.545 401.447 106.401 401.447 102.283C401.447 66.2826 378.744 43.8081 345.26 43.8081ZM369.108 90.5877V91.0453H320.269C321.184 77.7487 329.675 69.0284 345.26 69.0284C360.845 69.0284 369.108 77.7487 369.108 90.5877ZM412.668 47.2321H440.863V67.1898C443.609 54.3508 452.787 47.2321 467.227 47.2321H487.414V51.122C487.414 64.4186 476.634 75.1982 463.338 75.1982C450.727 75.1982 444.753 81.6304 444.753 94.4694V160.52H412.642V47.2321H412.668ZM526.939 47.24H498.744H498.719V160.503H530.829V96.0789C530.829 81.6382 539.321 72.6891 552.16 72.6891C564.999 72.6891 571.889 80.0366 571.889 95.1637V160.528H604V91.7315C604 61.7061 586.559 43.8078 558.821 43.8078C545.753 43.8078 533.601 48.8417 526.939 58.7061V47.24Z"
                className="fill-grayscale-a10"
              />
              <path
                d="M149.383 80.2222C138.594 71.101 122.341 67.4445 107.936 78.0925C107.273 78.5747 106.449 77.751 106.952 77.1081C110.367 72.7082 114.325 67.9668 117.519 63.2053C120.774 58.3233 125.636 54.8275 131.241 53.1198C161.076 44.079 152.116 0 152.116 0C152.116 0 106.027 2.97342 111.713 42.7329C112.657 49.3829 110.889 56.1535 106.731 61.4374C101.628 67.8865 95.7008 74.0543 91.4014 78.5144C90.4973 79.4386 88.9705 78.5546 89.3321 77.309C93.4909 63.3058 96.5246 41.648 82.1195 27.685L61.848 10.849L57.9504 15.9922C46.3581 31.2812 49.7534 52.8385 65.0625 64.4108C73.8422 71.0407 77.8201 78.2533 77.1973 86.169C76.8156 90.9104 74.6659 95.3505 71.4514 98.8663C65.4041 105.496 59.7586 112.608 55.3989 120.846C54.7962 121.991 53.0483 121.549 53.1086 120.243C53.7314 106.641 52.4255 75.983 29.5221 65.0336L3.88635 55.1289L1.89737 61.0556C-4.55174 80.182 5.99588 100.614 25.1021 107.104C41.7171 112.749 47.6439 123.457 43.6458 139.51C43.465 140.092 40.572 156.627 40.9738 163.96H59.3969C60.0198 152.589 71.9536 145.115 82.3003 149.756C85.2135 151.062 88.207 152.93 91.2809 155.341C107.755 168.32 132.025 165.246 144.983 148.752L148.68 144.05L125.375 127.315C109.383 114.738 88.0463 120.424 72.255 131.192C70.929 132.096 69.2414 130.65 69.9847 129.203C89.0709 91.7542 113.883 91.8346 123.607 100.152C135.4 110.238 153.261 108.429 163.266 96.5961L166.139 93.2007L149.363 80.2222H149.383Z"
                className="fill-grayscale-a10"
              />
            </svg>
          </a>
        </article>
      </main>
      <main className="fern-guide-layout"></main>
    </>

  );
}
