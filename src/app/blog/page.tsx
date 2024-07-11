export default function Blog() {
  return (
    <div className="grid grid-cols-4 grid-rows-3">
      <header className="border-2 col-span-4 h-12">header</header>
      <aside className="border-2 h-24">aside</aside>
      <article className="border-2 col-span-3 min-h-12">
        <div>content1</div>
        <div>content1</div>
        <div>content1</div>
        <div>content1</div>
        <div>content1</div>
        <div>content1</div>
        <div>content1</div>
        <div>content1</div>
        <div>content1</div>
        <div>content1</div>
        <div>content1</div>
        <div>content1</div>
        <div>content1</div>
        <div>content1</div>
      </article>
      <footer className="border-2 col-span-4 h-24">footer</footer>
    </div>
  );
}
