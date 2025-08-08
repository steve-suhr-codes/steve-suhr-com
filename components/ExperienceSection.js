import SingleExperience from './SingleExperience';

export default function ExperienceSection() {
  return (
    <section className="bg-gradient-to-r from-gray-200 to-gray-100 relative z-20 p-6 sm:p-10 md:p-20">
      <SingleExperience
        company="Barrett Jackson"
        location="Scottsdale, AZ"
        title="Senior .NET Developer"
        dates="JULY 2024 - PRESENT"
      >
        <p>
          Lead developer of AutoHunter.com which hosts live auctions of vehicles listed by individuals and imported by dealers.
        </p>
        <ul className="list-disc pl-5">
          <li>Used Azure queues and functions to add new features and migrate existing processes.</li>
          <li>Used experience in C# to navigate large .NET Framework MVC legacy code and develop new .net 8 code. Introduced DI and unit testing.</li>
          <li>Implemented a back plane with Azure Service Bus to scale out an application that used SignalR.</li>
          <li>Led all aspects of development and trained another team member in C# coding.</li>
        </ul>
      </SingleExperience>

      <SingleExperience
        company="Tivity Health"
        location="Chandler, AZ"
        title="Senior Full Stack .NET Developer"
        dates="JULY 2018 - JANUARY 2024"
      >
        <p>
          Created and enhanced tools that manage a network of 10,000+ gyms across the US. This network provides free gym memberships and classes to seniors.
        </p>
        <ul className="list-disc pl-5">
          <li>Maintained web applications for gym owners and Tivity business users to manage contracts, report gym visits, and check eligibility.</li>
          <li>Created a near real time gym visit collection process that utilized a third party vendor API.</li>
          <li>Helped migrate on-premises infrastructure to AWS by migrating code to .NET 6 and configuring infrastructure with Kubernetes, Pulumi, and Argo CD.</li>
          <li>Created a product that searches and books yoga and other studio classes in the Mindbody network. Involved integrating with both Mindbody and JP Morgan Chase APIs.</li>
        </ul>
      </SingleExperience>

      <SingleExperience
        company="Isagenix International"
        location="Gilbert, AZ"
        title=".NET Developer"
        dates="JANUARY 2017 - JUNE 2018"
      >
        <p>
          Worked on the associate back office purchasing portal which sells health and nutrition products to sixteen different countries.
        </p>
        <ul className="list-disc pl-5">
          <li>Implemented customizations of the purchasing portal for the legal, tax, and marketing teams.</li>
          <li>Worked with payment processor and fraud detection APIs.</li>
          <li>Updated and added unit tests to verify changes made.</li>
        </ul>
      </SingleExperience>

      <SingleExperience
        company="PrizeLogic LLC"
        location="Scottsdale, AZ"
        title=".NET Developer"
        dates="NOVEMBER 2015 - DECEMBER 2016"
      >
        <p>
          Worked to build promotional websites for big brands as a back end developer.
        </p>
        <ul className="list-disc pl-5">
          <li>Built the back end for promotional websites that hosted large well known sweepstakes.</li>
          <li>Enforced entry/win limits and other business logic legally required by the Official Rules of the promotion</li>
          <li>Architected solutions that could withstand attacks from scammers and large spikes in traffic volume.</li>
          <li>Integrated with APIs both social (Facebook, Instagram, Twitter) and CRM related (Epsilon custom APIs)</li>
        </ul>
      </SingleExperience>

      <SingleExperience
        company="Edupoint Inc"
        location="Mesa, AZ"
        title="Software Developer II"
        dates="DECEMBER 2013 - OCTOBER 2015"
      >
        <p>
          Worked on the Product Improvement and State Reporting teams for the Synergy Student Information System (SIS) product.
        </p>
        <ul className="list-disc pl-5">
          <li>Enhanced transcripts, automated truancy letters, and other school administration features built on a custom object persistence framework.</li>
          <li>Trained new employees on Edupoint specific frameworks and trained interns in C#/MSSQL debugging techniques.</li>
          <li>Quickly turned around critical issues in federally mandated time sensitive reports</li>
        </ul>
      </SingleExperience>

      <SingleExperience
        company="SpyFu Inc"
        location="Scottsdale, AZ"
        title="Senior Founding Member"
        dates="JUNE 2006 - NOVEMBER 2013"
      >
        <p>
          Built SpyFu.com from the ground up. SpyFu is a competitive intelligence tool for search engine marketers specializing in Google AdWord recommendations.
        </p>
        <ul className="list-disc pl-5">
          <li>Created and maintained SpyFu's custom data collection of advertiser rankings and metrics.</li>
          <li>Implemented dynamically generated reports built on large datasets that could be white labeled and customized.</li>
          <li>Built the SpyFu purchase pipeline including secure API calls to a payment processor and tracking metrics.</li>
          <li>Created a chrome extension to automate logins and bypass CAPTCHAs.</li>
        </ul>
      </SingleExperience>
   </section>
  );
}