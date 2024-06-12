import { Header } from "@/components/header/header";
import { Preview } from "@/components/books/components/preview";

export default function Home() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Preview />
      </section>
    </div>
  );
}
