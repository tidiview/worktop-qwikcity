import { component$, useTask$, useStore } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';

export default component$(() => {
  const store = useStore({ data: null });

  useTask$(async () => {
    if (isServer) {
      const response = await fetch('https://worktop.francois-vidit.workers.dev/docs/ja/versailles/palais/hercule');
      store.data = await response.json();
    }
  });

  return (
    <div>
      <Article data={store.data} />
    </div>
  );
});

export const Article = component$<{ data: any }>((props) => {
    const article = props.data.articleBody;
    return (
      <main>
        <section dangerouslySetInnerHTML={article}>
        </section>
      </main>
    );
  });