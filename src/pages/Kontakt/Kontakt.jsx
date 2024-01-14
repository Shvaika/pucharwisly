import React from 'react'
import css from './Kontakt.module.css'

const Kontakt = () => {
  return (
        <main className={css.main}>
      <article className={css.article}>
        <p>Kujawsko-Pomorski Okręgowy Związek Orientacji Sportowej</p>
        <p>ul. Popiełuszki 1</p>
        <p>87-100 Toruń</p>
        <address>
          <a href="mailto:biuro@kpozos.pl">biuro@kpozos.pl</a>
        </address>
        <p>Kierownik zawodów: Zbigniew Mądrzyński
          <br />
          E-mail:<a href='mailto:'></a>
          <br />
          Tel:<a href="tel:"></a>
        </p>
      </article>
    </main >
  )
}

export default Kontakt