# Etapa 1: Compilar el proyecto con Maven y JDK 21
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY datronix/pom.xml .
RUN mvn dependency:go-offline
COPY datronix/src ./src
RUN mvn package -DskipTests

# Etapa 2: Imagen final con JDK 21 (solo la aplicación)
FROM eclipse-temurin:21-jdk
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
