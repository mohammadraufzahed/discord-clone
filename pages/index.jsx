import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import classes from "../styles/pages/index/index.module.scss";
import HomeHeaderBackgroundSVG from "../svgs/HomeHeaderBackgroundSVG";

export default function Home() {
  return (
    <>
      <Head>
        <title>Discord | Your Place To Talk And Hang Out</title>
      </Head>
      <header className={classes.header}>
        <Navbar />
        <div className={[classes.content]}>
          <h1 className={[classes.title]}>Imagine a place...</h1>
          <p className={[classes.paragraph]}>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className={[classes.buttons]}>
            <button
              type="button"
              className={`${classes.windows} ${classes.button}`}
            >
              Download for Windows
            </button>
            <button
              type="button"
              className={`${classes.browser} ${classes.button}`}
            >
              Open Discord in your browser
            </button>
          </div>
        </div>
        <div className={[classes.background]}>
          <div className={[classes.main]}></div>
          <div className={[classes.first]}>
            <Image
              src="/svg/headerFirst.svg"
              width={689}
              height={352}
              alt="first"
            />
          </div>
          <div className={[classes.second]}>
            <Image
              src="/svg/headerSecond.svg"
              width={615}
              height={360}
              alt="first"
            />
          </div>
        </div>
      </header>
    </>
  );
}
