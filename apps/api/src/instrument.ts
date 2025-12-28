import * as Sentry from '@sentry/nestjs'

process.loadEnvFile()

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  release: '1.0.0',
})
