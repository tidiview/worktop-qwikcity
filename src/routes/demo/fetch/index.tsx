import { component$, useTask$, useStore } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';

export default component$(() => {
  const store = useStore({ data: {
    "commonFrontmatter": {},
    "uid": "",
    "frontmatter": {},
    "articleBody": "",
  } } );

  useTask$(async () => {
    if (isServer) {
      const response: Response = await fetch('https://worktop.francois-vidit.workers.dev/docs/ja/versailles/palais/hercule', {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          Accept: 'application/json',
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      store.data = await response.json();
    }
  });

  return (
    <>
      <section dangerouslySetInnerHTML={store.data.articleBody}>
        </section>
    </>
  );
});