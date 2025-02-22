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
                    href="/overview"
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
            {/*<p>
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
            </p> */}
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
                        href="/quickstart"
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
        </article>
      </main>
    </>

  );
}
