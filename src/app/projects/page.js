import { Button } from "@/components";
import { FilteredPortfolio, PortfolioHeader } from "@/components/ProjectIndex";

export default function Projects() {
  return (
    <section className="pt-32 pb-8 md:pb-24 md:pt-48 lg:pb-24 relative bg-s-inverse text-f-inverse">
      <PortfolioHeader />
      <FilteredPortfolio />
      <div className="container flex justify-center">
        <Button
          label="get to know me"
          className="text-f-inverse"
          href="/about"
          dark
        />
      </div>
    </section>
  );
}
