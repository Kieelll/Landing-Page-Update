import Cards from "./cards";
import Roulette from "./roulette";
import Team from "./team";
import Welcome from "./welcome";

function Home() {
  return (
    <div>
      <section>
        <Welcome />
      </section>
      <section className="">
        <Roulette />
      </section>
      <section className="">
        <Team />
      </section>
      <section className="">
        <Cards />
      </section>
    </div>
  );
}

export default Home;
