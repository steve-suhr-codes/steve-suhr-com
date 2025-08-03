import SingleSkill from '../components/SingleSkill';

export default function() {
  return (
    <section className="bg-gray-100 mt-[100vh] relative z-20 py-1">
      <SingleSkill
        title="C#"
        description=".NET 8, .NET Core, .NET Framework, Web API, ASP.NET, MVC, SignalR, WCF, Web Forms, Visual Studio, IIS">
      </SingleSkill>

      <SingleSkill
        title="SQL"
        description="MSSQL, TSQL, Stored Procedures, Views, Query Profiling, SSIS, PostgreSQL, Oracle, Management Studio">
      </SingleSkill>

      <SingleSkill
        title="Front End"
        description="HTML, CSS, SASS, JavaScript, jQuery, React">
      </SingleSkill>

      <SingleSkill
        title="Azure Cloud"
        description="Functions, App Services, VMs, Queues, Blob Storage, Service Bus, Key Vault">
      </SingleSkill>

      <SingleSkill
        title="AWS Cloud"
        description="EC2, ECS, Lambda, S3, SQS, Kubernetes, Kibana, Datadog">
      </SingleSkill>

      <SingleSkill
        title="API"
        description="REST and SOAP APIs, OAuth Client Credentials, Auth0">
      </SingleSkill>

      <SingleSkill
        title="CI/CD"
        description="Azure DevOps, Team Foundation Server, Git, Gitlab, Github, Argo CD, Kubernetes">
      </SingleSkill>

      <SingleSkill
        title="TDD"
        description="Dependency Injection, Unit Testing, Moq, XUnit, Fluent Assertions, Cypress">
      </SingleSkill>
    </section>
  );
}