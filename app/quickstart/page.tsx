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
      </article>
    </main>
  );
}
