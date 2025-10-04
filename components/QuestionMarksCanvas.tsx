// @ts-nocheck

import { useEffect, useRef } from "react"

// QuestionMarksCanvas
// Renders a full-viewport <canvas> filled with question marks ("?") with a fixed
// gap between them (10px). Handles high-DPI / retina screens by scaling the
// backing-store resolution while keeping drawing coordinates in CSS pixels.
// Usage: <QuestionMarksCanvas />

export default function QuestionMarksCanvas({ gap = 10, char = "?", fontFamily = "system-ui" }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")

    // Draw routine — re-computes sizes each time (handles resizes & DPR changes)
    function draw() {
      const dpr = Math.max(window.devicePixelRatio || 1, 1)

      // CSS pixel size
      const cssWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const cssHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

      // Set canvas size in device pixels
      canvas.style.width = `${cssWidth}px`
      canvas.style.height = `${cssHeight}px`
      canvas.width = Math.round(cssWidth * dpr)
      canvas.height = Math.round(cssHeight * dpr)

      // Scale the drawing context so 1 unit = 1 CSS pixel.
      ctx.setTransform(1, 0, 0, 1, 0, 0) // reset any existing transforms
      ctx.scale(dpr, dpr)

      // Clear (in CSS-pixel coords)
      ctx.clearRect(0, 0, cssWidth, cssHeight)

      // Choose a base font-size that works well on most screens we then measure
      // the glyph width and compute the grid from that. This keeps text crisp
      // because fonts are drawn at integer CSS pixels and we've already handled DPR.
      // You can tweak this base size if you prefer larger/smaller marks.
      let fontSize = 64 // in CSS pixels (will be scaled by DPR in the backing canvas)
      ctx.font = `${fontSize}px ${fontFamily}`

      // Measure the glyph width for the chosen font size
      let metrics = ctx.measureText(char)
      let glyphWidth = metrics.width // in CSS pixels

      // A rough glyph height approximation (since measureText doesn't give full height)
      // We approximate glyph height by fontSize (good enough for most sans-serif fonts).
      let glyphHeight = fontSize

      // Compute cell size (glyph + gap)
      const cellW = glyphWidth + gap
      const cellH = glyphHeight + gap

      // Determine how many columns/rows we need to cover the screen
      const cols = Math.ceil(cssWidth / cellW)
      const rows = Math.ceil(cssHeight / cellH)

      // Optionally, to use more of the available space, we could slightly increase
      // the font size so the grid fills more naturally. We'll compute a scale to
      // expand font size so that columns * cellW nearly matches cssWidth. This
      // keeps the gap exactly as requested but makes glyphs slightly larger.
      if (cols > 0) {
        // desiredCellW = cssWidth / cols -> newGlyphWidth = desiredCellW - gap
        const desiredCellW = cssWidth / cols
        const newGlyphWidth = Math.max(desiredCellW - gap, 4)
        // scale factor for font = newGlyphWidth / glyphWidth
        const scale = newGlyphWidth / glyphWidth
        if (scale > 0.9 && scale < 2.5) {
          fontSize = Math.round(fontSize * scale)
          ctx.font = `${fontSize}px ${fontFamily}`
          metrics = ctx.measureText(char)
          glyphWidth = metrics.width
          glyphHeight = fontSize
        }
      }

      // Recompute cell size after possible font change
      const finalCellW = glyphWidth + gap
      const finalCellH = glyphHeight + gap
      const finalCols = Math.ceil(cssWidth / finalCellW)
      const finalRows = Math.ceil(cssHeight / finalCellH)

      // Compute offsets so the grid is nicely centered
      const totalGridW = finalCols * finalCellW - gap
      const totalGridH = finalRows * finalCellH - gap
      const offsetX = Math.max(0, (cssWidth - totalGridW) / 2 + glyphWidth / 2)
      const offsetY = Math.max(0, (cssHeight - totalGridH) / 2 + glyphHeight / 2)

      // Text rendering settings
      ctx.textBaseline = "middle" // y will be the vertical center of each cell
      ctx.textAlign = "center" // x will be center
      ctx.fillStyle = "white" // default color; user can change with CSS overlay if desired

      // Draw grid of question marks
      for (let r = 0; r < finalRows; r++) {
        const y = offsetY + r * finalCellH
        for (let c = 0; c < finalCols; c++) {
          const x = offsetX + c * finalCellW
          ctx.fillText(char, x, y)
        }
      }
    }

    // Use rAF on resize to avoid layout thrash
    let resizeTimeout = null
    function scheduleDraw() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(draw)
    }

    // Initial draw
    scheduleDraw()

    function onResize() {
      // debounce tiny resizes
      if (resizeTimeout) clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => scheduleDraw(), 50)
    }

    window.addEventListener("resize", onResize)

    // If devicePixelRatio changes (browser zoom / move to other screen), redraw.
    // There's no direct event, so listen to 'change' on matchMedia to detect zoom-level changes.
    const dprQuery = `(resolution: ${window.devicePixelRatio}dppx)`;
    let mediaQueryList = null
    try {
      mediaQueryList = window.matchMedia(dprQuery)
      if (mediaQueryList && typeof mediaQueryList.addEventListener === "function") {
        mediaQueryList.addEventListener("change", scheduleDraw)
      }
    } catch (e) {
      // ignore if matchMedia not supported
    }

    // Cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", onResize)
      try {
        if (mediaQueryList && typeof mediaQueryList.removeEventListener === "function") {
          mediaQueryList.removeEventListener("change", scheduleDraw)
        }
      } catch (e) {}
    };
  }, [gap, char, fontFamily]);

  return (
    // make canvas cover the viewport. It's decorative so hide it from assistive tech.
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen block pointer-events-none"
      aria-hidden={true}
    />
  );
}
