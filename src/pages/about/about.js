import About2 from "./about2";
import Core from "./core";
import Meet from "./meet";
import Offset from "./offset";
import Pill from "./pill";

function About() {
  return (
    <div>
      <section className="mt-[65px]">
        <Offset />
      </section>
      <section>
        <Meet />
      </section>
      <section>
        <About2 />
      </section>
      <section>
        <Pill />
      </section>
      <section>
        <Core />
      </section>
    </div>
  );
}

export default About;
