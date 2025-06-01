import Awareness from "./awareness";
import Donate from "./donate";
import Install from "./install";
import Map from "./map";
import Market from "./market";
import News from "./news";

function Application() {
  return (
    <div>
      <section className="mt-[65px]">
        <Install />
      </section>
      <section>
        <Market />
      </section>
      <section>
        <Awareness />
      </section>
      <section>
        <Donate />
      </section>
      <section>
        <Map />
      </section>
      <section>
        <News />
      </section>
    </div>
  );
}

export default Application;
