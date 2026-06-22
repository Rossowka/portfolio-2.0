import { Button } from "@/components";
import { FilteredPortfolio, PortfolioHeader } from "@/components/ProjectIndex";

export default function Projects() {
  return (
    <section className="pt-32 px-6 pb-8 md:pb-24 md:pt-48 lg:pb-24 relative bg-s-secondary text-f-inverse">
      <PortfolioHeader />
      <FilteredPortfolio />
      <div className="max-w-7xl mx-auto flex justify-center mb-10 md:mb-32 lg:mb-28">
        <Button
          label="get to know me"
          className="text-f-inverse"
          href="/about"
          variant="dark"
        />
      </div>
    </section>
  );
}
