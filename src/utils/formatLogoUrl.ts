export const formatLogoUrl = (url: string = ""): string =>
  url
    ? url?.replace("https://ipfs.io/", "https://gateway.pinata.cloud/") +
      "?filename=image.jpg"
    : "/file.svg";
