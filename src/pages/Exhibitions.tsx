const newYork = {
  src: "https://images.anthonysc.com/photos/nyc-dream-001-v1.jpg",
  alt: "Photograph from Anthony Cheng’s New York archive",
};

export const exhibitions = [{
  slug: "dream-swallow-me",
  title: "dream, swallow me",
  cover: newYork,
  works: [newYork],
}];

const pastExhibitions = ["01", "02", "03", "04"];

function Rights() {
  return <footer className="archive-footer">
    <span>© 2026 Anthony Cheng. All rights reserved.</span>
    <span>No commercial use without prior written permission.</span>
  </footer>;
}

export function ExhibitionIndex() {
  return <>
    <section id="archive" className="photography-slide exhibition-index" aria-label="Current exhibition">
      {exhibitions.map(({ slug, title, cover }) => (
        <div className="exhibition-poster" key={slug}>
          <img src={cover.src} alt={cover.alt} decoding="async" />
          <em>{title}</em>
          <a href={`?exhibition=${slug}`} aria-label={`Walk in: ${title}`}>WALK IN</a>
        </div>
      ))}
    </section>

    <section className="photography-slide past-exhibitions" aria-label="Past exhibitions">
      <div className="past-exhibitions-grid">
        {pastExhibitions.map((number) => (
          <article className="past-exhibition" key={number}>
            <img src={newYork.src} alt="" loading="lazy" decoding="async" />
            <em>Past exhibition {number}</em>
            <a href="?exhibition=dream-swallow-me">WALK IN</a>
          </article>
        ))}
      </div>
      <Rights />
    </section>
  </>;
}

export function ExhibitionRoom({ exhibition }: { exhibition: typeof exhibitions[number] }) {
  return <main className="exhibition-room">
    <a href="./#archive">All exhibitions</a>
    <h1>{exhibition.title}</h1>
    {exhibition.works.map(photo => <img key={photo.src} src={photo.src} alt={photo.alt} />)}
    <Rights />
  </main>;
}
