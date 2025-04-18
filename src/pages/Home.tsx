import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaXTwitter, FaInstagram } from "react-icons/fa6";
import LinkItem from "../components/LinkItem";
import './Home.scss';

export default function Home() {
  return (
    <main className="home">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

      {/* Animated header */}
      <motion.h1
        className="home__title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        clept
      </motion.h1>

      <motion.p
        className=".home__subtitle"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        software engineer @ amazon<br />
        i build tools, games, and whatever else i need.
      </motion.p>

      {/* Contact links card */}
      <motion.div
        className="home__card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className=".home__links">
          <LinkItem href="https://github.com/itsclept">
            <FaGithub className="icon" />
          </LinkItem>
          <LinkItem href="mailto:itsclept@gmail.com">
            <FaEnvelope className="icon" />
          </LinkItem>
          <LinkItem href="https://x.com/itsclept">
            <FaXTwitter className="icon" />
          </LinkItem>
          <LinkItem href="https://instagram.com/itsclept">
            <FaInstagram className="icon" />
          </LinkItem>
        </div>
      </motion.div>
      
    </main>
  );
};
