import React from 'react'
import css from './Kontakt.module.css'
import { Link } from 'react-router-dom'

const Kontakt = () => {
  return (
        <main className={css.main}>
      <article className={css.article}>
        <p>Kujawsko-Pomorski Okręgowy Związek Orientacji Sportowej</p>
        <p>ul. Popiełuszki 1</p>
        <p>87-100 Toruń</p>
        <address>
          <Link to="mailto:biuro@kpozos.pl">biuro@kpozos.pl</Link>
        </address>
        <p>Kierownik zawodów: Zbigniew Mądrzyński
          <br />
          E-mail:
          <br />
          Tel:
        </p>
      </article>
    </main >
  )
}

export default Kontakt