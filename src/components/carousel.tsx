import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Slide = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

export function MotionCarousel({
  slides,
  className,
}: {
  slides: Slide[];
  className?: string;
}) {
  return (
    <Carousel
      className={className}
      opts={{ align: "start", loop: true }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: true,
        }),
      ]}
    >
      <CarouselContent>
        {slides.map((s) => (
          <CarouselItem key={s.id} className="md:basis-1/2 xl:basis-1/3">
            <div className="relative overflow-hidden rounded-2xl border bg-[#FFFCF5]">
              <div
                className="h-180 md:h-230 lg:h-250 bg-cover bg-center"
                style={{ backgroundImage: `url(${s.imageUrl})` }}
              />

              <div className="absolute inset-x-4 top-20 rounded-2xl rounded-tr-none bg-background p-4 shadow-lg">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm/relaxed opacity-95">
                  {s.description}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
}
