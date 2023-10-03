import React, { useContext, useEffect, useState } from "react";
import moviesmain from "./moviesmain.module.scss";
import { MoviesMainLeftPart } from "./moviesMainLeft";
import { MoviesMainTopFive } from "./moviesMainTopFive";
import { MoviesType } from "./moviesMainMovieType";
import { MoviesComments } from "./moviesMainLastComments";
import PagenationMain from "./pagenation";

export function MoviesMain() {
  return (
    <>
      <section className={moviesmain.moviesMainSection}>
        <MoviesMainLeftPart />

        <div className={moviesmain.moviesRightPart}>
          <MoviesMainTopFive />
          <MoviesType />
          <MoviesComments />
        </div>
        <PagenationMain />
      </section>
    </>
  );
}
