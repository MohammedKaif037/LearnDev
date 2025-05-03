import React from "react";

const CorePrinciplesPage = () => {
  return (
    <main className="prose lg:prose-xl dark:prose-invert max-w-4xl mx-auto py-10 px-4">
      <h1>Spring Boot Core Principles</h1>
      <p>
        Understanding the core principles behind Spring Boot will help you master it more effectively. These principles are foundational and influence everything from configuration to development practices.
      </p>

      <h2>1. Convention Over Configuration</h2>
      <p>
        Spring Boot heavily favors **conventions** to reduce the need for detailed configuration. For example, it auto-configures beans based on the presence of certain dependencies or annotations.
      </p>
      <pre>
        <code>
          // No need to define a DispatcherServlet manually
          @SpringBootApplication
          public class MyApp {"{"}
            public static void main(String[] args) {"{"}
              SpringApplication.run(MyApp.class, args);
            {"}"}
          {"}"}
        </code>
      </pre>

      <h2>2. Auto-Configuration</h2>
      <p>
        Spring Boot tries to automatically configure your application based on the libraries on the classpath. This minimizes the amount of configuration you need to write.
      </p>
      <pre>
        <code>
          // If Spring Web is present, it configures a default embedded Tomcat server.
        </code>
      </pre>

      <h2>3. Starter Dependencies</h2>
      <p>
        Starter dependencies are pre-defined Maven or Gradle dependency descriptors that bundle common dependencies together. This makes dependency management easier.
      </p>
      <pre>
        <code>
          &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
          &lt;/dependency&gt;
        </code>
      </pre>

      <h2>4. Embedded Server</h2>
      <p>
        Spring Boot applications ship with embedded servers (Tomcat, Jetty, Undertow), so you don’t need to deploy your WAR to an external server.
      </p>
      <ul>
        <li>Supports hot reload</li>
        <li>Easy to package and deploy</li>
      </ul>

      <h2>5. Opinionated Defaults</h2>
      <p>
        Spring Boot makes decisions for you based on common use cases. You can override them if needed.
      </p>
      <p>
        For instance, it will automatically create a DataSource if it detects Spring Data JPA and an in-memory database on the classpath.
      </p>

      <h2>6. Production-Ready Features</h2>
      <p>
        Spring Boot Actuator exposes endpoints that help you monitor and manage your application in production, such as:
      </p>
      <ul>
        <li>/actuator/health</li>
        <li>/actuator/metrics</li>
        <li>/actuator/info</li>
      </ul>

      <h2>7. Minimal Spring Configuration</h2>
      <p>
        You can run Spring Boot applications with almost zero configuration. The most basic Spring Boot app can be just a single annotated class.
      </p>
      <pre>
        <code>
          @SpringBootApplication
          public class DemoApplication {"{"}
              public static void main(String[] args) {"{"}
                  SpringApplication.run(DemoApplication.class, args);
              {"}"}
          {"}"}
        </code>
      </pre>
    </main>
  );
};

export default CorePrinciplesPage;
