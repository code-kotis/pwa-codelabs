# Step 3 - Offline

Service worker allow us to use cache API to cache the resources and thus by providing offline experience. By caching the app shell, application loads faster repeated visits.

## Implementation

- Fetch Event - To serve the cached resources
- Activate Event - To remove old and unwanted caches
- Used built in OFFLINE/ONLINE events to discover network connectivity.

## Run to see the result

```bash
npm run server
```

Open [localhost:8000/step-3](http://localhost:8000/step-3) in your chrome browser.
