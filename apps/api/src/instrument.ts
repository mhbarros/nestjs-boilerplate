import * as Sentry from '@sentry/nestjs'

Sentry.init({
  dsn: 'https://00082982eecf4199b5585b261a613ffb@o4509067240407040.ingest.us.sentry.io/4510608541286400',
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  release: '1.0.0',
})
