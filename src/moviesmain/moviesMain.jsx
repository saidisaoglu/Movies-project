import React, { useEffect, useState } from "react";
import moviesmain from "./moviesmain.module.scss";
import { MoviesMainLeftPart } from "./moviesMainLeft";
import { MoviesMainTopFive } from "./moviesMainTopFive";
import { MoviesType } from "./moviesMainMovieType";
import { MoviesComments } from "./moviesMainLastComments";
import PagenationMain from "./pagenation";

export function MoviesMain({
  modalShow,
  setModalShow,
  movies,
  loading,
  fetchMovies,
  setCurrentPage,
  currentPage,
  pageCount

}) {
  return (
    <>
      <section className={moviesmain.moviesMainSection}>
        <MoviesMainLeftPart
          modalShow={modalShow}
          setModalShow={setModalShow}
          movies={movies}
          loading={loading}
          fetchMovies={fetchMovies}
        />

        <div className={moviesmain.moviesRightPart}>
          <MoviesMainTopFive />
          <MoviesType />
          <MoviesComments />
        </div>
        <PagenationMain currentPage={currentPage}
        pageCount={pageCount}
        setCurrentPage={setCurrentPage} />
      </section>
    </>
  );
}
