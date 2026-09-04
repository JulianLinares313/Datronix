# Etapa 1: Compilar el proyecto con Maven y JDK 21
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY datronix/pom.xml .
RUN mvn dependency:go-offline
COPY datronix/src ./src
RUN mvn package -DskipTests

# Etapa 2: Imagen final con JDK 21 y Tailscale (modo userspace)
FROM eclipse-temurin:21-jdk
RUN apt-get update && apt-get install -y curl gnupg2
RUN curl -fsSL https://tailscale.com/install.sh | sh
RUN mkdir -p /var/lib/tailscale

# Copiar el JAR de la etapa anterior
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

# Iniciar Tailscale en modo userspace y luego la aplicación
ENTRYPOINT ["sh", "-c", "tailscaled --state=/var/lib/tailscale/tailscaled.state --tun=userspace-networking & tailscale up --authkey=$TAILSCALE_AUTHKEY && java -jar app.jar"]
