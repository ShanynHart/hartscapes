import React, { useEffect, useState } from 'react';
import ImageLightbox from './ImageLightbox';

interface Props {
  folder: string; // e.g. 'Decking' -> looks up 'Services/Decking' in index.json
}

// Descriptive alt-text phrases per gallery folder (accessibility + image SEO)
const altPhrases: Record<string, string> = {
  'Artificial Lawns': 'Artificial lawn installed by Hartscapes in a Cape Town garden',
  'Brickwork': 'Brickwork and masonry by Hartscapes in Cape Town',
  'Decking': 'Timber deck built by Hartscapes in Cape Town',
  'Fencing': 'Timber fencing installed by Hartscapes in Cape Town',
  'Fire Pits': 'Outdoor firepit and braai area built by Hartscapes in Cape Town',
  'Gardens': 'Garden designed and landscaped by Hartscapes in Cape Town',
  'Paving': 'Paved driveway and walkway by Hartscapes in Cape Town',
  'Pergolas': 'Timber pergola built by Hartscapes in Cape Town',
  'Pizza Ovens': 'Wood-fired pizza oven installed by Hartscapes in Cape Town',
  'Retaining Walls': 'Retaining wall built by Hartscapes in Cape Town',
  'Water Features': 'Garden water feature installed by Hartscapes in Cape Town',
};

export default function ServicesGallery({ folder }: Props) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    const verifyImage = (src: string) =>
      new Promise<boolean>((resolve) => {
        const image = new window.Image();
        image.onload = () => resolve(true);
        image.onerror = () => resolve(false);
        image.src = src;
      });

    const loadImages = async (sources: string[]) => {
      const verified = await Promise.all(
        sources.map(async (src) => (await verifyImage(src)) ? src : null)
      );
      return verified.filter((src): src is string => Boolean(src));
    };

    fetch('/gallery/index.json')
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then(async (index: Record<string, string[]>) => {
        if (!mounted) return;
        const key = `Services/${folder}`;
        const arr = index[key] || [];
        setImages(await loadImages(arr));
        setLoading(false);
      })
      .catch(async () => {
        // fallback: attempt to build a few likely filenames
        const fallback: string[] = [];
        for (let i = 1; i <= 16; i++) {
          fallback.push(`/gallery/Services/${folder}/${i}.jpeg`);
        }
        if (mounted) {
          setImages(await loadImages(fallback));
          setLoading(false);
        }
      });

    return () => { mounted = false; };
  }, [folder]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (loading) {
    return (
      <div className="w-full">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="mb-4 break-inside-avoid">
              <div className="animate-pulse bg-muted rounded-xl h-64" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="w-full">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {images.map((img, i) => (
            <div 
              key={i} 
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border/60 bg-card/40 shadow-sm cursor-pointer group transition-transform hover:scale-[1.02]"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img}
                alt={`${altPhrases[folder] ?? folder} — photo ${i + 1}`}
                className="w-full h-auto object-contain group-hover:opacity-90 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      {lightboxOpen && (
        <ImageLightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
