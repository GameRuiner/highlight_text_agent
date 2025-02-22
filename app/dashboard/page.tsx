export default function Dashboard() {
  return (
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
              <p>Conversational AI dashboard</p>
            </h1>
          </div>
          <div className="prose-p:t-muted mt-2 leading-7">
            <p>Monitor and analyze your agents’ performance effortlessly.</p>
          </div>
        </header>
        <div className="prose dark:prose-invert prose-h1:mt-[1.5em] first:prose-h1:mt-0 max-w-full break-words">
          <h2 id="overview" data-state="closed">
            Overview
          </h2>
          <p>
            The Agents Dashboard provides real-time insights into your
            Conversational AI agents. It displays performance metrics over
            customizable time periods. You can review data for individual agents or
            across your entire workspace.
          </p>
          <h2 id="analytics" data-state="closed">
            Analytics
          </h2>
          <p>
            You can monitor activity over various daily, weekly, and monthly time
            periods.
          </p>
          <figure className="not-prose fern-card relative mb-6 mt-4 overflow-hidden rounded-xl p-2 first:mt-0 bg-tag-default-soft">
            <div className="relative flex justify-center overflow-hidden rounded-lg shadow-sm">
              <span aria-owns="rmiz-modal-0931e2580406" data-rmiz="">
                <span data-rmiz-content="found" style={{ visibility: "visible" }}>
                  <img
                    alt="Dashboard view showing last day metrics"
                    loading="lazy"
                    width={2306}
                    height={1297}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent", aspectRatio: "1.777949 / 1" }}
                    srcSet="https://app.buildwithfern.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fhttps%3A%2F%2Felevenlabs.docs.buildwithfern.com%2Fdocs%2F2025-02-22T07%3A18%3A06.652Z%2Fassets%2Fimages%2Fconversational-ai%2Flastday.png&w=3840&q=75&dpl=dpl_AcDEc7EsRzaXsagj4fNbc632oZNv 1x"
                    src="https://files.buildwithfern.com/https://elevenlabs.docs.buildwithfern.com/docs/2025-02-22T07:18:06.652Z/assets/images/conversational-ai/lastday.png"
                  />
                </span>
                <span
                  data-rmiz-ghost=""
                  style={{ height: 386, left: 0, width: 686, top: 0 }}
                >
                  <button
                    aria-label="Expand image: Dashboard view showing last day metrics"
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
            </div>
            <figcaption className="t-muted relative mt-3 flex justify-center px-8 pb-2 pt-0 text-sm">
              Dashboard view for Last Day
            </figcaption>
          </figure>
          <figure className="not-prose fern-card relative mb-6 mt-4 overflow-hidden rounded-xl p-2 first:mt-0 bg-tag-default-soft">
            <div className="relative flex justify-center overflow-hidden rounded-lg shadow-sm">
              <span aria-owns="rmiz-modal-17f8fe4c66ee" data-rmiz="">
                <span data-rmiz-content="found" style={{ visibility: "visible" }}>
                  <img
                    alt="Dashboard view showing last month metrics"
                    loading="lazy"
                    width={3044}
                    height={1712}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent", aspectRatio: "1.778037 / 1" }}
                    srcSet="https://app.buildwithfern.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fhttps%3A%2F%2Felevenlabs.docs.buildwithfern.com%2Fdocs%2F2025-02-22T07%3A18%3A06.652Z%2Fassets%2Fimages%2Fconversational-ai%2Flastmonth.png&w=3840&q=75&dpl=dpl_AcDEc7EsRzaXsagj4fNbc632oZNv 1x"
                    src="https://files.buildwithfern.com/https://elevenlabs.docs.buildwithfern.com/docs/2025-02-22T07:18:06.652Z/assets/images/conversational-ai/lastmonth.png"
                  />
                </span>
                <span
                  data-rmiz-ghost=""
                  style={{ height: 386, left: 0, width: 686, top: 0 }}
                >
                  <button
                    aria-label="Expand image: Dashboard view showing last month metrics"
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
            </div>
            <figcaption className="t-muted relative mt-3 flex justify-center px-8 pb-2 pt-0 text-sm">
              Dashboard view for Last Month
            </figcaption>
          </figure>
          <p>
            The dashboard can be toggled to show different metrics, including:
            number of calls, average duration, total cost, and average cost.
          </p>
          <h2 id="language-breakdown" data-state="closed">
            Language Breakdown
          </h2>
          <p>
            A key benefit of Conversational AI is the ability to support multiple
            languages. The Language Breakdown section shows the percentage of calls
            (overall, or per-agent) in each language.
          </p>
          <figure className="not-prose fern-card relative mb-6 mt-4 overflow-hidden rounded-xl p-2 first:mt-0 bg-tag-default-soft">
            <div className="relative flex justify-center overflow-hidden rounded-lg shadow-sm">
              <span aria-owns="rmiz-modal-4268f747f86a" data-rmiz="">
                <span data-rmiz-content="found" style={{ visibility: "visible" }}>
                  <img
                    alt="Language breakdown showing percentage of calls in each language"
                    loading="lazy"
                    width={1229}
                    height={691}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent", aspectRatio: "1.778582 / 1" }}
                    srcSet="https://app.buildwithfern.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fhttps%3A%2F%2Felevenlabs.docs.buildwithfern.com%2Fdocs%2F2025-02-22T07%3A18%3A06.652Z%2Fassets%2Fimages%2Fconversational-ai%2Fdashboard-language-breakdown.png&w=1920&q=75&dpl=dpl_AcDEc7EsRzaXsagj4fNbc632oZNv 1x, https://app.buildwithfern.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fhttps%3A%2F%2Felevenlabs.docs.buildwithfern.com%2Fdocs%2F2025-02-22T07%3A18%3A06.652Z%2Fassets%2Fimages%2Fconversational-ai%2Fdashboard-language-breakdown.png&w=3840&q=75&dpl=dpl_AcDEc7EsRzaXsagj4fNbc632oZNv 2x"
                    src="https://files.buildwithfern.com/https://elevenlabs.docs.buildwithfern.com/docs/2025-02-22T07:18:06.652Z/assets/images/conversational-ai/dashboard-language-breakdown.png"
                  />
                </span>
                <span
                  data-rmiz-ghost=""
                  style={{ height: 386, left: 0, width: 686, top: 0 }}
                >
                  <button
                    aria-label="Expand image: Language breakdown showing percentage of calls in each language"
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
            </div>
            <figcaption className="t-muted relative mt-3 flex justify-center px-8 pb-2 pt-0 text-sm">
              Language Breakdown
            </figcaption>
          </figure>
          <h2 id="active-calls" data-state="closed">
            Active Calls
          </h2>
          <p>
            At the top left of the dashboard, the current number of active calls is
            displayed. This real-time counter reflects ongoing sessions for your
            workspace’s agents, and is also accessible via the API.
          </p>
        </div>
      </article>
    </main>

  );
}
