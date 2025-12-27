import Sentry from '@sentry/nestjs'
import { nodeProfilingIntegration } from '@sentry/profiling-node'

const SENTRY_DSN = 'https://00082982eecf4199b5585b261a613ffb@o4509067240407040.ingest.us.sentry.io/4510608541286400'

Sentry.init({
  dsn: SENTRY_DSN,
  integrations: [nodeProfilingIntegration()],
  sendDefaultPii: true,
})
