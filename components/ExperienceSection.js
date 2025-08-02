import SingleExperience from './SingleExperience';

export default function() {
  return (
    <section className="bg-gray-100 mt-[100vh] relative z-10 pt-1">
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
        location=""
        title=""
        dates=""
      >
        <p>

        </p>
        <ul className="list-disc pl-5">
          <li></li>
        </ul>
      </SingleExperience>

      <SingleExperience
        company="Isagenix International"
        location=""
        title=""
        dates=""
      >
        <p>

        </p>
        <ul className="list-disc pl-5">
          <li></li>
        </ul>
      </SingleExperience>

      <SingleExperience
        company="PrizeLogic LLC"
        location=""
        title=""
        dates=""
      >
        <p>

        </p>
        <ul className="list-disc pl-5">
          <li></li>
        </ul>
      </SingleExperience>

      <SingleExperience
        company="Edupoint Inc"
        location=""
        title=""
        dates=""
      >
        <p>

        </p>
        <ul className="list-disc pl-5">
          <li></li>
        </ul>
      </SingleExperience>

      <SingleExperience
        company="SpyFu Inc"
        location=""
        title=""
        dates=""
      >
        <p>

        </p>
        <ul className="list-disc pl-5">
          <li></li>
        </ul>
      </SingleExperience>

      <div className="p-1"></div>
    </section>
  );
}