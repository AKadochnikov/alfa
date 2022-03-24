function Filter ():JSX.Element {
  return (
    <section className="filter padding-container">
      <h2 className="visually-hidden">Фильтры</h2>
      <button className="button filter-favorite-button" type="button">Избранное</button>
    </section>
  );
}

export default Filter;
