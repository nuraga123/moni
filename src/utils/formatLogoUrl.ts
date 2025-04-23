export const formatLogoUrl = (url: string = ""): string =>
  url
    ? url?.replace("https://ipfs.io/", "https://gateway.pinata.cloud/")
    : "/file.svg";
