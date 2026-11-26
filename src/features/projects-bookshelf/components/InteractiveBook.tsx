/* eslint-disable */
// Interactive Book — VengeanceUI (adapted for vanilla CSS 3D transitions)

import React, { useState, useEffect, useCallback } from "react";

export interface BookPage {
  title?: string;
  content: React.ReactNode;
  backContent?: React.ReactNode;
  pageNumber: number;
}

export interface InteractiveBookProps {
  coverColor?: string;
  coverAccent?: string;
  bookTitle?: string;
  bookAuthor?: string;
  bookBadge?: string;
  pages: BookPage[];
  defaultOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

export default function InteractiveBook({
  coverColor = "#16223C",
  coverAccent = "#EAAA00",
  bookTitle = "Book Title",
  bookAuthor = "Author Name",
  bookBadge,
  pages,
  defaultOpen = true,
  onClose,
  className = "",
}: InteractiveBookProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [currentPageIndex, setCurrentPageIndex] = useState(-1);
  const [isHovering, setIsHovering] = useState(false);

  const handleOpenBook = () => setIsOpen(true);

  const handleCloseBook = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setIsOpen(false);
      setCurrentPageIndex(-1);
      onClose?.();
    },
    [onClose]
  );

  const nextPage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentPageIndex((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
    },
    [pages.length]
  );

  const prevPage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentPageIndex((prev) => (prev >= 0 ? prev - 1 : prev));
  }, []);

  const restartBook = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentPageIndex(-1);
  };

  useEffect(() => {
    setIsOpen(defaultOpen);
    setCurrentPageIndex(-1);
  }, [bookTitle, defaultOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextPage();
      if (e.key === "ArrowLeft") prevPage();
      if (e.key === "Escape") handleCloseBook();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextPage, prevPage, handleCloseBook]);

  return (
    <div className={`ibook-stage ${className}`}>
      {onClose && (
        <button
          type="button"
          className="ibook-close-btn"
          onClick={handleCloseBook}
          aria-label="Close book and return to shelf"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span>Back to Shelf</span>
        </button>
      )}

      <div className="ibook-perspective">
        <div className={`ibook-wrapper ${isOpen ? "is-open" : ""}`}>
          {/* Front Cover */}
          <div
            className={`ibook-cover ${isOpen ? "is-open" : ""} ${isHovering && !isOpen ? "is-hovering" : ""}`}
            onClick={!isOpen ? handleOpenBook : undefined}
            onMouseEnter={() => !isOpen && setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Front Face */}
            <div
              className="ibook-cover__front"
              style={{
                background: `linear-gradient(155deg, ${coverColor} 0%, #07090F 100%)`,
                borderColor: `${coverAccent}55`,
              }}
            >
              <div className="ibook-cover__spine-shade" />
              <div className="ibook-cover__inner">
                {bookBadge && (
                  <span className="ibook-cover__badge" style={{ color: coverAccent, borderColor: `${coverAccent}55` }}>
                    {bookBadge}
                  </span>
                )}
                <h3 className="ibook-cover__title">{bookTitle}</h3>
                <p className="ibook-cover__author">{bookAuthor}</p>
              </div>
            </div>

            {/* Inner Left Cover (Back Face of Front Cover) */}
            <div
              className="ibook-cover__back"
              onClick={(e) => {
                e.stopPropagation();
                prevPage();
              }}
            >
              <div className="ibook-inner-cover">
                <span className="ibook-inner-cover__eyebrow">Engineering Volume</span>
                <h2 className="ibook-inner-cover__title">{bookTitle}</h2>
                <div className="ibook-inner-cover__rule" />
                <p className="ibook-inner-cover__sub">{bookAuthor}</p>
                <span className="ibook-page-hint">Click right page to turn →</span>
              </div>
            </div>
          </div>

          {/* Pages Stack */}
          <div className="ibook-pages-stack">
            {pages.map((page, index) => {
              const isFlipped = index <= currentPageIndex;
              const zIdx = isFlipped ? index + 1 : pages.length - index;

              return (
                <div
                  key={page.pageNumber}
                  className={`ibook-page ${isFlipped ? "is-flipped" : ""}`}
                  style={{ zIndex: zIdx }}
                >
                  {/* Front Face (Right Page) */}
                  <div
                    className="ibook-page__front"
                    onClick={(e) => {
                      if ((e.target as HTMLElement)?.closest("a, button")) return;
                      e.stopPropagation();
                      nextPage();
                    }}
                  >
                    <div className="ibook-page__num">{page.pageNumber * 2 - 1}</div>
                    {page.title && <h4 className="ibook-page__title">{page.title}</h4>}
                    <div className="ibook-page__body">{page.content}</div>
                    <div className="ibook-page__spine-shadow-left" />
                  </div>

                  {/* Back Face (Left Page when flipped) */}
                  <div
                    className="ibook-page__back"
                    onClick={(e) => {
                      if ((e.target as HTMLElement)?.closest("a, button")) return;
                      e.stopPropagation();
                      prevPage();
                    }}
                  >
                    <div className="ibook-page__spine-shadow-right" />
                    <div className="ibook-page__num ibook-page__num--left">{page.pageNumber * 2}</div>
                    <div className="ibook-page__body">
                      {page.backContent ? (
                        page.backContent
                      ) : (
                        <div className="ibook-page__watermark">{page.pageNumber * 2}</div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Static Back Cover */}
            <div className="ibook-back-cover">
              <p className="ibook-back-cover__end">End of Volume</p>
              <button type="button" className="ibook-restart-btn" onClick={restartBook}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                <span>Read Again</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      {isOpen && (
        <div className="ibook-controls">
          <button
            type="button"
            className="ibook-nav-btn"
            onClick={prevPage}
            disabled={currentPageIndex < 0}
            aria-label="Previous page"
          >
            ← Prev Page
          </button>
          <span className="ibook-page-indicator">
            {currentPageIndex < 0
              ? "Intro Spread"
              : `Page ${currentPageIndex + 1} / ${pages.length}`}
          </span>
          <button
            type="button"
            className="ibook-nav-btn"
            onClick={nextPage}
            disabled={currentPageIndex >= pages.length - 1}
            aria-label="Next page"
          >
            Next Page →
          </button>
        </div>
      )}
    </div>
  );
}

