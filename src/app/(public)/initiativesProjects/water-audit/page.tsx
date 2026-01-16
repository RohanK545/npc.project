import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["initiativeProjects"].imageSrc}
        breadcrumbs={navigationConfig["initiativeProjects"].breadcrumbs}
        navItems={navigationConfig["initiativeProjects"].navItems}
        pageTilte="Water Audit"
      />
      <section className="maincontent">
        <div className="container">
          <p className="text-justify">
            A water audit is a study of the water use of an entity. It starts at
            the point where water enters the premises and goes up to the point
            where the waste water is discharged, critically examining all
            aspects of use. The audit establishes the quantity/volume of water
            being used, wastage if any, leakages existing, excess use etc., and
            identifies areas where consumption can be reduced. It critically
            examines existing treatment systems and practices and recommends
            changes to improve efficiency and reduce usage. Based on this
            detailed study and observations, an audit gives recommendations on
            how to reduce wastage as well as consumption of water, improvements
            in treatment practices and methods along with cost benefit analyses.
            It also recommends the setting up of a system to maintain a record
            of the amount of water entering a system and to keep track of how
            this water is distributed and used.
          </p>
          <p className="text-justify">
            Water audit is a systematic process of objectively obtaining a water
            balance by measuring flow of water from the site of water withdrawal
            or treatment, through the distribution system, and into areas where
            it is used and finally discharged. Conducting a water audit involves
            calculating water balance, water use and identifying ways for saving
            water.
          </p>
          <p className="text-justify">
            Water audit involves preliminary water survey and detailed water
            audit. Preliminary water survey is conducted to collect background
            information regarding plant activities, water consumption and water
            discharge pattern and water billing, rates and water cess.
          </p>
          <p className="text-justify">
            After the analysis of the secondary data collected from the
            industry, detailed water audit is conducted, involving the following
            steps:
          </p>
          <ul className="text-justify">
            <li>On-site discussion with facility manager and personnel</li>
            <li>Water system analysis</li>
            <li>Quantification of baseline water map</li>
            <li>
              Monitoring and measurements using pressure and flow meters and
              various other devices
            </li>
            <li>Quantification of inefficiencies and leaks</li>
            <li>Quantification of water quality loads and discharges</li>
            <li>
              Quantification of variability in flows and quality parameters
            </li>
            <li>Strategies for water treatment and reuse or direct use</li>
          </ul>
          <p className="text-justify">
            A detailed water balance is finally developed. Water quality
            requirement at various user areas is mapped, which helps in
            developing ‘recycle’ and ‘reuse’ opportunities.
          </p>
          <p className="text-justify">
            The detailed water audit report shall contain the following:
          </p>
          <ul className="text-justify">
            <li>Water consumption and wastewater generation pattern</li>
            <li>Specific water use and conservation</li>
            <li>Complete water balance of the facility</li>
            <li>Water saving opportunities</li>
            <li>Method of implementing the proposals</li>
            <li>Full description and figures</li>
            <li>Investment required</li>
          </ul>
          <p className="text-justify">
            Industries can undertake following measures for water conservation:
          </p>
          <ul className="text-justify">
            <li>
              Modernization of industrial process to reduce water consumption
            </li>
            <li>Recycling water with a re-circulating cooling system</li>
            <li>Setting up of norms for water budgeting</li>
            <li>
              Ozonation cooling water approach which can result in fivefold
              reduction in blowdown when compared to traditional chemical
              treatment
            </li>
            <li>
              Reduction in reuse of de-ionized water by eliminating some plenum
              flushes, converting from a continuous flow to an intermittent flow
              system, and improving control on usage
            </li>
            <li>Use of wastewater for gardening</li>
            <li>
              Proper processing of effluents to adhere to the prescribed
              disposal norms
            </li>
          </ul>
          <h3>WHY NPC :</h3>
          <ul className="text-justify">
            <li>
              NPC is a not-for-profit institution under the Ministry of Commerce
              & Industry, Government of India.
            </li>
            <li>
              NPC has a rich pool of well-trained full-time water audit
              professionals for conducting water audits.
            </li>
            <li>
              NPC has rich experience in providing value-added EM services to
              several international, national, and unit-level clients in
              consulting as well as capacity building.
            </li>
            <li>
              NPC has a PAN India presence, with 12 Regional Directorates across
              India and its headquarters at Delhi.
            </li>
            <li>
              NPC has carried out Water Balance Studies in the following plants:
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
