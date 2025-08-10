import SingleSkill from '../components/SingleSkill';

export default function() {
  return (
    <section className="bg-gradient-to-r from-gray-200 to-gray-100 relative z-20 p-6 sm:p-10 md:p-20">
      <SingleSkill
        title="C#"
      >
        <ul className="columns-2 md:columns-3 lg:columns-4 gap-4">
          <li>.NET 8+</li>
          <li>.NET Core</li>
          <li>.NET Framework</li>
          <li>Web API</li>
          <li>ASP.NET</li>
          <li>MVC</li>
          <li>SignalR</li>
          <li>WCF</li>
          <li>Web Forms</li>
          <li>Visual Studio</li>
          <li>IIS</li>
        </ul>
      </SingleSkill>

      <SingleSkill
        title="SQL"
      >
        <ul className="columns-2 md:columns-3 lg:columns-4 gap-4">
          <li>MSSQL</li>
          <li>TSQL</li>
          <li>Stored Procedures</li>
          <li>Views</li>
          <li>Query Profiling</li>
          <li>SSIS</li>
          <li>PostgreSQL</li>
          <li>Oracle</li>
          <li>Management Studio</li>
        </ul>
      </SingleSkill>

      <SingleSkill
        title="Front End"
      >
        <ul className="columns-2 md:columns-3 lg:columns-4 gap-4">
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
        </ul>
      </SingleSkill>

      <SingleSkill
        title="Azure Cloud"
      >
        <ul className="columns-2 md:columns-3 lg:columns-4 gap-4">
          <li>Functions</li>
          <li>App Services</li>
          <li>VMs</li>
          <li>Queues</li>
          <li>Blob Storage</li>
          <li>Service Bus</li>
          <li>Key Vault</li>
        </ul>
      </SingleSkill>

      <SingleSkill
        title="AWS Cloud"
      >
        <ul className="columns-2 md:columns-3 lg:columns-4 gap-4">
          <li>EC2</li>
          <li>ECS</li>
          <li>Lambda</li>
          <li>S3</li>
          <li>SQS</li>
          <li>Kubernetes</li>
          <li>Kibana</li>
          <li>Datadog</li>
        </ul>
      </SingleSkill>

      <SingleSkill
        title="API"
      >
        <ul className="columns-2 md:columns-3 lg:columns-4 gap-4">
          <li>REST APIs</li>
          <li>SOAP APIs</li>
          <li>OAuth Client Credentials</li>
          <li>Auth0</li>
        </ul>
      </SingleSkill>

      <SingleSkill
        title="CI/CD"
      >
        <ul className="columns-2 md:columns-3 lg:columns-4 gap-4">
          <li>Azure DevOps</li>
          <li>Team Foundation Server</li>
          <li>Git</li>
          <li>GitLab</li>
          <li>GitHub</li>
          <li>Argo CD</li>
          <li>Kubernetes</li>
        </ul>
      </SingleSkill>

      <SingleSkill
        title="TDD"
      >
        <ul className="columns-2 md:columns-3 lg:columns-4 gap-4">
          <li>Dependency Injection</li>
          <li>Unit Testing</li>
          <li>Moq</li>
          <li>XUnit</li>
          <li>Fluent Assertions</li>
          <li>Cypress</li>
        </ul>
      </SingleSkill>
    </section>
  );
}