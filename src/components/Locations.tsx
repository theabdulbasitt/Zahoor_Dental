import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin, Phone, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const clinics = [
  {
    id: 1,
    name: "DentaCare Downtown",
    address: "123 Dental Street, Suite 100",
    city: "Los Angeles, CA 90001",
    phone: "(555) 123-4567",
    hours: "Mon-Fri: 8am-6pm",
    coordinates: [-118.2437, 34.0522] as [number, number],
  },
  {
    id: 2,
    name: "DentaCare Westside",
    address: "456 Smile Avenue, Floor 2",
    city: "Santa Monica, CA 90401",
    phone: "(555) 987-6543",
    hours: "Mon-Sat: 9am-7pm",
    coordinates: [-118.4912, 34.0195] as [number, number],
  },
];

const Locations = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [tokenInput, setTokenInput] = useState("");

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-118.35, 34.03],
      zoom: 10,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.current.on("load", () => {
      setIsMapLoaded(true);

      // Add markers for each clinic
      clinics.forEach((clinic) => {
        const el = document.createElement("div");
        el.className = "clinic-marker";
        el.innerHTML = `
          <div style="
            background: hsl(168, 70%, 50%);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            cursor: pointer;
          ">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(192, 50%, 8%)" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
        `;

        new mapboxgl.Marker(el)
          .setLngLat(clinic.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(`
              <div style="padding: 8px;">
                <strong style="font-size: 14px;">${clinic.name}</strong>
                <p style="margin: 4px 0 0; font-size: 12px; color: #666;">${clinic.address}</p>
              </div>
            `)
          )
          .addTo(map.current!);
      });
    });
  };

  const handleTokenSubmit = () => {
    if (tokenInput.trim()) {
      setMapboxToken(tokenInput.trim());
      initializeMap(tokenInput.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section id="locations" className="section-padding grid-bg relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Locations
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-medium mb-4">
            Visit Us at{" "}
            <span className="text-gradient italic">Two Locations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conveniently located to serve you better. Choose the clinic nearest
            to you and experience exceptional dental care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Clinic Cards */}
          <div className="space-y-6">
            {clinics.map((clinic) => (
              <div
                key={clinic.id}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <h3 className="font-heading text-xl font-medium mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" size={16} />
                  </div>
                  {clinic.name}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-foreground">{clinic.address}</p>
                      <p className="text-muted-foreground">{clinic.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-muted-foreground" />
                    <p className="text-foreground">{clinic.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-muted-foreground" />
                    <p className="text-foreground">{clinic.hours}</p>
                  </div>
                </div>
                <Button className="mt-4 rounded-full" size="sm">
                  Get Directions
                </Button>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border min-h-[400px]">
            {!mapboxToken ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <MapPin className="text-primary mb-4" size={48} />
                <h4 className="font-heading text-lg font-medium mb-2">
                  Enable Map View
                </h4>
                <p className="text-muted-foreground text-sm mb-4 max-w-xs">
                  Enter your Mapbox public token to display the interactive map.
                  Get one free at{" "}
                  <a
                    href="https://mapbox.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    mapbox.com
                  </a>
                </p>
                <div className="flex gap-2 w-full max-w-sm">
                  <Input
                    type="text"
                    placeholder="pk.eyJ1..."
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    className="bg-secondary border-border"
                  />
                  <Button onClick={handleTokenSubmit} className="rounded-lg">
                    Load Map
                  </Button>
                </div>
              </div>
            ) : (
              <div ref={mapContainer} className="absolute inset-0" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
