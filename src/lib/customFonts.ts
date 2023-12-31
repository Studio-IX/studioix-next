import localFont from "next/font/local";

const archivo = localFont({
  src: [{ path: "../../assets/fonts/archivo.ttf" }],
  variable: "--font-archivo",
});
const cabinetGrotesk = localFont({
  src: [{ path: "../../assets/fonts/cabinet-grotesk.ttf" }],
  variable: "--font-cabinetGrotesk",
});

export { archivo, cabinetGrotesk };
