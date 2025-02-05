import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://930c3989e889ea23ab231138836f838f@o4508765870161920.ingest.us.sentry.io/4508765963223040",
  tracesSampleRate: 1,
  debug: false,
});
