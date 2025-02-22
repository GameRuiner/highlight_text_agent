export default function Quickstart() {
  return (
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
              <p>Quickstart</p>
            </h1>
          </div>
          <div className="prose-p:t-muted mt-2 leading-7">
            <p>Build your first conversational AI voice agent in 5 minutes.</p>
          </div>
        </header>
        <div className="prose dark:prose-invert prose-h1:mt-[1.5em] first:prose-h1:mt-0 max-w-full break-words">
          <p>
            In this guide, you’ll learn how to create your first Conversational AI
            voice agent. This will serve as a foundation for building conversational
            workflows tailored to your business use cases.
          </p>
          <h2 id="getting-started" data-state="closed">
            Getting started
          </h2>
          <p>
            Conversational AI agents are managed through the{" "}
            <a
              className="fern-mdx-link"
              href="https://elevenlabs.io/app/conversational-ai"
            >
              ElevenLabs dashboard
            </a>
            . This is used to:
          </p>
          <ul className="mb-3 list-outside list-disc space-y-2">
            <li className="">Create and manage AI assistants</li>
            <li className="">
              Configure voice settings and conversation parameters
            </li>
            <li className="">
              Equip the agent with{" "}
              <a
                className="fern-mdx-link"
                href="/docs/conversational-ai/customization/tools"
              >
                tools
              </a>{" "}
              and a{" "}
              <a
                className="fern-mdx-link"
                href="/docs/conversational-ai/customization/knowledge-base"
              >
                knowledge base
              </a>
            </li>
            <li className="">Review conversation analytics and transcripts</li>
            <li className="">Manage API keys and integration settings</li>
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
                    The web dashboard uses our{" "}
                    <a
                      className="fern-mdx-link"
                      href="/docs/conversational-ai/libraries/react"
                    >
                      Web SDK
                    </a>{" "}
                    under the hood to handle real-time conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                id="build-a-support-agent"
                // type="button"
                role="tab"
                aria-selected="true"
                aria-controls="radix-:r1d:-content-build-a-support-agent"
                data-state="active"
                tabIndex={-1}
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Build a support agent
              </h6>
              <h6
                className="text-default scroll-mt-content-padded hover:border-default data-[state=active]:t-accent data-[state=active]:border-accent -mb-px flex max-w-max cursor-pointer whitespace-nowrap border-b border-transparent pb-2.5 pt-3 text-sm font-semibold leading-6"
                id="build-a-restaurant-ordering-agent"
                // type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-:r1d:-content-build-a-restaurant-ordering-agent"
                data-state="inactive"
                tabIndex={-1}
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Build a restaurant ordering agent
              </h6>
            </div>
            <div
              data-state="active"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r1d:-trigger-build-a-support-agent"
              id="radix-:r1d:-content-build-a-support-agent"
              tabIndex={0}
              className="border:content-[''] before:mb-4 before:block"
              style={{ animationDuration: "0s" }}
            >
              <h2 id="overview" data-state="closed">
                Overview
              </h2>
              <p>
                In this guide, we’ll create a conversational support assistant
                capable of answering questions about your product, documentation, or
                service. This assistant can be embedded into your website or app to
                provide real-time support to your customers.
              </p>
              <figure className="not-prose fern-card relative mb-6 mt-4 overflow-hidden rounded-xl p-2 first:mt-0 bg-tag-default-soft">
                <div className="relative flex justify-center overflow-hidden rounded-lg shadow-sm">
                  <p>
                    <span aria-owns="rmiz-modal-3317eb28c838" data-rmiz="">
                      <span
                        data-rmiz-content="found"
                        style={{ visibility: "visible" }}
                      >
                        <img
                          alt="Conversational AI widget"
                          loading="lazy"
                          width={1628}
                          height={916}
                          decoding="async"
                          data-nimg={1}
                          style={{
                            color: "transparent",
                            aspectRatio: "1.777293 / 1"
                          }}
                          srcSet="https://app.buildwithfern.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fhttps%3A%2F%2Felevenlabs.docs.buildwithfern.com%2Fdocs%2F2025-02-22T07%3A18%3A06.652Z%2Fassets%2Fimages%2Fconversational-ai%2Fwidget.png&w=1920&q=75&dpl=dpl_AcDEc7EsRzaXsagj4fNbc632oZNv 1x, https://app.buildwithfern.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fhttps%3A%2F%2Felevenlabs.docs.buildwithfern.com%2Fdocs%2F2025-02-22T07%3A18%3A06.652Z%2Fassets%2Fimages%2Fconversational-ai%2Fwidget.png&w=3840&q=75&dpl=dpl_AcDEc7EsRzaXsagj4fNbc632oZNv 2x"
                          src="https://files.buildwithfern.com/https://elevenlabs.docs.buildwithfern.com/docs/2025-02-22T07:18:06.652Z/assets/images/conversational-ai/widget.png"
                        />
                      </span>
                      <span
                        data-rmiz-ghost=""
                        style={{ height: 386, left: 0, width: 686, top: 0 }}
                      >
                        <button
                          aria-label="Expand image: Conversational AI widget"
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
                </div>
                <figcaption className="t-muted relative mt-3 flex justify-center px-8 pb-2 pt-0 text-sm">
                  The assistant at the bottom right corner of this page is capable
                  of answering questions about ElevenLabs, navigating pages &amp;
                  taking you to external resources.
                </figcaption>
              </figure>
              <h3 id="prerequisites" data-state="closed">
                Prerequisites
              </h3>
              <ul className="mb-3 list-outside list-disc space-y-2">
                <li className="">
                  An{" "}
                  <a
                    className="fern-mdx-link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.elevenlabs.io/"
                  >
                    ElevenLabs account
                    <svg
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="currentColor"
                      className="external-link-icon"
                    >
                      <path
                        d="M21 3L15 3M21 3L12 12M21 3V9"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11"
                        stroke="currentColor"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <h3 id="assistant-setup" data-state="closed">
                Assistant setup
              </h3>
              <div className="fern-steps">
                <div
                  className="fern-step scroll-mt-content-padded"
                  id="sign-in-to-elevenlabs"
                >
                  <a
                    className="fern-anchor"
                    tabIndex={-1}
                    href="/docs/conversational-ai/quickstart#sign-in-to-elevenlabs"
                  >
                    <span className="fern-anchor-icon">
                      <span>1</span>
                    </span>
                  </a>
                  <h3>Sign in to ElevenLabs</h3>
                  <p>
                    Go to{" "}
                    <a
                      className="fern-mdx-link"
                      href="https://elevenlabs.io/sign-up"
                    >
                      elevenlabs.io
                    </a>{" "}
                    and sign in to your account.
                  </p>
                </div>
                <div
                  className="fern-step scroll-mt-content-padded"
                  id="create-a-new-assistant"
                >
                  <a
                    className="fern-anchor"
                    tabIndex={-1}
                    href="/docs/conversational-ai/quickstart#create-a-new-assistant"
                  >
                    <span className="fern-anchor-icon">
                      <span>2</span>
                    </span>
                  </a>
                  <h3>Create a new assistant</h3>
                  <p>
                    In the{" "}
                    <strong className="font-semibold">ElevenLabs Dashboard</strong>,
                    create a new assistant by entering a name and selecting the{" "}
                    <code>Blank template</code> option.
                  </p>
                  <figure className="not-prose fern-card relative mb-6 mt-4 overflow-hidden rounded-xl p-2 first:mt-0 bg-tag-default-soft">
                    <div className="relative flex justify-center overflow-hidden rounded-lg shadow-sm">
                      <p>
                        <span aria-owns="rmiz-modal-43184eb8608a" data-rmiz="">
                          <span
                            data-rmiz-content="found"
                            style={{ visibility: "visible" }}
                          >
                            <img
                              alt="Dashboard"
                              loading="lazy"
                              width={1796}
                              height={1080}
                              decoding="async"
                              data-nimg={1}
                              style={{
                                color: "transparent",
                                aspectRatio: "1.662963 / 1"
                              }}
                              src="https://files.buildwithfern.com/https://elevenlabs.docs.buildwithfern.com/docs/2025-02-22T07:18:06.652Z/assets/images/conversational-ai/assistant-create-flow.gif"
                            />
                          </span>
                          <span
                            data-rmiz-ghost=""
                            style={{ height: 390, left: 0, width: 649, top: 0 }}
                          >
                            <button
                              aria-label="Expand image: Dashboard"
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
                    </div>
                    <figcaption className="t-muted relative mt-3 flex justify-center px-8 pb-2 pt-0 text-sm">
                      Creating a new assistant
                    </figcaption>
                  </figure>
                </div>
                <div
                  className="fern-step scroll-mt-content-padded"
                  id="configure-the-assistant-behavior"
                >
                  <a
                    className="fern-anchor"
                    tabIndex={-1}
                    href="/docs/conversational-ai/quickstart#configure-the-assistant-behavior"
                  >
                    <span className="fern-anchor-icon">
                      <span>3</span>
                    </span>
                  </a>
                  <h3>Configure the assistant behavior</h3>
                  <p>
                    Go to the <strong className="font-semibold">Agent</strong> tab
                    to configure the assistant’s behavior. Set the following:
                  </p>
                  <div className="fern-steps">
                    <div
                      className="fern-step scroll-mt-content-padded"
                      id="first-message"
                    >
                      <a
                        className="fern-anchor"
                        tabIndex={-1}
                        href="/docs/conversational-ai/quickstart#first-message"
                      >
                        <span className="fern-anchor-icon">
                          <span>1</span>
                        </span>
                      </a>
                      <h3>First message</h3>
                      <p>
                        This is the first message the assistant will speak out loud
                        when a user starts a conversation.
                      </p>
                      <div className="bg-card after:ring-card-border relative mb-6 mt-4 flex w-full min-w-0 max-w-full flex-col rounded-lg shadow-sm after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:ring-1 after:ring-inset after:content-[''] first:mt-0">
                        <div className="bg-tag-default-soft rounded-t-[inherit]">
                          <div className="shadow-border-default mx-px flex min-h-10 items-center justify-between shadow-[inset_0_-1px_0_0]">
                            <div className="flex min-h-10 overflow-x-auto">
                              <div className="flex items-center px-3 py-1.5">
                                <span className="t-muted rounded text-sm font-semibold">
                                  First message
                                </span>
                              </div>
                            </div>
                            <button
                              tabIndex={0}
                              data-state="closed"
                              aria-disabled="false"
                              className="fern-copy-button group ml-2 mr-1 fern-button minimal normal rounded square"
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
                                    d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                        <pre
                          className="code-block-root not-prose rounded-b-[inherit]"
                          tabIndex={0}
                        >
                          <div
                            dir="ltr"
                            className="fern-scroll-area"
                            style={{ position: "relative" }}
                          >
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                              }}
                            />
                            <div
                              data-radix-scroll-area-viewport=""
                              className="fern-scroll-area-viewport"
                              data-scrollbars="both"
                              style={{ overflow: "scroll", maxHeight: 479 }}
                            >
                              <div style={{ minWidth: "100%", display: "table" }}>
                                <code className="code-block text-sm">
                                  <div className="code-block-inner">
                                    <table className="code-block-line-group">
                                      <tbody>
                                        <tr className="code-block-line">
                                          <td className="code-block-line-content">
                                            <span className="line">
                                              Hi, this is Alexis from &lt;company
                                              name&gt; support. How can I help you
                                              today?
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </code>
                              </div>
                            </div>
                            <div
                              data-orientation="horizontal"
                              data-state="hidden"
                              className="fern-scroll-area-scrollbar"
                              style={{ position: "absolute", bottom: 0, left: 0 }}
                            >
                              <div
                                data-state="visible"
                                className="fern-scroll-area-thumb"
                                style={{ transform: "translate3d(0px, 0px, 0px)" }}
                              />
                            </div>
                          </div>
                        </pre>
                      </div>
                    </div>
                    <div
                      className="fern-step scroll-mt-content-padded"
                      id="system-prompt"
                    >
                      <a
                        className="fern-anchor"
                        tabIndex={-1}
                        href="/docs/conversational-ai/quickstart#system-prompt"
                      >
                        <span className="fern-anchor-icon">
                          <span>2</span>
                        </span>
                      </a>
                      <h3>System prompt</h3>
                      <p>
                        This prompt guides the assistant’s behavior, tasks, and
                        personality.
                      </p>
                      <p>
                        Customize the following example with your company details:
                      </p>
                      <div className="bg-card after:ring-card-border relative mb-6 mt-4 flex w-full min-w-0 max-w-full flex-col rounded-lg shadow-sm after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:ring-1 after:ring-inset after:content-[''] first:mt-0">
                        <div className="bg-tag-default-soft rounded-t-[inherit]">
                          <div className="shadow-border-default mx-px flex min-h-10 items-center justify-between shadow-[inset_0_-1px_0_0]">
                            <div className="flex min-h-10 overflow-x-auto">
                              <div className="flex items-center px-3 py-1.5">
                                <span className="t-muted rounded text-sm font-semibold">
                                  System prompt
                                </span>
                              </div>
                            </div>
                            <button
                              tabIndex={0}
                              data-state="closed"
                              aria-disabled="false"
                              className="fern-copy-button group ml-2 mr-1 fern-button minimal normal rounded square"
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
                                    d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                        <pre
                          className="code-block-root not-prose rounded-b-[inherit]"
                          tabIndex={0}
                        >
                          <div
                            dir="ltr"
                            className="fern-scroll-area"
                            style={{ position: "relative" }}
                          >
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                              }}
                            />
                            <div
                              data-radix-scroll-area-viewport=""
                              className="fern-scroll-area-viewport"
                              data-scrollbars="both"
                              style={{ overflow: "scroll", maxHeight: 479 }}
                            >
                              <div style={{ minWidth: "100%", display: "table" }}>
                                <code className="code-block text-sm">
                                  <div className="code-block-inner">
                                    <table className="code-block-line-group">
                                      <tbody>
                                        <tr className="code-block-line">
                                          <td className="code-block-line-content">
                                            <span className="line">
                                              You are a friendly and efficient
                                              virtual assistant for [Your Company
                                              Name]. Your role is to assist
                                              customers by answering questions about
                                              the company's products, services, and
                                              documentation. You should use the
                                              provided knowledge base to offer
                                              accurate and helpful responses.
                                            </span>
                                          </td>
                                        </tr>
                                        <tr className="code-block-line">
                                          <td className="code-block-line-content">
                                            <span className="line" />
                                          </td>
                                        </tr>
                                        <tr className="code-block-line">
                                          <td className="code-block-line-content">
                                            <span className="line">Tasks:</span>
                                          </td>
                                        </tr>
                                        <tr className="code-block-line">
                                          <td className="code-block-line-content">
                                            <span className="line">
                                              - Answer Questions: Provide clear and
                                              concise answers based on the available
                                              information.
                                            </span>
                                          </td>
                                        </tr>
                                        <tr className="code-block-line">
                                          <td className="code-block-line-content">
                                            <span className="line">
                                              - Clarify Unclear Requests: Politely
                                              ask for more details if the customer's
                                              question is not clear.
                                            </span>
                                          </td>
                                        </tr>
                                        <tr className="code-block-line">
                                          <td className="code-block-line-content">
                                            <span className="line" />
                                          </td>
                                        </tr>
                                        <tr className="code-block-line">
                                          <td className="code-block-line-content">
                                            <span className="line">
                                              Guidelines:
                                            </span>
                                          </td>
                                        </tr>
                                        <tr className="code-block-line">
                                          <td className="code-block-line-content">
                                            <span className="line">
                                              - Maintain a friendly and professional
                                              tone throughout the conversation.
                                            </span>
                                          </td>
                                        </tr>
                                        <tr className="code-block-line">
                                          <td className="code-block-line-content">
                                            <span className="line">
                                              - Be patient and attentive to the
                                              customer's needs.
                                            </span>
                                          </td>
                                        </tr>
                                        <tr className="code-block-line">
                                          <td className="code-block-line-content">
                                            <span className="line">
                                              - If unsure about any information,
                                              politely ask the customer to repeat or
                                              clarify.
                                            </span>
                                          </td>
                                        </tr>
                                        <tr className="code-block-line">
                                          <td className="code-block-line-content">
                                            <span className="line">
                                              - Avoid discussing topics unrelated to
                                              the company's products or services.
                                            </span>
                                          </td>
                                        </tr>
                                        <tr className="code-block-line">
                                          <td className="code-block-line-content">
                                            <span className="line">
                                              - Aim to provide concise answers.
                                              Limit responses to a couple of
                                              sentences and let the user guide you
                                              on where to provide more detail.
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </code>
                              </div>
                            </div>
                            <div
                              data-orientation="horizontal"
                              data-state="hidden"
                              className="fern-scroll-area-scrollbar"
                              style={{ position: "absolute", bottom: 0, left: 0 }}
                            >
                              <div
                                data-state="visible"
                                className="fern-scroll-area-thumb"
                                style={{ transform: "translate3d(0px, 0px, 0px)" }}
                              />
                            </div>
                          </div>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="fern-step scroll-mt-content-padded"
                  id="add-a-knowledge-base"
                >
                  <a
                    className="fern-anchor"
                    tabIndex={-1}
                    href="/docs/conversational-ai/quickstart#add-a-knowledge-base"
                  >
                    <span className="fern-anchor-icon">
                      <span>4</span>
                    </span>
                  </a>
                  <h3>Add a knowledge base</h3>
                  <p>
                    Go to the{" "}
                    <strong className="font-semibold">Knowledge Base</strong>{" "}
                    section to provide your assistant with context about your
                    business.
                  </p>
                  <p>
                    This is where you can upload relevant documents &amp; links to
                    external resources:
                  </p>
                  <ul className="mb-3 list-outside list-disc space-y-2">
                    <li className="">
                      Include documentation, FAQs, and other resources to help the
                      assistant respond to customer inquiries.
                    </li>
                    <li className="">
                      Keep the knowledge base up-to-date to ensure the assistant
                      provides accurate and current information.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 id="configure-the-voice" data-state="closed">
                Configure the voice
              </h3>
              <div className="fern-steps">
                <div
                  className="fern-step scroll-mt-content-padded"
                  id="select-a-voice"
                >
                  <a
                    className="fern-anchor"
                    tabIndex={-1}
                    href="/docs/conversational-ai/quickstart#select-a-voice"
                  >
                    <span className="fern-anchor-icon">
                      <span>1</span>
                    </span>
                  </a>
                  <h3>Select a voice</h3>
                  <p>
                    In the <strong className="font-semibold">Voice</strong> tab,
                    choose a voice that best matches your assistant from the{" "}
                    <a
                      className="fern-mdx-link"
                      href="https://elevenlabs.io/community"
                    >
                      voice library
                    </a>
                    :
                  </p>
                  <figure className="not-prose fern-card relative mb-6 mt-4 overflow-hidden rounded-xl p-2 first:mt-0 bg-tag-default-soft">
                    <div className="relative flex justify-center overflow-hidden rounded-lg shadow-sm">
                      <p>
                        <span aria-owns="rmiz-modal-7349075fa908" data-rmiz="">
                          <span
                            data-rmiz-content="found"
                            style={{ visibility: "visible" }}
                          >
                            <img
                              alt="Voice settings"
                              loading="lazy"
                              width={2460}
                              height={1384}
                              decoding="async"
                              data-nimg={1}
                              style={{
                                color: "transparent",
                                aspectRatio: "1.777457 / 1"
                              }}
                              srcSet="https://app.buildwithfern.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fhttps%3A%2F%2Felevenlabs.docs.buildwithfern.com%2Fdocs%2F2025-02-22T07%3A18%3A06.652Z%2Fassets%2Fimages%2Fconversational-ai%2Fvoice-settings.jpg&w=3840&q=75&dpl=dpl_AcDEc7EsRzaXsagj4fNbc632oZNv 1x"
                              src="https://files.buildwithfern.com/https://elevenlabs.docs.buildwithfern.com/docs/2025-02-22T07:18:06.652Z/assets/images/conversational-ai/voice-settings.jpg"
                            />
                          </span>
                          <span
                            data-rmiz-ghost=""
                            style={{ height: 365, left: 0, width: 649, top: 0 }}
                          >
                            <button
                              aria-label="Expand image: Voice settings"
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
                    </div>
                  </figure>
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
                          <h5 className="leading-snug" /> Using higher quality
                          voices, models, and LLMs may increase response time. For
                          an optimal customer experience, balance quality and
                          latency based on your assistant’s expected use case.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="fern-step scroll-mt-content-padded"
                  id="testing-your-assistant"
                >
                  <a
                    className="fern-anchor"
                    tabIndex={-1}
                    href="/docs/conversational-ai/quickstart#testing-your-assistant"
                  >
                    <span className="fern-anchor-icon">
                      <span>2</span>
                    </span>
                  </a>
                  <h3>Testing your assistant</h3>
                  <p>
                    Press the{" "}
                    <strong className="font-semibold">Test AI agent</strong> button
                    and try conversing with your assistant.
                  </p>
                </div>
              </div>
              <h3 id="analyze-and-collect-conversation-data" data-state="closed">
                Analyze and collect conversation data
              </h3>
              <p>
                Configure evaluation criteria and data collection to analyze
                conversations and improve your assistant’s performance.
              </p>
              <div className="fern-steps">
                <div
                  className="fern-step scroll-mt-content-padded"
                  id="configure-evaluation-criteria"
                >
                  <a
                    className="fern-anchor"
                    tabIndex={-1}
                    href="/docs/conversational-ai/quickstart#configure-evaluation-criteria"
                  >
                    <span className="fern-anchor-icon">
                      <span>1</span>
                    </span>
                  </a>
                  <h3>Configure evaluation criteria</h3>
                  <p>
                    Navigate to the{" "}
                    <strong className="font-semibold">Analysis</strong> tab in your
                    assistant’s settings to define custom criteria for evaluating
                    conversations.
                  </p>
                  <figure className="not-prose fern-card relative mb-6 mt-4 overflow-hidden rounded-xl p-2 first:mt-0 bg-tag-default-soft">
                    <div className="relative flex justify-center overflow-hidden rounded-lg shadow-sm">
                      <p>
                        <span aria-owns="rmiz-modal-e19862bff28f" data-rmiz="">
                          <span
                            data-rmiz-content="found"
                            style={{ visibility: "visible" }}
                          >
                            <img
                              alt="Analysis settings"
                              loading="lazy"
                              width={2272}
                              height={1278}
                              decoding="async"
                              data-nimg={1}
                              style={{
                                color: "transparent",
                                aspectRatio: "1.777778 / 1"
                              }}
                              srcSet="https://app.buildwithfern.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fhttps%3A%2F%2Felevenlabs.docs.buildwithfern.com%2Fdocs%2F2025-02-22T07%3A18%3A06.652Z%2Fassets%2Fimages%2Fconversational-ai%2Fanalysis-settings.png&w=3840&q=75&dpl=dpl_AcDEc7EsRzaXsagj4fNbc632oZNv 1x"
                              src="https://files.buildwithfern.com/https://elevenlabs.docs.buildwithfern.com/docs/2025-02-22T07:18:06.652Z/assets/images/conversational-ai/analysis-settings.png"
                            />
                          </span>
                          <span
                            data-rmiz-ghost=""
                            style={{ height: 365, left: 0, width: 649, top: 0 }}
                          >
                            <button
                              aria-label="Expand image: Analysis settings"
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
                    </div>
                  </figure>
                  <p>
                    Every conversation transcript is passed to the LLM to verify if
                    specific goals were met. Results will either be{" "}
                    <code>success</code>, <code>failure</code>, or{" "}
                    <code>unknown</code>, along with a rationale explaining the
                    chosen result.
                  </p>
                  <p>
                    Let’s add an evaluation criteria with the name{" "}
                    <code>solved_user_inquiry</code>:
                  </p>
                  <div className="bg-card after:ring-card-border relative mb-6 mt-4 flex w-full min-w-0 max-w-full flex-col rounded-lg shadow-sm after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:ring-1 after:ring-inset after:content-[''] first:mt-0">
                    <div className="bg-tag-default-soft rounded-t-[inherit]">
                      <div className="shadow-border-default mx-px flex min-h-10 items-center justify-between shadow-[inset_0_-1px_0_0]">
                        <div className="flex min-h-10 overflow-x-auto">
                          <div className="flex items-center px-3 py-1.5">
                            <span className="t-muted rounded text-sm font-semibold">
                              Prompt
                            </span>
                          </div>
                        </div>
                        <button
                          tabIndex={0}
                          data-state="closed"
                          aria-disabled="false"
                          className="fern-copy-button group ml-2 mr-1 fern-button minimal normal rounded square"
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
                                d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <pre
                      className="code-block-root not-prose rounded-b-[inherit]"
                      tabIndex={0}
                    >
                      <div
                        dir="ltr"
                        className="fern-scroll-area"
                        style={{ position: "relative" }}
                      >
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                          }}
                        />
                        <div
                          data-radix-scroll-area-viewport=""
                          className="fern-scroll-area-viewport"
                          data-scrollbars="both"
                          style={{ overflow: "scroll", maxHeight: 479 }}
                        >
                          <div style={{ minWidth: "100%", display: "table" }}>
                            <code className="code-block text-sm">
                              <div className="code-block-inner">
                                <table className="code-block-line-group">
                                  <tbody>
                                    <tr className="code-block-line">
                                      <td className="code-block-line-content">
                                        <span className="line">
                                          The assistant was able to answer all of
                                          the queries or redirect them to a relevant
                                          support channel.
                                        </span>
                                      </td>
                                    </tr>
                                    <tr className="code-block-line">
                                      <td className="code-block-line-content">
                                        <span className="line" />
                                      </td>
                                    </tr>
                                    <tr className="code-block-line">
                                      <td className="code-block-line-content">
                                        <span className="line">
                                          Success Criteria:
                                        </span>
                                      </td>
                                    </tr>
                                    <tr className="code-block-line">
                                      <td className="code-block-line-content">
                                        <span className="line">
                                          - All user queries were answered
                                          satisfactorily.
                                        </span>
                                      </td>
                                    </tr>
                                    <tr className="code-block-line">
                                      <td className="code-block-line-content">
                                        <span className="line">
                                          - The user was redirected to a relevant
                                          support channel if needed.
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </code>
                          </div>
                        </div>
                        <div
                          data-orientation="horizontal"
                          data-state="hidden"
                          className="fern-scroll-area-scrollbar"
                          style={{ position: "absolute", bottom: 0, left: 0 }}
                        >
                          <div
                            data-state="visible"
                            className="fern-scroll-area-thumb"
                            style={{ transform: "translate3d(0px, 0px, 0px)" }}
                          />
                        </div>
                      </div>
                    </pre>
                  </div>
                </div>
                <div
                  className="fern-step scroll-mt-content-padded"
                  id="configure-data-collection"
                >
                  <a
                    className="fern-anchor"
                    tabIndex={-1}
                    href="/docs/conversational-ai/quickstart#configure-data-collection"
                  >
                    <span className="fern-anchor-icon">
                      <span>2</span>
                    </span>
                  </a>
                  <h3>Configure data collection</h3>
                  <p>
                    In the{" "}
                    <strong className="font-semibold">Data Collection</strong>{" "}
                    section, configure details to be extracted from each
                    conversation.
                  </p>
                  <p>
                    Click <strong className="font-semibold">Add item</strong> and
                    configure the following:
                  </p>
                  <ol className="mb-3 list-outside list-decimal space-y-2">
                    <li className="">
                      <strong className="font-semibold">Data type:</strong> Select
                      “string”
                    </li>
                    <li className="">
                      <strong className="font-semibold">Identifier:</strong> Enter a
                      unique identifier for this data point:{" "}
                      <code>user_question</code>
                    </li>
                    <li className="">
                      <strong className="font-semibold">Description:</strong>{" "}
                      Provide detailed instructions for the LLM about how to extract
                      the specific data from the transcript:
                    </li>
                  </ol>
                  <div className="bg-card after:ring-card-border relative mb-6 mt-4 flex w-full min-w-0 max-w-full flex-col rounded-lg shadow-sm after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:ring-1 after:ring-inset after:content-[''] first:mt-0">
                    <div className="bg-tag-default-soft rounded-t-[inherit]">
                      <div className="shadow-border-default mx-px flex min-h-10 items-center justify-between shadow-[inset_0_-1px_0_0]">
                        <div className="flex min-h-10 overflow-x-auto">
                          <div className="flex items-center px-3 py-1.5">
                            <span className="t-muted rounded text-sm font-semibold">
                              Prompt
                            </span>
                          </div>
                        </div>
                        <button
                          tabIndex={0}
                          data-state="closed"
                          aria-disabled="false"
                          className="fern-copy-button group ml-2 mr-1 fern-button minimal normal rounded square"
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
                                d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <pre
                      className="code-block-root not-prose rounded-b-[inherit]"
                      tabIndex={0}
                    >
                      <div
                        dir="ltr"
                        className="fern-scroll-area"
                        style={{ position: "relative" }}
                      >
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                          }}
                        />
                        <div
                          data-radix-scroll-area-viewport=""
                          className="fern-scroll-area-viewport"
                          data-scrollbars="both"
                          style={{ overflow: "scroll", maxHeight: 479 }}
                        >
                          <div style={{ minWidth: "100%", display: "table" }}>
                            <code className="code-block text-sm">
                              <div className="code-block-inner">
                                <table className="code-block-line-group">
                                  <tbody>
                                    <tr className="code-block-line">
                                      <td className="code-block-line-content">
                                        <span className="line">
                                          Extract the user's questions &amp;
                                          inquiries from the conversation.
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </code>
                          </div>
                        </div>
                      </div>
                    </pre>
                  </div>
                  <div className="mb-6 mt-4 rounded-lg p-4 first:mt-0 callout-outlined-tip">
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 w-4">
                        <svg
                          width="1.5em"
                          height="1.5em"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="currentColor"
                          className="size-icon-md text-intent-success"
                        >
                          <path
                            d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="prose prose-sm dark:prose-invert -my-4 flex-1 overflow-x-auto before:mb-4 before:block after:mt-4 after:block">
                        <div className="text-intent-success">
                          <h5 className="leading-snug" />
                          Test your assistant by posing as a customer. Ask
                          questions, evaluate its responses, and tweak the prompts
                          until you’re happy with how it performs.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="fern-step scroll-mt-content-padded"
                  id="view-conversation-history"
                >
                  <a
                    className="fern-anchor"
                    tabIndex={-1}
                    href="/docs/conversational-ai/quickstart#view-conversation-history"
                  >
                    <span className="fern-anchor-icon">
                      <span>3</span>
                    </span>
                  </a>
                  <h3>View conversation history</h3>
                  <p>
                    View evaluation results and collected data for each conversation
                    in the <strong className="font-semibold">Call history</strong>{" "}
                    tab.
                  </p>
                  <figure className="not-prose fern-card relative mb-6 mt-4 overflow-hidden rounded-xl p-2 first:mt-0 bg-tag-default-soft">
                    <div className="relative flex justify-center overflow-hidden rounded-lg shadow-sm">
                      <p>
                        <span aria-owns="rmiz-modal-5438aef6c358" data-rmiz="">
                          <span
                            data-rmiz-content="found"
                            style={{ visibility: "visible" }}
                          >
                            <img
                              alt="Conversation history"
                              loading="lazy"
                              width={3168}
                              height={1782}
                              decoding="async"
                              data-nimg={1}
                              style={{
                                color: "transparent",
                                aspectRatio: "1.777778 / 1"
                              }}
                              srcSet="https://app.buildwithfern.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fhttps%3A%2F%2Felevenlabs.docs.buildwithfern.com%2Fdocs%2F2025-02-22T07%3A18%3A06.652Z%2Fassets%2Fimages%2Fconversational-ai%2Ftranscript.jpg&w=3840&q=75&dpl=dpl_AcDEc7EsRzaXsagj4fNbc632oZNv 1x"
                              src="https://files.buildwithfern.com/https://elevenlabs.docs.buildwithfern.com/docs/2025-02-22T07:18:06.652Z/assets/images/conversational-ai/transcript.jpg"
                            />
                          </span>
                          <span
                            data-rmiz-ghost=""
                            style={{ height: 365, left: 0, width: 649, top: 0 }}
                          >
                            <button
                              aria-label="Expand image: Conversation history"
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
                    </div>
                  </figure>
                  <div className="mb-6 mt-4 rounded-lg p-4 first:mt-0 callout-outlined-tip">
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 w-4">
                        <svg
                          width="1.5em"
                          height="1.5em"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="currentColor"
                          className="size-icon-md text-intent-success"
                        >
                          <path
                            d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="prose prose-sm dark:prose-invert -my-4 flex-1 overflow-x-auto before:mb-4 before:block after:mt-4 after:block">
                        <div className="text-intent-success">
                          <h5 className="leading-snug" />
                          Regularly review conversation history to identify common
                          issues and patterns.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Your assistant is now configured. Embed the widget on your website
                to start providing real-time support to your customers.
              </p>
            </div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r1d:-trigger-build-a-restaurant-ordering-agent"
              // hidden=""
              id="radix-:r1d:-content-build-a-restaurant-ordering-agent"
              tabIndex={0}
              className="border:content-[''] before:mb-4 before:block"
            />
          </div>
          <h2 id="next-steps" data-state="closed">
            Next steps
          </h2>
          <div className="my-6 grid gap-4 first:mt-0 sm:gap-6 grid-cols-1 sm:grid-cols-2">
            <a
              className="fern-card interactive not-prose relative block rounded-xl border p-6 text-base"
              href="/docs/conversational-ai/customization"
            >
              <div className="flex items-start flex-col space-y-3">
                <div className="w-full space-y-1 overflow-hidden">
                  <div className="t-default text-base font-semibold">
                    Customize your agent
                  </div>
                  <div className="t-muted">
                    <p>
                      Learn how to customize your agent with tools, knowledge bases,
                      dynamic variables and overrides.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              className="fern-card interactive not-prose relative block rounded-xl border p-6 text-base"
              href="/docs/conversational-ai/guides/quickstarts"
            >
              <div className="flex items-start flex-col space-y-3">
                <div className="w-full space-y-1 overflow-hidden">
                  <div className="t-default text-base font-semibold">
                    Integration quickstart
                  </div>
                  <div className="t-muted">
                    <p>
                      Learn how to integrate Conversational AI into your app using
                      the SDK for advanced configuration.
                    </p>
                  </div>
                </div>
              </div>
            </a>
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
              href="https://github.com/elevenlabs/elevenlabs-docs/blob/main/fern/conversational-ai/pages/quickstart.mdx?plain=1"
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
              href="/docs/conversational-ai/dashboard"
            >
              <div className="flex-1">
                <div className="text-base font-semibold">Dashboard</div>
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
          className="flex items-baseline gap-1 mx-auto my-8 w-fit"
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
  );
}
