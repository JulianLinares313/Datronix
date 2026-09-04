# Usa una imagen base con Java 21
FROM eclipse-temurin:21-jdk

# Instala Tailscale
RUN apt-get update && apt-get install -y curl gnupg2
RUN curl -fsSL https://tailscale.com/install.sh | sh

# Crea el directorio para el estado de Tailscale
RUN mkdir -p /var/lib/tailscale

# Copia el archivo JAR de tu aplicación (Render lo construirá con el Build Command)
COPY target/*.jar app.jar

# Expone el puerto de la aplicación
EXPOSE 8080

# Script de inicio: arranca Tailscale y luego la aplicación
ENTRYPOINT ["sh", "-c", "tailscaled --state=/var/lib/tailscale/tailscaled.state & tailscale up --authkey=$TAILSCALE_AUTHKEY && java -jar app.jar"]