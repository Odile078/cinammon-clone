import Image from "next/image";
import ProductCard from "../components/cards/ProductCard";
import ServiceCard from "../components/cards/ServiceCard";
import Hero from "../components/sections/Hero";
import Navbar from "../components/layout/Navbar";
import Button from "../components/ui/Button";
import Description from "../components/ui/Description";
import Title from "../components/ui/Title";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="content-wrapper">
      <Hero/>
      <section className="products-wrapper">
        <div className="products__container">
          <ProductCard 
            image="/images/Mockup_1.png"
            title="Corrily: "
            subTitle="Optimize prices to maximize revenue" 
            description="Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign."
            categories={["PRODUCT DESIGN","QUALITY ASSURANCE"]}
            variant="product__img-container--color-green"
            />
          <ProductCard
            image="/images/Fiona_Thumbnail.png"
            title="Fiona: Engage & "
            subTitle="Decide"
            description="Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."
            categories={["PRODUCT DESIGN","WEB DEVELOPMENT"]}
            variant="product__img-container--color-violet"
          />
          <ProductCard
            image="/images/thumbnail.png"
            title="Ukulele:"
            subTitle="The largest ukulele tabs archive"
            description="Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website."
            categories={["PRODUCT DESIGN","WEB DEVELOPMENT","QUALITY ASSURANCE"]}
            variant="product__img-container--color-yellow"
          />
        </div>
      </section>
      <section className=" services">
        <div className="services__container">
          <div className="services__title">
            <Title variant=" title--color-secondary title--size-large " tagName="h2" text="Our services"/>
          </div>      
          <div className="services__list">
            <ServiceCard 
            image= "/images/product-design.png"
            title="Product design"
            description="Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes."
            />
            <ServiceCard 
            image="/images/development.png"
            title="Development"
            description="By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
            />
            <ServiceCard 
            image="/images/quality-assurance.png"
            title="Quality assurance"
            description="Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing."
            />
            <ServiceCard 
            image="/images/marketing-and-growth.png"
            title="Marketing & growth"
            description="By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people."
            />
          </div>
        </div>      
      </section>
      <section className="team-demand">
        <div className="team-demand__container">
          <div className="team-demand__title">
          <Title variant=" title--color-primary title--size-large " tagName="h2" text={"Agile team \n on demand  "}/>
          </div>
          <div className="team-demand__img-container">
              <Image src="/images/agile-team-on-demand.png" alt="agile-team-on-demand" height="478" width="750" className="team-demand__img" />
          </div>
          <div className="team-demand__content">
            <Description 
            text="By hiring and managing talented people with skills specific to your project, we build you a team that’s accomplished, agile and scalable in both directions." 
            variant=" description--color-primary description--size-medium "/>
            <div>
              <Button text="See How it Works" />
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}
