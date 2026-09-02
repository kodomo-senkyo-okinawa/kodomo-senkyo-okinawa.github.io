(() => {
  const body = document.body;
  const furiganaToggle = document.querySelector(".furigana-toggle input");
  const menuButton = document.querySelector(".menu-button");
  const mobileNavigation = document.querySelector(".mobile-nav");

  furiganaToggle?.addEventListener("change", () => {
    body.classList.toggle("furigana-on", furiganaToggle.checked);
  });

  const closeMenu = () => {
    if (!menuButton || !mobileNavigation) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "メニューを開く");
    mobileNavigation.classList.remove("is-open");
    body.style.removeProperty("overflow");
  };

  menuButton?.addEventListener("click", () => {
    if (!mobileNavigation) return;
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(willOpen));
    menuButton.setAttribute("aria-label", willOpen ? "メニューを閉じる" : "メニューを開く");
    mobileNavigation.classList.toggle("is-open", willOpen);
    body.style.overflow = willOpen ? "hidden" : "";
  });

  mobileNavigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.querySelectorAll(".faq-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const selectedItem = button.closest(".faq-item");
      const willOpen = button.getAttribute("aria-expanded") !== "true";

      document.querySelectorAll(".faq-item").forEach((item) => {
        const itemButton = item.querySelector("button");
        const answer = item.querySelector(".faq-answer");
        const isSelected = item === selectedItem && willOpen;
        item.classList.toggle("is-open", isSelected);
        itemButton?.setAttribute("aria-expanded", String(isSelected));
        if (answer) answer.hidden = !isSelected;
      });
    });
  });

  document.querySelectorAll(".candidate-video-poster").forEach((button) => {
    button.addEventListener("click", () => {
      const videoId = button.dataset.youtubeId;
      if (!videoId) return;

      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?autoplay=1&playsinline=1&rel=0`;
      iframe.title = button.dataset.videoTitle || "候補者の回答動画";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      button.replaceWith(iframe);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) closeMenu();
  });
})();
