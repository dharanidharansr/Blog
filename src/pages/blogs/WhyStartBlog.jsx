import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import Background from "../../components/Background";
import { doc, getDoc, updateDoc, setDoc, increment } from "firebase/firestore";
import { db } from "../../firebase";

const BLOG_ID = "why-start-blog";

export default function WhyStartBlog() {
  const [views, setViews] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    async function updateViews() {
      const ref = doc(db, "blogViews", BLOG_ID);
      const snap = await getDoc(ref);

      const localKey = `viewed_${BLOG_ID}`;
      if (!localStorage.getItem(localKey)) {
        if (snap.exists()) {
          await updateDoc(ref, { views: increment(1) });
          const updated = await getDoc(ref);
          setViews(updated.data().views);
        } else {
          await setDoc(ref, { views: 1 });
          setViews(1);
        }
        localStorage.setItem(localKey, "true");
      } else {
        // Just fetch the current count
        setViews(snap.exists() ? snap.data().views : 0);
      }
    }
    updateViews();
  }, []);

  return (
    <Background>
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-4 py-8 font-sans flex flex-col min-h-screen">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-400 hover:text-[#38bdf8] mb-6 transition"
        >
          <FaChevronLeft />
          <span className="font-medium">back</span>
        </button>

        <h1 className="font-serif text-3xl font-bold mb-4 text-white">
          why am i starting a blog?
        </h1>
        <div className="text-zinc-500 mb-4">
          published: <span className="italic">18-08-2025</span> &middot; {views}{" "}
          views &middot; 2-min read
        </div>
        <hr className="border-t border-[#232323] my-6" />

        <section className="mb-8">
          <p className="text-zinc-400 mb-6">
            well, i thought of doing something like this for quite a while now
            but finally got some time today so here we are.
          </p>
          <p className="text-zinc-400 mb-6">
            tldr; i'm dharanidharansr, i build websites and explore new tech. i needed a way to share things i build, found
            interesting, and learned. having a personal blog didn't seem that
            bad of a decision to me so here we are :)
          </p>
          <p className="text-zinc-400 mb-6">
            for anyone who is new here, hello! i'm dharanidharansr. i'm currently pursuing a bachelor's in computer
            engineering and love exploring the world of technology.
          </p>
          <p className="text-zinc-400 mb-6">
            i love building websites and have been exploring tech for a while now. i'm sort of infamous for being a fast cloner
            and making things work quickly.
          </p>
          <p className="text-zinc-400 mb-6">
            i read some tech blogs every now and then, watch tech content when bored, and scroll through social media to
            check up on any new updates in the tech side. i also enjoy playing cricket sometimes.
          </p>
          <p className="text-zinc-400 mb-6">
            so why start a blog? i need a place to share updates about myself
            and anything new that i experiment with. why do i need to share?{" "}
            <span className="italic">
              well, it'll be fun to read this a few years or months later, i'm
              sure of it.
            </span>{" "}
            hell, if even one of y'all get something from this, it'll be a win
            for me.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-bold mb-2 text-white">
            what will this blog have?
          </h2>
          <ul className="list-disc list-inside text-zinc-400 mb-4">
            <li>things i learned</li>
            <li>things i found interesting</li>
            <li>things i built</li>
            <li>and some lore occasionally</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-bold mb-2 text-white">
            what am i doing currently?
          </h2>
          <p className="text-zinc-400 mb-6">
            currently focused on learning new technologies and building projects. i'm pursuing my computer engineering degree
            and constantly exploring the latest in web development and tech trends.
          </p>
          <p className="text-zinc-400 mb-6">
            i participate in various tech events and competitions. i've participated in hackathons like BYTS INDIA HACKATHON 1.0
            and paper presentations like Synergize'25 where I secured 2nd place.
          </p>
          <p className="text-zinc-400 mb-6">
            what else - i love playing cricket and am passionate about exploring new technologies. 
            i spend time working on personal projects and contributing to open source.
          </p>
        </section>

        <section className="mb-8">
          <p className="text-zinc-400 mb-6">
            feel free to connect with me on social media and see you in the next blog (if
            there's one).
          </p>
        </section>

        <hr className="border-t border-[#232323] my-6" />

        <section className="mb-8">
          <h2 className="font-serif text-xl font-bold mb-2 text-white">
            links
          </h2>
          <ul className="list-none text-zinc-400">
            <li className="mb-2">
              instagram:{" "}
              <a
                href="https://www.instagram.com/_patrick_bateman.18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38bdf8] underline"
              >
                @_patrick_bateman.18
              </a>
            </li>
            <li className="mb-2">
              linkedin:{" "}
              <a
                href="https://linkedin.com/in/dharanidharansr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38bdf8] underline"
              >
                dharanidharansr
              </a>
            </li>
            <li className="mb-2">
              github:{" "}
              <a
                href="https://github.com/dharanidharansr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38bdf8] underline"
              >
                dharanidharansr
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Background>
  );
}
