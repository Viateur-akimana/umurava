import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://930c3989e889ea23ab231138836f838f@o4508765870161920.ingest.us.sentry.io/4508765963223040",

  integrations: [
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});
