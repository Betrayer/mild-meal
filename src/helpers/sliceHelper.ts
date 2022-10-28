export const sliceHelper =
    window.innerWidth >= 768 && window.innerWidth < 1024
      ? 8
      : window.innerWidth >= 1024
      ? 11
      : 12;