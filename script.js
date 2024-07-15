document.querySelectorAll(".color-box").forEach((box) => {
  box.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => {
        box.style.borderRadius = "33.3%";
      });
    } else {
      box.requestFullscreen().then(() => {
        box.style.borderRadius = "0";
      });
    }
  });
});

// When exiting full screen, return back to squircle
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    document.querySelectorAll(".color-box").forEach((box) => {
      box.style.borderRadius = "33.3%";
    });
  }
});
