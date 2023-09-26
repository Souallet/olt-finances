import { cx } from "class-variance-authority";
import { buttonVariants } from "./ui/button";

export default function DownloadSample() {
  return (
    <>
      <p>{`Vous n'avez aucun fichier au bon format ?`}</p>
      <a
        href="data-sample.xlsx"
        download="data-sample"
        className={cx("text-sm", buttonVariants({ variant: "outline" }))}
      >
        Télécharger un exemple
      </a>
    </>
  );
}
