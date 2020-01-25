import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

async function fetchQuery(
  operation,
  variables,
) {
  const response = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  
  const json = await response.json();

  if (Array.isArray(json.errors)) {
    console.log(json.errors);
  }

  return json;
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource(), { gcReleaseBufferSize: 10 }),  
});

export default environment;